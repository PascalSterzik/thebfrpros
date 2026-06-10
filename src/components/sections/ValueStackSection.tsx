"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import { BONUSES, CURRICULUM, PRICING, STATS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// The Hormozi-style value-stack RECAP. Renders AFTER PricingSection AND
// BonusesSection. HARD RULE, do NOT re-invert (gotcha #97 /
// copywriting-principles.md §18 / feedback_bonus_sequencing): this is a RECAP,
// not a new price anchor. The price was anchored standalone first, the bonuses
// landed as $0-added on top, and only NOW does the full total appear. If this
// component renders above PricingSection or BonusesSection in VariantPage,
// that is the bug.
//
// Totals come from the constants so the math can never drift: 4 courses + 11
// bonuses (excluding the cuff-discount line item, which carries a valueSuffix)
// sum to the advertised total; the up-to-$640 in cuff discounts is called out
// separately, NOT folded into the total.
const COURSE_VALUE_SUBTOTAL = CURRICULUM.reduce((sum, c) => sum + c.courseValue, 0);
const REGULAR_BONUSES = BONUSES.filter((b) => !("valueSuffix" in b));
const CUFF_DISCOUNT_BONUS = BONUSES.find((b) => "valueSuffix" in b);
const BONUS_VALUE_SUBTOTAL = REGULAR_BONUSES.reduce((sum, b) => sum + b.value, 0);
const TOTAL_ADVERTISED_VALUE = COURSE_VALUE_SUBTOTAL + BONUS_VALUE_SUBTOTAL;

function fmt(n: number) {
  return `${PRICING.currencySymbol}${n.toLocaleString("en-US")}`;
}

export default function ValueStackSection() {
  return (
    <section id="value-stack" className="section-wrap bg-white" aria-label="Everything you walk out with">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="Everything you walk out with" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy"
          >
            For one price, the <span className="underline-accent">whole stack</span> on the table
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-ink/80"
          >
            The certification you saw above was ${PRICING.bundlePrice}. The 11 tools you saw after were free on top of it. Here is the full picture in one place, with the dollar value beside each piece, so the math is on the page.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="relative mt-12 mx-auto max-w-3xl rounded-lg border border-line bg-cream/40 p-6 lg:p-9 shadow-[0_30px_60px_-30px_rgba(25,55,99,0.22)]"
        >
          {/* Combined-CEU banner: the all-courses transparent PNG (11.75 CEUs
              total) peeks off the top-right corner, same 3D-peek treatment and
              sizing as the per-course CEU banners on the curriculum cards. */}
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

          {/* Core certification rows */}
          <p className="small-caps-line text-accent">The Complete BFR Certification</p>
          <p className="mt-2 text-sm leading-relaxed text-ink/85">
            37 modules across 4 courses, {PRICING.contentHours} hours of video, {PRICING.contentHours} CEUs, taught by the author of {STATS.publications} peer-reviewed BFR publications. The certification is worth this on its own, before anything else is added to it.
          </p>

          <ul className="mt-5 divide-y divide-line/60 border-y border-line/60">
            {CURRICULUM.map((c) => (
              <li
                key={c.slug}
                className="grid grid-cols-[48px_1fr_auto] items-center gap-x-4 py-3"
              >
                <span className="relative block h-12 w-12">
                  <Image
                    src={c.coatOfArmsSrc}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                </span>
                <p className="text-sm sm:text-base text-navy">
                  <span className="font-semibold">{c.title}</span>{" "}
                  <span className="text-muted">
                    · {c.ceus} CEUs · {c.moduleCount} modules · {c.totalDuration}
                  </span>
                </p>
                <span className="font-display text-base text-navy tabular-nums">
                  {fmt(c.courseValue)}
                </span>
              </li>
            ))}
          </ul>

          {/* Bonuses */}
          <p className="mt-7 small-caps-line text-accent">Implementation tools, free on top</p>
          <p className="mt-2 text-sm leading-relaxed text-ink/85">
            Eleven implementation tools, every one of them included on top of the certification at no additional cost.
          </p>

          <ul className="mt-5 divide-y divide-line/60 border-y border-line/60">
            {REGULAR_BONUSES.map((b) => (
              <li
                key={b.n}
                className="grid grid-cols-[48px_1fr_auto] items-center gap-x-4 py-3"
              >
                <span className="relative block h-12 w-12">
                  <Image
                    src={b.img}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                </span>
                <p className="text-sm sm:text-base text-navy">
                  <span className="font-semibold">{b.title}</span>{" "}
                  <span className="text-muted">· {b.line}</span>
                </p>
                <span className="font-display text-base text-navy tabular-nums">
                  {fmt(b.value)}
                </span>
              </li>
            ))}
          </ul>

          {/* Cuff-discount savings, called out separately (do NOT fold into total). */}
          {CUFF_DISCOUNT_BONUS && (
            <div className="mt-7 rounded-lg border border-line bg-white px-5 py-5">
              <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4">
                <p className="font-semibold text-navy">Cuff-discount savings</p>
                <span className="font-display text-base text-accent tabular-nums">
                  up to {fmt(CUFF_DISCOUNT_BONUS.value)}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Up to ${PRICING.cuffSavingsUpTo} in negotiated discounts across Delfi, SmartCuffs, B Strong, and others. Called out separately, not folded into the total advertised value above (this is what you can save on a cuff if you decide you want one, not a number added to the stack).
              </p>
            </div>
          )}

          {/* Simplified totals: crossed-out advertised value + the $449 in
              accent. The strikethrough next to the unstruck price IS the
              savings communication. */}
          <div className="mt-8 space-y-2 border-t border-line pt-6 text-right">
            <p className="font-display text-2xl sm:text-3xl text-muted tabular-nums line-through">
              {fmt(TOTAL_ADVERTISED_VALUE)}
            </p>
            <p className="font-display text-4xl sm:text-5xl text-accent tabular-nums">
              {fmt(PRICING.bundlePrice)}
            </p>
          </div>

          {/* Refund proximate to the CTA. */}
          <p className="mt-6 text-center text-sm text-ink/75">
            {PRICING.guaranteeDays}-day money-back guarantee · 1 of {STATS.certifiedPractitioners} graduates has ever taken it.
          </p>

          <div className="mt-6">
            <PrimaryCTA size="lg" label="Get BFR Certified From Home" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
