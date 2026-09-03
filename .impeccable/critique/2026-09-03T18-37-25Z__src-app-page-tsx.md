---
target: src/app/page.tsx (VibeLabs Agency home page)
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Projects\\VibeLabs-v2\\src\\app\\page.tsx"
target_fingerprint: "sha256:284ba23e701ae6e7a54e17625ebd5c0bfa646dbf204360eeb32c45868a974157"
target_path: "C:\\Projects\\VibeLabs-v2\\src\\app\\page.tsx"
timestamp: 2026-09-03T18-37-25Z
slug: src-app-page-tsx
---
Method: dual-agent (A: design-review sub-agent · B: detector/browser-evidence sub-agent)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Form and FAQ feedback are clear; header nav's active tab never updates with scroll. |
| 2 | Match System / Real World | 3 | Core copy is plain-language; the legal vocabulary layer ("Clause," "Schedule") is never explained on-page. |
| 3 | User Control and Freedom | 3 | FAQ/chat close cleanly; CTAs leave the tab with no way back but browser Back. |
| 4 | Consistency and Standards | 2 | Visual system is consistent; the "Overview" tab stays lit for the entire session regardless of actual section — persistent, not occasional. |
| 5 | Error Prevention | 3 | Lead form has type/required/honeypot; no destructive actions exist to guard. |
| 6 | Recognition Rather Than Recall | 3 | Nothing hidden behind icons; mobile nav has no collapse affordance (flagged unresolved in the surface brief itself). |
| 7 | Flexibility and Efficiency of Use | n/a | Persuade-mode landing page — no power-user workflow to accelerate. |
| 8 | Aesthetic and Minimalist Design | 3 | Clean and purposeful; the 4 tools appear twice in one scroll (teaser, then full list) with near-identical names. |
| 9 | Error Recovery | 3 | Lead-form failure shows plain text with a phone-call fallback. |
| 10 | Help and Documentation | n/a | Landing page; FAQ + phone + chat serve this surface's help role. |
| **Total** | | **23/32** | **72% — Good** |

## Design Specificity Verdict

**Pass — genuinely product-specific.** The page commits to a "license kit" vocabulary throughout: binder-tab nav, cream/forest-green/gold palette, numbered "Clause 1," "Schedule A/B/C," a dashed-circle "Guarantee Certified" stamp, and a ledger number (`No. 0010`) wired to real `SPOTS.claimed` state, not a static prop. No fabricated social proof anywhere in the file or `content.ts` — the founder bio uses only the one confirmed fact (20 years in IT). One documented tradeoff: per the direction contract, the hero was deliberately revised to a centered, standard-SaaS composition so "the promise lands before the metaphor does" — meaning the page's distinctiveness is back-loaded past the fold, by design.

**Deterministic scan**: `detect.mjs --json` on the source returned **zero findings** (exit 0). The live-rendered-page overlay found **~27–31 anti-pattern instances** across 8 rule categories (contrast, undersized text, line-length, heading rhythm, glow/shadow patterns, kicker placement, em-dash frequency) — a real gap between the two detection paths: the static scanner can't compute rendered contrast ratios, real character-per-line counts, or actual shadow/border pixel values from source text alone. The browser-based findings are the more complete signal for this rule set; "CLI clean" should not be read as "page clean."

**Visual overlays**: no persistent overlay was left in the browser — the live-server used for the overlay pass was started and stopped within Assessment B's own run, per the skill's cleanup requirement. Findings are reported below from its console output, not from a still-visible overlay.

## Overall Impression

A distinctive, disciplined, well-restrained landing page that earns its "license kit" concept rather than wearing it as decoration — and one real correction came out of this run: Assessment A flagged the chat widget's lead-capture as a P1 honesty problem based on `PRODUCT.md` saying it was still UI-only. It isn't — it was wired to real email + WhatsApp notifications earlier tonight and the doc was simply never updated. **Fixed during this critique run** (`PRODUCT.md` corrected, committed). The two real, still-open problems worth fixing are more structural than cosmetic: the signature binder-tab nav doesn't actually track scroll position (undermining the one interaction meant to carry "document authority"), and a systemic contrast failure on the gold eyebrow/label text used in nearly every section.

## What's Working

1. **A fully committed, product-specific system** — palette, type pairing, numbered clauses/schedules, and state that's actually real (the ledger number reads live `SPOTS.claimed`), applied consistently in every section.
2. **The guarantee clause is simultaneously persuasive and exactly compliant** with `PRODUCT.md`'s mandated wording ("not a refund... standing support commitment") — legally accurate and scannable at once.
3. **Real engineering care under the hood**: a properly hidden honeypot, a documented reduced-motion fallback, and (as of this session) a real, notification-backed lead-capture endpoint — the polish isn't only visual.

## Priority Issues

**[P1] Header nav's active tab never reflects actual scroll position**
- **What**: `TABS.map` hardcodes the first tab (Overview) as permanently active — there's no scroll-spy. Scrolling into Guarantee, What You Get, or FAQ never updates the highlight.
- **Why it matters**: This is the page's signature interaction device — binder tabs signaling document structure/authority — and it reads wrong for nearly the entire time a visitor spends on the page after the first scroll.
- **Fix**: Add an `IntersectionObserver` per section, mirroring the `useScrollReveal` pattern already in the file, to toggle the active tab as sections cross the viewport.
- **Suggested command**: `/impeccable harden`

**[P1] Gold eyebrow/label text fails WCAG AA contrast — systemic, not isolated**
- **What**: `GOLD` (`#A9812F`) at 10–11px on `CREAM`/`CREAM_DARK`/`GREEN_DEEP` measures 2.7:1–4.2:1 (need 4.5:1) on "Schedule A," "Schedule B," "Schedule C," "Clause 1," and "Included" — the most-repeated label pattern on the page, appearing in nearly every section.
- **Why it matters**: A systemic failure on the labels specifically meant to carry "legal-document authority" undercuts them being readable at all for many visitors.
- **Fix**: Darken the on-light gold to a deeper bronze until it clears 4.5:1, or switch these specific labels to `INK` text with a gold accent mark instead of gold text.
- **Suggested command**: `/impeccable harden`

**[P2] "What You Get" proof panel can render visibly blank on fast scroll — a regression risk from tonight's animate pass**
- **What**: Reproduced live: a fast scroll past the panel and back up can land on a fully-in-viewport panel with empty tile boxes — the `IntersectionObserver` reveal hadn't fired despite the content being on-screen.
- **Why it matters**: Per the direction contract this panel is explicitly "the hero's proof beat" — any scroll pattern that can leave it blank works against the page's core persuasion structure at the worst possible moment.
- **Fix**: Lower the reveal threshold/tighten `rootMargin` for this panel specifically, or check on mount for elements already in viewport instead of relying purely on the observer's first fire.
- **Suggested command**: `/impeccable harden`

**[P2] Chat-form inputs have no accessible labels; the pricing section has no heading**
- **What**: The email/message chat-widget inputs rely on `placeholder` alone (no `label`/`aria-label`); the pricing block (`id="terms"`) has no `<h2>`, unlike every other major section.
- **Why it matters**: A screen-reader user navigating by heading — a primary strategy — can skip the price entirely, on a page whose stated audience is explicitly non-technical and needs clarity, not gaps.
- **Fix**: Add `htmlFor`/`id`-linked (visually-hidden if needed) labels to both inputs; wrap the price line in an `<h2>`.
- **Suggested command**: `/impeccable harden`

**[P3] "Included" tile labels render at 10px, below the page's own 11px floor used everywhere else**
- **What**: The 4 tool-teaser tiles' "Included" labels measure 10px — smaller than the 11px eyebrow size used consistently elsewhere on the page.
- **Why it matters**: A small, easy, purely-mechanical inconsistency in an otherwise disciplined type scale.
- **Fix**: Bump to 11px to match the rest of the eyebrow/label system.
- **Suggested command**: `/impeccable typeset`

## Persona Red Flags

**Jordan (Confused First-Timer)**: The legal/franchise vocabulary — "Clause 1," "Schedule A/B/C," "Signed & Issued By," ledger number "No. 0010" — is never explained anywhere on the page. For an audience `PRODUCT.md` itself describes as having "already tried courses... and got stuck," an unexplained legal metaphor risks reading as one more confusing hurdle, cutting against the site's own stated "plain language, low jargon" principle.

**Riley (Deliberate Stress Tester)**: Fast-scrolling straight past the hero reproduces the blank "What You Get" tiles bug above. Riley would also catch the header nav asserting "Overview" is active no matter where they've actually scrolled — the UI claiming something that isn't true is exactly this persona's failure mode.

**Casey (Distracted Mobile User)** — *caveat: drawn from source-code reading, not a verified mobile screenshot; the resize tool used in this environment did not actually change what was rendered, confirmed by querying `window.innerWidth` mid-test and getting the desktop value back.* The header's "Start Your Trial" CTA is `hidden sm:inline-block` — it disappears entirely below the `sm` breakpoint, leaving only the 4 anchor tabs with no collapse/hamburger handling (the direction brief itself lists this as unresolved). The "Guarantee Certified" stamp is also `hidden sm:flex` — mobile visitors lose that trust visual entirely.

## Minor Observations

- Body copy runs 100–142 characters/line in several paragraphs (detector-measured) — long for a self-described "overwhelmed by tech" audience that benefits from short, scannable lines.
- Two headings (`What You Get`, `Frequently Asked`) have 0px space above / 24–40px below, reading as bound to the block above rather than introducing the one below.
- 14 em-dashes across the page's body text — stylistic, not a defect, but worth a pass if a broader copy edit ever happens.
- The detector's `dark-glow` (gold glow on 2 elements) and `gpt-thin-border-wide-shadow` findings may well be intentional brand choices on a gold/dark palette rather than template-generic patterns — worth a visual gut-check, not an automatic fix. Same caveat on `kicker-above-heading` (2 instances) — a common, often-deliberate editorial pattern; likely over-triggering at just 2 instances.
- The 4 tools are shown twice in one scroll session (teaser tiles, then the full "Schedule A" list) with near-identical names — a teaser→detail pattern that reads as repetition in quick succession.
- The founder photo is small (200px) with a tight, top-heavy crop — undersells the one piece of real social proof `PRODUCT.md` explicitly reinstated as "the site's primary trust mechanism."
- "Partner With Us" hands off to a different app/domain in the same tab with no external-link visual cue — a click meant for exploration can strand a visitor off the persuasion page.
- No CTA appears between the FAQ and the footer — a visitor persuaded by the FAQ lands on a bare administrative footer and must scroll back up to convert (peak-end concern).
- The guarantee copy never explicitly states "delivered through the tools you just saw above" — the page *order* implies the connection, but `PRODUCT.md` calls that link out as the one thing a competitor can't truthfully copy, and the copy doesn't say it outright.

## Questions to Consider

- The hero is deliberately generic-SaaS by design brief — does the license-kit metaphor need to survive contact with the fold, or is it fine that it only reveals itself after the first scroll?
- Should the guarantee clause explicitly say "delivered through the tools above" to state the one differentiator `PRODUCT.md` says a competitor can't truthfully copy?
- If a visitor reads all the way to the FAQ and is persuaded there, should the FAQ or footer carry one more close?
