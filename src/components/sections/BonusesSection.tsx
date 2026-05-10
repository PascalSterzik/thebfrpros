"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import { BONUSES, PRICING } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// §Pascal-2026-05-08 v6: 11 bonuses total (CEU credit application is now part
// of the core offer, not a "bonus"). Strategy A realistic values. Card hover
// stays off. Bonus 4 contributes "up to $640 in cuff savings", not advertised
// value — excluded from the bonus subtotal and called out separately.
const BONUS_VALUE_SUBTOTAL = BONUSES
  .filter((b) => !("valueSuffix" in b))
  .reduce((sum, b) => sum + b.value, 0);

export default function BonusesSection() {
  return (
    <section id="bonuses" className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="What's included" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy"
          >
            11 implementation bonuses. So you <span className="underline-accent">actually use</span> the certification on Monday
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-ink/80 max-w-2xl mx-auto"
          >
            Most CE courses end at the final video. The Complete BFR Certification ships with the screening forms, the liability waiver, the discount codes, and the private community that turn knowledge into Monday-morning practice.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-sm text-muted"
          >
            Total advertised bonus value: ${BONUS_VALUE_SUBTOTAL.toLocaleString("en-US")} plus up to ${PRICING.cuffSavingsUpTo} in cuff-discount savings. Bundled into the ${PRICING.bundlePrice} certification.
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
                    {valuePrefix}{b.value.toLocaleString("en-US")}{valueSuffix}
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-wrap items-center gap-4"
        >
          <PrimaryCTA
            hint="Plus the 4-course curriculum. 30-day money-back guarantee."
          />
        </motion.div>
      </div>
    </section>
  );
}
