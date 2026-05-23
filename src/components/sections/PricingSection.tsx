"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import Stars from "@/components/shared/Stars";
import { PRICING, STATS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// CORE OFFER ONLY. HARD RULE, do NOT re-invert (copywriting-principles.md §18 /
// gotcha #97 / feedback_bonus_sequencing): the price anchors to the
// certification ALONE. Zero bonuses, zero cuff-savings, no total-value math in
// this section. The 11 bonuses are revealed AFTER this section as a free
// surprise on top of the already-shown $449 (BonusesSection); the full value
// math appears only in the Value Stack recap that follows (ValueStackSection).
const WHAT_YOU_GET: string[] = [
  "37 modules across 4 courses, 11.75 hours of video, 11.75 CEUs",
  "Self-paced and on-demand. Do it in a weekend or take 4 weeks",
  "Equipment-agnostic: runs on the cuffs your clinic already owns",
  "Approved for CEUs with concrete boards and dates, within APTA scope and NATA-approved",
  "Lifetime access, including every future update",
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
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="The investment" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy"
          >
            ${PRICING.bundlePrice}. One certification. <span className="underline-accent">No fake tiers</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-ink/80"
          >
            No tiered pricing. No upsells. No equipment in the cart. ${PRICING.bundlePrice} for all 37 modules, {PRICING.contentHours} hours of video, and {PRICING.contentHours} CEUs, taught by the author of 72+ peer-reviewed BFR publications who still treats patients weekly. The certification is worth the ${PRICING.bundlePrice} on its own, before anything else is added to it.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-relaxed text-muted"
          >
            {PRICING.completionPace}, your pace. Lifetime access. {PRICING.guaranteeDays}-day money-back guarantee. Only 1 of {STATS.certifiedPractitioners} graduates has ever taken it.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6 flex justify-center">
            <Stars variant="light" size="md" linkTo="/reviews" />
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 mx-auto max-w-2xl"
        >
          <motion.div variants={fadeUp}>
            <article className="relative rounded-lg border border-line bg-cream/60 p-7 lg:p-10 shadow-[0_30px_60px_-30px_rgba(25,55,99,0.32)]">
              <div className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                The certification
              </div>

              {/* Combined-CEU banner: the all-courses.png (11.75 CEUs total)
                  peeks off the top-right corner, same 3D-peek treatment as
                  the per-course curriculum banners and the value-stack
                  combined banner. */}
              <span
                aria-hidden
                className="pointer-events-none absolute -top-3 -right-1 sm:-top-4 sm:-right-2 block"
              >
                <Image
                  src="/images/ceus/all-courses.png"
                  alt=""
                  width={160}
                  height={88}
                  className="h-auto w-[55px] sm:w-[70px] lg:w-[80px] drop-shadow-[0_12px_22px_rgba(25,55,99,0.2)]"
                />
              </span>

              <header className="flex flex-wrap items-end justify-between gap-4 pt-2">
                <div>
                  <p className="small-caps-line text-muted">The Complete BFR Certification</p>
                  <p className="mt-3 font-display text-5xl text-navy leading-none sm:text-6xl">
                    ${PRICING.bundlePrice}
                  </p>
                </div>
                <div className="hidden sm:block relative w-32 h-24 lg:w-40 lg:h-28 shrink-0 -rotate-3 rounded-md overflow-hidden ring-1 ring-line shadow-md">
                  <Image
                    src="/images/guarantee/certificate.png"
                    alt="Sample BFR Pros course-completion certificate"
                    fill
                    sizes="(max-width: 1024px) 128px, 160px"
                    className="object-cover"
                  />
                </div>
              </header>

              <ul className="mt-7 space-y-3 border-t border-line pt-6">
                {WHAT_YOU_GET.map((line) => (
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

              <div className="mt-8">
                <PrimaryCTA
                  size="lg"
                  label={`Enroll Now for Just $${PRICING.bundlePrice}`}
                  secondary={`Lifetime access · ${PRICING.guaranteeDays}-day money-back guarantee`}
                  hint={`1 of ${STATS.certifiedPractitioners} graduates has ever taken the refund`}
                />
              </div>
            </article>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
