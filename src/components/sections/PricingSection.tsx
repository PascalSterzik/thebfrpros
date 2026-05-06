"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import { PRICING, STATS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

const INCLUDES = [
  "Full Complete BFR Certification: 4 courses, 37 modules",
  `${STATS.ceus} CEUs (BOC + state PT boards, APTA + NATA recognized)`,
  "All 11 implementation bonuses (screening forms, RPE tools, discount codes, private FB group)",
  "Lifetime access to all course material and quarterly research updates",
  "Module-by-module bibliography with PubMed links to every cited study",
  "Certificate of Completion you can submit for clinic reimbursement",
  "Direct access to Dr. Rolnick in the private practitioner community",
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="grid gap-12 lg:grid-cols-12"
        >
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <SectionLabel label="The investment" />
            <h2 className="mt-5 font-display text-display-xl text-navy text-balance">
              {PRICING.currencySymbol}
              {PRICING.bundlePrice}. One bundle. Everything in.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/80">
              No tiered pricing. No upsells. No equipment in the cart. The total value is{" "}
              <span className="font-semibold text-navy">
                {PRICING.currencySymbol}
                {PRICING.bundleValue}
              </span>{" "}
              when each component is priced separately. You pay {PRICING.currencySymbol}
              {PRICING.bundlePrice} for the whole bundle.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Average completion: {PRICING.averageCompletionWeeks} weeks at 2-3 modules per week. {PRICING.guaranteeDays}-day money-back guarantee, no questions asked.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-7">
            <article className="relative rounded-3xl border border-line bg-cream/60 p-8 lg:p-10 shadow-navy-md">
              <div className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                Single bundle
              </div>

              <header className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="small-caps-line text-muted">The Complete BFR Certification</p>
                  <p className="mt-3 font-display text-5xl text-navy leading-none sm:text-6xl">
                    {PRICING.currencySymbol}
                    {PRICING.bundlePrice}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    <span className="line-through opacity-60">
                      {PRICING.currencySymbol}
                      {PRICING.bundleValue} retail value
                    </span>{" "}
                    · save {PRICING.currencySymbol}
                    {PRICING.savings}
                  </p>
                </div>
                <div className="rounded-full bg-white px-4 py-2 text-xs font-medium text-navy ring-1 ring-line">
                  ★ {STATS.ratingValue} from {STATS.reviewCount} reviews
                </div>
              </header>

              <ul className="mt-8 space-y-3 border-t border-line pt-7">
                {INCLUDES.map((line) => (
                  <li key={line} className="grid grid-cols-[18px_1fr] items-start gap-3 text-base text-ink">
                    <span aria-hidden className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent/12 text-accent">
                      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5.4L4 7.8l4.5-5.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p>{line}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <PrimaryCTA size="lg" hint={`${PRICING.guaranteeDays}-day money-back guarantee · Lifetime access`} />
              </div>
            </article>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
