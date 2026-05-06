"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import { BONUSES } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

export default function BonusesSection() {
  return (
    <section id="bonuses" className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="What's included" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            11 implementation bonuses. So you actually use the certification on Monday.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-ink/80"
          >
            Most CE courses end at the final video. The Complete BFR Certification ships with the screening forms, the liability waiver, the discount codes, and the private community that turn knowledge into Monday-morning practice.
          </motion.p>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {BONUSES.map((b) => (
            <motion.li
              key={b.n}
              variants={fadeUp}
              className="pro-card p-6 grid grid-cols-[auto_1fr] gap-4"
            >
              <span className="font-display text-2xl text-accent leading-none pt-0.5">
                {String(b.n).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg text-navy">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/80">{b.line}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <PrimaryCTA hint="11 bonuses. Lifetime access. 30-day money-back guarantee." />
        </motion.div>
      </div>
    </section>
  );
}
