import type { NextConfig } from "next";

// Static export: `next build` writes plain HTML/CSS/JS to `out/`,
// which runs on GitHub Pages (staging) and on Hostinger (production) alike.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // The Next.js image optimizer needs a server; static hosts can't run it.
    unoptimized: true,
  },
};

export default nextConfig;
