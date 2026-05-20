"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { CERTIFICATION } from "@/content/certification";
import { BONUSES, ENROLL_URL, PRICING } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Bonuses revealed AFTER the price as a free surprise on top of the
// already-shown $449. The guarantee lands at the END of the stack.
//
// Hard rule, do NOT re-invert: copywriting-principles.md §18 / gotcha #97 /
// memory feedback_bonus_sequencing. The $449 was the price for the cert
// alone. None of the eleven items here moves that price. The value math is
// "cert is $449, bonuses stack free on top, total advertised value
// $1,454" — but advertised separately so the reader perceives the bonuses
// as a free surprise, not as folded-in value. Cuff discounts are flagged
// separately (up to $640) and NOT folded into the value subtotal.

const BONUS_VALUE_SUBTOTAL = BONUSES
  .filter((b) => !("valueSuffix" in b))
  .reduce((sum, b) => sum + b.value, 0);

export default function CertBonusesSection() {
  const { bonuses } = CERTIFICATION;
  return (
    <section id="bonuses" className="section-wrap cream-field" aria-label="Bonuses and guarantee">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={bonuses.label} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {bonuses.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-ink/85 text-left"
          >
            {bonuses.preface}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-muted text-left"
          >
            {bonuses.intro}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-sm font-semibold text-accent"
          >
            ${BONUS_VALUE_SUBTOTAL.toLocaleString("en-US")} in tools, included free on top of the ${PRICING.bundlePrice} certification. Plus up to ${PRICING.cuffSavingsUpTo} in real cuff-discount savings.
          </motion.p>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BONUSES.map((b) => {
            const valuePrefix = "valuePrefix" in b && b.valuePrefix ? b.valuePrefix : "$";
            const valueSuffix = "valueSuffix" in b && b.valueSuffix ? b.valueSuffix : " value";
            return (
              <motion.li
                key={b.n}
                variants={fadeUp}
                className="relative flex flex-col overflow-hidden rounded-lg border border-line bg-white shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
                  <Image
                    src={b.img}
                    alt={`${b.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy">
                    Bonus {String(b.n).padStart(2, "0")}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white tabular-nums">
                    {valuePrefix}
                    {b.value.toLocaleString("en-US")}
                    {valueSuffix}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg text-navy text-balance">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/80">{b.line}</p>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mt-10 mx-auto max-w-3xl text-base leading-relaxed text-ink/85 text-center"
        >
          {bonuses.stackRecap}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-16 mx-auto max-w-3xl rounded-lg border border-accent/40 bg-white p-8 lg:p-10 text-center shadow-[0_30px_60px_-30px_rgba(25,55,99,0.25)]"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="relative h-24 w-24">
              <Image
                src="/images/guarantee/money-back.png"
                alt="30-day money-back guarantee"
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>
          </motion.div>
          <motion.h3
            variants={fadeUp}
            className="mt-5 font-display text-display-md text-navy text-balance"
          >
            {bonuses.guaranteeHeadline}
          </motion.h3>
          <motion.p
            variants={fadeUp}
            className="mt-5 mx-auto max-w-2xl text-base leading-relaxed text-ink/85 text-left"
          >
            {bonuses.guaranteeBody}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-7 flex justify-center">
            <a
              href={ENROLL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 font-display text-2xl sm:text-3xl uppercase tracking-tight text-white transition hover:bg-accent-deeper"
              style={{ letterSpacing: "-0.015em" }}
            >
              {bonuses.primaryCta}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
