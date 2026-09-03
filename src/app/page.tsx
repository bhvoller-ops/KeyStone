"use client";

import { Bitter, Archivo } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FAQS,
  FOUNDER,
  GUARANTEE,
  PRICE,
  SPOTS,
  SUPPORT_CHANNEL,
  TOOLS,
  TRIAL,
} from "@/lib/content";

const serif = Bitter({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
});

const label = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-label",
});

const CREAM = "#F4EEDF";
const CREAM_DARK = "#E7DEC7";
const INK = "#1F2A22";
const GREEN = "#1C4230";
const GREEN_DEEP = "#122C20";
const GOLD = "#A9812F";

// Same-page anchors, plus a real handoff tab — VibeLabs-v2 stays a thin
// marketing front door, so "Partner With Us" reuses webgenie-ai's already-
// real, already-working partner/referral program rather than standing up a
// second one. Matches how the CTAs already hand off to /join.
const TABS: { label: string; href: string; external?: boolean }[] = [
  { label: "Overview", href: "#overview" },
  { label: "What You Get", href: "#what-you-get" },
  { label: "FAQ", href: "#faq" },
  {
    label: "Partner With Us",
    href: "https://app.vibelabsagency.com/partner-signup?utm_source=vibelabs-v2&utm_campaign=franchise&utm_content=nav",
    external: true,
  },
];

const PHONE_DISPLAY = "(470) 376-9804";
const PHONE_TEL = "+14703769804";

/**
 * Reveals .reveal/.stamp-seal elements once, the moment they enter view —
 * paperwork settling into place, not a scroll-jack effect. One shared
 * observer for the whole page rather than one per element. No-ops (leaves
 * everything visible, see globals.css's reduced-motion block) when the
 * visitor prefers reduced motion — the observer still runs, it just adds a
 * class that the reduced-motion CSS overrides back to its resting state.
 */
function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".reveal, .stamp-seal");
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// This is the site's real home page — the franchise direction, chosen over
// /toolbox and /standard (both still kept in the codebase for reference,
// per PRODUCT.md, pending a decision on whether to remove them). It used to
// live at /franchise; that path now redirects here (see next.config.ts) so
// vibelabsagency.com's root serves the actual offer, not a dev-only
// three-direction picker.
export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [leadEmail, setLeadEmail] = useState("");
  const [leadMessage, setLeadMessage] = useState("");
  const [leadWebsite, setLeadWebsite] = useState(""); // honeypot — real visitors never see this field
  const [leadSent, setLeadSent] = useState(false);
  const [leadSending, setLeadSending] = useState(false);
  const [leadError, setLeadError] = useState<string | null>(null);
  const remaining = SPOTS.total - SPOTS.claimed;
  useScrollReveal();

  async function submitLead(e: React.FormEvent) {
    e.preventDefault();
    setLeadSending(true);
    setLeadError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: leadEmail, message: leadMessage, website: leadWebsite }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong — please call us instead.");
      }
      setLeadSent(true);
    } catch (err) {
      setLeadError(err instanceof Error ? err.message : "Something went wrong — please call us instead.");
    } finally {
      setLeadSending(false);
    }
  }

  return (
    <div
      className={`${serif.variable} ${label.variable}`}
      style={{ fontFamily: "var(--font-serif)", background: CREAM, color: INK }}
    >
      {/* ===== Binder tab nav ===== */}
      <header className="sticky top-0 z-50" style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto px-6 pt-5 flex items-end justify-between">
          <div className="flex items-end">
            {TABS.map((tab, i) => (
              <a
                key={tab.label}
                href={tab.href}
                className="px-4 py-2.5 mr-1 rounded-t-md text-xs tracking-[0.14em] uppercase transition-transform duration-150 ease-out hover:-translate-y-0.5"
                style={{
                  fontFamily: "var(--font-label)",
                  background: i === 0 ? GREEN : CREAM_DARK,
                  color: i === 0 ? CREAM : INK,
                  fontWeight: 600,
                }}
              >
                {tab.label}
              </a>
            ))}
          </div>
          <a
            href="https://app.vibelabsagency.com/join?utm_source=vibelabs-v2&utm_campaign=franchise&utm_content=nav"
            className="hidden sm:inline-block text-xs tracking-[0.14em] uppercase px-5 py-2.5 rounded-t-md transition-transform duration-150 ease-out hover:-translate-y-0.5 active:translate-y-0"
            style={{ fontFamily: "var(--font-label)", background: GOLD, color: GREEN_DEEP, fontWeight: 700 }}
          >
            Start Your Trial
          </a>
        </div>
        <div className="h-[3px]" style={{ background: GREEN }} />
      </header>

      {/* ===== Hero: centered claim, dark franchise cover ===== */}
      <section
        id="overview"
        className="text-center pt-20 pb-24 px-6"
        style={{ background: GREEN_DEEP }}
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 text-xs px-3.5 py-1.5 rounded-full mb-7"
            style={{
              fontFamily: "var(--font-label)",
              background: CREAM + "14",
              border: `1px solid ${GOLD}88`,
              color: CREAM + "cc",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
            Founding launch &mdash; {remaining} of {SPOTS.total} spots left
          </div>
          <h1
            className="text-4xl sm:text-6xl leading-[1.05] mb-6"
            style={{ fontWeight: 700, color: CREAM }}
          >
            Your White-Label AI Agency,
            <br />
            <span style={{ color: GOLD }}>Built, Branded, and Guaranteed.</span>
          </h1>
          <p className="text-lg mx-auto max-w-2xl mb-10" style={{ color: CREAM + "b8" }}>
            A fully branded AI-powered agency in your name, with the exact
            tools to find, qualify, and close your first client &mdash;{" "}
            {GUARANTEE.short.toLowerCase()}
          </p>
          <div className="flex flex-col items-center gap-3">
            <a
              href="https://app.vibelabsagency.com/join?utm_source=vibelabs-v2&utm_campaign=franchise&utm_content=hero"
              className="px-9 py-4 rounded-sm text-base tracking-[0.06em] uppercase transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 active:translate-y-0"
              style={{
                fontFamily: "var(--font-label)",
                background: GOLD,
                color: GREEN_DEEP,
                fontWeight: 700,
                boxShadow: `0 14px 34px ${GOLD}44`,
              }}
            >
              Start Your {TRIAL.days}-Day Free Trial
            </a>
            <span className="text-sm" style={{ color: CREAM + "88" }}>
              {PRICE.currency}
              {PRICE.monthly}/mo after trial &middot; card required, not
              charged
            </span>
          </div>
        </div>
      </section>

      {/* ===== What you get — preview panel ===== */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-20">
        <div
          className="rounded-sm overflow-hidden"
          style={{
            background: CREAM_DARK,
            border: `1px solid ${GOLD}55`,
            boxShadow: "0 30px 70px rgba(18,44,32,.14)",
          }}
        >
          <div
            className="h-11 flex items-center justify-between px-5"
            style={{ background: GREEN_DEEP }}
          >
            <span
              className="text-[11px] tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-label)", color: GOLD }}
            >
              What You Get
            </span>
            <span className="text-[11px]" style={{ color: CREAM + "aa" }}>
              No. {String(SPOTS.claimed + 1).padStart(4, "0")}
            </span>
          </div>
          <div className="p-6 grid sm:grid-cols-4 gap-4">
            {TOOLS.map((tool, i) => (
              <div
                key={tool.id}
                className="reveal rounded-sm p-4"
                style={{ background: CREAM, border: `1px solid ${CREAM_DARK}`, transitionDelay: `${i * 70}ms` }}
              >
                <p
                  className="text-[10px] tracking-[0.15em] uppercase mb-2"
                  style={{ fontFamily: "var(--font-label)", color: GOLD }}
                >
                  Included
                </p>
                <p className="text-sm" style={{ fontWeight: 700 }}>
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Guarantee — policy clause ===== */}
      <section id="guarantee" className="max-w-4xl mx-auto px-6 py-16">
        <div
          className="relative rounded-sm p-8 sm:p-10"
          style={{ background: CREAM_DARK, border: `1px solid ${GOLD}55` }}
        >
          <div
            aria-hidden
            className="stamp-seal absolute top-6 right-6 sm:top-8 sm:right-8 w-16 h-16 rounded-full hidden sm:flex items-center justify-center text-center"
            style={{
              border: `1.5px dashed ${GOLD}`,
              color: GOLD,
              fontFamily: "var(--font-label)",
            }}
          >
            <span className="text-[9px] tracking-[0.1em] uppercase leading-tight">
              Guarantee
              <br />
              Certified
            </span>
          </div>
          <p
            className="text-[11px] tracking-[0.25em] uppercase mb-3"
            style={{ fontFamily: "var(--font-label)", color: GOLD }}
          >
            Clause 1 — Client Guarantee
          </p>
          <h2 className="text-2xl sm:text-3xl mb-4 max-w-lg" style={{ fontWeight: 700 }}>
            {GUARANTEE.headline}
          </h2>
          <p className="leading-relaxed mb-2 max-w-xl" style={{ color: INK + "dd" }}>
            {GUARANTEE.policy}
          </p>
          <p className="text-sm" style={{ color: INK + "88" }}>
            {GUARANTEE.windowDays}-day window from license activation. This is
            a standing support commitment, not a refund.
          </p>
        </div>
      </section>

      {/* ===== What You Get — included tools ===== */}
      <section id="what-you-get" className="max-w-6xl mx-auto px-6 pb-20">
        <p
          className="text-[11px] tracking-[0.25em] uppercase mb-2"
          style={{ fontFamily: "var(--font-label)", color: GOLD }}
        >
          Schedule A
        </p>
        <h2 className="text-3xl sm:text-4xl mb-10" style={{ fontWeight: 700 }}>
          What You Get
        </h2>
        <div className="divide-y" style={{ borderColor: CREAM_DARK }}>
          {TOOLS.map((tool, i) => (
            <div
              key={tool.id}
              className="reveal py-6 grid sm:grid-cols-[80px_1fr] gap-4 sm:gap-8"
              style={{
                borderTop: i === 0 ? `1px solid ${CREAM_DARK}` : undefined,
                transitionDelay: `${Math.min(i * 80, 240)}ms`,
              }}
            >
              <span
                className="text-3xl"
                style={{ fontFamily: "var(--font-label)", color: GOLD, fontWeight: 700 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg mb-1.5" style={{ fontWeight: 700 }}>
                  {tool.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: INK + "aa" }}>
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Founder — license issuer ===== */}
      <section
        className="py-20"
        style={{ background: GREEN_DEEP, color: CREAM }}
      >
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[200px_1fr] gap-10 items-start">
          <div
            className="rounded-sm overflow-hidden"
            style={{ border: `3px solid ${GOLD}` }}
          >
            <Image
              src={FOUNDER.photo}
              alt={FOUNDER.name}
              width={200}
              height={250}
              className="object-cover"
              style={{ aspectRatio: "4/5", objectPosition: "50% 22%" }}
            />
          </div>
          <div>
            <p
              className="text-[11px] tracking-[0.25em] uppercase mb-3"
              style={{ fontFamily: "var(--font-label)", color: GOLD }}
            >
              Signed &amp; Issued By
            </p>
            <h2 className="text-2xl sm:text-3xl mb-1" style={{ fontWeight: 700 }}>
              {FOUNDER.name}
            </h2>
            <p className="text-sm mb-6" style={{ color: GOLD }}>
              {FOUNDER.credential}
            </p>
            <div className="space-y-4 leading-relaxed max-w-2xl" style={{ color: CREAM + "cc" }}>
              {FOUNDER.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Pricing — fee schedule ===== */}
      <section id="terms" className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p
          className="text-[11px] tracking-[0.25em] uppercase mb-3"
          style={{ fontFamily: "var(--font-label)", color: GOLD }}
        >
          Schedule B — Licensing Fee
        </p>
        <div className="flex items-end justify-center gap-1 mb-2">
          <span className="text-2xl">{PRICE.currency}</span>
          <span className="text-6xl" style={{ fontWeight: 700 }}>
            {PRICE.monthly}
          </span>
          <span className="text-lg mb-1">/mo</span>
        </div>
        <p className="text-sm mb-8" style={{ color: INK + "88" }}>
          One fee. No tiers. {remaining} of {SPOTS.total} founding spots
          remain.
        </p>
        <a
          href="https://app.vibelabsagency.com/join?utm_source=vibelabs-v2&utm_campaign=franchise&utm_content=pricing"
          className="inline-block px-9 py-4 rounded-sm text-base tracking-[0.06em] uppercase mb-3 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 active:translate-y-0"
          style={{
            fontFamily: "var(--font-label)",
            background: GOLD,
            color: GREEN_DEEP,
            fontWeight: 700,
            boxShadow: `0 14px 34px ${GOLD}33`,
          }}
        >
          Start Your {TRIAL.days}-Day Free Trial
        </a>
        <p className="text-xs" style={{ color: INK + "77" }}>
          Card required, not charged for {TRIAL.days} days &middot;{" "}
          {SUPPORT_CHANNEL}
        </p>
      </section>

      {/* ===== FAQ — disclosure ===== */}
      <section id="faq" className="max-w-3xl mx-auto px-6 pb-20">
        <p
          className="text-[11px] tracking-[0.25em] uppercase mb-2"
          style={{ fontFamily: "var(--font-label)", color: GOLD }}
        >
          Schedule C — Disclosure
        </p>
        <h2 className="text-2xl mb-6" style={{ fontWeight: 700 }}>
          Frequently Asked
        </h2>
        <div className="space-y-0 divide-y" style={{ borderColor: CREAM_DARK }}>
          {FAQS.map((faq, i) => {
            const open = openFaq === i;
            return (
              <div key={faq.q}>
                <button
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="w-full flex items-center justify-between text-left py-4"
                  aria-expanded={open}
                >
                  <span className="text-sm font-medium">{faq.q}</span>
                  <span
                    className="transition-transform duration-200 ease-out"
                    style={{ color: GOLD, transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                {/* CSS-grid height trick — grid-template-rows animates cleanly
                    where height:auto can't, no JS-measured pixel heights. */}
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 text-sm leading-relaxed" style={{ color: INK + "99" }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer style={{ background: GREEN_DEEP, color: CREAM + "88" }}>
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between gap-4 text-xs">
          <div className="flex flex-col gap-1.5">
            <span style={{ fontFamily: "var(--font-label)" }}>
              VIBELABS AGENCY — FOUNDING LAUNCH
            </span>
            <a href={`tel:${PHONE_TEL}`} className="hover:text-white w-fit">
              Call {PHONE_DISPLAY}
            </a>
          </div>
          <div className="flex gap-5">
            <a href="/legal/privacy" className="hover:text-white">
              Privacy
            </a>
            <a href="/legal/terms" className="hover:text-white">
              Terms
            </a>
            <a href="/legal/earnings" className="hover:text-white">
              Earnings Disclaimer
            </a>
          </div>
        </div>
      </footer>

      {/* ===== Chat widget — contact & lead capture ===== */}
      <div className="fixed bottom-5 right-5 z-[60]" style={{ fontFamily: "var(--font-label)" }}>
        {chatOpen && (
          <div
            className="chat-panel-in mb-3 w-[300px] rounded-md overflow-hidden"
            style={{
              background: CREAM,
              border: `1px solid ${GOLD}66`,
              boxShadow: "0 24px 60px rgba(18,44,32,.35)",
            }}
          >
            <div
              className="px-4 py-3 flex items-center justify-between"
              style={{ background: GREEN_DEEP }}
            >
              <span
                className="text-xs tracking-[0.1em] uppercase"
                style={{ color: GOLD, fontWeight: 700 }}
              >
                Chat with VibeLabs
              </span>
              <button
                aria-label="Close chat"
                onClick={() => setChatOpen(false)}
                style={{ color: CREAM + "aa" }}
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <p className="text-sm leading-relaxed mb-3" style={{ color: INK + "cc" }}>
                Questions before you start your trial? Call us directly or
                leave your email and we&rsquo;ll get back to you.
              </p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="block text-sm font-semibold mb-4"
                style={{ color: GREEN }}
              >
                {PHONE_DISPLAY}
              </a>
              {leadSent ? (
                <p
                  className="text-sm rounded-sm p-3"
                  style={{ background: CREAM_DARK, color: INK + "cc" }}
                >
                  Thanks — we&rsquo;ll be in touch shortly.
                </p>
              ) : (
                <form onSubmit={submitLead} className="flex flex-col gap-2">
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    disabled={leadSending}
                    className="text-sm px-3 py-2.5 rounded-sm outline-none disabled:opacity-60"
                    style={{ background: "#fff", border: `1px solid ${CREAM_DARK}`, color: INK }}
                  />
                  <textarea
                    placeholder="What's on your mind? (optional)"
                    value={leadMessage}
                    onChange={(e) => setLeadMessage(e.target.value)}
                    disabled={leadSending}
                    rows={2}
                    className="text-sm px-3 py-2.5 rounded-sm outline-none resize-none disabled:opacity-60"
                    style={{ background: "#fff", border: `1px solid ${CREAM_DARK}`, color: INK }}
                  />
                  {/* Honeypot — hidden from real visitors via CSS, not just
                      "display:none" (some bots skip those), and kept out of
                      the tab order and screen-reader flow. */}
                  <input
                    type="text"
                    name="website"
                    value={leadWebsite}
                    onChange={(e) => setLeadWebsite(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute opacity-0 pointer-events-none"
                    style={{ left: "-9999px", width: 1, height: 1 }}
                  />
                  {leadError && (
                    <p className="text-xs" style={{ color: "#B3261E" }}>
                      {leadError}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={leadSending}
                    className="text-xs tracking-[0.08em] uppercase px-3 py-2.5 rounded-sm disabled:opacity-60 transition-transform duration-150 ease-out hover:-translate-y-0.5 active:translate-y-0"
                    style={{ background: GREEN, color: CREAM, fontWeight: 700 }}
                  >
                    {leadSending ? "Sending…" : "Get a Callback"}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
        <button
          onClick={() => setChatOpen((v) => !v)}
          aria-label="Open chat"
          className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-150 ease-out hover:scale-105 active:scale-95"
          style={{
            background: GOLD,
            color: GREEN_DEEP,
            boxShadow: `0 14px 30px ${GOLD}55`,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
