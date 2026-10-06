import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: false,
  // Render <title>, meta description, canonical and Open Graph tags in the
  // initial <head> for every user agent. Next 15 streams metadata into <body>
  // by default for most UAs (Googlebot included), where Google ignores
  // rel=canonical and Lighthouse reports a missing meta description.
  htmlLimitedBots: /.*/,
  allowedDevOrigins: ['*.localhost', 'localhost'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    const xml = [
      { key: 'Content-Type', value: 'application/xml; charset=utf-8' },
      { key: 'Cache-Control', value: 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
    ];
    return [
      { source: '/sitemap.xml', headers: xml },
      { source: '/sitemap-index.xml', headers: xml },
      { source: '/_sitemaps/:file*', headers: xml },
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
      {
        source: '/sitemap.xml',
        has: [{ type: 'host', value: 'oahu.mychef-hawaii.com' }],
        destination: '/_sitemaps/oahu.xml',
      },
      {
        source: '/sitemap.xml',
        has: [{ type: 'host', value: 'maui.mychef-hawaii.com' }],
        destination: '/_sitemaps/maui.xml',
      },
      {
        source: '/sitemap.xml',
        has: [{ type: 'host', value: 'kauai.mychef-hawaii.com' }],
        destination: '/_sitemaps/kauai.xml',
      },
      {
        source: '/sitemap.xml',
        has: [{ type: 'host', value: 'bigisland.mychef-hawaii.com' }],
        destination: '/_sitemaps/bigisland.xml',
      },
      { source: '/sitemap.xml', destination: '/_sitemaps/hub.xml' },
      { source: '/sitemap-index.xml', destination: '/_sitemaps/index.xml' },
    ];
  },
};

export default nextConfig;
