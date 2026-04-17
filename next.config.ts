import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // Add your acop.co.ke domain here
      {
        protocol: 'https',
        hostname: 'www.acop.co.ke',
        port: '',
        pathname: '/**',
      },
      // Also allow local images (no pattern needed for local /public folder)
    ],
  },
};

export default nextConfig;