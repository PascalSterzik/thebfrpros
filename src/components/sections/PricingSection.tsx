"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import Stars from "@/components/shared/Stars";
import { PRICING, STATS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// §Pascal-2026-05-08 v6: 11 bonuses (CEU credit application moved into the
// core offer, not a bonus). Total advertised: $654 courses + $800 bonuses =
// $1,454. Save $1,005 at $449. Plus up to $640 in real cuff-discount savings.
const INCLUDES: { line: string; value?: string }[] = [
  { line: "Course 1: Introduction to BFR Training (5.5 CEUs)", value: "$349" },
  { line: "Course 2: BFR Masters Series Clinical Rounds (2.25 CEUs)", value: "$147" },
  { line: "Course 3: What's New in BFR 2021 Webinar (2 CEUs)", value: "$79" },
  { line: "Course 4: Device Features 2024 Webinar (2 CEUs)", value: "$79" },
  { line: "11 implementation bonuses (screening forms, RPE tools, private FB group, marketing video, and more)", value: "$800" },
  { line: "Up to $640 in real cuff-discount savings (Delfi, SmartCuffs, B Strong, etc.)" },
  { line: "Lifetime access", value: "Included" },
];

const TOTAL = INCLUDES.reduce(
  (sum, x) => sum + (x.value && x.value.startsWith("$") ? parseInt(x.value.replace(/[$,]/g, ""), 10) : 0),
  0,
);

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
            ${PRICING.bundlePrice}. One bundle. <span className="underline-accent">Everything in.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-ink/80"
          >
            No tiered pricing. No upsells. No equipment in the cart. The total advertised value is{" "}
            <span className="font-semibold text-navy">
              ${PRICING.bundleValue.toLocaleString("en-US")}
            </span>{" "}
            when each component is priced separately. You pay ${PRICING.bundlePrice} for the whole bundle and save{" "}
            <span className="font-semibold text-accent">${PRICING.savings.toLocaleString("en-US")}</span>.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-relaxed text-muted"
          >
            {PRICING.contentHours} hours of video content. {PRICING.completionPace}, your pace. Lifetime access. {PRICING.guaranteeDays}-day money-back guarantee. Only 1 of {STATS.certifiedPractitioners} graduates has ever taken it.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6 flex justify-center">
            <Stars variant="light" size="md" />
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
                Single bundle · everything included
              </div>

              <header className="flex flex-wrap items-end justify-between gap-4 pt-2">
                <div>
                  <p className="small-caps-line text-muted">The Complete BFR Certification</p>
                  <div className="mt-3 flex items-baseline gap-3">
                    <p className="font-display text-5xl text-navy leading-none sm:text-6xl">
                      ${PRICING.bundlePrice}
                    </p>
                    <p className="text-base text-muted line-through tabular-nums">
                      ${PRICING.bundleValue.toLocaleString("en-US")}
                    </p>
                  </div>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    <span aria-hidden>↓</span>
                    You save ${PRICING.savings.toLocaleString("en-US")}
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
                {INCLUDES.map((item) => (
                  <li
                    key={item.line}
                    className="grid grid-cols-[18px_1fr_auto] items-start gap-3 text-base text-ink"
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
                    <p className="text-sm sm:text-base">{item.line}</p>
                    {item.value && (
                      <span className="text-xs sm:text-sm font-semibold text-muted tabular-nums whitespace-nowrap">
                        {item.value}
                      </span>
                    )}
                  </li>
                ))}
                <li className="grid grid-cols-[18px_1fr_auto] items-baseline gap-3 border-t border-line pt-4 mt-4">
                  <span aria-hidden className="text-accent">∑</span>
                  <p className="text-sm sm:text-base font-semibold text-navy">Total advertised value</p>
                  <span className="text-base font-display text-navy tabular-nums whitespace-nowrap">
                    ${TOTAL.toLocaleString("en-US")}
                  </span>
                </li>
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
