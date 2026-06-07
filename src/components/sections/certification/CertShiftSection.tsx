"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Highlighted from "@/components/shared/Highlighted";
import SectionLabel from "@/components/shared/SectionLabel";
import { CERTIFICATION } from "@/content/certification";
import { STATS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// The Shift section (Belief 2). Sato 1966 / 60-year discovery story, BFR in
// APTA + BOC scope, military and Mayo adoption. The evidence line lands on
// the 74 peer-reviewed publications by the instructor so the modality
// credibility and the instructor credibility compound in one block.
export default function CertShiftSection() {
  const { shift } = CERTIFICATION;
  return (
    <section className="section-wrap cream-field" aria-label="The shift, BFR and the discovery story">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={shift.label} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            <Highlighted text={shift.headline} phrase={shift.highlight} />
          </motion.h2>
        </motion.div>

        {/* Rev 1 §9: clinician-in-clinic still that anchors the
            "ready for your clinic" payoff. Sourced from /images/action/
            (brand-policy compliant: real BFR imagery, no stock, no AI). */}
        <motion.figure
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mt-12 mx-auto max-w-3xl"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg ring-1 ring-line shadow-[0_30px_60px_-30px_rgba(25,55,99,0.22)]">
            <Image
              src="/images/action/rolnick-applying-cuff.jpg"
              alt="Dr. Nicholas Rolnick applying a BFR cuff in clinic"
              fill
              sizes="(max-width: 1024px) 100vw, 720px"
              className="object-cover"
            />
          </div>
        </motion.figure>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 mx-auto max-w-2xl space-y-6 text-left"
        >
          {shift.discovery.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-lg leading-relaxed text-ink/85"
            >
              {p}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mt-12 mx-auto max-w-3xl rounded-lg border border-line bg-white p-7 lg:p-9"
        >
          <p className="small-caps-line text-accent">The evidence base</p>
          <p className="mt-3 text-lg leading-relaxed text-ink">
            {shift.evidenceLine}
          </p>
          <p className="mt-5 font-display text-4xl text-navy leading-none">
            {STATS.publications}{" "}
            <span className="font-body text-sm tracking-normal normal-case text-muted">
              peer-reviewed BFR publications by the instructor
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
