"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import Highlighted from "@/components/shared/Highlighted";
import { TEAM_TRAINING_PROOF } from "@/content/team-training";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Section 10 — Proof. "Have real clinics actually done this?" Leads with the
// in-person history + the named clinic networks (Ivy Rehab, Professional PT,
// AccessPT) shown as cleared partner logos, then the third-party IBJI 48-clinicians
// market quote (honestly framed), then the course-context proof kept separate from
// the live engagement. The Chantale Nightingale "live team training" testimonial
// is EXCLUDED until a verified source surfaces (spec §9.3.3). The past-workshop
// photo gallery is an open item (cleared photos, spec §11.1/§G.2); it is omitted
// rather than fabricated, and flagged for Pascal.

export default function TeamTrainingProof() {
  const p = TEAM_TRAINING_PROOF;
  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={p.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            <Highlighted text={p.headline} phrase={p.highlight} />
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-ink/80">
            {p.body}
          </motion.p>
        </motion.div>

        {/* Named group-licensing clients (cleared partner logos) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mx-auto mt-12 max-w-3xl text-center"
        >
          <p className="small-caps-line text-muted">{p.clientsCaption}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {p.clientLogos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={logo.w}
                height={logo.h}
                className="h-10 w-auto object-contain sm:h-12"
              />
            ))}
          </div>
        </motion.div>

        {/* Third-party market evidence (IBJI quote), honestly framed */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-ink/80"
        >
          {p.marketEvidence}
        </motion.p>

        {/* Course-context proof, kept honestly separate from the live engagement */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mx-auto mt-8 max-w-3xl border-t border-line pt-8 text-center text-base leading-relaxed text-muted"
        >
          {p.courseProof}
        </motion.p>
      </div>
    </section>
  );
}
