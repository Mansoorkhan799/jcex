"use client";

import Image from "next/image";
import HoneycombBackground from "@/components/HoneycombBackground";
import TrackingWidget from "@/components/TrackingWidget";
import { BRAND, IMAGES } from "@/lib/siteConfig";

export default function HomeHero() {
  return (
    <section className="relative min-h-[min(92vh,820px)] overflow-hidden text-white">
      <HoneycombBackground />

      <div className="relative z-10 mx-auto flex min-h-[min(92vh,820px)] max-w-4xl flex-col items-center justify-center px-4 pb-16 pt-14 text-center md:px-6 md:pt-20">
        <Image
          src={IMAGES.brandLogo}
          alt={`${BRAND.name} logo`}
          width={96}
          height={96}
          priority
          className="mb-6 rounded-2xl shadow-lift ring-1 ring-white/20"
        />

        <h1 className="font-display text-4xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl">
          JCEX Tracking
        </h1>

        <p className="mt-3 max-w-xl text-lg text-white/90 md:text-xl">
          Track orders &amp; shipments worldwide
        </p>

        <p className="mt-2 text-sm font-medium tracking-wide text-white/70">
          jcextracking.net
        </p>

        <div className="mt-8 w-full max-w-xl">
          <TrackingWidget />
        </div>
      </div>
    </section>
  );
}
