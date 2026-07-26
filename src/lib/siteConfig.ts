/** Central brand / domain config for JCEX Tracking */
export const SITE_ORIGIN = "https://jcextracking.net";

export const BRAND = {
  name: "JCEX Tracking",
  shortName: "JCEX Tracking",
  keyword: "jcex tracking",
  domain: "jcextracking.net",
  email: "contact@jcextracking.net",
  twitter: "@jcextracking",
  tagline: "Track Orders & Shipments Worldwide",
  description:
    "JCEX Tracking helps you track JCEX Express packages worldwide with real-time shipment updates, multi-carrier status, and clear delivery timelines.",
} as const;

/** Official JCEX logistics site (optional outbound link) */
export const OFFICIAL_URL = "https://www.jcex.com";

export const ROUTES = {
  home: "/",
  about: "/about-us",
  blog: "/category/blog",
  contact: "/contact-us",
  privacy: "/privacy-policy",
  disclaimer: "/disclaimer",
} as const;

export const IMAGES = {
  logo: "/images/jcex-tracking-logo.webp",
  favicon: "/favicon.webp",
  brandLogo: "/images/jcex-tracking-logo.webp",
  banner: "/images/jcex-tracking.webp",
  og: "/images/og-image.webp",
  ogSquare: "/feature/og-image-square.webp",
  twitter: "/feature/twitter-card.webp",
  website: "/images/jcex-tracking.webp",
} as const;

export const ARTICLES = [
  {
    slug: "jcex-tracking-shows-no-updates-yet",
    title: 'JCEX Tracking Shows "No Updates Yet"?',
    metaTitle: 'JCEX Tracking Shows "No Updates Yet"? Causes & Fixes',
    description:
      "JCEX tracking shows no updates yet? Learn why it happens, how long to wait, and proven ways to track your shipment correctly.",
    date: "2026-04-15",
    image: "/images/jcex-tracking.webp",
  },
  {
    slug: "jcex-tracking-not-updating",
    title: "JCEX Tracking Not Updating? Causes & Proven Fixes (2026 Guide)",
    metaTitle: "JCEX Tracking Not Updating? Causes & Proven Fixes",
    description:
      "JCEX tracking not updating? Learn the most common causes, how long international silence lasts, and what to do when your package seems stuck.",
    date: "2026-04-10",
    image: "/images/jcex-tracking.webp",
  },
  {
    slug: "how-to-track-your-jcex-order-in-2026",
    title: "How to Track Your JCEX Shipment in 2026? A Complete Guide",
    metaTitle: "How to Track Your JCEX Shipment in 2026? A Complete Guide",
    description:
      "Track your JCEX Express shipment in 2026 with our step-by-step guide. Learn how to check status, delivery time, and fixes for delays.",
    date: "2026-03-20",
    image: "/images/jcex-tracking.webp",
  },
  {
    slug: "how-to-track-your-jcex-shipment-guide",
    title: "How to Track Your JCEX Package with JCEXTracking.net",
    metaTitle: "How to Track Your JCEX Package? A Step-by-Step Guide",
    description:
      "Learn how to track JCEX packages using your tracking number, fix common tracking issues, and understand realistic delivery times.",
    date: "2025-12-15",
    image: "/images/jcex-tracking.webp",
  },
  {
    slug: "jcex-shipping-methods-guide",
    title: "JCEX Shipping Methods Guide | Express, Economy & International Options",
    metaTitle: "JCEX Shipping Methods Guide | A Detailed Comparison",
    description:
      "Compare JCEX Express and related international shipping options with average delivery times, tracking quality, and when to choose each method.",
    date: "2025-12-01",
    image: "/images/jcex-tracking.webp",
  },
] as const;

export const HOME_FAQS = [
  {
    q: "How long does JCEX take to deliver to the United States?",
    a: "Economy routes often take 30–60 days, standard international services typically deliver in 15–30 days, and express courier options can complete delivery in about 3–10 days depending on origin and customs.",
  },
  {
    q: "Why hasn’t my JCEX tracking number started working?",
    a: "Tracking numbers activate when the carrier receives and scans the package, which may take 3–7 days after a seller marks an order as shipped.",
  },
  {
    q: "Can I track JCEX packages without a tracking number?",
    a: "No. Accurate tracking requires the unique tracking number assigned to your shipment.",
  },
  {
    q: "What happens if my JCEX package is returned to the sender?",
    a: "If your package returns to the sender, contact the seller or shipper immediately to understand why and request a reshipment or refund options.",
  },
  {
    q: "How do I track JCEX orders after they enter my country?",
    a: "Once the parcel clears customs, it often transfers to a local postal or courier network. Universal trackers and the local carrier’s site usually show the most timely last-mile updates.",
  },
  {
    q: "Why do some sellers provide fake tracking numbers?",
    a: "A small number of dishonest sellers provide invalid or unrelated numbers to look like they shipped. Cross-check the number on multiple platforms and contact support if it never activates.",
  },
  {
    q: "What should I do if my JCEX package shows delivered, but I didn’t receive it?",
    a: "Check with neighbors and building staff, confirm the delivery address, then contact the local carrier and the seller. Open a dispute or claim if you still cannot locate the package.",
  },
  {
    q: "Can I speed up JCEX shipping after ordering?",
    a: "Once a shipment is in transit, you usually cannot upgrade to a faster service. Choose express options before checkout when speed matters.",
  },
  {
    q: "How accurate are JCEX estimated delivery dates?",
    a: "Estimated dates are useful guidance based on typical transit times, but customs, weather, and peak seasons can push real delivery later.",
  },
] as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/",
  twitter: "https://x.com/",
  instagram: "https://www.instagram.com/",
  youtube: "https://www.youtube.com/",
} as const;
