"use client";

import { motion } from "framer-motion";
import type { Variant } from "@/content/variants";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import SectionLabel from "@/components/shared/SectionLabel";
import { PRICING, STATS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

function Highlighted({ text, phrase }: { text: string; phrase: string }) {
  const i = text.indexOf(phrase);
  if (i === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className="underline-accent">{phrase}</span>
      {text.slice(i + phrase.length)}
    </>
  );
}

export default function FinalCTABlock({ variant }: { variant: Variant }) {
  return (
    <section className="section-wrap navy-field" aria-label="Final call to action">
      <div className="container-narrow text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="Last call" variant="light" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-2xl text-white text-balance"
          >
            <Highlighted text={variant.finalCta.headline} phrase="which clinic answers" />
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-7 mx-auto max-w-2xl text-lg leading-relaxed text-white/80"
          >
            {variant.finalCta.subhead}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex justify-center"
          >
            <PrimaryCTA
              size="lg"
              label="Get BFR Certified From Home"
              secondary="Be quick. Patient demand is rising."
              starsVariant="dark"
              hint={`${PRICING.guaranteeDays}-day money-back guarantee · 1 of ${STATS.certifiedPractitioners} graduates has ever taken it`}
            />
          </motion.div>

          <motion.aside
            variants={fadeUp}
            className="mt-14 mx-auto max-w-prose-narrow rounded-lg border border-accent/40 bg-accent/[0.08] p-7 text-center"
            aria-label="Cost of inaction"
          >
            <p className="small-caps-line text-accent">A warning</p>
            <p className="mt-3 text-base leading-relaxed text-white/90">
              {variant.finalCta.warning}
            </p>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}
