"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import Highlighted from "@/components/shared/Highlighted";
import { TEAM_TRAINING_AUTHORITY } from "@/content/team-training";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Section 8 — Why this provider. "Why trust this provider with a five-figure
// decision?" Rolnick authority (counts) + the CAPEX-freedom angle. Device-agnostic
// is framed as the owner's CAPEX freedom + Rolnick's device-literature authorship,
// NEVER a blanket objectivity claim, and no competitor is named (spec §9.3.1).
// Two-column rhythm mirrors /consultation ConsultingAbout.

export default function TeamTrainingAuthority() {
  const a = TEAM_TRAINING_AUTHORITY;
  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel label={a.eyebrow} />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-5 font-display text-display-xl text-navy text-balance"
            >
              <Highlighted text={a.headline} phrase={a.highlight} />
            </motion.h2>
            {a.paragraphs.map((p, i) => (
              <motion.p key={i} variants={fadeUp} className="mt-5 text-lg leading-relaxed text-ink/80">
                {p}
              </motion.p>
            ))}

            <motion.p variants={fadeUp} className="mt-7 text-lg font-semibold text-navy">
              {a.capexHeading}
            </motion.p>
            <motion.p variants={fadeUp} className="mt-3 text-lg leading-relaxed text-ink/80">
              {a.capexBody}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9">
              <a href="#start" className="btn-primary">
                <span>{a.ctaLabel}</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            variants={fadeUp}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg ring-1 ring-navy/10 shadow-navy-md">
              <Image
                src={a.imageSrc}
                alt={a.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
