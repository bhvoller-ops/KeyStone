import Link from "next/link";

const DIRECTIONS = [
  {
    href: "/toolbox",
    name: "The Toolbox",
    kicker: "ASSIGNED DIRECTION",
    description:
      "A fully-stocked, foam-cut mechanic's tool chest — every drawer already holds the exact tool for one job. Engineering red, brushed steel, stenciled labels.",
  },
  {
    href: "/franchise",
    name: "The Franchise Territory Kit",
    kicker: "IMPECCABLE'S PICK",
    description:
      "A numbered franchise territory, handed to you — binder tabs, foil-stamped branding, a territory map of the 25 launch spots.",
  },
  {
    href: "/standard",
    name: "Standard SaaS",
    kicker: "STANDING EXIT",
    description:
      "The category default, executed at full craft — dark ground, one accent, no metaphor.",
  },
];

export default function DirectionPicker() {
  return (
    <main
      style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
      className="min-h-screen bg-neutral-100 text-neutral-900 flex items-center justify-center p-6"
    >
      <div className="max-w-3xl w-full">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-2">
          Preview — pick a direction
        </p>
        <h1 className="text-3xl font-semibold mb-8">
          VibeLabs Agency — three builds
        </h1>
        <div className="grid gap-4 sm:grid-cols-1">
          {DIRECTIONS.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="block rounded-xl border border-neutral-300 bg-white p-6 hover:border-neutral-900 transition-colors"
            >
              <p className="text-[11px] tracking-[0.15em] uppercase text-neutral-500 mb-1">
                {d.kicker}
              </p>
              <h2 className="text-xl font-semibold mb-2">{d.name}</h2>
              <p className="text-sm text-neutral-600">{d.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
