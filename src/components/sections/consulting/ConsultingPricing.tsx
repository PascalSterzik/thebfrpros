"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { CONSULTING_PRICING } from "@/content/consulting";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Pricing. Shown plainly ($275/hour) on a navy field for emphasis. This is the
// deliberate exception to the brand guide's no-price-top-of-funnel rule: it is
// the offer's own page and the budget qualifier needs the number. No bonus
// stack, so the bonus-sequencing rule does not apply.

function Check() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="mt-1 shrink-0 text-accent-softer"
    >
      <path
        d="M5 12.5l4 4 10-10"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ConsultingPricing() {
  return (
    <section className="section-wrap navy-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={CONSULTING_PRICING.eyebrow} variant="light" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-white text-balance"
          >
            {CONSULTING_PRICING.headline}
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-baseline justify-center gap-3"
          >
            <span className="font-display text-display-2xl text-white">
              {CONSULTING_PRICING.rate}
            </span>
            <span className="text-lg text-white/70">{CONSULTING_PRICING.rateUnit}</span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-white/80"
          >
            {CONSULTING_PRICING.note}
          </motion.p>

          <motion.ul
            variants={fadeUp}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left"
          >
            {CONSULTING_PRICING.includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/85">
                <Check />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
