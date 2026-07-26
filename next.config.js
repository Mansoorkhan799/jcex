/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s.trackingmore.com",
      },
      {
        protocol: "https",
        hostname: "jcextracking.net",
      },
    ],
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 90, 100],
  },

  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/blog", destination: "/category/blog", permanent: true },
      {
        source: "/aliexpress-tracking-shows-no-updates-yet",
        destination: "/jcex-tracking-shows-no-updates-yet",
        permanent: true,
      },
      {
        source: "/aliexpress-tracking-not-updating",
        destination: "/jcex-tracking-shows-no-updates-yet",
        permanent: true,
      },
      {
        source: "/jcex-tracking-not-updating",
        destination: "/jcex-tracking-shows-no-updates-yet",
        permanent: true,
      },
      {
        source: "/how-to-track-your-aliexpress-order-in-2026",
        destination: "/how-to-track-your-jcex-order-in-2026",
        permanent: true,
      },
      {
        source: "/how-to-track-your-aliexpress-order-with-aliexpresstracking-2025-guide",
        destination: "/how-to-track-your-jcex-shipment-guide",
        permanent: true,
      },
      {
        source: "/aliexpress-shipping-methods-guide",
        destination: "/jcex-shipping-methods-guide",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      // WordPress Yoast-style sitemap alias
      { source: "/sitemap_index.xml", destination: "/sitemap-index.xml" },
      { source: "/post-sitemap.xml", destination: "/index.xml" },
      { source: "/page-sitemap.xml", destination: "/index.xml" },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://www.googletagservices.com https://adservice.google.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://pagead2.googlesyndication.com https://api.17track.net https://api.trackingmore.com https://jcextracking.net",
              "frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self' mailto:",
            ].join("; "),
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*.webp",
        headers: [{ key: "Cache-Control", value: "public, max-age=3600, must-revalidate" }],
      },
    ];
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
