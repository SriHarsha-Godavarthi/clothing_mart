import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {protocol: 'https', hostname: 'fakestoreapi.com'},
      {protocol: 'https', hostname: 'fakestoreapiserver.reactbd.org'},
      {protocol: 'https', hostname: 'i.ibb.co'},
      {protocol: 'https', hostname: '**.amazonaws.com'},
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
  }
};

export default nextConfig;
