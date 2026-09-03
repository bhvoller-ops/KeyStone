import type { Metadata } from "next";
import { GREEN, GOLD, INK, PHONE_DISPLAY, PHONE_TEL } from "../legal-theme";

export const metadata: Metadata = { title: "Privacy Policy — VibeLabs Agency" };

const h2 = "text-lg mt-10 mb-3";
const h2Style = { fontFamily: "var(--font-label)", color: GREEN, fontWeight: 700 } as const;
const p = "leading-relaxed mb-4";
const pStyle = { color: INK + "cc" } as const;
const li = "leading-relaxed mb-2";

export default function PrivacyPage() {
  return (
    <article>
      <p className="text-xs uppercase tracking-[0.14em]" style={{ fontFamily: "var(--font-label)", color: GOLD, fontWeight: 700 }}>
        Effective [date to be set on legal review]
      </p>
      <h1 className="text-3xl sm:text-4xl font-semibold mt-2 mb-2" style={{ color: GREEN }}>
        Privacy Policy
      </h1>
      <p className={p} style={pStyle}>
        This Privacy Policy explains what information VibeLabs Agency (&ldquo;VibeLabs,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us&rdquo;) collects from members and site visitors, why we collect
        it, who we share it with, and the choices you have. It applies to
        vibelabsagency.com and the VibeLabs member platform at app.vibelabsagency.com.
      </p>
      <p className={p} style={pStyle}>
        VibeLabs is operated by [legal entity name — e.g. &ldquo;VibeLabs Agency LLC&rdquo;], [state
        of formation], with a registered address of [business address]. That legal-entity
        information is a placeholder pending confirmation and should be filled in during
        review, not left blank at launch.
      </p>

      <h2 className={h2} style={h2Style}>1. Information We Collect</h2>
      <p className={p} style={pStyle}>
        <strong>Account and signup information.</strong> When you start a trial or become a
        member, we collect your email address and any name or business details you provide
        during checkout or onboarding.
      </p>
      <p className={p} style={pStyle}>
        <strong>Payment information.</strong> Billing is handled by Stripe, our payment
        processor. VibeLabs does not receive or store your full card number — Stripe
        collects it directly and shares back only what we need to run your subscription
        (for example, the last four digits of your card, subscription status, and billing
        history).
      </p>
      <p className={p} style={pStyle}>
        <strong>Product and usage data.</strong> As you use the member platform, we store
        the data the tools themselves generate on your behalf — leads found by the Lead
        Finder, audit results, sites you publish, and the client pipeline you track. This
        data belongs to your membership account and is not shared with other members.
      </p>
      <p className={p} style={pStyle}>
        <strong>Support and communications.</strong> If you open a support ticket, call the
        phone number below, or use the on-site chat widget to leave your email, we keep a
        record of that conversation so we (and, where relevant, your own end-clients&rsquo;
        messages routed through tools you deploy) can follow up.
      </p>
      <p className={p} style={pStyle}>
        <strong>Automatically collected information.</strong> Like most web services, our
        servers and hosting provider log standard technical data (IP address, browser type,
        pages visited, timestamps) for security and reliability. [Confirm during review
        whether any analytics or advertising cookies are added beyond this baseline server
        logging — none are currently in use.]
      </p>

      <h2 className={h2} style={h2Style}>2. How We Use Information</h2>
      <ul className="list-disc pl-5 mb-4">
        <li className={li} style={pStyle}>To create and administer your membership, trial, and billing.</li>
        <li className={li} style={pStyle}>To operate the tools you use — the Lead Finder, Qualification &amp; Audit Tool, prebuilt lead-magnet sites, and upsell sequencing.</li>
        <li className={li} style={pStyle}>To respond to support tickets and calls, and to track the 60-day client guarantee described in our Terms of Service.</li>
        <li className={li} style={pStyle}>To send service communications — billing receipts, trial and guarantee status, and product updates you&rsquo;d reasonably expect as a member.</li>
        <li className={li} style={pStyle}>To keep the platform secure and to diagnose technical problems.</li>
      </ul>
      <p className={p} style={pStyle}>
        We do not use member data to train third-party AI models beyond what is required to
        deliver the product features you signed up for, and we do not sell personal
        information.
      </p>

      <h2 className={h2} style={h2Style}>3. How We Share Information</h2>
      <p className={p} style={pStyle}>
        We share information only with the service providers that make the platform work,
        and only as needed for that purpose:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li className={li} style={pStyle}><strong>Stripe</strong> — payment processing and subscription billing.</li>
        <li className={li} style={pStyle}><strong>Supabase</strong> — our database and authentication provider, which stores your account and product data.</li>
        <li className={li} style={pStyle}><strong>Resend</strong> — delivers transactional email (welcome emails, invites, support notifications, receipts).</li>
        <li className={li} style={pStyle}><strong>Vercel</strong> — hosts the website and member platform.</li>
      </ul>
      <p className={p} style={pStyle}>
        We may also disclose information if required by law, to protect the rights and
        safety of VibeLabs or others, or in connection with a merger, acquisition, or sale
        of assets (with notice to affected members where required). We do not sell member
        or visitor personal information to third parties.
      </p>

      <h2 className={h2} style={h2Style}>4. Data Retention</h2>
      <p className={p} style={pStyle}>
        We keep account and product data for as long as your membership is active, plus a
        reasonable period afterward for legal, billing, and dispute-resolution purposes
        (for example, to honor the 60-day guarantee window and to keep billing records
        required by law). [Confirm a specific retention period, and a deletion timeline
        after account closure, during legal review.]
      </p>

      <h2 className={h2} style={h2Style}>5. Your Choices and Rights</h2>
      <p className={p} style={pStyle}>
        You can review or update your account information from your dashboard, or by
        contacting us using the details below. Depending on where you live, you may have
        additional rights — such as the right to access, correct, delete, or export your
        personal information, or to object to certain processing. [This section should be
        expanded during legal review to name the specific frameworks that apply — for
        example CCPA/CPRA for California residents or GDPR for EU/UK residents — based on
        where members actually sign up from.]
      </p>

      <h2 className={h2} style={h2Style}>6. Cookies</h2>
      <p className={p} style={pStyle}>
        We use only the cookies necessary to keep you signed in and to remember basic site
        preferences. We do not currently run third-party advertising or cross-site tracking
        cookies. [Confirm and update this section if analytics or advertising tooling is
        added later.]
      </p>

      <h2 className={h2} style={h2Style}>7. Children&rsquo;s Privacy</h2>
      <p className={p} style={pStyle}>
        VibeLabs is a business tool intended for adults running or starting an agency. It is
        not directed at children, and we do not knowingly collect personal information from
        anyone under 18.
      </p>

      <h2 className={h2} style={h2Style}>8. Security</h2>
      <p className={p} style={pStyle}>
        We rely on industry-standard safeguards from our infrastructure providers (access
        controls, encryption in transit, and database-level access policies) to protect your
        information. No online service can guarantee absolute security, and we ask that you
        also use a strong, unique password for your account.
      </p>

      <h2 className={h2} style={h2Style}>9. International Users</h2>
      <p className={p} style={pStyle}>
        VibeLabs is operated from the United States, and information we collect is
        processed and stored there. If you access the service from outside the United
        States, you understand your information will be transferred to and processed in the
        United States. [Confirm whether any additional cross-border transfer mechanism is
        required based on where members sign up from.]
      </p>

      <h2 className={h2} style={h2Style}>10. Changes to This Policy</h2>
      <p className={p} style={pStyle}>
        We may update this policy as the product or our practices change. If we make a
        material change, we will update the effective date above and, where appropriate,
        notify members directly.
      </p>

      <h2 className={h2} style={h2Style}>11. Contact Us</h2>
      <p className={p} style={pStyle}>
        Questions about this policy or your data can be sent through the in-app support
        ticket system (the fastest way to reach us as a member), by phone at{" "}
        <a href={`tel:${PHONE_TEL}`} style={{ color: GREEN, fontWeight: 600 }}>{PHONE_DISPLAY}</a>,
        or by email at [privacy@vibelabsagency.com — confirm this inbox exists and is
        monitored before publishing].
      </p>
    </article>
  );
}
