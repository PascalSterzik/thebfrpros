"use client";

import { motion } from "framer-motion";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import { HOME_FINAL_CTA } from "@/content/home";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Section 14 — Final CTA. Belief 6 (patient-demand urgency) lands HERE only.
// By this point, Beliefs 1, 3, 4, 5 have been installed across sections 2-12,
// so the urgency frame is honest closure, not a top-of-funnel pressure tactic.

export default function HomeFinalCTA() {
  return (
    <section id="get-certified-cta" className="section-wrap navy-field text-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="eyebrow-light">
            {HOME_FINAL_CTA.eyebrow}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl lg:text-display-2xl text-white text-balance"
          >
            {HOME_FINAL_CTA.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-7 mx-auto max-w-2xl text-lg leading-relaxed text-white/85"
          >
            {HOME_FINAL_CTA.body}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex justify-center">
            <PrimaryCTA
              label={HOME_FINAL_CTA.primaryCta}
              secondary="11.75 CEUs · 30-day guarantee"
              href="/get-certified"
              starsVariant="dark"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-7 text-sm text-white/70 leading-relaxed"
          >
            {HOME_FINAL_CTA.reassurance}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
