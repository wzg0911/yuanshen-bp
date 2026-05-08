import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/yuanshen-bp',
  assetPrefix: '/yuanshen-bp/',
};

export default nextConfig;
