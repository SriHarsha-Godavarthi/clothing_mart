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
  }
};

export default nextConfig;
