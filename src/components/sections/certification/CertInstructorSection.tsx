"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { CERTIFICATION } from "@/content/certification";
import { LICAMELI, ROLNICK } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Instructor authority section (Belief 5). Pulls the Rolnick stack and the
// Licameli single-paragraph framing straight from certification.instructor.
// Headshots reuse the existing /images/instructors/ assets.
export default function CertInstructorSection() {
  const { instructor } = CERTIFICATION;
  return (
    <section className="section-wrap bg-white" aria-label="Your instructor">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={instructor.label} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {instructor.headline}
          </motion.h2>
        </motion.div>

        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mt-12 mx-auto max-w-3xl rounded-lg border border-line bg-white p-7 lg:p-9 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
        >
          <div className="flex items-start gap-5">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-2 ring-cream">
              <Image
                src="/images/instructors/rolnick-large.jpg"
                alt={`${ROLNICK.fullName}, founder of The BFR Pros`}
                fill
                sizes="96px"
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

          <div className="mt-6 space-y-4">
            {instructor.rolnick.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-ink/85">
                {p}
              </p>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mt-8 mx-auto max-w-3xl rounded-lg border border-line bg-cream/50 p-7 lg:p-8"
        >
          <div className="flex items-start gap-5">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
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
              <h3 className="mt-2 font-display text-xl text-navy">{LICAMELI.fullName}</h3>
              <p className="mt-1 text-sm text-muted">{LICAMELI.credentials}</p>
            </div>
          </div>
          <p className="mt-5 text-base leading-relaxed text-ink/85">
            {instructor.licameli}
          </p>
        </motion.article>
      </div>
    </section>
  );
}
