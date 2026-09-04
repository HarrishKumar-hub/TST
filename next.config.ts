import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/TST" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,   // Ensures _next/static JS/CSS loads from /TST/_next/
  images: {
    unoptimized: true,     // Required for static export
  },
};

export default nextConfig;
