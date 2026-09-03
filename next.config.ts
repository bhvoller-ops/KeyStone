import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /franchise's content moved to the root route (see src/app/page.tsx) so
  // the real domain serves the actual offer, not a dev-only picker screen.
  // This keeps any old /franchise link or bookmark working.
  async redirects() {
    return [
      {
        source: "/franchise",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
