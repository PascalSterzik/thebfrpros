"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { TEAM_TRAINING_FAQ } from "@/content/team-training";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Section 11 — FAQ. The owner's objections + the honest limits surfaced, not
// buried. Also emitted as FAQPage JSON-LD by buildTeamTrainingSchemaGraph.
// Questions render in DM Sans semibold (readable), the section H2 carries the
// display type. Billing answer states there is no BFR-specific code (zero
// "96920", spec §9.3.4).

export default function TeamTrainingFaq() {
  const f = TEAM_TRAINING_FAQ;
  return (
    <section id="faq" className="section-wrap cream-field scroll-mt-24">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={f.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {f.headline}
          </motion.h2>
        </motion.div>

        <motion.dl
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto mt-12 max-w-3xl divide-y divide-line"
        >
          {f.items.map((item) => (
            <motion.div key={item.q} variants={fadeUp} className="py-6 first:pt-0">
              <dt className="font-body text-lg font-semibold text-navy">{item.q}</dt>
              <dd className="mt-3 text-base leading-relaxed text-ink/80">{item.a}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
