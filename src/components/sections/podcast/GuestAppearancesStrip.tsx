"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/shared/Marquee";
import SectionLabel from "@/components/shared/SectionLabel";
import { ROLNICK_PODCASTS } from "@/lib/constants";
import { PODCAST_GUEST_INTRO } from "@/content/podcast";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// 15-show guest-appearance marquee. Reuses the canonical ROLNICK_PODCASTS
// const used on /about/nicholas-rolnick.

export default function GuestAppearancesStrip() {
  return (
    <section className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={PODCAST_GUEST_INTRO.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-md text-navy text-balance"
          >
            {PODCAST_GUEST_INTRO.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {PODCAST_GUEST_INTRO.intro}
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={inViewOnce}
          transition={{ duration: 0.7 }}
          className="mt-12"
        >
          <Marquee
            logos={ROLNICK_PODCASTS}
            ariaLabel="Podcasts that have featured Dr. Rolnick as a guest"
            variant="light"
            itemHeight="h-12 sm:h-14"
          />
        </motion.div>
      </div>
    </section>
  );
}
