import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import { BRAND, DOWNLOAD_URL, ROUTES, SITE_ORIGIN } from "@/lib/siteConfig";

const PAGE_URL = `${SITE_ORIGIN}${ROUTES.pc}`;
const PAGE_TITLE = "Alano DT 6 for PC: Play on Windows with an Emulator";
const PAGE_DESCRIPTION =
  "Play Alano DT 6 on PC using an Android emulator. Windows system requirements, step-by-step setup, and tips for a smoother Dragon Tiger experience.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "alano dt 6 for pc",
    "alano dt 6 windows",
    "alano dt 6 emulator",
    "play alano dt 6 on pc",
    "alanodt6 pc download",
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
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const systemRequirements = [
  ["Operating System", "Windows 10 or Windows 11 (64-bit)"],
  ["RAM", "4GB minimum, 8GB recommended"],
  ["Storage", "5GB free disk space for the emulator and app data"],
  ["Graphics", "DirectX 11 compatible GPU with updated drivers"],
  ["Virtualization", "Intel VT-x / AMD-V enabled in BIOS for best performance"],
  ["Internet", "Stable broadband connection for real-time tables"],
];

const setupSteps = [
  {
    title: "Step 1 — Install an Android emulator",
    body: "Download a well-known Android emulator for Windows (such as BlueStacks, LDPlayer, or NoxPlayer) from its official site and complete the standard installer.",
    color: "#FFA500",
  },
  {
    title: "Step 2 — Enable virtualization",
    body: "If the emulator warns about performance, enable Intel VT-x or AMD-V in your PC's BIOS/UEFI settings, then restart Windows before continuing.",
    color: "#4ade80",
  },
  {
    title: "Step 3 — Get the Alano DT 6 APK",
    body: `Open our official download page inside the emulator's built-in browser and grab the ${BRAND.name} APK, or drag-and-drop a downloaded APK file onto the emulator window if it supports that.`,
    color: "#60a5fa",
  },
  {
    title: "Step 4 — Install and allow unknown sources",
    body: "Just like on a phone, the emulator's Android environment needs unknown sources enabled once to install an APK from outside its app store.",
    color: "#f97316",
  },
  {
    title: "Step 5 — Launch and sign in",
    body: "Open Alano DT 6 from the emulator's home screen, log in with your existing account or register fresh, and play Dragon Tiger and slots on a larger screen with keyboard/mouse support.",
    color: "#ec4899",
  },
];

const faqs = [
  {
    q: "Is there an official Alano DT 6 PC application?",
    a: "No. Alano DT 6 is built for Android, so the practical way to play on Windows is through a trusted Android emulator that runs the same APK.",
  },
  {
    q: "Which emulator works best for Alano DT 6?",
    a: "Most modern emulators handle Alano DT 6 smoothly. Choose one that supports keyboard mapping and has an active update history for compatibility and security.",
  },
  {
    q: "Can I use the same account on PC and mobile?",
    a: "Yes. Log in with the same mobile number and password inside the emulator to access your existing balance, bonuses, and history.",
  },
  {
    q: "Is playing Alano DT 6 through an emulator safe?",
    a: "Download emulators only from their official websites, keep them updated, and install the Alano DT 6 APK only from our official page to avoid tampered files.",
  },
  {
    q: "Why does the app run slower on my PC than expected?",
    a: "Confirm virtualization is enabled in BIOS, close other heavy background apps, and allocate more RAM to the emulator in its settings.",
  },
];

export default function AlanoDT6ForPCPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to play Alano DT 6 on PC",
    description: "Set up an Android emulator on Windows to run the Alano DT 6 APK.",
    step: setupSteps.map((s) => ({
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
      { "@type": "ListItem", position: 2, name: "Alano DT 6 for PC", item: PAGE_URL },
    ],
  };

  return (
    <>
      <Script id="pc-howto-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="pc-faq-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="pc-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
          <li>
            <Link href={ROUTES.home} className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-white" aria-current="page">
            Alano DT 6 for PC
          </li>
        </ol>
      </nav>

      <section className="py-8 md:py-14 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white">Play</span> <span className="text-[#FFA500]">Alano DT 6</span> <span className="text-white">on PC</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          There's no native Windows build of Alano DT 6, but an Android emulator lets you run the
          exact same APK on a bigger screen with a keyboard and mouse. Here's the full setup.
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">Windows System Requirements</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-2xl mx-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800">
              {systemRequirements.map(([label, value], i) => (
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
            Setup Guide: Emulator to First Login
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {setupSteps.map((step) => (
              <div key={step.title} className="bg-[#06091F] rounded-lg p-6 border-l-4" style={{ borderColor: step.color }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: step.color }}>{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Getting the Most from Desktop Play</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          A bigger display makes it easier to track Dragon Tiger results, bet history, and bonus
          timers at a glance. Map frequently used buttons to keyboard keys inside your emulator's
          control editor for faster rounds.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Need the APK first? Grab it from our{" "}
          <Link href={ROUTES.download} className="text-accent hover:underline">
            official download page
          </Link>
          , or head straight to{" "}
          <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            the download link
          </a>{" "}
          if you already know the install steps.
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">PC Version FAQ</h2>
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
    </>
  );
}
