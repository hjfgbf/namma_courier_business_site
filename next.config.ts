import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd38jyoj3z4z76f.cloudfront.net',
      },
    ],
  },
};

export default nextConfig;
