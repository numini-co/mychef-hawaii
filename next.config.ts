import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: false,
  allowedDevOrigins: ['*.localhost', 'localhost'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      { source: '/sitemap.xml', destination: '/sitemap-xml' },
      { source: '/sitemap-index.xml', destination: '/sitemap-index' },
    ];
  },
};

export default nextConfig;
