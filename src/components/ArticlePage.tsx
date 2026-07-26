import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { PageBannerPattern } from "@/components/BoxPattern";
import MarkdownContent from "@/components/MarkdownContent";
import { FadeIn } from "@/components/motion/Motion";
import { getMarkdown, stripLeadingH1 } from "@/lib/content";
import { ARTICLES, BRAND, SITE_ORIGIN } from "@/lib/siteConfig";

type ArticleMeta = (typeof ARTICLES)[number];

export function articleMetadata(article: ArticleMeta): Metadata {
  const url = `${SITE_ORIGIN}/${article.slug}`;
  const metaTitle = article.metaTitle;
  return {
    title: { absolute: metaTitle },
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: metaTitle,
      description: article.description,
      url,
      siteName: BRAND.name,
      type: "article",
      publishedTime: article.date,
      images: [{ url: `${SITE_ORIGIN}${article.image}`, width: 512, height: 512, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: article.description,
      images: [`${SITE_ORIGIN}${article.image}`],
    },
  };
}

function GuideCardThumb({ src }: { src: string }) {
  return (
    <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-700">
      <PageBannerPattern opacity={0.45} />
      <span className="relative h-14 w-14 overflow-hidden rounded-xl shadow-md ring-1 ring-white/15">
        <Image src={src} alt="" width={56} height={56} className="h-full w-full object-cover" sizes="56px" />
      </span>
    </div>
  );
}

export default function ArticlePage({
  article,
  contentSlug,
}: {
  article: ArticleMeta;
  contentSlug?: string;
}) {
  const raw = getMarkdown(contentSlug || article.slug);
  const content = stripLeadingH1(raw);
  const url = `${SITE_ORIGIN}/${article.slug}`;
  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: [`${SITE_ORIGIN}${article.image}`],
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Organization", name: BRAND.name, url: SITE_ORIGIN },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: { "@type": "ImageObject", url: `${SITE_ORIGIN}/images/jcex-tracking-logo.webp` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_ORIGIN}/category/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  return (
    <>
      <Script id={`article-schema-${article.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id={`breadcrumb-${article.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <article className="bg-paper">
        <header className="relative overflow-hidden border-b border-navy-900/10 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-700 text-white">
          <PageBannerPattern />
          <div className="relative mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
            <nav className="mb-5 text-sm text-white/70" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/category/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="line-clamp-1 text-white/90">{article.title}</li>
              </ol>
            </nav>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
              Tracking guide
            </p>
            <h1 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl md:leading-tight">
              {article.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/80">
              <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/20">
                <Image
                  src={article.image}
                  alt=""
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                  priority
                />
              </span>
              <p>
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="mx-2">·</span>
                <span>{BRAND.name}</span>
              </p>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
          <MarkdownContent content={content} />
        </div>

        {related.length > 0 && (
          <aside className="border-t border-slate-200 bg-white py-12 md:py-14">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <FadeIn>
                <p className="section-kicker">Keep reading</p>
                <h2 className="font-display text-2xl font-bold text-ink">Related guides</h2>
              </FadeIn>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((a, i) => (
                  <FadeIn key={a.slug} delay={0.05 * i}>
                    <Link
                      href={`/${a.slug}`}
                      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-paper transition hover:border-navy-200 hover:shadow-soft"
                    >
                      <GuideCardThumb src={a.image} />
                      <div className="p-4">
                        <h3 className="font-display text-base font-semibold text-ink group-hover:text-navy-800 line-clamp-2">
                          {a.title}
                        </h3>
                      </div>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </aside>
        )}
      </article>
    </>
  );
}
