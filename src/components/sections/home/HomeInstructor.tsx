"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { HOME_INSTRUCTOR } from "@/content/home";
import { LICAMELI, ROLNICK, STATS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Section 10 — Condensed instructor authority. Belief 5 formal install.
// Lighter than /get-certified InstructorsSection: no facts grid, no marquee.
// Two-card layout: Rolnick lead, Licameli secondary.

export default function HomeInstructor() {
  return (
    <section id="instructor" className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={HOME_INSTRUCTOR.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {HOME_INSTRUCTOR.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {HOME_INSTRUCTOR.intro}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-6 lg:grid-cols-2"
        >
          <motion.article
            variants={fadeUp}
            className="rounded-lg border border-line bg-white p-7 lg:p-8 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
          >
            <div className="flex items-start gap-5">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-cream">
                <Image
                  src="/images/instructors/rolnick-large.jpg"
                  alt={`${ROLNICK.fullName}, founder of The BFR Pros`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="small-caps-line text-accent">Lead instructor</p>
                <h3 className="mt-2 font-display text-2xl text-navy">{ROLNICK.fullName}</h3>
                <p className="mt-1 text-sm text-muted">
                  {ROLNICK.credentials} · {ROLNICK.tagline}
                </p>
              </div>
            </div>
            <p className="mt-5 text-base leading-relaxed text-ink/85">
              {STATS.publications} peer-reviewed BFR publications. Doctor of Physical Therapy from Columbia University with honors. Faculty at Lehman College CUNY and Concordia University Chicago. Active clinical practice in Manhattan. Featured in CNN, the Wall Street Journal, Forbes, ESPN, and PubMed.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="rounded-lg border border-line bg-white p-7 lg:p-8 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
          >
            <div className="flex items-start gap-5">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-cream">
                <Image
                  src="/images/instructors/licameli.jpg"
                  alt={LICAMELI.fullName}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="small-caps-line text-accent">Co-instructor</p>
                <h3 className="mt-2 font-display text-2xl text-navy">{LICAMELI.fullName}</h3>
                <p className="mt-1 text-sm text-muted">{LICAMELI.credentials}</p>
              </div>
            </div>
            <p className="mt-5 text-base leading-relaxed text-ink/85">
              Director of an outpatient therapy clinic and Injury Reduction Specialist with 3D Muscle Journey. Active natural bodybuilding competitor. Bridges rehab-side BFR programming and athletic performance applications across the curriculum.
            </p>
          </motion.article>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.7 }}
          className="mt-10 text-center"
        >
          <span
            aria-disabled="true"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy/40 cursor-not-allowed"
          >
            {HOME_INSTRUCTOR.ctaLabel}
            <span className="rounded-full border border-line px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.18em] text-muted/70 normal-case">
              Coming soon
            </span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
