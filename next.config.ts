import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/api/images*',

      },
      {protocol: 'https', hostname: 'https://vlad-bykov-hq7d.vercel.app'}
    ],
  },
};

export default nextConfig;
