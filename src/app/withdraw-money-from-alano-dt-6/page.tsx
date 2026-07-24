import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import { BRAND, ROUTES, SITE_ORIGIN } from "@/lib/siteConfig";

const PAGE_URL = `${SITE_ORIGIN}${ROUTES.withdraw}`;
const PAGE_TITLE = "Withdraw Money from Alano DT 6 via JazzCash & EasyPaisa";
const PAGE_DESCRIPTION =
  "Withdraw money from Alano DT 6 with JazzCash or EasyPaisa. Verification steps, processing time, and fixes for pending or failed withdrawals in Pakistan.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "withdraw money from alano dt 6",
    "alano dt 6 withdrawal",
    "alano dt 6 jazzcash withdraw",
    "alano dt 6 easypaisa withdraw",
    "alanodt6 cash out",
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

const withdrawSteps = [
  {
    title: "Step 1 — Verify your account",
    body: "Open your profile and confirm your mobile number, bind an email if you haven't, and set a bank/withdrawal password. Unverified accounts cannot request a cash-out.",
    color: "#FFA500",
  },
  {
    title: "Step 2 — Add your payout details",
    body: "Enter the JazzCash or EasyPaisa account number you want to receive funds on. This must match the name on your Alano DT 6 profile to avoid a manual review delay.",
    color: "#4ade80",
  },
  {
    title: "Step 3 — Request the withdrawal",
    body: "Go to the wallet, tap Withdraw, choose your payout method, enter the amount, and confirm with your withdrawal password.",
    color: "#60a5fa",
  },
  {
    title: "Step 4 — Wait for processing",
    body: "Requests typically move from Pending to Completed within minutes during normal hours, though busy periods and manual review can extend this to a few hours.",
    color: "#f97316",
  },
  {
    title: "Step 5 — Confirm receipt",
    body: "Check your JazzCash or EasyPaisa balance and SMS confirmation once the app shows the withdrawal as completed.",
    color: "#ec4899",
  },
];

const troubleshooting = [
  {
    q: "Withdrawal stuck on \u201cPending\u201d",
    a: "Pending usually means the request is queued for automated or manual review. Give it time during normal hours before contacting support — resubmitting the same request can create duplicate tickets.",
  },
  {
    q: "Name mismatch between account and payout method",
    a: "Your JazzCash or EasyPaisa account name should match your registered Alano DT 6 details. A mismatch is the most common reason withdrawals get held for manual verification.",
  },
  {
    q: "Withdrawal rejected without explanation",
    a: "Check for unmet wagering or activity requirements tied to any bonus you claimed, then confirm your payout number is correct and active before retrying.",
  },
  {
    q: "Forgot withdrawal password",
    a: "Use the account recovery option tied to your bound email or verified mobile number to reset your withdrawal password before trying again.",
  },
];

const faqs = [
  {
    q: "How long do Alano DT 6 withdrawals take?",
    a: "Most JazzCash and EasyPaisa withdrawals complete within minutes after verification, though timing can extend during peak traffic or manual review.",
  },
  {
    q: "Is there a minimum withdrawal amount?",
    a: "Yes, the wallet screen shows the current minimum withdrawal threshold, which can change with promotions. Confirm the number on-screen before submitting.",
  },
  {
    q: "Do I need to deposit before I can withdraw?",
    a: "Most cash-out flows require at least one verified deposit and some gameplay activity before a withdrawal request is accepted. See our deposit guide if you haven't funded your wallet yet.",
  },
  {
    q: "Can I change my payout account after requesting a withdrawal?",
    a: "Once a withdrawal is submitted it typically can't be edited. Cancel through support if the request hasn't processed yet, then resubmit with the correct details.",
  },
];

export default function WithdrawPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to withdraw money from Alano DT 6",
    description: "Verification and payout steps to cash out from the Alano DT 6 wallet using JazzCash or EasyPaisa.",
    step: withdrawSteps.map((s) => ({
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
      { "@type": "ListItem", position: 2, name: "Withdraw Money from Alano DT 6", item: PAGE_URL },
    ],
  };

  return (
    <>
      <Script id="withdraw-howto-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="withdraw-faq-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="withdraw-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
          <li>
            <Link href={ROUTES.home} className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-white" aria-current="page">
            Withdraw Money from Alano DT 6
          </li>
        </ol>
      </nav>

      <section className="py-8 md:py-14 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white">Withdraw Money from</span> <span className="text-[#FFA500]">Alano DT 6</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Cash out your Alano DT 6 balance to JazzCash or EasyPaisa with a verified account.
          Here's exactly how the request, review, and payout stages work.
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#0A1029] rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500] text-center">
            How to Withdraw Step by Step
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {withdrawSteps.map((step) => (
              <div key={step.title} className="bg-[#06091F] rounded-lg p-6 border-l-4" style={{ borderColor: step.color }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: step.color }}>{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Why Verification Matters</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Alano DT 6 ties withdrawals to a verified mobile number, bound email, and a matching
          JazzCash or EasyPaisa account name. This protects your balance if your device is lost
          and keeps payouts moving without manual holds.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Haven't funded your wallet yet? Start with our{" "}
          <Link href={ROUTES.deposit} className="text-accent hover:underline">
            deposit money in Alano DT 6 guide
          </Link>{" "}
          before requesting your first cash-out.
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Expected Processing Times</h2>
        <p className="text-gray-300 leading-relaxed">
          Most withdrawals move from Pending to Completed within minutes during normal hours.
          Late-night requests, festival traffic spikes, or first-time payouts flagged for manual
          review can take longer. If a request sits in Pending well past the usual window,
          contact support with your transaction reference instead of submitting a duplicate
          request.
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Troubleshooting Withdrawal Issues</h2>
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
        <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Withdrawal FAQ</h2>
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
