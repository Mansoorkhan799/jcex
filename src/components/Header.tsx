"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BRAND, IMAGES, ROUTES } from "@/lib/siteConfig";

const navLinks = [
  { href: ROUTES.home, label: "Track" },
  { href: ROUTES.blog, label: "Blog" },
  { href: ROUTES.about, label: "About Us" },
  { href: ROUTES.contact, label: "Contact Us" },
  { href: ROUTES.disclaimer, label: "Disclaimer" },
  { href: ROUTES.privacy, label: "Privacy Policy" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2.5 group" aria-label={`${BRAND.name} home`}>
          <span className="relative h-9 w-9 overflow-hidden rounded-lg shadow-sm ring-1 ring-navy-100">
            <Image
              src={IMAGES.logo}
              alt={`${BRAND.name} logo`}
              width={36}
              height={36}
              className="object-cover"
              priority
            />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink group-hover:text-navy-800 transition-colors md:text-xl">
            <span className="text-brand">JC</span>
            <span className="text-navy-800">EX</span>
            <span className="ml-1.5 font-semibold text-ink">Tracking</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative pb-0.5 text-sm font-semibold transition-colors ${
                isActive(href) ? "text-navy-800" : "text-ink hover:text-navy-700"
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-brand transition-all duration-300 ${
                  isActive(href) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink hover:bg-slate-100 lg:hidden focus-ring"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-lg px-3 py-3 text-base font-semibold ${
                    isActive(href) ? "bg-navy-100 text-navy-900" : "text-ink hover:bg-slate-50"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
