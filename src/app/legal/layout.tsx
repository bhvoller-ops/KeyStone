import type { ReactNode } from "react";
import { Bitter, Archivo } from "next/font/google";
import { CREAM, CREAM_DARK, INK, GREEN, GREEN_DEEP, GOLD, PHONE_DISPLAY, PHONE_TEL, LEGAL_PAGES } from "./legal-theme";

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

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${serif.variable} ${label.variable} min-h-screen`}
      style={{ fontFamily: "var(--font-serif)", background: CREAM, color: INK }}
    >
      <header className="sticky top-0 z-50" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto px-6 pt-5 pb-4 flex items-center justify-between">
          <a
            href="/franchise"
            className="text-sm tracking-[0.08em] uppercase"
            style={{ fontFamily: "var(--font-label)", color: GREEN, fontWeight: 700 }}
          >
            ← VibeLabs Agency
          </a>
          <nav className="hidden sm:flex gap-5">
            {LEGAL_PAGES.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="text-xs tracking-[0.08em] uppercase hover:opacity-70"
                style={{ fontFamily: "var(--font-label)", color: INK + "99", fontWeight: 600 }}
              >
                {p.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="h-[3px]" style={{ background: GREEN }} />
      </header>

      <div className="max-w-3xl mx-auto px-6">
        <div
          className="mt-8 rounded-md px-5 py-4 text-sm leading-relaxed"
          style={{ background: CREAM_DARK, border: `1px solid ${GOLD}55` }}
        >
          <span
            className="block text-[11px] tracking-[0.12em] uppercase mb-1"
            style={{ fontFamily: "var(--font-label)", color: GOLD, fontWeight: 700 }}
          >
            Working draft — pending legal review
          </span>
          <span style={{ color: INK + "cc" }}>
            This page is a good-faith draft written from VibeLabs Agency&rsquo;s actual offer terms.
            It is scheduled for review by a licensed attorney before it is treated as final or
            binding. Bracketed items like{" "}
            <code className="text-[13px]" style={{ background: CREAM, padding: "1px 5px", borderRadius: 4 }}>
              [ ]
            </code>{" "}
            mark facts that still need to be supplied or confirmed.
          </span>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-12">{children}</main>

      <footer className="mt-16" style={{ background: GREEN_DEEP, color: CREAM + "88" }}>
        <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between gap-4 text-xs">
          <div className="flex flex-col gap-1.5">
            <span style={{ fontFamily: "var(--font-label)" }}>VIBELABS AGENCY</span>
            <a href={`tel:${PHONE_TEL}`} className="hover:text-white w-fit">
              Call {PHONE_DISPLAY}
            </a>
          </div>
          <div className="flex gap-5">
            {LEGAL_PAGES.map((p) => (
              <a key={p.href} href={p.href} className="hover:text-white">
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
