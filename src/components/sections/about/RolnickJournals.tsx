"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Marquee from "@/components/shared/Marquee";
import SectionLabel from "@/components/shared/SectionLabel";
import { ROLNICK_PUBLICATIONS } from "@/lib/constants";
import { ROLNICK_PUBLISHED } from "@/content/about";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Six peer-reviewed journals where Dr. Rolnick has published. Each logo is
// an outbound link to a specific Rolnick article in that journal. Reuses the
// same marquee + outbound-links pattern from the /get-certified instructors
// section. Closes with a link into the on-site publications library so this
// authority mention routes readers to the full, browsable record.

export default function RolnickJournals() {
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
            <SectionLabel label={ROLNICK_PUBLISHED.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-md text-navy text-balance"
          >
            {ROLNICK_PUBLISHED.headline}
          </motion.h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={inViewOnce}
          transition={{ duration: 0.7 }}
          className="mt-12 mx-auto max-w-3xl"
        >
          <Marquee
            logos={ROLNICK_PUBLICATIONS}
            ariaLabel="Peer-reviewed journals where Dr. Rolnick has published, each linking to a Rolnick article"
            variant="light"
            itemHeight="h-14 sm:h-16"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={inViewOnce}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center"
        >
          <Link
            href="/research/publications"
            className="inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-deeper transition"
          >
            See the full publication list
            <span aria-hidden>&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
