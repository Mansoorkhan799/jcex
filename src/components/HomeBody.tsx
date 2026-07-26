"use client";

import MarkdownContent from "@/components/MarkdownContent";
import FaqAccordion from "@/components/FaqAccordion";
import { FeatureCards, StepCards } from "@/components/FeatureCards";
import { FadeIn } from "@/components/motion/Motion";
import { HOME_FAQS } from "@/lib/siteConfig";

export default function HomeBody({
  beforeSteps,
  afterSteps,
}: {
  beforeSteps: string;
  afterSteps: string;
}) {
  return (
    <>
      <section className="bg-paper py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <FadeIn>
            <p className="section-kicker">Why shoppers trust us</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Why Choose Us?
            </h2>
            <p className="mt-2 max-w-2xl text-ink-mute">
              Built for JCEX Express parcels — clear updates, multi-carrier support, and a simple tracking flow.
            </p>
          </FadeIn>
          <div className="mt-10">
            <FeatureCards />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
          <MarkdownContent content={beforeSteps} />
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-4 md:px-6">
          <FadeIn className="mb-8 text-center md:mb-10">
            <p className="section-kicker">Quick start</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Track in three simple steps
            </h2>
          </FadeIn>
          <StepCards />
        </div>

        {afterSteps ? (
          <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:pb-16">
            <MarkdownContent content={afterSteps} />
          </div>
        ) : null}
      </section>

      <section className="border-t border-slate-200/80 bg-paper py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <FadeIn>
            <p className="section-kicker">Help center</p>
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
              FAQs About JCEX Tracking
            </h2>
            <p className="mt-2 mb-8 text-ink-mute">
              Quick answers to the questions shoppers ask most.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <FaqAccordion faqs={HOME_FAQS} />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
