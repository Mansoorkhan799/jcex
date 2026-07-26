# SEO Strategy — AliExpress Tracking

## Goals

Preserve rankings and AdSense eligibility while migrating WordPress → Next.js.

## URL parity

Keep every ranking slug identical (no trailing-slash fights; Next handles both). Blog stays at `/category/blog` to match WordPress.

## On-page

- Exact title + meta description from WordPress on each page
- Canonical absolute URLs on `aliexpresstracking.net`
- Article + FAQ + Organization + WebSite JSON-LD
- Breadcrumbs on articles
- Image sitemap + HTML sitemap index (`/sitemap-index.xml`, alias `/sitemap_index.xml`)

## Content

Body copy lives in `src/content/*.md` — sync word-for-word from WordPress before launch.

## Cutover checklist

1. Verify Search Console property + keep `public/google*.html` verification file
2. Point DNS / hosting to Next.js
3. Submit `https://aliexpresstracking.net/sitemap-index.xml`
4. Switch tracking from `TRACKING_WP_AJAX_URL` to your 17Track/TrackingMore key
5. Set `NEXT_PUBLIC_ADSENSE_CLIENT` and confirm ads render
6. Monitor GSC coverage for 404s / soft soft-404s
