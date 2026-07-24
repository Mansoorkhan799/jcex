import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import BlogPostSchema from "@/components/BlogPostSchema";
import { BRAND, ROUTES, SITE_ORIGIN, DOWNLOAD_URL, IMAGES } from "@/lib/siteConfig";

const SLUG = "create-alano-dt-6-account-and-login";
const TITLE = "Create Alano DT 6 Account & Login (Captcha + IP Tips)";
const DESCRIPTION =
  "Step-by-step Alano DT 6 registration and login guide for Pakistan, including captcha and IP limit fixes.";
const DATE_PUBLISHED = "2026-07-21";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "create alano dt 6 account",
    "alano dt 6 login",
    "alano dt 6 registration",
    "alano dt 6 captcha error",
    "alano dt 6 ip exceed",
    "alanodt6 sign up",
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
    images: [{ url: `${SITE_ORIGIN}${IMAGES.bindMail}`, width: 1024, height: 1024, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_ORIGIN}${IMAGES.bindMail}`],
  },
};

const ARTICLE_BODY =
  "Creating an Alano DT 6 account starts with entering your Pakistani mobile number, confirming the OTP code, and setting a strong password, after which login uses the same number and password on every device. This guide also explains how to fix captcha verification failures and the IP address limit exceeded error that some players see on shared Wi-Fi or campus networks, then points to the deposit guide for the next step.";

const faqs = [
  {
    q: "What do I need to register on Alano DT 6?",
    a: "You need an active Pakistani mobile number that can receive an SMS OTP, plus a password you have not reused elsewhere. Binding an email afterward is optional but recommended for account recovery.",
  },
  {
    q: "Why does Alano DT 6 keep failing the captcha?",
    a: "Captcha failures are usually caused by a slow or unstable connection, an outdated app build, or moving the slider too quickly. Switch to a stronger connection, update the app from the official download page, and complete the puzzle slowly and deliberately.",
  },
  {
    q: "What does the IP exceed error mean?",
    a: "This error appears when too many accounts have registered or logged in from the same public IP address, common on shared campus Wi-Fi, office networks, or crowded mobile towers. Switching to mobile data, waiting a few minutes, or connecting to a different Wi-Fi network usually resolves it.",
  },
  {
    q: "Can I use a VPN to fix login issues on Alano DT 6?",
    a: "A VPN can sometimes change your IP and temporarily resolve the exceed error, but it can also trigger extra verification steps. Try switching networks naturally first before relying on a VPN.",
  },
  {
    q: "I forgot my Alano DT 6 password. What now?",
    a: "Use the forgot password option on the login screen, verify with your registered mobile number or bound email, then set a new password immediately.",
  },
];

export default function CreateAlanoDT6AccountAndLoginPage() {
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
            Create Account & Login
          </li>
        </ol>
      </nav>

      <header className="max-w-4xl mx-auto px-4 pt-6 pb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#FFA500] mb-6 leading-tight">
          {TITLE}
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Register, verify with OTP, and fix the two most common login blockers — captcha
          failures and the IP limit exceeded message.
        </p>
        <div className="flex items-center justify-center gap-3 text-sm text-gray-400 mt-6">
          <time dateTime={DATE_PUBLISHED}>21 July 2026</time>
          <span>•</span>
          <span>9 min read</span>
        </div>
        <div className="mt-8 flex justify-center">
          <Image
            src={IMAGES.bindMail}
            alt="Alano DT 6 account registration and login screen"
            width={220}
            height={220}
            className="object-contain drop-shadow-2xl rounded-xl"
          />
        </div>
      </header>

      <section className="max-w-3xl mx-auto px-4 pb-10">
        <p className="text-gray-300 leading-relaxed mb-5 text-lg">
          Before you can spin the welcome bonus or sit at a Dragon Tiger table on{" "}
          <Link href={ROUTES.home} className="text-accent hover:underline font-semibold">
            Alano DT 6
          </Link>
          , you need a working account. For most players this takes under two minutes, but a
          small number run into a captcha loop or an IP limit message on their first attempt.
          This guide covers registration, login, and both of those fixes in plain steps.
        </p>
      </section>

      <section className="bg-secondary py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500] mb-10 text-center">
            Step-by-Step Registration
          </h2>
          <ol className="space-y-6 list-none">
            <li className="bg-[#0A1029] rounded-xl p-6 border border-gray-800">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center text-lg font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Open the App and Tap Register</h3>
                  <p className="text-gray-300 leading-relaxed">
                    After installing the APK from our{" "}
                    <Link href={ROUTES.download} className="text-accent hover:underline">
                      download page
                    </Link>
                    , open Alano DT 6 and select the register or sign-up option on the welcome
                    screen.
                  </p>
                </div>
              </div>
            </li>
            <li className="bg-[#0A1029] rounded-xl p-6 border border-gray-800">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center text-lg font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Enter Your Mobile Number</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Type your active Pakistani mobile number carefully. This number will also be
                    tied to your JazzCash or EasyPaisa wallet later, so accuracy matters.
                  </p>
                </div>
              </div>
            </li>
            <li className="bg-[#0A1029] rounded-xl p-6 border border-gray-800">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center text-lg font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Verify with the OTP Code</h3>
                  <p className="text-gray-300 leading-relaxed">
                    An SMS with a one-time code arrives within seconds. Enter it exactly as
                    received — never forward this code to anyone, including someone claiming to
                    be Alano DT 6 support.
                  </p>
                </div>
              </div>
            </li>
            <li className="bg-[#0A1029] rounded-xl p-6 border border-gray-800">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center text-lg font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Set a Strong Password</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Mix letters, numbers, and a symbol. Avoid reusing a password from your bank,
                    JazzCash, or EasyPaisa apps so an issue on one platform never affects another.
                  </p>
                </div>
              </div>
            </li>
            <li className="bg-[#0A1029] rounded-xl p-6 border border-gray-800">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center text-lg font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Bind an Email (Recommended)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    From your profile settings, add and verify an email address. This gives you a
                    second recovery path if you ever lose access to your SIM.
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500] mb-6">
            Logging In After Registration
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Once your account exists, login only needs your registered mobile number and
            password. If you switch phones, the same credentials carry over — you do not need to
            register again. Keep the app updated from the official download page so login
            screens, captcha checks, and security patches stay current.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500] mb-6">
            Fixing Captcha Verification Failures
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Captcha checks exist to stop automated bots from mass-registering accounts, but they
            can occasionally frustrate real players too. If your captcha keeps failing:
          </p>
          <ul className="space-y-3 text-gray-300 mb-4">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Switch to a faster or more stable internet connection before retrying.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Move any slider or puzzle piece slowly instead of dragging it quickly.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Close and reopen the app to refresh the captcha session if it appears frozen.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Make sure you are running the latest APK build from {BRAND.domain}, since older builds sometimes carry outdated captcha scripts.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500] mb-6">
            Fixing the &ldquo;IP Exceed&rdquo; Login Limit
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Many Pakistani players run into the IP address limit exceeded message while on shared
            Wi-Fi at home, in a hostel, or at a workplace. It happens because the platform caps how
            many accounts can register or log in from the same public IP within a short window —
            a safeguard against bulk fake-account creation, not a personal ban.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">Try these fixes in order:</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-4">
            <li>Turn off Wi-Fi and log in using mobile data instead.</li>
            <li>If already on mobile data, toggle airplane mode on and off to refresh your IP.</li>
            <li>Wait 10–15 minutes and try again, since the limit resets over time.</li>
            <li>Avoid public or campus Wi-Fi during peak registration hours if this keeps recurring.</li>
            <li>As a last resort, try a different trusted network rather than an unfamiliar VPN.</li>
          </ol>
          <p className="text-gray-300 leading-relaxed">
            If none of these work after a reasonable wait, contact support through the in-app help
            option so a human can review the specific error.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500] mb-6">
            Securing Your New Account
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            With registration and login sorted, spend two more minutes locking your account down
            before you deposit anything. Bind your email, avoid saving your password in shared
            browser autofill, and never share your OTP or bank password with anyone. For a
            broader look at platform trust and payment safety, read our{" "}
            <Link
              href="/blog/is-alano-dt-6-safe-pakistan"
              className="text-accent hover:underline font-semibold"
            >
              safety review
            </Link>
            .
          </p>
          <p className="text-gray-300 leading-relaxed">
            Once your login is stable, the natural next step is funding your wallet. Our{" "}
            <Link href={ROUTES.deposit} className="text-accent hover:underline font-semibold">
              deposit money guide
            </Link>{" "}
            covers JazzCash and EasyPaisa top-ups from your first login onward, and the{" "}
            <Link href={ROUTES.withdraw} className="text-accent hover:underline font-semibold">
              withdrawal guide
            </Link>{" "}
            explains how to cash out later.
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
            Ready to Register and Start Playing?
          </h2>
          <p className="text-gray-300 mb-8">
            Download the official APK, create your account in minutes, then fund your wallet
            safely.
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
