import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the repository's supervised execution contract under project control.
  agentRules: false,
  poweredByHeader: false,
};

export default nextConfig;
