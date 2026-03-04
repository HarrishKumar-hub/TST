import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // Static HTML export for GitHub Pages
  basePath: "/TST",        // Must match your GitHub repo name
  images: {
    unoptimized: true,     // Required for static export (no Image Optimization API)
  },
};

export default nextConfig;
