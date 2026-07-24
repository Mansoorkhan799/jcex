import Link from "next/link";
import { Metadata } from "next";
import { BRAND, ROUTES, SITE_ORIGIN, BLOG_POSTS } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `${BRAND.name} Blog - Guides, Safety, Bonuses & Tips 2026`,
  description:
    "Read the official Alano DT 6 blog: safety review, account & login guide, bonuses & VIP guide, and tips to play smarter in Pakistan.",
  keywords: [
    "alano dt 6 blog",
    "alano dt 6 guide",
    "alano dt 6 safety",
    "alano dt 6 bonuses",
    "alano dt 6 tips",
    "alanodt6 pakistan",
  ],
  alternates: {
    canonical: `${SITE_ORIGIN}${ROUTES.blog}`,
  },
  openGraph: {
    title: `${BRAND.name} Blog - Guides, Safety, Bonuses & Tips 2026`,
    description:
      "Safety review, account & login guide, bonuses & VIP guide, and tips to play smarter — everything for Alano DT 6 players in Pakistan.",
    url: `${SITE_ORIGIN}${ROUTES.blog}`,
    siteName: BRAND.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} Blog - Guides, Safety, Bonuses & Tips 2026`,
    description:
      "Safety review, account & login guide, bonuses & VIP guide, and tips to play smarter for Alano DT 6 players.",
  },
};

const READ_TIMES: Record<string, string> = {
  "is-alano-dt-6-safe-pakistan": "11 min read",
  "create-alano-dt-6-account-and-login": "9 min read",
  "alano-dt-6-bonuses-vip-guide": "13 min read",
  "alano-dt-6-tips-to-play-smarter": "10 min read",
};

const DISPLAY_DATES: Record<string, string> = {
  "is-alano-dt-6-safe-pakistan": "20 July 2026",
  "create-alano-dt-6-account-and-login": "21 July 2026",
  "alano-dt-6-bonuses-vip-guide": "22 July 2026",
  "alano-dt-6-tips-to-play-smarter": "23 July 2026",
};

export default function BlogIndexPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_ORIGIN}${ROUTES.blog}` },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0A1029]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 pt-8 text-sm text-gray-400">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href={ROUTES.home} className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-accent font-medium" aria-current="page">
            Blog
          </li>
        </ol>
      </nav>

      <header className="max-w-6xl mx-auto px-4 pt-6 pb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#FFA500]">
          {BRAND.name} Blog
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl">
          Safety reviews, account setup, bonuses, and smarter-play guides for {BRAND.name}{" "}
          players across Pakistan — updated for 2026.
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <div
              key={post.slug}
              className={`bg-secondary px-8 py-8 rounded-lg hover:shadow-lg transition-all border-2 ${
                index === 0
                  ? "border-[#FFA500]"
                  : "border-gray-700 hover:border-accent"
              }`}
            >
              {index === 0 && (
                <div className="inline-block bg-[#FFA500] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  ⭐ FEATURED
                </div>
              )}
              <h2 className="text-2xl font-bold mb-4 text-white">{post.title}</h2>
              <p className="text-gray-300 mb-4">{post.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <span>📅 {DISPLAY_DATES[post.slug]}</span>
                <span>•</span>
                <span>{READ_TIMES[post.slug]}</span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-accent hover:underline font-semibold"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
