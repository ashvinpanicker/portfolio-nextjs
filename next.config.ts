import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  trailingSlash: false,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default config;
