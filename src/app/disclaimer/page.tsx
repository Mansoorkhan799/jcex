import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import { BRAND, ROUTES, SITE_ORIGIN } from "@/lib/siteConfig";

const PAGE_URL = `${SITE_ORIGIN}${ROUTES.disclaimer}`;
const PAGE_TITLE = "Disclaimer & Responsible Gaming | Alano DT 6";
const PAGE_DESCRIPTION =
  "Alano DT 6 disclaimer: 18+ only, no guaranteed income, risk warnings, and responsible gaming guidance for players in Pakistan.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND.name,
    type: "website",
  },
};

const points = [
  {
    title: "18+ Only",
    body: "Alano DT 6 is intended solely for users aged 18 and above. If you are under 18, do not download, install, or use the app.",
  },
  {
    title: "No Income Guarantee",
    body: "Alano DT 6 is a game of chance combined with elements of skill on certain tables. Nothing on alanodt6.com.pk or inside the app guarantees winnings, income, or a specific return on any deposit. Any figures, screenshots, or testimonials shown are illustrative and not a promise of results.",
  },
  {
    title: "Play With Money You Can Afford to Lose",
    body: "Only deposit amounts you can comfortably afford to lose. Treat gameplay as entertainment, not as a source of guaranteed income or a way to solve financial difficulty.",
  },
  {
    title: "Independent Third-Party App",
    body: "This website provides installation guides and information about the Alano DT 6 app. We are an independent information resource and are not liable for in-app outcomes, bonus terms changes, or third-party payment processor delays.",
  },
  {
    title: "Local Laws Apply",
    body: "You are responsible for confirming that using real-money gaming apps complies with the laws and regulations applicable in your specific location within Pakistan before you play.",
  },
  {
    title: "Accuracy of Guides",
    body: "We update our install, deposit, and withdrawal guides to match the app as closely as possible, but screens and steps can change with new app versions. Always follow the in-app prompts if they differ from what's described here.",
  },
];

const responsibleTips = [
  "Set a session time and spending limit before you open any table.",
  "Never chase losses by increasing bets beyond your planned budget.",
  "Take regular breaks, especially during long sessions.",
  "Avoid playing when stressed, upset, or under the influence of alcohol.",
  "If gaming stops feeling like entertainment, stop and take a break from the app.",
  "Keep your account and withdrawal password private to protect your balance.",
];

export default function DisclaimerPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
      { "@type": "ListItem", position: 2, name: "Disclaimer", item: PAGE_URL },
    ],
  };

  return (
    <>
      <Script id="disclaimer-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 md:px-8 pt-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
          <li>
            <Link href={ROUTES.home} className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-white" aria-current="page">
            Disclaimer
          </li>
        </ol>
      </nav>

      <section className="py-8 md:py-14 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Disclaimer &amp;</span> <span className="text-[#FFA500]">Responsible Gaming</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Please read this page carefully before downloading or playing Alano DT 6.
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-6 md:p-8 mb-10 text-center">
          <p className="text-white font-bold text-lg">
            18+ ONLY · PLAY RESPONSIBLY · NO GUARANTEED INCOME
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {points.map((p) => (
            <div key={p.title} className="bg-[#0A1029] rounded-xl p-6 border border-gray-800">
              <h2 className="text-xl font-semibold text-white mb-3">{p.title}</h2>
              <p className="text-gray-300 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#0A1029] rounded-xl p-8 border border-gray-800 mb-10">
          <h2 className="text-2xl font-bold mb-6 text-[#FFA500]">Responsible Gaming Tips</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {responsibleTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <p className="text-gray-300 leading-relaxed">
            Questions about this disclaimer or our{" "}
            <Link href={ROUTES.privacy} className="text-accent hover:underline">
              privacy policy
            </Link>
            ? Reach us via{" "}
            <a href={`mailto:${BRAND.email}`} className="text-accent hover:underline">
              {BRAND.email}
            </a>{" "}
            or our{" "}
            <Link href={ROUTES.contact} className="text-accent hover:underline">
              contact form
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
