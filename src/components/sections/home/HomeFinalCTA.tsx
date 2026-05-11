"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HOME_FINAL_CTA } from "@/content/home";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Final CTA — the ONE soft gateway from the homepage to /get-certified.
// Brand-guide.md Copy & Customer Journey Principles, Principle 6: the
// homepage does not sell the cert. No pricing, no guarantee callout, no
// CEU subline, no stars, no reassurance line. The button is a plain
// exploratory link. The selling happens AT /get-certified, not here.

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
            <Link href={HOME_FINAL_CTA.primaryCtaHref} className="btn-primary">
              {HOME_FINAL_CTA.primaryCta}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
