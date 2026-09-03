import { Resend } from "resend";

/**
 * Real lead-capture notification — fired the moment someone submits the
 * on-page chat widget's "Get a Callback" form. This site has no database of
 * its own (deliberately thin marketing front door, see PRODUCT.md); email is
 * the entire delivery mechanism, matching the ticket-only/phone-first
 * support model the brand already commits to elsewhere. Never throws —
 * callers log and move on, matching webgenie-ai's lib/notify.ts pattern.
 */
const resend = new Resend(process.env.RESEND_API_KEY);

// Same verified sending domain webgenie-ai already uses (provisioned via the
// Vercel Marketplace Resend integration) — one Resend account, two sites.
const FROM = `VibeLabs Agency <notify@${process.env.RESEND_EMAIL_DOMAIN ?? "mail.vibelabsagency.com"}>`;

const NOTIFY_TO = "wallang@gmail.com";

export async function notifyChatWidgetLead(input: {
  email: string;
  message?: string;
  referrer?: string;
  idempotencyKey: string;
}) {
  const html = `
    <p>Someone left their email in the chat widget on vibelabsagency.com.</p>
    <ul>
      <li>Email: <a href="mailto:${input.email}">${input.email}</a></li>
      ${input.message ? `<li>Message: ${input.message}</li>` : ""}
      ${input.referrer ? `<li>Page: ${input.referrer}</li>` : ""}
    </ul>
  `;

  const { error } = await resend.emails.send(
    {
      from: FROM,
      to: [NOTIFY_TO],
      replyTo: input.email,
      subject: `New chat widget lead: ${input.email}`,
      html
    },
    { idempotencyKey: input.idempotencyKey }
  );

  if (error) {
    console.error("Failed to send chat widget lead notification:", error);
    return false;
  }
  return true;
}

/**
 * WhatsApp alert via CallMeBot — a free, personal-use-only relay (you
 * message their bot once from your own WhatsApp to link your number and get
 * an API key back; this is NOT Meta's official WhatsApp Business Cloud API,
 * has no delivery guarantees or SLA, and is a deliberate stopgap until a
 * real Twilio WhatsApp integration replaces it. See
 * https://www.callmebot.com/blog/free-api-whatsapp-messages/
 *
 * Silently no-ops (not an error) if the two env vars aren't set, so this
 * stays optional — email alone is still enough for the widget to "work."
 */
export async function notifyWhatsApp(message: string) {
  const apiKey = process.env.CALLMEBOT_APIKEY;
  const phone = process.env.CALLMEBOT_PHONE;
  if (!apiKey || !phone) return false;

  try {
    const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(phone)}&text=${encodeURIComponent(message)}&apikey=${encodeURIComponent(apiKey)}`;
    const res = await fetch(url, { method: "GET" });
    const body = await res.text().catch(() => "");
    // CallMeBot returns 200 with an error message in the body on failure
    // (e.g. an unregistered number) rather than a non-2xx status, so the
    // body text has to be checked, not just res.ok.
    if (!res.ok || /error/i.test(body)) {
      console.error("Failed to send WhatsApp notification:", res.status, body);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Failed to send WhatsApp notification:", err);
    return false;
  }
}
