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

export const metadata: Metadata = {
  title: {
    absolute: "Alano DT 6 APK Download Pakistan 2026 – Official",
  },
  description:
    "Alano DT 6 APK 2026 for Pakistan. Download alanodt6, play Dragon Tiger, slots & card tables, earn with JazzCash & EasyPaisa. Free Android install guide.",
  keywords: [
    "alano dt 6",
    "alanodt6",
    "alano dt 6 apk",
    "alano dt 6 download",
    "alano dt 6 pakistan",
    "alanodt6 apk",
    "alano dt6 game",
  ],
  openGraph: {
    title: "Alano DT 6 APK Download Pakistan 2026 – Official",
    description:
      "Download Alano DT 6 APK for Pakistan. Play Dragon Tiger, slots and card games with JazzCash & EasyPaisa withdrawals.",
    images: [
      {
        url: `${SITE_ORIGIN}${IMAGES.hero}`,
        width: 1024,
        height: 1024,
        alt: "Alano DT 6 – Dragon Tiger & casino APK for Pakistan",
      },
      {
        url: `${SITE_ORIGIN}${IMAGES.og}`,
        width: 1200,
        height: 630,
        alt: "Alano DT 6 – Official APK download",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alano DT 6 APK Download Pakistan 2026 – Official",
    description:
      "Download Alano DT 6 APK for Pakistan. Play Dragon Tiger, slots and card games with JazzCash & EasyPaisa withdrawals.",
    images: [`${SITE_ORIGIN}${IMAGES.hero}`, `${SITE_ORIGIN}${IMAGES.og}`],
  },
};

const faqs = [
  {
    q: "What is Alano DT 6?",
    a: "Alano DT 6 is an Android earning game focused on Dragon Tiger tables, slots, and casino-style card games for players in Pakistan. You can download the alanodt6 APK, create an account, and use JazzCash or EasyPaisa for deposits and withdrawals.",
  },
  {
    q: "Is Alano DT 6 free to download?",
    a: "Yes. The Alano DT 6 APK is free to download and install. In-app wallet funding is optional when you want to play real-cash tables.",
  },
  {
    q: "How do I deposit money in Alano DT 6?",
    a: "Open the wallet, choose JazzCash or EasyPaisa, enter the amount in PKR, and confirm payment. Full steps are on our deposit guide.",
  },
  {
    q: "How long do Alano DT 6 withdrawals take?",
    a: "Most JazzCash and EasyPaisa withdrawals complete within minutes after verification. Timing can vary during peak traffic.",
  },
  {
    q: "What is the Alano DT 6 APK size and version?",
    a: `The latest Alano DT 6 build is V${BRAND.version}, about ${BRAND.fileSize}, and needs ${BRAND.androidMin}.`,
  },
  {
    q: "Can I play Alano DT 6 on PC?",
    a: "Yes. You can run Alano DT 6 on a Windows PC with an Android emulator. See our PC version guide for setup steps.",
  },
];

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: `${SITE_ORIGIN}/`,
        name: BRAND.name,
        description:
          "Alano DT 6 APK download hub for Pakistan — Dragon Tiger, slots, and real cash rewards via JazzCash & EasyPaisa.",
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_ORIGIN}/#webpage`,
        url: `${SITE_ORIGIN}/`,
        name: "Alano DT 6 APK Download Pakistan 2026 – Official",
        description:
          "Download Alano DT 6 APK for Pakistan. Play Dragon Tiger, slots and card games with JazzCash & EasyPaisa.",
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [
            "#what-is-alano-dt-6",
            "#why-alano-dt-6",
            "#how-to-start",
            "#download",
            "#alano-dt-6-features",
            "#alano-dt-6-games",
            "#alano-dt-6-bonuses",
            "#register-login",
            "#deposit-withdraw",
            "#safety-security",
            "#faq",
          ],
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_ORIGIN}${IMAGES.hero}`,
          width: 1024,
          height: 1024,
          name: BRAND.name,
          description:
            "Alano DT 6 official brand image for Android APK download in Pakistan.",
          ...imageObjectLicensing,
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_ORIGIN}/#organization`,
        name: BRAND.name,
        url: `${SITE_ORIGIN}/`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_ORIGIN}${IMAGES.logo}`,
          width: 512,
          height: 512,
          ...imageObjectLicensing,
          creditText: `${BRAND.name} logo`,
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: BRAND.email,
          contactType: "Customer Support",
          areaServed: "PK",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: BRAND.name,
        operatingSystem: BRAND.androidMin,
        applicationCategory: "GameApplication",
        image: `${SITE_ORIGIN}${IMAGES.hero}`,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: BRAND.ratingValue,
          bestRating: "5",
          ratingCount: BRAND.ratingCount,
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "PKR",
        },
        downloadUrl: DOWNLOAD_URL,
        softwareVersion: `V${BRAND.version}`,
        fileSize: BRAND.fileSize,
        description:
          "Alano DT 6 is a Dragon Tiger and casino-style earning app for Pakistan with JazzCash and EasyPaisa support, daily bonuses, and fast withdrawals.",
        screenshot: [
          `${SITE_ORIGIN}${IMAGES.hero}`,
          `${SITE_ORIGIN}${IMAGES.logo}`,
          `${SITE_ORIGIN}${IMAGES.gameInterface}`,
          `${SITE_ORIGIN}${IMAGES.games}`,
          `${SITE_ORIGIN}${IMAGES.earnBonus}`,
        ],
        author: { "@type": "Organization", name: BRAND.developer },
      },
      {
        "@type": "HowTo",
        name: "How to download and install Alano DT 6 APK",
        description:
          "Install Alano DT 6 on Android in Pakistan with unknown sources enabled.",
        step: [
          {
            "@type": "HowToStep",
            name: "Open the download page",
            text: "Visit alanodt6.com.pk and tap DOWNLOAD NOW for the Alano DT 6 APK.",
          },
          {
            "@type": "HowToStep",
            name: "Allow unknown apps",
            text: "Enable install from unknown sources for your browser or file manager.",
          },
          {
            "@type": "HowToStep",
            name: "Install and open",
            text: "Open the APK, install Alano DT 6, then register and claim welcome rewards.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
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
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" style={{ minHeight: "400px" }}>
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">{BRAND.name}</span>
              </h1>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-[#FFA500]">Free APK Download</span>{" "}
                <span className="text-white">for Pakistan 2026</span>
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              <Link href="/" className="text-accent hover:underline">
                Alano DT 6
              </Link>{" "}
              brings Dragon Tiger tables, slots, and fast card games to Android users
              across Pakistan. Download the alanodt6 APK, fund your wallet with JazzCash
              or EasyPaisa, and play sessions that fit busy evenings. New players get
              welcome spins and clear wallet tools from the first login.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300" aria-label="App rating">
              <span className="text-accent font-semibold">{BRAND.ratingValue} ★★★★☆</span>
              <span>({Number(BRAND.ratingCount).toLocaleString()})</span>
              <span>· Free · Android · Game</span>
            </div>

            <div className="flex justify-center my-8">
              <DownloadCta />
            </div>

            <div className="flex flex-row gap-4 justify-center mt-8 mb-4" style={{ minHeight: "120px" }}>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <div className="text-white text-2xl font-bold mb-1">500K+</div>
                <div className="text-gray-400 text-sm">Downloads</div>
              </div>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <div className="text-white text-2xl font-bold mb-1">{BRAND.ratingValue}</div>
                <div className="text-gray-400 text-sm">Rating</div>
              </div>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <div className="text-white text-2xl font-bold mb-1">{BRAND.fileSize}</div>
                <div className="text-gray-400 text-sm">App Size</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center italic">*Available for Android devices only</p>
          </div>

          <figure className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <Image
              src={IMAGES.hero}
              alt="Alano DT 6 – official app icon"
              title="Alano DT 6 APK Download"
              width={512}
              height={512}
              className="object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
              priority
              fetchPriority="high"
              quality={90}
              sizes="(max-width: 768px) 260px, 320px"
            />
          </figure>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Alano DT 6 APK Details</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800">
              {[
                ["App Name", BRAND.name],
                ["Also known as", BRAND.shortName],
                ["Developer", BRAND.developer],
                ["Category", "Casino / Card Game"],
                ["Size", BRAND.fileSize],
                ["Latest Version", `V${BRAND.version}`],
                ["Required OS", BRAND.androidMin],
                ["Update", "July 2026"],
                ["Downloads", "500k+"],
                ["Rating", `${BRAND.ratingValue} / 5 (${Number(BRAND.ratingCount).toLocaleString()} ratings)`],
                ["Language", "English, Urdu"],
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

      <section id="what-is-alano-dt-6" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#0A1029] rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">What Is Alano DT 6?</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Alano DT 6 is a mobile gaming app built around Dragon Tiger action and a wider
            casino lobby. Players searching for alanodt6 usually want a lightweight APK,
            simple registration, and local payment rails. The interface keeps tables, wallet,
            and bonuses a few taps away so beginners are not lost in menus.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            On Alano DT 6 you can move between Dragon Tiger rounds, slot titles, and card
            tables without leaving the app. Sessions feel short and readable, which helps
            users who play on limited mobile data. Clear bet options and live result boards
            make each round easy to follow.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Pakistani players benefit most from JazzCash and EasyPaisa support inside the
            wallet. Once the APK is installed from our{" "}
            <Link href={ROUTES.download} className="text-accent hover:underline">
              download page
            </Link>
            , you can create an account and explore free spins before depositing.
          </p>
        </div>
      </section>

      <section id="why-alano-dt-6" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Why Players Choose Alano DT 6</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Search interest around alano dt 6 keeps growing because the app blends a familiar
          Dragon Tiger format with everyday Pakistani payment methods. Users do not need a
          complex bank transfer flow for routine top-ups. That convenience is a major reason
          the alanodt6 keyword stays competitive in 2026.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Smooth graphics, quick table loading, and regular check-in rewards keep returning
          players engaged. When withdrawals arrive promptly after verification, trust builds
          faster than on apps with unclear cash-out steps.
        </p>
      </section>

      <section id="how-to-start" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">How to Start with Alano DT 6</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-300">
          <li>Download the Alano DT 6 APK from the official alanodt6.com.pk guide.</li>
          <li>Allow unknown sources, install the package, and open the app.</li>
          <li>Register with your mobile number and set a secure login password.</li>
          <li>Claim welcome rewards, then explore Dragon Tiger or slots in demo or cash mode.</li>
          <li>
            Add funds via JazzCash or EasyPaisa using our{" "}
            <Link href={ROUTES.deposit} className="text-accent hover:underline">
              deposit guide
            </Link>
            .
          </li>
        </ol>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Alano DT 6 App Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { src: IMAGES.gameInterface, label: "Game Interface", alt: "Alano DT 6 game interface loading screen" },
            { src: IMAGES.games, label: "Games Collection", alt: "Alano DT 6 games collection lobby" },
            { src: IMAGES.earnBonus, label: "Bonuses & Rewards", alt: "Alano DT 6 bonuses and rewards screen" },
            { src: IMAGES.addMoney, label: "Add Money", alt: "Alano DT 6 add money JazzCash EasyPaisa shop" },
            { src: IMAGES.withdraw, label: "Withdraw Money", alt: "Alano DT 6 withdraw money screen" },
            { src: IMAGES.refer, label: "Refer & Earn", alt: "Alano DT 6 refer and earn program" },
          ].map((img) => (
            <figure
              key={img.src}
              className="bg-[#0A1029] rounded-xl overflow-hidden border border-gray-800 shadow-lg"
            >
              <Image
                src={img.src}
                alt={img.alt}
                title={img.label}
                width={680}
                height={400}
                className="w-full h-auto object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <figcaption className="sr-only">{img.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="alano-dt-6-features" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Top Features of Alano DT 6</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              t: "Dragon Tiger tables",
              d: "Fast rounds with clear Dragon vs Tiger odds help new players learn quickly while experienced users keep a steady rhythm.",
            },
            {
              t: "Local wallet rails",
              d: "JazzCash and EasyPaisa deposits keep funding in PKR without confusing international gateways.",
            },
            {
              t: "Daily rewards hub",
              d: "Check-ins, welcome spins, and recharge rebates give alanodt6 users extra value across the week.",
            },
            {
              t: "Lightweight APK",
              d: `At about ${BRAND.fileSize}, Alano DT 6 installs smoothly on mid-range Android phones used across Pakistan.`,
            },
            {
              t: "Referral growth",
              d: "Invite friends and unlock commission-style rewards that stack with regular gameplay bonuses.",
            },
            {
              t: "In-app support",
              d: "Live chat and ticket help cover login, IP limit, and payment questions without leaving the lobby.",
            },
          ].map((f) => (
            <div key={f.t} className="bg-[#0A1029] rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-3">{f.t}</h3>
              <p className="text-gray-300 leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="alano-dt-6-games" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Games Inside Alano DT 6</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          The Alano DT 6 lobby mixes Dragon Tiger with slot reels and classic card tables.
          Players who like quick decisions usually start on Dragon Tiger, then rotate into
          slots for longer entertainment sessions. Hot tables and jackpot tickers keep the
          lobby feeling active.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Variety matters for retention: when one table cools down, another mode is ready.
          That rotation is why many users stay inside alanodt6 instead of juggling multiple
          APKs.
        </p>
      </section>

      <section id="alano-dt-6-bonuses" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Bonuses for New Alano DT 6 Players</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          New accounts on Alano DT 6 typically unlock welcome spins, first-deposit offers,
          and daily check-in coins. Recharge rebates reward consistent top-ups, while referral
          tools help friends join with shared value. Read the full breakdown in our{" "}
          <Link href="/blog/alano-dt-6-bonuses-vip-guide" className="text-accent hover:underline">
            bonuses & VIP guide
          </Link>
          .
        </p>
        <p className="text-gray-300 leading-relaxed">
          Always check the activity board inside the app for current terms. Bonus rules can
          update with festivals or VIP tiers, so the in-app bulletin is the source of truth.
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">How to Download & Install Alano DT 6</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li>Open alanodt6.com.pk on your Android browser.</li>
          <li>Tap DOWNLOAD NOW and wait for the APK file to finish.</li>
          <li>Enable Install unknown apps for that browser or file manager.</li>
          <li>Open the file, tap Install, then launch Alano DT 6.</li>
          <li>Update later versions from the same trusted download page.</li>
        </ol>
        <div className="flex justify-center">
          <DownloadCta />
        </div>
      </section>

      <section id="register-login" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Register & Login on Alano DT 6</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Registration uses your Pakistani mobile number and a strong password. After OTP
          verification you can bind email for recovery. If captcha or IP limit errors appear,
          switch networks and follow our{" "}
          <Link href="/blog/create-alano-dt-6-account-and-login" className="text-accent hover:underline">
            account & login guide
          </Link>
          .
        </p>
      </section>

      <section id="deposit-withdraw" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Deposit & Withdraw with JazzCash / EasyPaisa</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Deposits open from the wallet icon. Choose JazzCash or EasyPaisa, enter PKR amount,
          and confirm. Withdrawals need a verified account and matching payment details.
          Step-by-step pages:{" "}
          <Link href={ROUTES.deposit} className="text-accent hover:underline">
            Deposit money in Alano DT 6
          </Link>{" "}
          and{" "}
          <Link href={ROUTES.withdraw} className="text-accent hover:underline">
            Withdraw money from Alano DT 6
          </Link>
          .
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Tips for Smarter Alano DT 6 Sessions</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Set a session budget before opening Dragon Tiger tables.</li>
          <li>Use smaller bets while learning payout patterns.</li>
          <li>Claim daily check-ins before depositing extra funds.</li>
          <li>Bind email and set a bank password for safer withdrawals.</li>
          <li>
            Read more in our{" "}
            <Link href="/blog/alano-dt-6-tips-to-play-smarter" className="text-accent hover:underline">
              tips article
            </Link>
            .
          </li>
        </ul>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Pros & Cons of Alano DT 6</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#0A1029] rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold text-green-400 mb-3">Pros</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Dragon Tiger focus with extra casino games</li>
              <li>JazzCash & EasyPaisa wallet support</li>
              <li>Free APK with regular bonus board</li>
              <li>Works on mid-range Android phones</li>
            </ul>
          </div>
          <div className="bg-[#0A1029] rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold text-red-400 mb-3">Cons</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Android-first (PC needs an emulator)</li>
              <li>Unknown sources must be enabled to install</li>
              <li>IP / captcha issues can appear on shared networks</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="safety-security" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Safety Tips for Alano DT 6</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Only install Alano DT 6 from trusted pages such as alanodt6.com.pk. Avoid random APK
          mirrors that bundle malware. Protect your login with a unique password, bind email,
          and never share OTP codes. For a deeper look at risk controls, read{" "}
          <Link href="/blog/is-alano-dt-6-safe-pakistan" className="text-accent hover:underline">
            Is Alano DT 6 safe in Pakistan?
          </Link>
          .
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Customer Support</h2>
        <p className="text-gray-300 leading-relaxed">
          Reach the Alano DT 6 team through in-app live chat or email{" "}
          <a href={`mailto:${BRAND.email}`} className="text-accent hover:underline">
            {BRAND.email}
          </a>
          . You can also use our{" "}
          <Link href={ROUTES.contact} className="text-accent hover:underline">
            contact form
          </Link>
          .
        </p>
      </section>

      <section id="faq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Frequently Asked Questions</h2>
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
        <h2 className="text-3xl font-bold mb-4 text-[#FFA500]">Ready to Try Alano DT 6?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Download the alanodt6 APK, claim welcome rewards, and play Dragon Tiger with local
          JazzCash and EasyPaisa support on Android.
        </p>
        <div className="flex justify-center">
          <DownloadCta />
        </div>
      </section>
    </>
  );
}
