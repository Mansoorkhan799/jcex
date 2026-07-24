import { SITE_ORIGIN } from "@/lib/siteConfig";

export function GET() {
  const body = `# robots.txt for alanodt6.com.pk

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${SITE_ORIGIN}/sitemap-index.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
