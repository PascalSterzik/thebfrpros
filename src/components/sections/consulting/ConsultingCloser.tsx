"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { CONSULTING_CLOSER } from "@/content/consulting";
import Highlighted from "@/components/shared/Highlighted";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Founder closer, first person in Nick's voice (voice-blueprint.md): direct
// address, specific authority, an ask to close. Kept em-dash-free because this
// is composed website copy subject to the pre-ship em-dash gate (the blueprint
// allows em-dashes in his emails/posts, not in structural site copy).

export default function ConsultingCloser() {
  return (
    <section className="section-wrap navy-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={CONSULTING_CLOSER.eyebrow} variant="light" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-white text-balance"
          >
            <Highlighted text={CONSULTING_CLOSER.headline} phrase={CONSULTING_CLOSER.highlight} />
          </motion.h2>
          {CONSULTING_CLOSER.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="mt-5 text-lg leading-relaxed text-white/85"
            >
              {p}
            </motion.p>
          ))}
          <motion.div variants={fadeUp} className="mt-9">
            <a href="#start" className="btn-primary">
              <span>{CONSULTING_CLOSER.ctaLabel}</span>
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8">
            <p className="font-display text-2xl text-white">
              {CONSULTING_CLOSER.signatureName}
            </p>
            <p className="mt-1 text-sm text-white/70">{CONSULTING_CLOSER.signatureRole}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
