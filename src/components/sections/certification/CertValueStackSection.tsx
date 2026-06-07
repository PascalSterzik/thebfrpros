"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Highlighted from "@/components/shared/Highlighted";
import SectionLabel from "@/components/shared/SectionLabel";
import { CERTIFICATION } from "@/content/certification";
import {
  BONUSES,
  CERTIFICATION_ENROLL_URL,
  CURRICULUM,
  PRICING,
} from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Rev 1 (2026-05-20, REVISION-01.md §7): the classic Hormozi-style value
// stack RECAP. Lives AFTER Section 12 Pricing AND Section 13 Bonuses
// (gotcha #97 still holds: the price anchored standalone first, the bonuses
// landed as $0 added on top, and only NOW does the full total appear).
//
// HARD RULE — do NOT re-invert: this is a RECAP, not a new price anchor.
// Source: copywriting-principles.md §18 (Bonus Sequencing), gotcha #97,
// memory/feedback_bonus_sequencing.md. Reversing this folds the bonus
// value into the price anchor and collapses the perceived-value
// multiplier (the masterclass Pascal delivered 2026-05-19). If this
// component is ever rendered above CertPricingSection or
// CertBonusesSection in page.tsx, that is the bug.
//
// Totals come from the constants so the math can never drift from the
// source of truth: 4 courses + 11 bonuses (excluding the cuff-discount
// line item with a valueSuffix) sum to the advertised total; the
// up-to-$640 in cuff discounts is called out separately as a "what you
// can save on a cuff", NOT folded into the total.

const COURSE_VALUE_SUBTOTAL = CURRICULUM.reduce((sum, c) => sum + c.courseValue, 0);
const REGULAR_BONUSES = BONUSES.filter((b) => !("valueSuffix" in b));
const CUFF_DISCOUNT_BONUS = BONUSES.find((b) => "valueSuffix" in b);
const BONUS_VALUE_SUBTOTAL = REGULAR_BONUSES.reduce((sum, b) => sum + b.value, 0);
const TOTAL_ADVERTISED_VALUE = COURSE_VALUE_SUBTOTAL + BONUS_VALUE_SUBTOTAL;

function fmt(n: number) {
  return `${PRICING.currencySymbol}${n.toLocaleString("en-US")}`;
}

export default function CertValueStackSection() {
  const { valueStack } = CERTIFICATION;
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
            <SectionLabel label={valueStack.label} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            <Highlighted text={valueStack.headline} phrase={valueStack.highlight} />
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-ink/85 text-left"
          >
            {valueStack.intro}
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
          <p className="small-caps-line text-accent">{valueStack.coreLabel}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink/85">{valueStack.coreNote}</p>

          {/* Rev 2 (2026-05-21, REVISION-02.md §4a): per-row image on the
              left in place of the numbered index. Course rows render the
              coat-of-arms; bonus rows render the bonus image. Same
              ~48px-square cell on both lists for visual consistency. */}
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
          <p className="mt-2 text-sm leading-relaxed text-ink/85">{valueStack.bonusesNote}</p>

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
                <p className="font-semibold text-navy">
                  {valueStack.cuffDiscountLabel}
                </p>
                <span className="font-display text-base text-accent tabular-nums">
                  up to {fmt(CUFF_DISCOUNT_BONUS.value)}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {valueStack.cuffDiscountNote}
              </p>
            </div>
          )}

          {/* Rev 2 (2026-05-21, REVISION-02.md §4b): simplified totals block.
              Crossed-out advertised value + the $449 in accent, no labels,
              no "You save" line. The strikethrough next to the unstruck
              price IS the visual savings communication. Pascal explicitly
              rejected the explicit "you save" label as marketing fluff. */}
          <div className="mt-8 space-y-2 border-t border-line pt-6 text-right">
            <p className="font-display text-2xl sm:text-3xl text-muted tabular-nums line-through">
              {fmt(TOTAL_ADVERTISED_VALUE)}
            </p>
            <p className="font-display text-4xl sm:text-5xl text-accent tabular-nums">
              {fmt(PRICING.bundlePrice)}
            </p>
          </div>

          {/* compliance-copywriting.md Part 3 Checkpoint 11 (Session D):
              refund proximate to every primary CTA. Matches the trust-strip
              line under the hero CTA and the final CTA. */}
          <p className="mt-6 text-center text-sm text-ink/75">
            {valueStack.guaranteeNote}
          </p>

          <div className="mt-4 flex justify-center">
            <a
              href={CERTIFICATION_ENROLL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 font-display text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-white transition hover:bg-accent-deeper text-balance"
              style={{ letterSpacing: "-0.015em" }}
            >
              {valueStack.primaryCta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
