# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (React), TypeScript, deployed on Vercel. Chosen as the default
framework for a production-grade, Vercel-hosted marketing/SaaS site — flag if
a different framework is preferred. This build is intended to **eventually
replace** the live deployment currently served from `index.html` in
`github.com/bhvoller-ops/vibelabs-agency` (a plain-HTML export). This is a
genuine ground-up rebuild, not a port of that markup.

## Users

People who are overwhelmed by technology and feel left out of the AI/business
opportunity, but desperately want to start a business. Most are **not**
complete beginners — they have already tried courses, watched videos, and
attempted other paths, and got stuck anyway. They are shopping for something
concrete and done-for-them, not another course to sit through.

## Product Purpose

VibeLabs Agency gives members a step-by-step, easy-to-follow, done-for-you
AI-powered SaaS business: a fully branded, white-label AI-powered agency in
the member's own name. Success means a member launches their branded agency
and lands paying clients using the tools VibeLabs provides, rather than
figuring it out alone.

**Premium relaunch scope (this rebuild):** the site moves from an
early-access waitlist to immediate self-serve checkout, and drops tiered
pricing for a single offer. This is being rebuilt to a premium, enterprise-
grade craft bar ("Fortune 500"-level polish was the brief's framing for
craft/ambition, not a literal claim about company size or status — VibeLabs
remains the same founder-led, early-stage product; no copy should claim
Fortune 500 status, public-company status, or a scale VibeLabs does not have).

## Positioning

"Get One Client Guaranteed. Or You Don't Pay." is a **real, honored
guarantee**, not marketing framing — it is backed by concrete tooling VibeLabs
gives every member: a lead finder, prospect qualification and auditing tools,
and prebuilt AI-integrated websites used as lead magnets, followed by an
upsell path. The mechanism a competitor can't truthfully copy is that the
guarantee is delivered through owned tooling, not chance or effort alone.

## Direction Status

**Chosen: "The Franchise Territory Kit"** (`/franchise` route) — confirmed by
the user over the assigned "Toolbox" direction and the "Standard SaaS"
standing exit. The other two builds remain in the codebase at `/toolbox` and
`/standard` for reference/comparison, not deleted, pending a decision on
whether to remove them.

The chosen direction's **marketing-page hero and copy were revised** to a
centered, standard-SaaS-style hero (badge, big centered claim, centered CTA,
a below-fold "license summary" preview panel) rather than the original
opened-binder-spread-plus-territory-map hero — same franchise visual
language (cream/green/gold, Bitter/Archivo), different composition. The
literal territory-map device and the word "territory" were removed from the
marketing site entirely per the user's direction (see Product Principles).

## Operating Context

A member's white-label agency runs on:
- a fully branded (in the member's own name) AI-powered agency shell,
  including a rebrandable client-facing product/platform (logo, name, and
  client portal in the member's own brand — exact rebrandable product name
  and scope is open, see below),
- a lead finder and prospect qualification/auditing toolset for prospecting,
- prebuilt, AI-integrated websites deployed as lead magnets,
- an upsell sequence to grow client accounts after the first win,
- fulfillment SOPs / step-by-step implementation playbooks and a prebuilt
  automation/workflow library, so a non-technical member can actually deliver
  work to their own clients (implied by "done-for-you," not previously
  written down explicitly),
- a post-purchase onboarding sequence (welcome flow, setup/kickoff step,
  dashboard access) now that checkout is immediate rather than a waitlist.

The marketing site itself moves from **early-access / waitlist** to
**immediate self-serve checkout** with a 7-day free trial.

## Capabilities and Constraints

- **Single price:** $97/mo, one offer, no tiers (Builder/Agency/White-label
  tiers from the prior relaunch are retired).
- **14-day free trial** on checkout. A card is required at signup but is
  **not charged** until the trial converts.
- **Founding-member framing on a hard cap:** 25 total spots for launch (down
  from the prior 100/75 scheme), "spots filling fast" urgency. This cap is
  real and must be tracked/updated the same way the prior `SPOTS_CLAIMED`
  counter was — manually, not wired to a live signup count without asking.
- **Guarantee, exact terms:** one client landed within **60 days** of joining.
  If not met by day 60, the member keeps receiving **extended 1:1 support at
  no extra charge until it is met** — this is not a refund policy, it is a
  standing-support commitment. State it exactly this way in copy; do not
  imply a money-back refund.
- **Support channel:** ticket-only, plus a phone contact number and an
  on-page chat/lead-capture widget added on the `/franchise` build:
  **(470) 376-9804**, shown in the footer and inside the widget. No
  community platform (Discord/Slack/Circle) exists for this launch.
- **The on-page chat widget's lead-capture form is UI-only right now** —
  it shows a "we'll be in touch" confirmation but is not wired to any real
  backend, CRM, or notification. Must be connected to a real intake
  (email service, CRM, or ticketing system) before this replaces the live
  site.
- **Rebrandable product name is open/undecided:** members white-label
  "something" as their own agency/platform — the specific product/platform
  being rebranded has no name yet. Use a clearly-marked placeholder in any
  draft copy until named.
- Legacy trust/legal pages (`privacy.html`, `terms.html`, `earnings.html`)
  existed on the prior site and must be carried forward with real content in
  the new build, not left as dead links.
- **"Territories" are a product-structure concept, not a marketing device.**
  The user explicitly moved this from the landing page (no territory map, no
  "territory" language in marketing copy — real scarcity still shown as
  plain "spots") into the **post-signup dashboard/onboarding flow**, to give
  new members structure and avoid chaos (e.g. assigning each member a
  territory/niche focus as part of onboarding). No dashboard or onboarding
  app exists yet in this project — this is recorded as a **future scope
  item**, not built. Do not silently drop it from later planning, and do not
  build a dashboard for it without the user asking.

## Brand Commitments

- **Cassey Wallang's founder bio is reinstated** (reversing the earlier
  "drop it" decision) as the site's primary trust mechanism, alongside the
  guarantee and tooling. Confirmed fact: **20 years in IT**. No other
  specific claims (past employers, client counts, revenue figures,
  certifications) are on hand — bio copy is written for warmth, empathy, and
  credibility from that one confirmed fact plus the founder's evident stake
  in members' outcomes, not from invented specifics. Any additional real
  detail (photo, exact background, a direct quote) should be supplied by the
  user and swapped in.
- **No fabricated social proof of any kind** (testimonials, activity toasts,
  quote walls, customer logos, review scores) — this constraint carries
  forward unchanged. The founder bio is real-person trust, not a substitute
  for banning invented third-party proof.

## Evidence on Hand

- `assets/founder-cassey.jpg` (real founder portrait, 4:5 crop),
  `assets/ai-workspace.png`, `assets/favicon.svg` exist in the prior project
  (`C:\Projects\VibeLabsAgency\assets`) and are available to reuse — the
  founder photo is back in scope per the reinstated bio above.
- No real testimonials, case studies, live activity data, or aggregate
  member statistics exist yet — future work must not invent them.

## Product Principles

1. Meet people who already tried and failed elsewhere with something
   concrete and done-for-them, not another course.
2. The client guarantee is delivered through owned tooling (lead finder,
   qualification, auditing, prebuilt lead-magnet sites) — keep it provably
   real in copy and UI, never vague, and never overstate terms that aren't
   confirmed.
3. White-label first: the agency and platform a member presents to their own
   clients is branded as theirs, not VibeLabs'.
4. Honesty over hype: no fabricated social proof and no fabricated company
   scale/status; premium craft communicates quality, not invented claims.
5. Real, hard scarcity (25 launch spots) stays truthful and manually
   verifiable, same discipline as the prior seat-cap counter.

## Accessibility & Inclusion

No formal accessibility standard has been specified. The audience explicitly
skews non-technical and describes itself as "overwhelmed by tech" — copy and
UI should default to plain language, low jargon, and a confidence-building
tone rather than assuming technical fluency. A premium visual upgrade should
not come at the cost of this plain-language, non-intimidating voice.
