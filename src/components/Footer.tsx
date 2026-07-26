import Link from "next/link";
import Image from "next/image";
import { ARTICLES, BRAND, IMAGES, ROUTES } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-navy-900/40 bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-2.5">
              <Image
                src={IMAGES.logo}
                alt=""
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="font-display text-lg font-bold text-white">
                <span className="text-brand">JC</span>EX Tracking
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Independent package tracking for JCEX Express and multi-carrier shipments. Real-time
              updates so you always know where your order is.
            </p>
            <p className="mt-3 text-xs text-slate-500">
              Not affiliated with JCEX Express or its parent companies.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href={ROUTES.home} className="hover:text-brand transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href={ROUTES.blog} className="hover:text-brand transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={ROUTES.about} className="hover:text-brand transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={ROUTES.contact} className="hover:text-brand transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href={ROUTES.privacy} className="hover:text-brand transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={ROUTES.disclaimer} className="hover:text-brand transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
              Guides
            </h2>
            <ul className="space-y-2.5 text-sm">
              {ARTICLES.slice(0, 4).map((a) => (
                <li key={a.slug}>
                  <Link href={`/${a.slug}`} className="hover:text-brand transition-colors line-clamp-1">
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-400">
              <a href={`mailto:${BRAND.email}`} className="hover:text-brand transition-colors">
                {BRAND.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved. |{" "}
            <Link href="/" className="hover:text-brand">
              {BRAND.domain}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
