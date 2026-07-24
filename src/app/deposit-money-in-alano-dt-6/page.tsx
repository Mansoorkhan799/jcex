import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import { BRAND, ROUTES, SITE_ORIGIN } from "@/lib/siteConfig";

const PAGE_URL = `${SITE_ORIGIN}${ROUTES.deposit}`;
const PAGE_TITLE = "Deposit Money in Alano DT 6 with JazzCash & EasyPaisa";
const PAGE_DESCRIPTION =
  "How to deposit money in Alano DT 6 using JazzCash or EasyPaisa. Minimum amounts, step-by-step wallet guide, and fixes for failed top-ups in Pakistan.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "deposit money in alano dt 6",
    "alano dt 6 jazzcash deposit",
    "alano dt 6 easypaisa deposit",
    "alano dt 6 add money",
    "alanodt6 recharge",
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

const depositSteps = [
  {
    title: "Step 1 — Open the wallet",
    body: "Log in to Alano DT 6 and tap the wallet icon on the home screen, then select Add Money / Deposit.",
    color: "#FFA500",
  },
  {
    title: "Step 2 — Choose your payment method",
    body: "Pick JazzCash or EasyPaisa from the deposit menu. Both methods are processed directly in PKR without any currency conversion.",
    color: "#4ade80",
  },
  {
    title: "Step 3 — Enter the amount",
    body: "Type the amount you want to add. Stay above the minimum deposit shown on the screen — small test amounts below the floor are usually rejected by the payment gateway, not the app.",
    color: "#60a5fa",
  },
  {
    title: "Step 4 — Confirm on your mobile wallet",
    body: "You will be redirected to the JazzCash or EasyPaisa confirmation screen (or asked to authorize via your mobile wallet app). Approve the payment and wait for the success message.",
    color: "#f97316",
  },
  {
    title: "Step 5 — Check your balance",
    body: "Return to Alano DT 6 and pull down to refresh your wallet balance. Most deposits reflect within a minute; keep your payment confirmation SMS just in case.",
    color: "#ec4899",
  },
];

const faqs = [
  {
    q: "What is the minimum deposit amount in Alano DT 6?",
    a: "Minimum deposit amounts are set inside the app's wallet screen and can change with promotions. Always check the amount field on the deposit page before confirming payment — it shows the current floor for JazzCash and EasyPaisa.",
  },
  {
    q: "Can I deposit with a bank card instead of JazzCash or EasyPaisa?",
    a: "Alano DT 6 is built around local mobile wallets. JazzCash and EasyPaisa are the primary supported methods for Pakistani players.",
  },
  {
    q: "My deposit isn't showing in my balance — what should I do?",
    a: "Wait a minute and refresh the wallet screen first. If the amount is still missing after your payment app confirmed the transaction, contact support with your transaction ID rather than resubmitting the payment.",
  },
  {
    q: "Is there a deposit bonus on Alano DT 6?",
    a: "First-deposit offers and recharge rebates appear periodically inside the app's bonus center. Check the in-app bulletin for the current terms before topping up.",
  },
  {
    q: "How do I withdraw money after depositing?",
    a: "Withdrawals use a separate verification flow. See our withdraw guide for the full steps once you're ready to cash out.",
  },
];

export default function DepositPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to deposit money in Alano DT 6",
    description: "JazzCash and EasyPaisa deposit steps for the Alano DT 6 wallet.",
    step: depositSteps.map((s) => ({
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
      { "@type": "ListItem", position: 2, name: "Deposit Money in Alano DT 6", item: PAGE_URL },
    ],
  };

  return (
    <>
      <Script id="deposit-howto-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="deposit-faq-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="deposit-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
          <li>
            <Link href={ROUTES.home} className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-white" aria-current="page">
            Deposit Money in Alano DT 6
          </li>
        </ol>
      </nav>

      <section className="py-8 md:py-14 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white">Deposit Money in</span> <span className="text-[#FFA500]">Alano DT 6</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Fund your Alano DT 6 wallet in under a minute using JazzCash or EasyPaisa. This guide
          covers the exact steps, minimum amount guidance, and what to do if a top-up doesn't
          land right away.
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#0A1029] rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500] text-center">
            How to Deposit Step by Step
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {depositSteps.map((step) => (
              <div key={step.title} className="bg-[#06091F] rounded-lg p-6 border-l-4" style={{ borderColor: step.color }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: step.color }}>{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Minimum Deposit Guidance</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          JazzCash and EasyPaisa both enforce their own minimum transaction floors on top of any
          limit Alano DT 6 sets in the wallet screen. If a deposit is declined, first check that
          your entered amount is at or above the number displayed on the Add Money screen — most
          "failed transaction" reports trace back to amounts entered below that floor.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Keeping deposits to round PKR amounts (for example whole hundreds) also reduces
          friction with mobile wallet confirmation screens.
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Choosing JazzCash or EasyPaisa</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#0A1029] rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-3">JazzCash</h3>
            <p className="text-gray-300 leading-relaxed">
              Works well if your Jazz mobile account is already active with a set MPIN. Deposits
              route through JazzCash's own confirmation screen before returning you to the app.
            </p>
          </div>
          <div className="bg-[#0A1029] rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-3">EasyPaisa</h3>
            <p className="text-gray-300 leading-relaxed">
              A solid alternative if JazzCash is temporarily busy or you already keep a balance
              in EasyPaisa. The in-app flow mirrors JazzCash, just with EasyPaisa's own prompts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Ready to Withdraw Later?</h2>
        <p className="text-gray-300 leading-relaxed">
          Once you've played and built a balance, withdrawals use a separate verification step
          that we don't repeat here. Read the full{" "}
          <Link href={ROUTES.withdraw} className="text-accent hover:underline">
            withdraw money from Alano DT 6 guide
          </Link>{" "}
          when you're ready to cash out.
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Deposit FAQ</h2>
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
