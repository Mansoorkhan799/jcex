import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { BRAND, IMAGES, SITE_ORIGIN } from "@/lib/siteConfig";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import { MobileMenuProvider } from "@/components/MobileMenuProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06091F",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "Alano DT 6 APK Download Pakistan 2026 – Official",
    template: `%s | ${BRAND.name}`,
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
    "alano dt6",
    "alano dt 6 game",
    "alano dt 6 real money",
    "dragon tiger apk pakistan",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "earning app Pakistan 2026",
  ],
  authors: [{ name: `${BRAND.name} Team` }],
  creator: BRAND.name,
  publisher: BRAND.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: IMAGES.logo, type: "image/webp", sizes: "192x192" },
      { url: IMAGES.logo, type: "image/webp", sizes: "512x512" },
    ],
    apple: [{ url: IMAGES.logo, sizes: "180x180" }],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: SITE_ORIGIN,
  },
  openGraph: {
    title: "Alano DT 6 APK Download Pakistan 2026 – Official",
    description:
      "Download Alano DT 6 APK for Pakistan. Play Dragon Tiger, slots and card games with JazzCash & EasyPaisa withdrawals.",
    url: SITE_ORIGIN,
    siteName: BRAND.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_ORIGIN}${IMAGES.og}`,
        width: 1200,
        height: 630,
        alt: `${BRAND.name} - Dragon Tiger & casino APK for Pakistan`,
      },
      {
        url: `${SITE_ORIGIN}${IMAGES.ogSquare}`,
        width: 800,
        height: 800,
        alt: `${BRAND.name} - Dragon Tiger & casino APK for Pakistan`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alano DT 6 APK Download Pakistan 2026 – Official",
    description:
      "Download Alano DT 6 APK for Pakistan. Play Dragon Tiger, slots and card games with JazzCash & EasyPaisa withdrawals.",
    creator: BRAND.twitter,
    images: [
      {
        url: `${SITE_ORIGIN}${IMAGES.twitter}`,
        width: 1200,
        height: 600,
        alt: `${BRAND.name} - Dragon Tiger & casino APK for Pakistan`,
      },
    ],
  },
  applicationName: BRAND.name,
  category: "Gaming",
  classification: "Dragon Tiger Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16 32x32" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href={IMAGES.logo} type="image/webp" sizes="192x192" />
        <link rel="icon" href={IMAGES.logo} type="image/webp" sizes="512x512" />
        <link rel="apple-touch-icon" href={IMAGES.logo} sizes="180x180" />

        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === "string" &&
          process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
          !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                strategy="lazyOnload"
              />
              <Script id="google-analytics" strategy="lazyOnload">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
              </Script>
            </>
          )}
      </head>
      <body
        className={`${poppins.className} antialiased bg-primary text-white min-h-screen flex flex-col`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <MobileMenuProvider>
          <Header />
          <main className="relative z-10">{children}</main>
          <DeferredStyles />
          <Footer />
          <ScrollToTopWrapper />
        </MobileMenuProvider>
        <WebVitalsTracker />

        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: BRAND.name,
              url: SITE_ORIGIN,
              logo: `${SITE_ORIGIN}${IMAGES.logo}`,
              description: `${BRAND.name} is a Dragon Tiger and casino-style earning platform for Pakistani Android users with JazzCash and EasyPaisa support.`,
              sameAs: [`https://twitter.com/alanodt6`],
            }),
          }}
        />

        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: BRAND.name,
              operatingSystem: "Android",
              applicationCategory: "GameApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "PKR",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: BRAND.ratingValue,
                bestRating: "5",
                ratingCount: BRAND.ratingCount,
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
