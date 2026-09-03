import { NextResponse } from "next/server";
import { z } from "zod";
import { notifyChatWidgetLead, notifyWhatsApp } from "@/lib/notify";

const schema = z.object({
  email: z.string().email().max(200),
  message: z.string().max(2000).optional(),
  // Honeypot: a real visitor never sees or fills this field (hidden via CSS
  // in the form). Any bot that fills every input blind trips it. Not a real
  // rate limiter — see the comment below — just a free, zero-dependency
  // first filter.
  website: z.string().max(200).optional(),
});

// Best-effort, in-memory, per-warm-instance only — Vercel serverless
// functions don't share memory across instances or survive a cold start, so
// this does not guarantee a hard cap the way a real store (Redis, a DB
// table) would. Stated honestly rather than implied as real protection;
// upgrade to a shared store if this page starts taking real abuse. See
// webgenie-ai's CLAUDE.md §11 for the same open item on that app's public
// routes.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests — please try again in a minute." }, { status: 429 });
  }

  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  const { email, message, website } = parsed.data;

  // Honeypot tripped — pretend success so the bot doesn't learn anything,
  // but never actually send.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  const referrer = request.headers.get("referer") ?? undefined;

  // Two independent channels — run in parallel, never let one's failure
  // block or hide the other. As long as at least one actually lands, the
  // lead reached a human; only fail the request if both did.
  const [emailSent, whatsappSent] = await Promise.all([
    notifyChatWidgetLead({
      email,
      message: message || undefined,
      referrer,
      // One notification per email+minute-bucket — a genuine retry from the
      // same visitor within that window won't double-send, but a second
      // real submission a few minutes later still will (this is a lead,
      // not a ticket — no need for stronger de-dup than that).
      idempotencyKey: `chat-widget-lead/${email}/${Math.floor(Date.now() / 60_000)}`,
    }),
    notifyWhatsApp(
      `New VibeLabs lead: ${email}${message ? `\n"${message}"` : ""}`
    ),
  ]);

  if (!emailSent && !whatsappSent) {
    return NextResponse.json(
      { error: "Something went wrong sending that — please call us instead." },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true });
}
