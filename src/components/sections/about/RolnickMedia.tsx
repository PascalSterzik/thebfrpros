"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/shared/Marquee";
import SectionLabel from "@/components/shared/SectionLabel";
import { FEATURED_IN } from "@/lib/constants";
import { ROLNICK_FEATURED } from "@/content/about";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Mainstream + clinical media outlets that have featured Dr. Rolnick's BFR
// work. Logos pulled from the same FEATURED_IN constant the homepage uses.

export default function RolnickMedia() {
  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={ROLNICK_FEATURED.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-md text-navy text-balance"
          >
            {ROLNICK_FEATURED.headline}
          </motion.h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={inViewOnce}
          transition={{ duration: 0.7 }}
          className="mt-12"
        >
          <Marquee
            logos={FEATURED_IN}
            ariaLabel="Mainstream and clinical outlets that have featured Dr. Rolnick's BFR work"
            variant="light"
            itemHeight="h-12 sm:h-14"
          />
        </motion.div>
      </div>
    </section>
  );
}
