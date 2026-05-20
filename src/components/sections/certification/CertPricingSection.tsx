"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { CERTIFICATION } from "@/content/certification";
import { ENROLL_URL, PRICING } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// HARD RULE, do NOT re-invert (copywriting-principles.md §18 / gotcha #97 /
// feedback_bonus_sequencing): the price anchors to the CORE certification
// ONLY. Zero bonuses inside whatYouGet. Bonuses are revealed AFTER this
// section as a free surprise on top of the already-shown $449 (see
// CertBonusesSection). Reversing this folds bonus value into the price
// anchor and collapses the perceived-value multiplier.
//
// Refund terms render PROXIMATE to the CTA per compliance gate (FTC).
export default function CertPricingSection() {
  const { pricing } = CERTIFICATION;
  return (
    <section id="pricing" className="section-wrap bg-white" aria-label="What the certification costs">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={pricing.label} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {pricing.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-ink/85 text-left"
          >
            {pricing.priceFrame}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mt-12 mx-auto max-w-2xl"
        >
          <article className="relative rounded-lg border border-line bg-cream/60 p-7 lg:p-10 shadow-[0_30px_60px_-30px_rgba(25,55,99,0.32)]">
            <div className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
              The certification
            </div>

            <header className="pt-2">
              <p className="small-caps-line text-muted">The Complete BFR Certification</p>
              <p className="mt-3 font-display text-5xl text-navy leading-none sm:text-6xl">
                {PRICING.currencySymbol}{PRICING.bundlePrice}
              </p>
            </header>

            <ul className="mt-7 space-y-3 border-t border-line pt-6">
              {pricing.whatYouGet.map((line) => (
                <li
                  key={line}
                  className="grid grid-cols-[18px_1fr] items-start gap-3 text-base text-ink"
                >
                  <span
                    aria-hidden
                    className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent/12 text-accent"
                  >
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M1.5 5.4L4 7.8l4.5-5.6"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="text-sm sm:text-base">{line}</p>
                </li>
              ))}
            </ul>

            <p className="mt-7 text-sm leading-relaxed text-muted">
              {pricing.refundTermsAboveCta}
            </p>

            <a
              href={ENROLL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-4 font-display text-2xl sm:text-3xl uppercase tracking-tight text-white transition hover:bg-accent-deeper"
              style={{ letterSpacing: "-0.015em" }}
            >
              {pricing.primaryCta}
            </a>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
