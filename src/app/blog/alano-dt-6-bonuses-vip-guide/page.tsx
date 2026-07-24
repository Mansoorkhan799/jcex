import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import BlogPostSchema from "@/components/BlogPostSchema";
import { BRAND, ROUTES, SITE_ORIGIN, DOWNLOAD_URL, IMAGES } from "@/lib/siteConfig";

const SLUG = "alano-dt-6-bonuses-vip-guide";
const TITLE = "Alano DT 6 Bonuses & VIP Guide 2026";
const DESCRIPTION =
  "Welcome spins, recharge rebates, check-ins, referrals, and VIP perks explained for Alano DT 6 players.";
const DATE_PUBLISHED = "2026-07-22";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "alano dt 6 bonuses",
    "alano dt 6 vip",
    "alano dt 6 welcome bonus",
    "alano dt 6 rebate",
    "alano dt 6 referral",
    "alanodt6 rewards",
  ],
  alternates: {
    canonical: `${SITE_ORIGIN}/blog/${SLUG}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_ORIGIN}/blog/${SLUG}`,
    siteName: BRAND.name,
    type: "article",
    publishedTime: DATE_PUBLISHED,
    images: [{ url: `${SITE_ORIGIN}${IMAGES.earnBonus}`, width: 1024, height: 1024, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_ORIGIN}${IMAGES.earnBonus}`],
  },
};

const ARTICLE_BODY =
  "Alano DT 6 rewards new and returning players through a welcome spin at registration, daily check-in coins, recharge rebates tied to deposit size, a referral program for inviting friends, and a VIP ladder that unlocks bigger perks as lifetime deposits grow. This guide explains how each bonus type works, how to claim it correctly, and how to read the in-app terms before assuming a reward applies to every table.";

const faqs = [
  {
    q: "What is the Alano DT 6 welcome bonus?",
    a: "New accounts typically unlock a welcome spin or first-deposit style offer shortly after registration. Exact values can change with promotions, so always confirm the current offer on the in-app bonus or activity board before depositing.",
  },
  {
    q: "How does the daily check-in bonus work?",
    a: "Opening the app and tapping the check-in button once per day builds a streak that usually pays increasing small rewards. Missing a day can reset the streak, so many players check in at the same time each day as a habit.",
  },
  {
    q: "What is a recharge rebate?",
    a: "A recharge rebate returns a percentage of your deposit amount as bonus credit, rewarding consistent top-ups rather than one-time deposits. Rebate percentages can vary by VIP level and current promotions.",
  },
  {
    q: "How do I earn through the referral program?",
    a: "Share your personal referral code or link with friends. When they register and make a qualifying deposit, you typically receive a commission-style reward, and in some structures your friend gets a bonus too.",
  },
  {
    q: "How do VIP levels work on Alano DT 6?",
    a: "VIP tiers usually rise based on your cumulative deposits or wagering activity over time. Higher tiers can unlock larger rebate percentages, dedicated support, and exclusive check-in or festival rewards.",
  },
];

export default function AlanoDT6BonusesVipGuidePage() {
  return (
    <article className="min-h-screen bg-[#0A1029]">
      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished={DATE_PUBLISHED}
        articleBody={ARTICLE_BODY}
      />

      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 pt-8 text-sm text-gray-400">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href={ROUTES.home} className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={ROUTES.blog} className="hover:text-accent transition-colors">
              Blog
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-accent font-medium" aria-current="page">
            Bonuses & VIP Guide
          </li>
        </ol>
      </nav>

      <header className="max-w-4xl mx-auto px-4 pt-6 pb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#FFA500] mb-6 leading-tight">
          {TITLE}
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Everything Pakistani players ask about welcome spins, check-ins, rebates, referrals, and
          climbing the {BRAND.name} VIP ladder.
        </p>
        <div className="flex items-center justify-center gap-3 text-sm text-gray-400 mt-6">
          <time dateTime={DATE_PUBLISHED}>22 July 2026</time>
          <span>•</span>
          <span>13 min read</span>
        </div>
        <div className="mt-8 flex justify-center">
          <Image
            src={IMAGES.earnBonus}
            alt="Alano DT 6 bonus and VIP rewards center"
            width={220}
            height={220}
            className="object-contain drop-shadow-2xl rounded-xl"
          />
        </div>
      </header>

      <section className="max-w-3xl mx-auto px-4 pb-10">
        <p className="text-gray-300 leading-relaxed mb-5 text-lg">
          Bonuses are one of the biggest reasons players keep coming back to{" "}
          <Link href={ROUTES.home} className="text-accent hover:underline font-semibold">
            Alano DT 6
          </Link>{" "}
          beyond a single session. Between the welcome spin, daily check-ins, recharge rebates,
          referral rewards, and a tiered VIP structure, there is a steady stream of extra value
          available if you know where to look and how each system actually works. This guide
          breaks every bonus type down individually so nothing gets left unclaimed.
        </p>
      </section>

      <section className="bg-secondary py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500] mb-6">
            Welcome Spin: Your First Reward
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Immediately after you{" "}
            <Link
              href="/blog/create-alano-dt-6-account-and-login"
              className="text-accent hover:underline"
            >
              create your account
            </Link>
            , the bonus center usually presents a welcome spin or first-time reward. This is
            designed to let brand-new players see a payout before committing real money, so treat
            it as a taste of the platform rather than a guaranteed jackpot.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Check the exact terms on the bonus screen — some welcome offers require a minimum
            first deposit to unlock, while others are free to claim right after registration.
            Reading the fine print for a minute saves confusion later.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500] mb-6">
            Daily Check-In Rewards
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The check-in system rewards consistency over luck. Opening the app and tapping the
            check-in button once a day builds a streak, and each consecutive day in the streak
            typically pays a slightly larger reward than the last, up to a weekly reset point.
          </p>
          <ul className="space-y-3 text-gray-300 mb-4">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Check in at roughly the same time each day so you never forget.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Missing one day can reset your streak, so treat it like a small daily habit rather than an occasional bonus.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Check-in coins are small individually but add up meaningfully over a full month.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-secondary py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500] mb-6">
            Recharge Rebates Explained
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            A recharge rebate returns a percentage of your JazzCash or EasyPaisa deposit as bonus
            credit. Unlike a one-time welcome offer, rebates are designed to reward regular
            top-ups, which is why the percentage can scale with your VIP level or the size of the
            recharge itself.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Before relying on a rebate, always{" "}
            <Link href={ROUTES.deposit} className="text-accent hover:underline">
              review the deposit process
            </Link>{" "}
            so you know how funds move into your wallet, and confirm the current rebate
            percentage on the bonus board since promotional rates can change during festivals or
            special events.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500] mb-6">
            Referral Program: Earn by Inviting Friends
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Every account gets a personal referral code or shareable link from the invite section.
            When a friend registers using your code and completes a qualifying deposit, the
            referral system typically credits you with a commission-style reward — and depending
            on the current promotion, your friend may receive a welcome boost too.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Share your code honestly with people you know rather than posting it in unrelated
            groups, since some platforms flag unusual referral patterns for review. A handful of
            genuine invites tends to perform better long-term than mass, low-quality sharing.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500] mb-6">
            Climbing the VIP Ladder
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            VIP levels on {BRAND.name} generally rise as your cumulative deposits or wagering
            activity increases over time. Moving up a tier is not about a single big deposit — it
            reflects sustained activity, which is why regular smaller sessions often build VIP
            progress just as effectively as occasional large ones.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">Typical VIP perks can include:</p>
          <ul className="space-y-3 text-gray-300 mb-4">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Higher recharge rebate percentages than base-level accounts.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Priority or dedicated customer support access.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Exclusive check-in bonuses or festival-only reward drops.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Occasional birthday or milestone gifts tied to your account anniversary.</span>
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Track your current tier and progress from the VIP or membership section of your
            profile, since exact thresholds can be adjusted with new updates.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500] mb-6">
            Claiming Bonuses the Smart Way
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The biggest mistake new players make is assuming every bonus applies automatically or
            without conditions. Before treating any reward as spendable, check whether it requires
            a minimum deposit, a wagering requirement before withdrawal, or an expiry window.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Once bonus credit lands in your wallet, treat withdrawals the same way as regular
            winnings — our{" "}
            <Link href={ROUTES.withdraw} className="text-accent hover:underline">
              withdrawal guide
            </Link>{" "}
            covers the standard cash-out steps, and pacing your sessions with our{" "}
            <Link
              href="/blog/alano-dt-6-tips-to-play-smarter"
              className="text-accent hover:underline"
            >
              smarter play tips
            </Link>{" "}
            helps bonus credit last longer at the table.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="bg-[#0A1029] rounded-xl border border-gray-800 p-5 group"
              >
                <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center gap-4">
                  <span>{f.q}</span>
                  <span className="text-accent group-open:rotate-45 transition-transform text-2xl leading-none">
                    +
                  </span>
                </summary>
                <p className="text-gray-300 mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-12 md:py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500] mb-4">
            Claim Your Welcome Spin Today
          </h2>
          <p className="text-gray-300 mb-8">
            Download Alano DT 6, register your account, and start collecting daily rewards.
          </p>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group"
          >
            <span>DOWNLOAD NOW</span>
            <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </div>
          </a>
        </div>
      </section>
    </article>
  );
}
