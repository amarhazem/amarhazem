import type { NextConfig } from "next";

export default {
  allowedDevOrigins: ["storybook.amarhazem.localtest.me"],
  output: "standalone",
  reactStrictMode: true,
} as NextConfig;
