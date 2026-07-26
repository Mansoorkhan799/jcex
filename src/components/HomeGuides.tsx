"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageBannerPattern } from "@/components/BoxPattern";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/Motion";
import { ARTICLES } from "@/lib/siteConfig";

export default function HomeGuides() {
  return (
    <section className="border-y border-slate-200 bg-white py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="max-w-2xl">
          <p className="section-kicker">Guides & tips</p>
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">Tracking guides</h2>
          <p className="mt-2 text-ink-mute">
            Step-by-step help for common JCEX shipping and tracking questions.
          </p>
        </FadeIn>
        <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <StaggerItem key={a.slug}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
              >
                <Link
                  href={`/${a.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-slate-200 bg-paper shadow-sm transition hover:border-navy-200 hover:shadow-soft"
                >
                  <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-700">
                    <PageBannerPattern opacity={0.45} />
                    <span className="relative h-16 w-16 overflow-hidden rounded-xl shadow-md ring-1 ring-white/15 transition duration-500 group-hover:scale-105">
                      <Image
                        src={a.image}
                        alt={a.title}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                        sizes="64px"
                      />
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-ink group-hover:text-navy-800 line-clamp-2">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-mute line-clamp-2">
                      {a.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      Read guide
                      <span aria-hidden className="transition group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
