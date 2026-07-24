import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import {
  BRAND,
  DOWNLOAD_URL,
  IMAGES,
  ROUTES,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

const PAGE_URL = `${SITE_ORIGIN}${ROUTES.download}`;
const PAGE_TITLE = "Alano DT 6 APK Download 2026: Install Guide Pakistan";
const PAGE_DESCRIPTION =
  "Alano dt 6 apk download for Android in Pakistan. Get V1.0.0, 55MB, install steps, unknown-source fix, IP-limit tips, and links to deposit, withdraw & PC play.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "alano dt 6 apk download",
    "download alano dt 6",
    "alanodt6 apk",
    "alano dt 6 install",
    "alano dt 6 android",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND.name,
    type: "website",
    images: [{ url: `${SITE_ORIGIN}${IMAGES.hero}`, width: 1024, height: 1024, alt: "Alano DT 6 APK download" }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_ORIGIN}${IMAGES.hero}`],
  },
};

const installSteps = [
  {
    title: "Step 1 — Open the official page",
    body: `Visit ${BRAND.domain} on your Android phone and tap the DOWNLOAD NOW button below. Avoid third-party mirrors that repackage the ${BRAND.name} APK.`,
    color: "#FFA500",
  },
  {
    title: "Step 2 — Allow unknown apps",
    body: "Android blocks installs from outside the Play Store by default. Open Settings > Apps > Special access > Install unknown apps, pick your browser, and toggle Allow from this source.",
    color: "#4ade80",
  },
  {
    title: "Step 3 — Install the package",
    body: `Open the downloaded ${BRAND.shortName}.apk file from your notifications or file manager, tap Install, and wait for the ${BRAND.fileSize} package to finish copying files.`,
    color: "#60a5fa",
  },
  {
    title: "Step 4 — Register and claim rewards",
    body: "Launch Alano DT 6, sign up with your mobile number, verify with the OTP, and claim your welcome spins before your first Dragon Tiger round.",
    color: "#f97316",
  },
];

const troubleshooting = [
  {
    q: "\u201cInstall blocked\u201d or \u201capp not installed\u201d error",
    a: "This almost always means unknown sources are still off for that app, or an older Alano DT 6 build is still on your phone. Re-check the unknown apps toggle, uninstall the old version, then reinstall the fresh APK.",
  },
  {
    q: "IP limit / too many devices message",
    a: "Shared Wi-Fi, campus networks, and some VPNs trigger IP limit warnings when too many accounts log in from one address. Switch to mobile data, wait a few minutes, or try a different network before registering again.",
  },
  {
    q: "Captcha keeps failing on signup",
    a: "Clear the app cache, confirm your device clock is set to automatic, and retry on a stable connection. Repeated captcha failures are usually network related, not account related.",
  },
  {
    q: "Download stuck or file corrupted",
    a: "Confirm you have at least 150MB free storage, keep the screen on during download, and re-download rather than resuming a broken transfer.",
  },
];

const faqs = [
  {
    q: "Is the Alano DT 6 APK download free?",
    a: "Yes. Downloading and installing Alano DT 6 costs nothing. You only add funds later if you choose to play with a real-cash wallet.",
  },
  {
    q: "What Android version does Alano DT 6 need?",
    a: `Alano DT 6 needs ${BRAND.androidMin} or newer and about ${BRAND.fileSize} of free storage for a smooth install.`,
  },
  {
    q: "Can I download Alano DT 6 without enabling unknown sources?",
    a: "No. Since the APK is distributed outside the Play Store, Android requires you to allow installs from your browser or file manager once.",
  },
  {
    q: "How do I fund my wallet after installing?",
    a: "Use JazzCash or EasyPaisa from inside the app. Our deposit guide walks through the exact screens.",
  },
];

export default function DownloadAlanoDT6Page() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: BRAND.name,
    operatingSystem: BRAND.androidMin,
    applicationCategory: "GameApplication",
    image: `${SITE_ORIGIN}${IMAGES.hero}`,
    downloadUrl: DOWNLOAD_URL,
    softwareVersion: `V${BRAND.version}`,
    fileSize: BRAND.fileSize,
    description: PAGE_DESCRIPTION,
    offers: { "@type": "Offer", price: "0", priceCurrency: "PKR" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BRAND.ratingValue,
      bestRating: "5",
      ratingCount: BRAND.ratingCount,
    },
    author: { "@type": "Organization", name: BRAND.developer },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to download and install the Alano DT 6 APK",
    description: "Step-by-step Alano DT 6 APK install guide for Android phones in Pakistan.",
    step: installSteps.map((s) => ({
      "@type": "HowToStep",
      name: s.title,
      text: s.body,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
      { "@type": "ListItem", position: 2, name: "Download Alano DT 6", item: PAGE_URL },
    ],
  };

  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    url: `${SITE_ORIGIN}${IMAGES.hero}`,
    width: 1024,
    height: 1024,
    name: `${BRAND.name} APK icon`,
    description: "Official Alano DT 6 app icon used for the APK download page.",
    ...imageObjectLicensing,
  };

  const DownloadCta = ({ className = "" }: { className?: string }) => (
    <a
      href={DOWNLOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group ${className}`}
      aria-label={`Download ${BRAND.name} APK`}
    >
      <span>DOWNLOAD NOW</span>
      <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
    </a>
  );

  return (
    <>
      <Script id="download-software-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <Script id="download-howto-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="download-faq-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="download-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="download-image-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
          <li>
            <Link href={ROUTES.home} className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-white" aria-current="page">
            Download Alano DT 6
          </li>
        </ol>
      </nav>

      <section className="py-8 md:py-14 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-white">Alano DT 6</span> <span className="text-[#FFA500]">APK Download</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Get the official Alano DT 6 APK for Pakistan — Dragon Tiger tables, slots, and card
          games with JazzCash and EasyPaisa wallet support. Follow the install steps below and
          you will be at the tables in a few minutes.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-300 mt-6" aria-label="App rating">
          <span className="text-accent font-semibold">{BRAND.ratingValue} ★★★★☆</span>
          <span>({Number(BRAND.ratingCount).toLocaleString()} ratings)</span>
          <span>· V{BRAND.version} · {BRAND.fileSize} · {BRAND.androidMin}</span>
        </div>

        <div className="flex justify-center my-8">
          <DownloadCta />
        </div>

        <figure className="flex justify-center">
          <Image
            src={IMAGES.hero}
            alt="Alano DT 6 APK icon for Android download"
            title="Alano DT 6 APK Download"
            width={512}
            height={512}
            className="object-contain drop-shadow-2xl w-[180px] h-[180px] md:w-[220px] md:h-[220px]"
            priority
            fetchPriority="high"
            quality={90}
            sizes="(max-width: 768px) 180px, 220px"
          />
        </figure>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">APK File Details</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-2xl mx-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800">
              {[
                ["App Name", BRAND.name],
                ["Version", `V${BRAND.version}`],
                ["File Size", BRAND.fileSize],
                ["Required OS", BRAND.androidMin],
                ["Category", "Casino / Card Game"],
                ["Rating", `${BRAND.ratingValue} / 5 (${Number(BRAND.ratingCount).toLocaleString()} ratings)`],
                ["Price", "Free (0 PKR)"],
              ].map(([label, value], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-[#0a1029]/50" : "bg-[#06091F]/50"}>
                  <td className="py-4 px-6 font-medium text-white">{label}</td>
                  <td className="py-4 px-6 text-white">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#0A1029] rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500] text-center">
            How to Install Alano DT 6
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {installSteps.map((step) => (
              <div key={step.title} className="bg-[#06091F] rounded-lg p-6 border-l-4" style={{ borderColor: step.color }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: step.color }}>{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Troubleshooting Common Install Issues</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {troubleshooting.map((t) => (
            <div key={t.q} className="bg-[#0A1029] rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-3">{t.q}</h3>
              <p className="text-gray-300 leading-relaxed">{t.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Next Steps After Installing</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Once Alano DT 6 is installed and your account is verified, fund your wallet and start
          playing. Use these guides to keep moving without guesswork:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href={ROUTES.deposit} className="bg-[#0A1029] rounded-xl p-6 border border-gray-800 hover:border-accent transition-colors block">
            <h3 className="text-lg font-semibold text-white mb-2">Deposit Money</h3>
            <p className="text-gray-400 text-sm">JazzCash & EasyPaisa deposit steps →</p>
          </Link>
          <Link href={ROUTES.withdraw} className="bg-[#0A1029] rounded-xl p-6 border border-gray-800 hover:border-accent transition-colors block">
            <h3 className="text-lg font-semibold text-white mb-2">Withdraw Money</h3>
            <p className="text-gray-400 text-sm">Verification & cash-out timing →</p>
          </Link>
          <Link href={ROUTES.pc} className="bg-[#0A1029] rounded-xl p-6 border border-gray-800 hover:border-accent transition-colors block">
            <h3 className="text-lg font-semibold text-white mb-2">Play on PC</h3>
            <p className="text-gray-400 text-sm">Emulator setup for Windows →</p>
          </Link>
        </div>
        <p className="text-gray-300 mt-6 leading-relaxed">
          New to the app? Read our{" "}
          <Link href="/blog/create-alano-dt-6-account-and-login" className="text-accent hover:underline">
            account & login guide
          </Link>{" "}
          or browse the full{" "}
          <Link href={ROUTES.blog} className="text-accent hover:underline">
            Alano DT 6 blog
          </Link>{" "}
          for bonuses and tips.
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Download FAQ</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="bg-[#0A1029] rounded-xl border border-gray-800 p-5 group">
              <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center">
                {f.q}
                <span className="text-accent group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
              </summary>
              <p className="text-gray-300 mt-3 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#FFA500]">Ready to Download Alano DT 6?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Tap DOWNLOAD NOW, install the APK, and claim your welcome rewards on your first login.
        </p>
        <div className="flex justify-center">
          <DownloadCta />
        </div>
      </section>
    </>
  );
}
