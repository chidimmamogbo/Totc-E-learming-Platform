import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
};
module.exports = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.dummyjson.com, images/unsplash.com" }],
  },
};
export default nextConfig;
