import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Optional: Add basePath if your site is not served from the root
  // basePath: '/personal-site', // Uncomment and update if needed
  // Optional: Add assetPrefix if your assets are hosted on a CDN
  // assetPrefix: '/personal-site', // Uncomment and update if needed
};

export default nextConfig;
