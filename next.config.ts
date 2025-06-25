import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vlad-bykov-hq7d.vercel.app',
        port: '',
        pathname: '/api/images*',

      },
      {protocol: 'https', hostname: 'https://vlad-bykov-hq7d.vercel.app'}
    ],
  },
};

export default nextConfig;
