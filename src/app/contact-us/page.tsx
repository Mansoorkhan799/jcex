import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { BRAND, ROUTES, SITE_ORIGIN } from "@/lib/siteConfig";

const PAGE_URL = `${SITE_ORIGIN}${ROUTES.contact}`;
const PAGE_TITLE = "Contact Alano DT 6 Support Team | alanodt6.com.pk";
const PAGE_DESCRIPTION =
  "Contact the Alano DT 6 support team for app install help, wallet questions, or feedback about alanodt6.com.pk guides. Email support@alanodt6.com.pk.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "contact alano dt 6",
    "alano dt 6 support",
    "alanodt6 email",
    "alano dt 6 help",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function ContactUsPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      name: BRAND.name,
      url: SITE_ORIGIN,
      contactPoint: {
        "@type": "ContactPoint",
        email: BRAND.email,
        contactType: "Customer Support",
        areaServed: "PK",
        availableLanguage: ["English", "Urdu"],
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
      { "@type": "ListItem", position: 2, name: "Contact Us", item: PAGE_URL },
    ],
  };

  return (
    <>
      <Script id="contact-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <Script id="contact-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
          <li>
            <Link href={ROUTES.home} className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-white" aria-current="page">
            Contact Us
          </li>
        </ol>
      </nav>

      <section className="py-8 md:py-14 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Contact</span> <span className="text-[#FFA500]">Alano DT 6</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Questions about installing the app, funding your wallet, or one of our guides?
            Reach the team below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          <div className="bg-[#0A1029] rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center justify-center mb-4">
              <svg aria-hidden="true" className="w-14 h-14 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-center mb-2 text-white">Email Us</h2>
            <p className="text-center mb-4 text-gray-400">
              Send your question directly and we'll reply as soon as we can.
            </p>
            <div className="flex justify-center w-full min-w-0 overflow-hidden px-2">
              <a
                href={`mailto:${BRAND.email}`}
                aria-label={`Send email to ${BRAND.name} support`}
                className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-5 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl max-w-full min-w-0"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="break-all">{BRAND.email}</span>
              </a>
            </div>

            <div className="mt-8 space-y-3">
              <Link href={ROUTES.download} className="block bg-[#06091F] rounded-lg p-4 border border-gray-800 hover:border-accent transition-colors">
                <h3 className="font-semibold text-white text-sm">Install &amp; download help</h3>
                <p className="text-gray-400 text-xs mt-1">See the download guide →</p>
              </Link>
              <Link href={ROUTES.privacy} className="block bg-[#06091F] rounded-lg p-4 border border-gray-800 hover:border-accent transition-colors">
                <h3 className="font-semibold text-white text-sm">Privacy Policy</h3>
                <p className="text-gray-400 text-xs mt-1">Read our privacy policy →</p>
              </Link>
              <Link href={ROUTES.about} className="block bg-[#06091F] rounded-lg p-4 border border-gray-800 hover:border-accent transition-colors">
                <h3 className="font-semibold text-white text-sm">About Alano DT 6</h3>
                <p className="text-gray-400 text-xs mt-1">Learn more about the platform →</p>
              </Link>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
