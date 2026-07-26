import { SITE_ORIGIN } from "@/lib/siteConfig";

export function GET() {
  const body = `# robots.txt for jcextracking.net

User-agent: *
Allow: /
Disallow: /api/

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${SITE_ORIGIN}/sitemap-index.xml
Sitemap: ${SITE_ORIGIN}/sitemap_index.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
