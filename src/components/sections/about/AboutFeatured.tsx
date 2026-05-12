"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/shared/Marquee";
import SectionLabel from "@/components/shared/SectionLabel";
import { ABOUT_FEATURED } from "@/content/about";
import { FEATURED_IN } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Featured-in marquee, brand-credibility framing. Reuses FEATURED_IN logos
// from the homepage CredibilityBar but reframes the headline so the page-to-
// page hand-off doesn't read as "same logo strip twice."
//
// Homepage CredibilityBar says: "BFR (the modality) is featured in these
// outlets." /about says: "The BFR Pros team's work is featured in these
// outlets." Same logos, different claim, same page-job each time.

export default function AboutFeatured() {
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
            <SectionLabel label={ABOUT_FEATURED.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-md text-navy text-balance"
          >
            {ABOUT_FEATURED.headline}
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
            ariaLabel="Outlets that have featured The BFR Pros team's research and clinical work"
            variant="light"
            itemHeight="h-12 sm:h-14"
          />
        </motion.div>
      </div>
    </section>
  );
}
