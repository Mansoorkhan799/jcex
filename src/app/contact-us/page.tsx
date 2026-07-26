import type { Metadata } from "next";
import ContentPageShell from "@/components/ContentPageShell";
import MarkdownContent from "@/components/MarkdownContent";
import ContactForm from "@/components/ContactForm";
import { getMarkdown, stripLeadingH1 } from "@/lib/content";
import { BRAND, ROUTES, SITE_ORIGIN } from "@/lib/siteConfig";

const PAGE_URL = `${SITE_ORIGIN}${ROUTES.contact}`;
const PAGE_TITLE = "Contact Us - JCEX Tracking";
const PAGE_DESCRIPTION = "Get in Touch with jcextracking.net";

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

export default function ContactPage() {
  const content = stripLeadingH1(getMarkdown("contact"))
    .replace(/\nName\n\nEmail\\\*\n\nMessage\\\*\n\nSubmit\n*/i, "\n\n")
    .replace(/\nName\n[\s\S]*?Submit\n*/i, "\n\n");

  return (
    <ContentPageShell title="Contact Us" description={PAGE_DESCRIPTION}>
      <MarkdownContent content={content} />
      <div className="mt-10 border-t border-slate-100 pt-8">
        <ContactForm />
      </div>
    </ContentPageShell>
  );
}
