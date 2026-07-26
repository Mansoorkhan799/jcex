# AliExpress Tracking (aliexpresstracking.net)

Next.js rebuild of the ranked WordPress site at **https://aliexpresstracking.net** — same URLs and content, professional App Router UI, AdSense-ready.

## Stack

- Next.js 15 App Router + TypeScript
- Tailwind CSS + Outfit / Source Sans 3
- Markdown content in `src/content/`
- Tracking widget → `/api/track` (17Track, TrackingMore, or WP ajax proxy)

## Scripts

```bash
npm run dev
npm run build
npm start
```

## Environment

Copy `.env.example` to `.env.local` and set:

- `TRACKING_WP_AJAX_URL` — keep tracking working while WordPress is still live
- `TRACKING_API_KEY` + `TRACKING_PROVIDER` — after DNS cutover
- `NEXT_PUBLIC_ADSENSE_CLIENT` — your `ca-pub-…` ID
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — optional GA4

## URL map (preserved from WordPress)

| Path | Page |
|------|------|
| `/` | Home + tracker |
| `/category/blog` | Blog index |
| `/aliexpress-tracking-shows-no-updates-yet` | Article |
| `/aliexpress-tracking-not-updating` | Article |
| `/how-to-track-your-aliexpress-order-in-2026` | Article |
| `/how-to-track-your-aliexpress-order-with-aliexpresstracking-2025-guide` | Article |
| `/aliexpress-shipping-methods-guide` | Article |
| `/about-us` `/contact-us` `/privacy-policy` `/disclaimer` | Policy pages |

## Brand config

Edit `src/lib/siteConfig.ts` for domain, articles, FAQs, and image paths.
