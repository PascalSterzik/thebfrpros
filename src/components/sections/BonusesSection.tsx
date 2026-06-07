"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { BONUSES, PRICING } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Bonuses revealed AFTER PricingSection as a free surprise on top of the
// already-shown $449. HARD RULE, do NOT re-invert (copywriting-principles.md
// §18 / gotcha #97 / feedback_bonus_sequencing): none of the 11 items moves
// the price. The $449 bought the certification; the bonuses stack on for free.
// The full value math lives only in the Value Stack recap that follows. Cuff
// discounts (valueSuffix) are flagged separately, NOT folded into the subtotal.
const BONUS_VALUE_SUBTOTAL = BONUSES
  .filter((b) => !("valueSuffix" in b))
  .reduce((sum, b) => sum + b.value, 0);

export default function BonusesSection() {
  return (
    <section id="bonuses" className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="The part nobody warned you about" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy"
          >
            Everything below is <span className="underline-accent">free</span>, on top of the ${PRICING.bundlePrice} you just saw
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-ink/80 max-w-2xl mx-auto"
          >
            The ${PRICING.bundlePrice} you just read was for the certification itself: the modules, the CEUs, the instruction. It is worth that on its own. Here is what nobody told you on the way in. Every one of the 11 tools below comes with it, and not a single one adds a dollar to the price.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg leading-relaxed text-ink/80 max-w-2xl mx-auto"
          >
            They are not filler and they are not theory. They are the difference between knowing BFR and running it on Monday: the screening forms, the liability waiver, the discount codes, and the private community that turn knowledge into Monday-morning practice.
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

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.7 }}
          className="mt-12 mx-auto max-w-3xl text-center text-base leading-relaxed text-ink/85"
        >
          ${PRICING.bundlePrice} for the certification. Eleven implementation tools stacked on top of it. None of them moved the price by a dollar. You pay for the certification, you walk out with all of it.
        </motion.p>
      </div>
    </section>
  );
}
