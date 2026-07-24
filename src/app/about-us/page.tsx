import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import { BRAND, IMAGES, ROUTES, SITE_ORIGIN } from "@/lib/siteConfig";

const PAGE_URL = `${SITE_ORIGIN}${ROUTES.about}`;
const PAGE_TITLE = "About Alano DT 6 | Dragon Tiger App for Pakistan";
const PAGE_DESCRIPTION =
  "About Alano DT 6 and alanodt6.com.pk: our mission to bring a fast, local-payment Dragon Tiger and casino experience to Android players across Pakistan.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "about alano dt 6",
    "alanodt6.com.pk",
    "alano dt 6 mission",
    "alano dt 6 team",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND.name,
    type: "website",
    images: [{ url: `${SITE_ORIGIN}${IMAGES.logo}`, width: 512, height: 512, alt: "Alano DT 6 logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_ORIGIN}${IMAGES.logo}`],
  },
};

const values = [
  {
    title: "Local-first payments",
    body: "JazzCash and EasyPaisa are built into the wallet from day one, so PKR deposits and withdrawals never depend on a foreign gateway.",
  },
  {
    title: "Straightforward interface",
    body: "Tables, wallet, and bonuses sit within a couple of taps. We keep menus shallow so new players don't need a tutorial to find what they need.",
  },
  {
    title: "Clear information, always",
    body: "Every guide on alanodt6.com.pk mirrors the real in-app flow — install steps, deposit screens, and withdrawal checks — so there are no surprises.",
  },
  {
    title: "Player safety",
    body: "We publish plain-language guidance on unknown sources, account verification, and responsible play limits alongside every feature guide.",
  },
];

export default function AboutUsPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: BRAND.name,
      url: SITE_ORIGIN,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_ORIGIN}${IMAGES.logo}`,
        width: 512,
        height: 512,
        ...imageObjectLicensing,
      },
      description:
        "Alano DT 6 is a Dragon Tiger and casino-style Android app for Pakistan with JazzCash and EasyPaisa wallet support.",
      contactPoint: {
        "@type": "ContactPoint",
        email: BRAND.email,
        contactType: "Customer Support",
        areaServed: "PK",
      },
    },
    about: {
      "@type": "Thing",
      name: "Mobile Casino Gaming Platform",
      description: "Android earning app hub focused on Dragon Tiger, slots, and card tables for Pakistani players.",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
      { "@type": "ListItem", position: 2, name: "About Us", item: PAGE_URL },
    ],
  };

  return (
    <>
      <Script id="about-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <Script id="about-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
          <li>
            <Link href={ROUTES.home} className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-white" aria-current="page">
            About Us
          </li>
        </ol>
      </nav>

      <section className="py-8 md:py-14 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">About</span> <span className="text-[#FFA500]">Alano DT 6</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            alanodt6.com.pk is the official guide hub for the Alano DT 6 Android app — built for
            players across Pakistan who want fast Dragon Tiger rounds and local wallet support.
          </p>
        </div>

        <div className="bg-[#0A1029] rounded-2xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center">
              <div className="relative w-[240px] h-[240px] rounded-lg overflow-hidden bg-[#06091F] flex items-center justify-center">
                <Image
                  src={IMAGES.logo}
                  alt="Alano DT 6 official logo"
                  title="Alano DT 6"
                  width={240}
                  height={240}
                  sizes="240px"
                  className="object-contain p-4 w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                <Link href={ROUTES.home} className="text-accent hover:underline font-semibold">
                  Alano DT 6
                </Link>{" "}
                brings Dragon Tiger tables, slot titles, and casino-style card games into a single
                lightweight APK. We run alanodt6.com.pk to give Pakistani players a trustworthy
                place to download the app and understand exactly how every screen works.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every guide on this site — install, deposit, withdraw, PC play — is written from
                the actual in-app flow, not guesswork, so you always know what to expect before
                you tap a button.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Our Mission</h2>
          <p className="text-lg md:text-xl text-white leading-relaxed text-center max-w-3xl mx-auto">
            Give Pakistani Android users a Dragon Tiger and casino app that respects their time
            and their money — quick sessions, JazzCash/EasyPaisa payments that just work, and
            documentation that doesn't hide the fine print.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500] text-center">What Guides Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-[#0A1029] rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-3">{v.title}</h3>
                <p className="text-gray-300 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0A1029] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Have Questions?</h2>
          <p className="text-gray-300 mb-6 text-lg">
            Reach out any time — we're happy to help with install issues, wallet questions, or
            feedback on our guides.
          </p>
          <Link
            href={ROUTES.contact}
            className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
