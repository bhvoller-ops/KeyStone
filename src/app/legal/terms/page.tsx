import type { Metadata } from "next";
import { GREEN, GOLD, INK, PHONE_DISPLAY, PHONE_TEL } from "../legal-theme";
import { GUARANTEE, PRICE, TRIAL, SPOTS, SUPPORT_CHANNEL } from "@/lib/content";

export const metadata: Metadata = { title: "Terms of Service — VibeLabs Agency" };

const h2 = "text-lg mt-10 mb-3";
const h2Style = { fontFamily: "var(--font-label)", color: GREEN, fontWeight: 700 } as const;
const p = "leading-relaxed mb-4";
const pStyle = { color: INK + "cc" } as const;
const li = "leading-relaxed mb-2";

export default function TermsPage() {
  return (
    <article>
      <p className="text-xs uppercase tracking-[0.14em]" style={{ fontFamily: "var(--font-label)", color: GOLD, fontWeight: 700 }}>
        Effective [date to be set on legal review]
      </p>
      <h1 className="text-3xl sm:text-4xl font-semibold mt-2 mb-2" style={{ color: GREEN }}>
        Terms of Service
      </h1>
      <p className={p} style={pStyle}>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the
        VibeLabs Agency membership — the website at vibelabsagency.com and the member
        platform at app.vibelabsagency.com (together, the &ldquo;Service&rdquo;), operated by
        [legal entity name], [state of formation] (&ldquo;VibeLabs,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us&rdquo;). By starting a trial or otherwise using the Service, you agree to
        these Terms.
      </p>

      <h2 className={h2} style={h2Style}>1. The Service</h2>
      <p className={p} style={pStyle}>
        VibeLabs gives members a done-for-you, white-label AI-powered agency they can
        present to their own clients under their own name, including:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li className={li} style={pStyle}>a Lead Finder for surfacing prospects that are a real fit;</li>
        <li className={li} style={pStyle}>a Qualification &amp; Audit Tool for diagnosing each prospect&rsquo;s needs;</li>
        <li className={li} style={pStyle}>prebuilt, AI-integrated websites deployed as lead magnets; and</li>
        <li className={li} style={pStyle}>an upsell path for growing a first client into an ongoing account.</li>
      </ul>
      <p className={p} style={pStyle}>
        The Service is offered at a single price with no tiers — there is one plan, described
        in Section 3.
      </p>

      <h2 className={h2} style={h2Style}>2. Eligibility</h2>
      <p className={p} style={pStyle}>
        You must be at least 18 years old and able to form a binding contract to use the
        Service. You are responsible for the accuracy of the information you provide at
        signup and for keeping your account credentials secure.
      </p>

      <h2 className={h2} style={h2Style}>3. Membership, Pricing &amp; Billing</h2>
      <p className={p} style={pStyle}>
        Membership costs ${PRICE.monthly}/month, billed on a recurring monthly basis, with no
        separate pricing tiers. VibeLabs is currently running a founding-member launch capped
        at {SPOTS.total} total members; once that cap is reached, new signups are closed
        until a future opening.
      </p>
      <p className={p} style={pStyle}>
        New members receive a {TRIAL.days}-day free trial. A payment card is required to
        start the trial, but it is <strong>not charged</strong> until the trial period ends.
        If you cancel before the trial ends, you will not be charged. If you do not cancel,
        your card will be charged ${PRICE.monthly} at the end of the trial and on the same
        date each month afterward, until you cancel.
      </p>
      <p className={p} style={pStyle}>
        You can cancel at any time from your account settings. Cancelling stops future
        billing but does not itself entitle you to a refund of amounts already charged for
        the current billing period, except as required by law or as expressly stated in
        Section 4 below. [Confirm during review whether any additional refund window should
        be offered beyond the trial period.]
      </p>

      <h2 className={h2} style={h2Style}>4. The Client Guarantee</h2>
      <p className={p} style={pStyle}>
        VibeLabs backs its offer with the following guarantee, stated exactly as follows:
      </p>
      <p
        className="leading-relaxed mb-4 rounded-md px-4 py-3"
        style={{ background: GOLD + "14", border: `1px solid ${GOLD}55`, color: INK }}
      >
        &ldquo;{GUARANTEE.policy}&rdquo;
      </p>
      <p className={p} style={pStyle}>
        In plain terms: if a member has not landed a paying client within{" "}
        {GUARANTEE.windowDays} days of joining, VibeLabs does not walk away — the member
        continues to receive extended, free 1:1 support until a paying client is landed.{" "}
        <strong>This is not a refund policy.</strong> It is a standing support commitment,
        and it does not cancel or reduce the member&rsquo;s ongoing subscription fee.
      </p>
      <p className={p} style={pStyle}>
        The {GUARANTEE.windowDays}-day window begins on the date a member&rsquo;s paid
        membership starts (i.e., when the free trial converts to a paid subscription). To
        remain eligible for the guarantee, a member must actively use the tools provided —
        running the Lead Finder, qualifying and auditing prospects, and deploying the
        prebuilt lead-magnet sites — in good faith toward landing a client. [The precise,
        enforceable eligibility conditions (for example, a minimum level of tool usage or
        outreach activity) should be reviewed and finalized by counsel before this section
        is treated as binding, so the guarantee stays honest and defensible rather than
        open-ended.]
      </p>

      <h2 className={h2} style={h2Style}>5. Support</h2>
      <p className={p} style={pStyle}>
        Support is provided on a {SUPPORT_CHANNEL.toLowerCase()} basis through the member
        platform. You can also reach us by phone at{" "}
        <a href={`tel:${PHONE_TEL}`} style={{ color: GREEN, fontWeight: 600 }}>{PHONE_DISPLAY}</a>.
        There is no public community platform (Discord, Slack, or similar) attached to this
        membership.
      </p>

      <h2 className={h2} style={h2Style}>6. Member Responsibilities</h2>
      <ul className="list-disc pl-5 mb-4">
        <li className={li} style={pStyle}>You are responsible for your own agency&rsquo;s conduct toward your clients, including complying with laws that apply to your outreach and marketing (for example, unsolicited-communication and data-privacy laws in the jurisdictions where you operate).</li>
        <li className={li} style={pStyle}>You will not use the Service for unlawful, deceptive, or abusive purposes.</li>
        <li className={li} style={pStyle}>You will not resell, sublicense, or redistribute access to the VibeLabs platform itself — the white-label rights described in Section 7 cover how you present the tools to your own clients, not reselling the underlying platform.</li>
      </ul>

      <h2 className={h2} style={h2Style}>7. White-Label Use &amp; Intellectual Property</h2>
      <p className={p} style={pStyle}>
        You may present the tools and deliverables you produce with the Service to your own
        clients under your own brand name. VibeLabs and its licensors retain all right,
        title, and interest in the underlying platform, software, and tooling — nothing in
        these Terms transfers ownership of that technology to you. Your own brand name,
        client relationships, and the content you create using the tools remain yours.
      </p>

      <h2 className={h2} style={h2Style}>8. Third-Party Services</h2>
      <p className={p} style={pStyle}>
        The Service relies on third-party providers — including Stripe for payments,
        Supabase for data storage, Resend for email delivery, and Vercel for hosting. Your
        use of the Service is also subject to those providers&rsquo; own terms where you
        interact with them directly (for example, entering payment details into Stripe&rsquo;s
        checkout).
      </p>

      <h2 className={h2} style={h2Style}>9. Disclaimers</h2>
      <p className={p} style={pStyle}>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; Other than
        the Client Guarantee described in Section 4, VibeLabs makes no warranty that the
        Service will meet your expectations, generate any particular amount of business, or
        operate uninterrupted or error-free. See our separate Earnings Disclaimer for more
        on results and income expectations.
      </p>

      <h2 className={h2} style={h2Style}>10. Limitation of Liability</h2>
      <p className={p} style={pStyle}>
        To the fullest extent permitted by law, VibeLabs will not be liable for indirect,
        incidental, special, consequential, or punitive damages, or for lost profits or
        revenue, arising from your use of the Service. [This section should be finalized by
        counsel — including a specific liability cap, typically tied to fees paid in a
        recent period — before publishing.]
      </p>

      <h2 className={h2} style={h2Style}>11. Termination</h2>
      <p className={p} style={pStyle}>
        You may cancel your membership at any time. We may suspend or terminate access to
        the Service if you violate these Terms, misuse the platform, or if payment cannot be
        collected after a reasonable notice period.
      </p>

      <h2 className={h2} style={h2Style}>12. Governing Law &amp; Disputes</h2>
      <p className={p} style={pStyle}>
        These Terms are governed by the laws of [state/country to be confirmed], without
        regard to conflict-of-law principles. [Confirm during review whether disputes should
        be resolved by arbitration, and in what venue, before publishing.]
      </p>

      <h2 className={h2} style={h2Style}>13. Changes to These Terms</h2>
      <p className={p} style={pStyle}>
        We may update these Terms as the Service changes. If we make a material change, we
        will update the effective date above and, where appropriate, notify members
        directly. Continued use of the Service after a change takes effect means you accept
        the updated Terms.
      </p>

      <h2 className={h2} style={h2Style}>14. Contact Us</h2>
      <p className={p} style={pStyle}>
        Questions about these Terms can be sent through the in-app support ticket system, by
        phone at{" "}
        <a href={`tel:${PHONE_TEL}`} style={{ color: GREEN, fontWeight: 600 }}>{PHONE_DISPLAY}</a>,
        or by email at [legal@vibelabsagency.com — confirm this inbox exists and is
        monitored before publishing].
      </p>
    </article>
  );
}
