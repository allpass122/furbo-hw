import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: 'images.dog.ceo' }, { hostname: 'dog.ceo' }],
  },
};

export default nextConfig;
