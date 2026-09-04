// Shared product truth for all three preview directions.
// Facts only — no invented stats, testimonials, or claims. See PRODUCT.md.

export const PRICE = {
  monthly: 97,
  currency: "$",
};

export const TRIAL = {
  days: 14,
  cardRequired: true,
  chargedUpfront: false,
};

export const GUARANTEE = {
  headline: "Land Your First Client. Guaranteed.",
  windowDays: 60,
  // Exact policy language — not a refund. State it this way everywhere.
  policy:
    "If you haven't landed a paying client within 60 days, we don't walk away — you get free, extended 1:1 support until you do.",
  short: "One client in 60 days, or free 1:1 support until you get one.",
};

// SPOTS_CLAIMED is a manual placeholder, same convention as the prior site:
// the owner updates this by hand as real signups come in. Do not wire to a
// live counter without asking.
export const SPOTS = {
  total: 25,
  claimed: 9,
};

export const SUPPORT_CHANNEL = "Ticket-based support" as const;

export const FOUNDER = {
  name: "Cassey Wallang",
  credential: "20 years in IT",
  photo: "/assets/founder-cassey.jpg",
  bio: [
    "I spent 20 years in IT — long enough to watch almost every “revolutionary” technology come and go, and to know which ones actually change what's possible for someone starting from zero.",
    "AI is the first one I've seen do that for people with no coding background. I kept meeting people who wanted this badly, tried to figure it out alone from courses and videos, and got stuck anyway — not from lack of effort, but because nobody handed them the actual tools.",
    "So that's what VibeLabs is. Not another course. The tools, the client-getting system, and the support I wish someone had handed me twenty years ago.",
  ],
};

// The rebrandable client-facing product/platform has no confirmed name yet
// (open item in PRODUCT.md). Referred to generically until named.
export const PLATFORM_LABEL = "your white-label AI agency";

// What's actually rebranded, stated precisely rather than left implicit —
// added in response to real user feedback ("what is being white-labeled?
// explain exactly what the person is applying for"). The platform itself
// (WebGenie) is real, confirmed, and already built in the sibling project;
// what's rebranded is specifically the client-facing output, not the
// member's own login dashboard — see CLAUDE.md §2s Phase 4 in the app repo.
export const WHITE_LABEL = {
  platformName: "WebGenie",
  headline: "One Platform. Your Name on Everything Your Clients See.",
  // What the member gets, plainly:
  memberGets:
    "You run your agency from your own WebGenie dashboard — that part stays WebGenie, the same way a franchisee still uses the franchisor's back-office system.",
  // What the client sees, plainly — this is the actual product being sold:
  clientSees:
    "Every AI-powered website, embedded chat assistant, and lead-capture form your clients interact with carries your agency's name, logo, and colors. They never see \"WebGenie\" or \"VibeLabs\" anywhere.",
  deliverables: [
    "An AI-generated website built and branded in your agency's name",
    "An embedded AI chat assistant that answers questions and captures leads for your client, under your brand",
    "A lead-capture form on every site, routing straight into your own dashboard",
  ],
} as const;

// Referral/commission mechanism, stated honestly without a dollar figure —
// the exact commission amount for a VibeLabs-sourced referral isn't
// confirmed yet; the mechanism itself (flat fee per converted signup,
// tracked automatically, paid by hand) is real and already built in the
// sibling app repo's partner program.
export const REFERRAL = {
  headline: "Refer an Agency Owner. Earn When They Join.",
  body: "Know another agency owner, freelancer, or consultant who'd want this? Refer them and earn a commission the moment their subscription actually converts — tracked automatically against your own referral link, no spreadsheets. Commission terms are confirmed when you sign up as a partner and are paid out by hand, not automatically deducted from anything you owe.",
  ctaLabel: "Become a Partner",
} as const;

export const TOOLS = [
  {
    id: "lead-finder",
    name: "Lead Finder",
    description:
      "Surfaces businesses that are a real fit for AI-powered services in your target area — not a cold list, a qualified shortlist.",
  },
  {
    id: "qualifier",
    name: "Qualification & Audit Tool",
    description:
      "Runs an automated audit on each lead so you walk in already knowing exactly what they need — and can prove it in the first conversation.",
  },
  {
    id: "lead-magnet-sites",
    name: "Prebuilt AI-Integrated Websites",
    description:
      "Ready-made, AI-powered lead-magnet sites you deploy in minutes to turn interest into booked calls.",
  },
  {
    id: "upsell",
    name: "Upsell Path",
    description:
      "A built-in sequence for growing a first client into an ongoing account, so revenue doesn't stop at client one.",
  },
] as const;

export const FAQS = [
  {
    q: "What exactly am I getting for $97/month?",
    a: `Access to WebGenie, rebranded in your agency's name for every client that sees it — plus the ${TOOLS.length} tools above, the implementation playbooks to deliver client work without a technical background, and the 60-day client guarantee. See "Schedule A-1" above for exactly what's rebranded and what isn't.`,
  },
  {
    q: "How does the referral commission work?",
    a: "Refer another agency owner and you earn a flat commission the moment their subscription converts, tracked automatically against your own referral link. Exact terms are confirmed when you sign up as a partner and paid out by hand.",
  },
  {
    q: "How does the 14-day free trial work?",
    a: "You add a card to start, but you are not charged for 14 days. Cancel any time before then and you pay nothing.",
  },
  {
    q: "What does “one client guaranteed” actually mean?",
    a: GUARANTEE.policy,
  },
  {
    q: "Is there a community I get access to?",
    a: "Support is ticket-based. There is no public community or chat group attached to this launch.",
  },
  {
    q: "Why only 25 spots?",
    a: "This is a founding launch, not an evergreen offer — 25 is a hard cap, not a marketing device. Once they're gone, they're gone until the next opening.",
  },
] as const;

export const NAV_LINKS = [
  { href: "#guarantee", label: "Guarantee" },
  { href: "#tools", label: "What You Get" },
  { href: "#founder", label: "Founder" },
  { href: "#pricing", label: "Pricing" },
] as const;
