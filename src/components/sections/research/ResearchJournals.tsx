"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/shared/Marquee";
import SectionLabel from "@/components/shared/SectionLabel";
import { ROLNICK_PUBLICATIONS } from "@/lib/constants";
import { RESEARCH_JOURNALS } from "@/content/research";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Same marquee pattern used on /about/nicholas-rolnick (RolnickJournals)
// and /get-certified InstructorsSection. Six peer-reviewed journals with
// outbound links to specific Rolnick articles. Re-rendered here with the
// research-page-specific framing so the visitor's section-job is
// "see where the work appears" not "verify the instructor".

export default function ResearchJournals() {
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
            <SectionLabel label={RESEARCH_JOURNALS.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {RESEARCH_JOURNALS.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {RESEARCH_JOURNALS.intro}
          </motion.p>
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
      </div>
    </section>
  );
}
