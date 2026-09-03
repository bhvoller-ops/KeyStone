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
