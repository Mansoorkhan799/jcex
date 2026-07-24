import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import { BRAND, ROUTES, SITE_ORIGIN } from "@/lib/siteConfig";

const PAGE_URL = `${SITE_ORIGIN}${ROUTES.privacy}`;
const PAGE_TITLE = "Privacy Policy | Alano DT 6 (alanodt6.com.pk)";
const PAGE_DESCRIPTION =
  "Privacy policy for alanodt6.com.pk covering what data Alano DT 6 collects, how it's used, payment data handling, cookies, and your rights as a user.";
const LAST_UPDATED = "July 20, 2026";

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

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    body: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          When you use the Alano DT 6 app or browse alanodt6.com.pk, we may collect:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Account details you provide, such as your mobile number and display name.</li>
          <li>Device information, including model, OS version, and app version, used for compatibility and crash diagnostics.</li>
          <li>Gameplay activity, such as tables played and bonus claims, to keep your account history accurate.</li>
          <li>Transaction references for JazzCash/EasyPaisa deposits and withdrawals, handled through those providers' secure channels.</li>
          <li>Website analytics such as pages visited and general location (country/region) when you browse our guides.</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Your Information",
    body: (
      <p className="text-gray-300 leading-relaxed">
        We use collected information to operate your account, process deposits and withdrawals,
        respond to support requests, prevent fraud and abuse (including repeated captcha/IP
        limit triggers), improve app stability, and keep our install/deposit/withdraw guides
        accurate.
      </p>
    ),
  },
  {
    id: "payment-data",
    title: "3. Payment Data",
    body: (
      <p className="text-gray-300 leading-relaxed">
        Alano DT 6 does not store your JazzCash or EasyPaisa PIN or full account credentials.
        Payment confirmation happens directly through JazzCash's and EasyPaisa's own secure
        systems; we only retain the transaction status and reference needed to credit or debit
        your in-app wallet.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "4. Cookies & Similar Technologies",
    body: (
      <p className="text-gray-300 leading-relaxed">
        alanodt6.com.pk uses cookies and similar technologies to remember basic preferences and
        measure how visitors use our guides. You can disable cookies in your browser settings,
        though some site features may not work as expected.
      </p>
    ),
  },
  {
    id: "data-sharing",
    title: "5. Data Sharing",
    body: (
      <p className="text-gray-300 leading-relaxed">
        We do not sell your personal information. Limited data is shared with payment partners
        (JazzCash, EasyPaisa) strictly to process transactions, and with service providers who
        help us run hosting, analytics, or support tools under confidentiality obligations.
      </p>
    ),
  },
  {
    id: "data-security",
    title: "6. Data Security",
    body: (
      <p className="text-gray-300 leading-relaxed">
        We apply reasonable technical and organizational safeguards to protect your account and
        transaction data. No online service can guarantee absolute security, so we also encourage
        using a unique password and never sharing OTP codes with anyone.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    body: (
      <p className="text-gray-300 leading-relaxed">
        You can request a copy of the personal data we hold about your account, ask us to correct
        inaccurate details, or request account deletion by contacting{" "}
        <a href={`mailto:${BRAND.email}`} className="text-accent hover:underline">
          {BRAND.email}
        </a>
        .
      </p>
    ),
  },
  {
    id: "children",
    title: "8. Age Restrictions",
    body: (
      <p className="text-gray-300 leading-relaxed">
        Alano DT 6 is intended for users aged 18 and above. We do not knowingly collect data from
        minors, and accounts found to belong to underage users may be suspended.
      </p>
    ),
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    body: (
      <p className="text-gray-300 leading-relaxed">
        We may update this privacy policy as our features or legal obligations change. Material
        changes will be reflected on this page with an updated revision date.
      </p>
    ),
  },
  {
    id: "contact",
    title: "10. Contact Us",
    body: (
      <p className="text-gray-300 leading-relaxed">
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${BRAND.email}`} className="text-accent hover:underline">
          {BRAND.email}
        </a>{" "}
        or through our{" "}
        <Link href={ROUTES.contact} className="text-accent hover:underline">
          contact form
        </Link>
        .
      </p>
    ),
  },
];

export default function PrivacyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: PAGE_URL },
    ],
  };

  return (
    <>
      <Script id="privacy-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 md:px-8 pt-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
          <li>
            <Link href={ROUTES.home} className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-white" aria-current="page">
            Privacy Policy
          </li>
        </ol>
      </nav>

      <section className="py-8 md:py-14 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Privacy</span> <span className="text-[#FFA500]">Policy</span>
          </h1>
          <p className="text-gray-400 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="bg-[#0A1029] rounded-2xl p-8 md:p-10 mb-8">
          <p className="text-gray-300 leading-relaxed">
            This privacy policy explains how {BRAND.name} ({BRAND.domain}) collects, uses, and
            protects information when you use our Android app or browse our website. By using
            Alano DT 6 or alanodt6.com.pk, you agree to the practices described below.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.id} id={s.id} className="bg-[#0A1029] rounded-xl p-6 md:p-8 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">{s.title}</h2>
              {s.body}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
