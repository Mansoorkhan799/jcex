import type { Metadata } from "next";
import ContentPageShell from "@/components/ContentPageShell";
import MarkdownContent from "@/components/MarkdownContent";
import { getMarkdown, stripLeadingH1 } from "@/lib/content";
import { BRAND, ROUTES, SITE_ORIGIN, SOCIAL } from "@/lib/siteConfig";

const PAGE_URL = `${SITE_ORIGIN}${ROUTES.disclaimer}`;
const PAGE_TITLE = "Disclaimer - JCEX Tracking";
const PAGE_DESCRIPTION = "Disclaimer for https://jcextracking.net/";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND.name,
    type: "website",
  },
};

export default function DisclaimerPage() {
  const content = stripLeadingH1(getMarkdown("disclaimer"));
  return (
    <ContentPageShell title="Disclaimer" description={PAGE_DESCRIPTION}>
      <MarkdownContent content={content} />
      <div className="mt-10 border-t border-slate-100 pt-8">
        <h2 className="font-display text-xl font-bold text-ink">Follow Us On</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {[
            { href: SOCIAL.facebook, label: "Facebook" },
            { href: SOCIAL.twitter, label: "Twitter" },
            { href: SOCIAL.instagram, label: "Instagram" },
            { href: SOCIAL.youtube, label: "YouTube" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 bg-paper px-4 py-2 text-sm font-semibold text-teal-800 transition hover:border-teal-300 hover:bg-teal-50"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </ContentPageShell>
  );
}
