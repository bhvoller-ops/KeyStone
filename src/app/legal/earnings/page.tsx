import type { Metadata } from "next";
import { GREEN, GOLD, INK, PHONE_DISPLAY, PHONE_TEL } from "../legal-theme";
import { GUARANTEE } from "@/lib/content";

export const metadata: Metadata = { title: "Earnings Disclaimer — VibeLabs Agency" };

const h2 = "text-lg mt-10 mb-3";
const h2Style = { fontFamily: "var(--font-label)", color: GREEN, fontWeight: 700 } as const;
const p = "leading-relaxed mb-4";
const pStyle = { color: INK + "cc" } as const;

export default function EarningsPage() {
  return (
    <article>
      <p className="text-xs uppercase tracking-[0.14em]" style={{ fontFamily: "var(--font-label)", color: GOLD, fontWeight: 700 }}>
        Effective [date to be set on legal review]
      </p>
      <h1 className="text-3xl sm:text-4xl font-semibold mt-2 mb-2" style={{ color: GREEN }}>
        Earnings Disclaimer
      </h1>
      <p className={p} style={pStyle}>
        This disclaimer applies to all statements about income, clients, or business results
        made on vibelabsagency.com, inside the member platform, or by VibeLabs Agency
        (&ldquo;VibeLabs,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) in any communication with
        members or prospective members.
      </p>

      <h2 className={h2} style={h2Style}>1. &ldquo;Guaranteed&rdquo; Refers to Support, Not Income</h2>
      <p className={p} style={pStyle}>
        Where VibeLabs uses the word &ldquo;guarantee&rdquo; or &ldquo;guaranteed,&rdquo; it
        refers specifically to the Client Guarantee defined in our Terms of Service:
      </p>
      <p
        className="leading-relaxed mb-4 rounded-md px-4 py-3"
        style={{ background: GOLD + "14", border: `1px solid ${GOLD}55`, color: INK }}
      >
        &ldquo;{GUARANTEE.policy}&rdquo;
      </p>
      <p className={p} style={pStyle}>
        That commitment is about ongoing support if a member has not landed a client within
        {" "}{GUARANTEE.windowDays} days — it is <strong>not</strong> a promise, prediction, or
        guarantee of income, revenue, profit, or any specific dollar amount, and it does not
        entitle a member to a refund. Nothing on our site or platform should be read as a
        promise of a specific financial outcome.
      </p>

      <h2 className={h2} style={h2Style}>2. No Typical Results Are Claimed</h2>
      <p className={p} style={pStyle}>
        VibeLabs does not publish testimonials, case studies, income statistics, or
        &ldquo;typical member&rdquo; earnings figures, and none should be assumed. Any
        example used in our marketing (if any) is illustrative only and does not represent a
        promise or expectation of similar results for any other member.
      </p>

      <h2 className={h2} style={h2Style}>3. Results Depend on the Member</h2>
      <p className={p} style={pStyle}>
        VibeLabs provides tools — a Lead Finder, a Qualification &amp; Audit Tool, prebuilt
        lead-magnet websites, and an upsell path — along with implementation playbooks for
        using them. Whether and how quickly a member lands a client or builds revenue depends
        on factors outside our control, including the member&rsquo;s market, effort,
        follow-through, pricing decisions, local competition, and general economic
        conditions. Two members using the same tools can see very different results.
      </p>

      <h2 className={h2} style={h2Style}>4. Not Financial, Legal, or Tax Advice</h2>
      <p className={p} style={pStyle}>
        Nothing provided through the Service constitutes financial, legal, accounting, or
        tax advice. You should consult your own qualified professionals about how running an
        agency business affects your specific financial or legal situation.
      </p>

      <h2 className={h2} style={h2Style}>5. Forward-Looking Statements</h2>
      <p className={p} style={pStyle}>
        Any statement about future features, tooling, or program changes is a statement of
        current intent, not a commitment, and may change without notice.
      </p>

      <h2 className={h2} style={h2Style}>6. Your Responsibility</h2>
      <p className={p} style={pStyle}>
        As with any business venture, using VibeLabs involves real effort and real risk,
        including the risk that a member does not generate the income they hoped for. By
        using the Service, you acknowledge that any business decisions you make — including
        pricing, hiring, and spending decisions related to your own agency — are yours alone.
      </p>

      <h2 className={h2} style={h2Style}>7. Changes to This Disclaimer</h2>
      <p className={p} style={pStyle}>
        We may update this disclaimer as the product or our practices change. If we make a
        material change, we will update the effective date above.
      </p>

      <h2 className={h2} style={h2Style}>8. Contact Us</h2>
      <p className={p} style={pStyle}>
        Questions about this disclaimer can be sent through the in-app support ticket
        system, by phone at{" "}
        <a href={`tel:${PHONE_TEL}`} style={{ color: GREEN, fontWeight: 600 }}>{PHONE_DISPLAY}</a>,
        or by email at [legal@vibelabsagency.com — confirm this inbox exists and is
        monitored before publishing].
      </p>
    </article>
  );
}
