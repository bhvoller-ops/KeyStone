"use client";

import { Inter } from "next/font/google";
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

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const BG = "#0A0B0E";
const SURFACE = "#121419";
const BORDER = "#22262E";
const BLUE = "#4C7CFF";
const TEXT = "#E7EAF0";
const MUTED = "#8A93A3";

export default function StandardDirection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const remaining = SPOTS.total - SPOTS.claimed;
  const pct = Math.round((SPOTS.claimed / SPOTS.total) * 100);

  return (
    <div
      className={inter.variable}
      style={{ fontFamily: "var(--font-inter)", background: BG, color: TEXT }}
    >
      {/* ===== Nav ===== */}
      <header
        className="sticky top-0 z-50 border-b backdrop-blur"
        style={{ borderColor: BORDER, background: BG + "cc" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold tracking-tight">VibeLabs Agency</span>
          <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: MUTED }}>
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#guarantee" className="hover:text-white">
              Guarantee
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </nav>
          <a
            href="#pricing"
            className="text-sm font-medium px-4 py-2 rounded-md"
            style={{ background: BLUE, color: "#fff" }}
          >
            Start Free Trial
          </a>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-x-0 -top-40 h-[480px] pointer-events-none"
          style={{
            background: `radial-gradient(60% 60% at 50% 0%, ${BLUE}33 0%, transparent 70%)`,
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
          <div
            className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full mb-6"
            style={{ background: SURFACE, border: `1px solid ${BORDER}`, color: MUTED }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: BLUE }} />
            Founding launch — {remaining} of {SPOTS.total} spots left
          </div>
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">
            Your White-Label AI Agency,
            <br />
            <span style={{ color: BLUE }}>Built, Branded, and Guaranteed.</span>
          </h1>
          <p className="text-lg mx-auto max-w-2xl mb-10" style={{ color: MUTED }}>
            A fully branded AI-powered agency in your name, with the exact
            tools to find, qualify, and close your first client —{" "}
            {GUARANTEE.short.toLowerCase()}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="px-6 py-3.5 rounded-md font-medium text-sm"
              style={{ background: BLUE, color: "#fff" }}
            >
              Start Your {TRIAL.days}-Day Free Trial
            </a>
            <span className="text-sm" style={{ color: MUTED }}>
              {PRICE.currency}
              {PRICE.monthly}/mo after trial &middot; card required, not
              charged
            </span>
          </div>
        </div>

        {/* dashboard-style preview card */}
        <div className="max-w-4xl mx-auto px-6 pb-24">
          <div
            className="rounded-xl overflow-hidden"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <div
              className="h-10 flex items-center gap-1.5 px-4"
              style={{ borderBottom: `1px solid ${BORDER}` }}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#4a4f59" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#4a4f59" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#4a4f59" }} />
            </div>
            <div className="p-6 grid grid-cols-3 gap-4">
              {["Lead Finder", "Qualifier", "Lead Magnets"].map((label) => (
                <div
                  key={label}
                  className="rounded-lg p-4"
                  style={{ background: BG, border: `1px solid ${BORDER}` }}
                >
                  <p className="text-xs mb-3" style={{ color: MUTED }}>
                    {label}
                  </p>
                  <div className="space-y-2">
                    <div className="h-2 rounded-full" style={{ background: BORDER, width: "80%" }} />
                    <div className="h-2 rounded-full" style={{ background: BORDER, width: "55%" }} />
                    <div className="h-2 rounded-full" style={{ background: BLUE, width: "35%" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Guarantee ===== */}
      <section id="guarantee" className="max-w-4xl mx-auto px-6 pb-24">
        <div
          className="rounded-xl p-8 sm:p-12 text-center"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
        >
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            {GUARANTEE.headline}
          </h2>
          <p className="text-lg mx-auto max-w-xl mb-2" style={{ color: MUTED }}>
            {GUARANTEE.policy}
          </p>
          <p className="text-sm" style={{ color: MUTED }}>
            {GUARANTEE.windowDays}-day window. A standing support commitment,
            not a refund.
          </p>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section id="features" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <p className="text-sm font-medium mb-2" style={{ color: BLUE }}>
            Everything included
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            What you get
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TOOLS.map((tool) => (
            <div
              key={tool.id}
              className="rounded-xl p-6"
              style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
            >
              <div
                className="w-9 h-9 rounded-lg mb-4 flex items-center justify-center"
                style={{ background: BLUE + "22" }}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: BLUE }} />
              </div>
              <h3 className="font-medium mb-2">{tool.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Founder ===== */}
      <section
        className="border-y"
        style={{ borderColor: BORDER, background: SURFACE }}
      >
        <div className="max-w-4xl mx-auto px-6 py-20 grid md:grid-cols-[180px_1fr] gap-10 items-start">
          <Image
            src={FOUNDER.photo}
            alt={FOUNDER.name}
            width={180}
            height={225}
            className="rounded-xl object-cover mx-auto md:mx-0"
            style={{ aspectRatio: "4/5", objectPosition: "50% 22%" }}
          />
          <div>
            <p className="text-sm font-medium mb-2" style={{ color: BLUE }}>
              Founder
            </p>
            <h2 className="text-2xl font-semibold tracking-tight mb-1">
              {FOUNDER.name}
            </h2>
            <p className="text-sm mb-6" style={{ color: MUTED }}>
              {FOUNDER.credential}
            </p>
            <div className="space-y-4 leading-relaxed" style={{ color: MUTED }}>
              {FOUNDER.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Pricing ===== */}
      <section id="pricing" className="max-w-md mx-auto px-6 py-24 text-center">
        <div
          className="rounded-2xl p-8"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
        >
          <p className="text-sm font-medium mb-4" style={{ color: BLUE }}>
            Founding member pricing
          </p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-2xl">{PRICE.currency}</span>
            <span className="text-6xl font-semibold tracking-tight">
              {PRICE.monthly}
            </span>
            <span className="text-lg mb-1" style={{ color: MUTED }}>
              /mo
            </span>
          </div>
          <p className="text-sm mb-6" style={{ color: MUTED }}>
            One plan. Everything included.
          </p>
          <a
            href="#"
            className="block w-full py-3.5 rounded-md font-medium text-sm mb-4"
            style={{ background: BLUE, color: "#fff" }}
          >
            Start {TRIAL.days}-Day Free Trial
          </a>
          <div
            className="h-1.5 rounded-full overflow-hidden mb-2"
            style={{ background: BORDER }}
          >
            <div
              className="h-full rounded-full"
              style={{ width: `${pct}%`, background: BLUE }}
            />
          </div>
          <p className="text-xs" style={{ color: MUTED }}>
            {remaining} of {SPOTS.total} founding spots left &middot;{" "}
            {SUPPORT_CHANNEL}
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold tracking-tight mb-6 text-center">
          Frequently asked questions
        </h2>
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              className="rounded-lg overflow-hidden"
              style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between text-left px-5 py-4"
              >
                <span className="text-sm font-medium">{faq.q}</span>
                <span style={{ color: BLUE }}>{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <p
                  className="px-5 pb-4 text-sm leading-relaxed"
                  style={{ color: MUTED }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t py-10" style={{ borderColor: BORDER }}>
        <div
          className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-4 text-xs"
          style={{ color: MUTED }}
        >
          <span>VibeLabs Agency</span>
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
    </div>
  );
}
