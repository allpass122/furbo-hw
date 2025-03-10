import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: 'images.dog.ceo' }],
  },
};

export default nextConfig;
