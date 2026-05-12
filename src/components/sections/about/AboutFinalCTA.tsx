"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ABOUT_FINAL_CTA } from "@/content/about";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// /about → /get-certified soft gateway. Mirrors HomeFinalCTA visual.
// No pricing, no guarantee, no stars. The selling happens at /get-certified.

export default function AboutFinalCTA() {
  return (
    <section className="section-wrap navy-field text-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="eyebrow-light">
            {ABOUT_FINAL_CTA.eyebrow}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl lg:text-display-2xl text-white text-balance"
          >
            {ABOUT_FINAL_CTA.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-7 mx-auto max-w-2xl text-lg leading-relaxed text-white/85"
          >
            {ABOUT_FINAL_CTA.body}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex justify-center">
            <Link href={ABOUT_FINAL_CTA.primaryCtaHref} className="btn-primary">
              {ABOUT_FINAL_CTA.primaryCta}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
