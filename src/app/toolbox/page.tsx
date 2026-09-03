"use client";

import { Big_Shoulders_Stencil, Work_Sans } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
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

const stencil = Big_Shoulders_Stencil({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-stencil",
});

const body = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const RED = "#A6220F";
const RED_DARK = "#7A1A0B";
const STEEL = "#CBD2D8";
const STEEL_DARK = "#8A93A0";
const FOAM = "#212328";
const FOAM_DARK = "#161719";
const PAPER = "#F3F0E8";
const YELLOW = "#F2B705";

const PIPELINE = ["PROSPECT", "QUALIFY", "CLOSE", "UPSELL"];

function StencilTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block px-3 py-1 text-xs tracking-[0.2em] uppercase"
      style={{
        fontFamily: "var(--font-stencil)",
        background: FOAM,
        color: PAPER,
        border: `1px solid ${STEEL_DARK}`,
      }}
    >
      {children}
    </span>
  );
}

function Rivet() {
  return (
    <span
      aria-hidden
      className="inline-block w-2.5 h-2.5 rounded-full"
      style={{
        background:
          "radial-gradient(circle at 35% 30%, #E7ECEF 0%, #9AA3AC 45%, #4B535C 100%)",
        boxShadow: "0 1px 2px rgba(0,0,0,.5)",
      }}
    />
  );
}

function FoamSlot({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div
      className="relative rounded-[6px] p-6 flex flex-col gap-3"
      style={{
        background: FOAM,
        boxShadow:
          "inset 0 3px 10px rgba(0,0,0,.65), inset 0 -1px 0 rgba(255,255,255,.03)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-3 rounded-[4px] pointer-events-none"
        style={{
          border: `2px dashed ${STEEL_DARK}55`,
        }}
      />
      <p
        className="text-[11px] tracking-[0.25em] uppercase relative"
        style={{ fontFamily: "var(--font-stencil)", color: YELLOW }}
      >
        {label}
      </p>
      <div className="relative">{children}</div>
    </div>
  );
}

export default function ToolboxDirection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const pct = Math.round((SPOTS.claimed / SPOTS.total) * 100);
  const remaining = SPOTS.total - SPOTS.claimed;

  return (
    <div
      className={`${stencil.variable} ${body.variable}`}
      style={{
        fontFamily: "var(--font-body)",
        background: FOAM_DARK,
        color: PAPER,
      }}
    >
      {/* ===== Nav ===== */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ background: FOAM, borderColor: STEEL_DARK + "44" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="text-lg tracking-[0.08em]"
              style={{ fontFamily: "var(--font-stencil)", color: PAPER }}
            >
              VIBELABS
            </span>
            <span
              className="text-[10px] px-1.5 py-0.5 rounded-sm"
              style={{ background: RED, color: PAPER }}
            >
              AGENCY
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#drawers" className="hover:text-white/70">
              What&rsquo;s Inside
            </a>
            <a href="#guarantee" className="hover:text-white/70">
              Guarantee
            </a>
            <a href="#founder" className="hover:text-white/70">
              Founder
            </a>
            <a href="#pricing" className="hover:text-white/70">
              Pricing
            </a>
          </nav>
          <a
            href="#pricing"
            className="text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-sm font-semibold"
            style={{ fontFamily: "var(--font-stencil)", background: RED, color: PAPER }}
          >
            Claim Your Drawer
          </a>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "repeating-linear-gradient(135deg, rgba(255,255,255,.02) 0px, rgba(255,255,255,.02) 2px, transparent 2px, transparent 26px)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Rivet />
              <StencilTag>Founding Launch — {SPOTS.total} Spots Only</StencilTag>
            </div>
            <h1
              className="text-[13vw] leading-[0.92] sm:text-6xl lg:text-7xl mb-6"
              style={{ fontFamily: "var(--font-stencil)", fontWeight: 900 }}
            >
              Every Tool You Need To Land A Client.
              <span style={{ color: RED }}> Already In The Drawer.</span>
            </h1>
            <p className="text-lg text-white/70 max-w-md mb-8">
              A fully branded, white-label AI agency in your name — stocked
              with the exact tools to find, qualify, and close your first
              client. Not a course. A working kit.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#pricing"
                className="px-6 py-3.5 rounded-sm text-sm tracking-[0.1em] uppercase font-semibold"
                style={{
                  fontFamily: "var(--font-stencil)",
                  background: RED,
                  color: PAPER,
                  boxShadow: `0 8px 24px ${RED}55`,
                }}
              >
                Start Your {TRIAL.days}-Day Free Trial
              </a>
              <span className="text-sm text-white/50">
                {PRICE.currency}
                {PRICE.monthly}/mo after trial &middot; card required, not
                charged for {TRIAL.days} days
              </span>
            </div>
            <div className="max-w-xs">
              <div className="flex justify-between text-[11px] tracking-[0.15em] uppercase text-white/50 mb-1.5">
                <span>Drawers claimed</span>
                <span>
                  {SPOTS.claimed} / {SPOTS.total}
                </span>
              </div>
              <div
                className="h-2 rounded-full overflow-hidden"
                style={{ background: FOAM }}
              >
                <div
                  className="h-full rounded-full"
                  style={{ width: `${pct}%`, background: YELLOW }}
                />
              </div>
              <p className="text-xs text-white/40 mt-1.5">
                {remaining} spots left for this launch.
              </p>
            </div>
          </div>

          {/* Open drawer visual */}
          <div className="relative">
            <div
              className="rounded-md p-3"
              style={{
                background: `linear-gradient(180deg, ${STEEL} 0%, ${STEEL_DARK} 100%)`,
                boxShadow: "0 30px 60px rgba(0,0,0,.55)",
              }}
            >
              <div className="flex items-center justify-between px-2 pb-2">
                <div className="flex gap-1.5">
                  <Rivet />
                  <Rivet />
                </div>
                <span
                  className="text-[10px] tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-stencil)", color: FOAM_DARK }}
                >
                  Drawer 01 — Your Agency
                </span>
                <div className="flex gap-1.5">
                  <Rivet />
                  <Rivet />
                </div>
              </div>
              <div
                className="rounded-[4px] p-8 flex items-center justify-center"
                style={{
                  background: FOAM,
                  boxShadow: "inset 0 4px 14px rgba(0,0,0,.7)",
                  minHeight: 320,
                }}
              >
                {/* Foam cutout silhouette holding a "site" shape */}
                <div
                  className="relative w-full max-w-[300px] aspect-[4/3] rounded-[3px]"
                  style={{
                    background: FOAM_DARK,
                    boxShadow: "inset 0 0 0 6px " + FOAM,
                  }}
                >
                  <div
                    className="absolute inset-4 rounded-sm flex flex-col overflow-hidden"
                    style={{ background: PAPER }}
                  >
                    <div
                      className="h-6 flex items-center gap-1 px-2"
                      style={{ background: STEEL_DARK }}
                    >
                      <span className="w-2 h-2 rounded-full bg-white/70" />
                      <span className="w-2 h-2 rounded-full bg-white/50" />
                      <span className="w-2 h-2 rounded-full bg-white/30" />
                    </div>
                    <div className="flex-1 p-3 flex flex-col gap-2">
                      <div
                        className="h-3 w-2/3 rounded-sm"
                        style={{ background: FOAM }}
                      />
                      <div
                        className="h-2 w-full rounded-sm"
                        style={{ background: STEEL }}
                      />
                      <div
                        className="h-2 w-4/5 rounded-sm"
                        style={{ background: STEEL }}
                      />
                      <div
                        className="mt-auto h-7 w-24 rounded-sm"
                        style={{ background: RED }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-white/40 mt-3">
              Your agency, branded and ready — the moment you claim a drawer.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Pipeline step-row ===== */}
      <section className="border-y" style={{ borderColor: STEEL_DARK + "33", background: FOAM }}>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <p
            className="text-[11px] tracking-[0.25em] uppercase text-white/40 mb-4"
            style={{ fontFamily: "var(--font-stencil)" }}
          >
            The Path From Stranger To Client
          </p>
          <div className="grid grid-cols-4 gap-2">
            {PIPELINE.map((step, i) => (
              <div key={step} className="flex flex-col items-center gap-2">
                <div
                  className="w-full h-12 rounded-sm flex items-center justify-center relative"
                  style={{
                    background: i === 0 ? RED : FOAM_DARK,
                    boxShadow:
                      i === 0
                        ? `0 0 0 2px ${YELLOW}, 0 0 22px ${RED}88`
                        : `inset 0 0 0 1px ${STEEL_DARK}55`,
                  }}
                >
                  <span
                    className="text-xs sm:text-sm tracking-[0.1em]"
                    style={{ fontFamily: "var(--font-stencil)", color: PAPER }}
                  >
                    {step}
                  </span>
                </div>
                {i < PIPELINE.length - 1 && (
                  <span className="hidden" aria-hidden>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Guarantee ===== */}
      <section id="guarantee" className="max-w-6xl mx-auto px-6 py-24">
        <div
          className="rounded-md p-8 sm:p-12 relative"
          style={{
            background: `linear-gradient(160deg, ${RED} 0%, ${RED_DARK} 100%)`,
          }}
        >
          <div className="absolute top-4 left-4">
            <Rivet />
          </div>
          <div className="absolute top-4 right-4">
            <Rivet />
          </div>
          <div className="absolute bottom-4 left-4">
            <Rivet />
          </div>
          <div className="absolute bottom-4 right-4">
            <Rivet />
          </div>
          <p
            className="text-xs tracking-[0.25em] uppercase mb-4 text-white/80"
            style={{ fontFamily: "var(--font-stencil)" }}
          >
            Warranty Card
          </p>
          <h2
            className="text-3xl sm:text-5xl mb-6 max-w-3xl"
            style={{ fontFamily: "var(--font-stencil)", fontWeight: 900 }}
          >
            {GUARANTEE.headline}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mb-2">
            {GUARANTEE.policy}
          </p>
          <p className="text-sm text-white/70">
            {GUARANTEE.windowDays}-day window. Not a refund policy — a
            standing commitment to keep working until it's done.
          </p>
        </div>
      </section>

      {/* ===== Tools / Drawers ===== */}
      <section id="drawers" className="max-w-6xl mx-auto px-6 pb-24">
        <p
          className="text-[11px] tracking-[0.25em] uppercase text-white/40 mb-2"
          style={{ fontFamily: "var(--font-stencil)" }}
        >
          What&rsquo;s In The Chest
        </p>
        <h2
          className="text-3xl sm:text-4xl mb-10 max-w-xl"
          style={{ fontFamily: "var(--font-stencil)", fontWeight: 700 }}
        >
          Four drawers. Four jobs. Nothing you have to figure out alone.
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {TOOLS.map((tool, i) => (
            <FoamSlot key={tool.id} label={`Drawer 0${i + 1}`}>
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {tool.description}
              </p>
            </FoamSlot>
          ))}
        </div>
      </section>

      {/* ===== Founder ===== */}
      <section
        id="founder"
        className="border-y"
        style={{ borderColor: STEEL_DARK + "33", background: FOAM }}
      >
        <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-[220px_1fr] gap-10 items-start">
          <div
            className="rounded-md overflow-hidden mx-auto md:mx-0"
            style={{
              width: 220,
              boxShadow: `0 0 0 6px ${FOAM_DARK}, 0 0 0 8px ${STEEL_DARK}`,
            }}
          >
            <Image
              src={FOUNDER.photo}
              alt={FOUNDER.name}
              width={220}
              height={275}
              className="object-cover"
              style={{ aspectRatio: "4/5", objectPosition: "50% 22%" }}
            />
            <div
              className="text-center py-2 text-[11px] tracking-[0.2em] uppercase"
              style={{ background: FOAM_DARK, color: YELLOW, fontFamily: "var(--font-stencil)" }}
            >
              Founder
            </div>
          </div>
          <div>
            <p
              className="text-[11px] tracking-[0.25em] uppercase text-white/40 mb-2"
              style={{ fontFamily: "var(--font-stencil)" }}
            >
              Who Built This
            </p>
            <h2
              className="text-2xl sm:text-3xl mb-1"
              style={{ fontFamily: "var(--font-stencil)", fontWeight: 700 }}
            >
              {FOUNDER.name}
            </h2>
            <p className="text-sm mb-6" style={{ color: YELLOW }}>
              {FOUNDER.credential}
            </p>
            <div className="space-y-4 text-white/75 leading-relaxed max-w-2xl">
              {FOUNDER.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Pricing ===== */}
      <section id="pricing" className="max-w-4xl mx-auto px-6 py-24">
        <div
          className="rounded-md p-8 sm:p-10 text-center relative"
          style={{
            background: `linear-gradient(180deg, ${STEEL} 0%, ${STEEL_DARK} 100%)`,
            color: FOAM_DARK,
          }}
        >
          <p
            className="text-[11px] tracking-[0.25em] uppercase mb-3"
            style={{ fontFamily: "var(--font-stencil)" }}
          >
            Price Tag
          </p>
          <div className="flex items-end justify-center gap-1 mb-2">
            <span className="text-2xl">{PRICE.currency}</span>
            <span
              className="text-6xl leading-none"
              style={{ fontFamily: "var(--font-stencil)", fontWeight: 900 }}
            >
              {PRICE.monthly}
            </span>
            <span className="text-lg mb-1">/mo</span>
          </div>
          <p className="text-sm mb-6 opacity-70">
            One drawer. One price. No tiers.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 rounded-sm text-sm tracking-[0.1em] uppercase font-semibold mb-3"
            style={{ fontFamily: "var(--font-stencil)", background: RED, color: PAPER }}
          >
            Start {TRIAL.days}-Day Free Trial
          </a>
          <p className="text-xs opacity-60">
            Card required to start, not charged for {TRIAL.days} days &middot;{" "}
            {remaining} of {SPOTS.total} spots remaining &middot;{" "}
            {SUPPORT_CHANNEL}
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <h2
          className="text-2xl mb-6"
          style={{ fontFamily: "var(--font-stencil)", fontWeight: 700 }}
        >
          Read The Label
        </h2>
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              className="rounded-sm overflow-hidden"
              style={{ background: FOAM }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between text-left px-5 py-4"
              >
                <span className="text-sm font-medium">{faq.q}</span>
                <span style={{ color: YELLOW }}>
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              {openFaq === i && (
                <p className="px-5 pb-4 text-sm text-white/70 leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer
        className="border-t py-10"
        style={{ borderColor: STEEL_DARK + "33", background: FOAM_DARK }}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/40">
          <span style={{ fontFamily: "var(--font-stencil)" }}>VIBELABS AGENCY</span>
          <div className="flex gap-5">
            <a href="/legal/privacy" className="hover:text-white/70">
              Privacy
            </a>
            <a href="/legal/terms" className="hover:text-white/70">
              Terms
            </a>
            <a href="/legal/earnings" className="hover:text-white/70">
              Earnings Disclaimer
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
