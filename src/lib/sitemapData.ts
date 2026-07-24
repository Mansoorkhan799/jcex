import { BLOG_POSTS, BRAND, IMAGES, ROUTES, SITE_ORIGIN } from "./siteConfig";

export type SitemapPage = {
  path: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
};

export type SitemapImage = {
  path: string;
  pagePath: string;
  title: string;
  caption: string;
};

const TODAY = "2026-07-25";

export const SITEMAP_PAGES: SitemapPage[] = [
  { path: ROUTES.home, lastmod: TODAY, changefreq: "daily", priority: 1.0 },
  { path: ROUTES.download, lastmod: TODAY, changefreq: "weekly", priority: 0.95 },
  { path: ROUTES.deposit, lastmod: TODAY, changefreq: "weekly", priority: 0.9 },
  { path: ROUTES.withdraw, lastmod: TODAY, changefreq: "weekly", priority: 0.9 },
  { path: ROUTES.pc, lastmod: TODAY, changefreq: "weekly", priority: 0.85 },
  { path: ROUTES.about, lastmod: TODAY, changefreq: "monthly", priority: 0.7 },
  { path: ROUTES.blog, lastmod: TODAY, changefreq: "weekly", priority: 0.8 },
  ...BLOG_POSTS.map((p) => ({
    path: `/blog/${p.slug}`,
    lastmod: p.date,
    changefreq: "monthly" as const,
    priority: 0.75,
  })),
  { path: ROUTES.contact, lastmod: TODAY, changefreq: "monthly", priority: 0.6 },
  { path: ROUTES.privacy, lastmod: TODAY, changefreq: "yearly", priority: 0.4 },
  { path: ROUTES.disclaimer, lastmod: TODAY, changefreq: "yearly", priority: 0.4 },
];

export const SITEMAP_IMAGES: SitemapImage[] = [
  {
    path: IMAGES.hero,
    pagePath: "/",
    title: `${BRAND.name} official app icon`,
    caption: `${BRAND.name} APK brand image for Pakistan Android download`,
  },
  {
    path: IMAGES.logo,
    pagePath: "/",
    title: `${BRAND.name} logo`,
    caption: `Official ${BRAND.name} logo used on alanodt6.com.pk`,
  },
  {
    path: IMAGES.gameInterface,
    pagePath: "/",
    title: `${BRAND.name} game interface`,
    caption: `${BRAND.name} mobile game interface screenshot`,
  },
  {
    path: IMAGES.games,
    pagePath: "/",
    title: `${BRAND.name} games lobby`,
    caption: `${BRAND.name} Dragon Tiger and casino games collection`,
  },
  {
    path: IMAGES.earnBonus,
    pagePath: "/",
    title: `${BRAND.name} bonuses`,
    caption: `${BRAND.name} bonus and rewards center screenshot`,
  },
  {
    path: IMAGES.addMoney,
    pagePath: ROUTES.deposit,
    title: `${BRAND.name} deposit screen`,
    caption: `${BRAND.name} JazzCash and EasyPaisa deposit interface`,
  },
  {
    path: IMAGES.withdraw,
    pagePath: ROUTES.withdraw,
    title: `${BRAND.name} withdraw screen`,
    caption: `${BRAND.name} withdraw money via JazzCash and EasyPaisa`,
  },
  {
    path: IMAGES.refer,
    pagePath: "/",
    title: `${BRAND.name} refer and earn`,
    caption: `${BRAND.name} referral program screenshot`,
  },
];

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const XML_HEADERS = {
  "Content-Type": "application/xml; charset=utf-8",
  "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
};
