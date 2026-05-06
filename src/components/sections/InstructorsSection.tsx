"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { LICAMELI, ROLNICK } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

const ROLNICK_FACTS = [
  { value: "50+", label: "peer-reviewed BFR publications" },
  { value: "10+", label: "years in active Manhattan practice" },
  { value: "2", label: "university faculty appointments" },
  { value: "8+", label: "major media features" },
];

export default function InstructorsSection() {
  return (
    <section id="instructor" className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="Your instructors" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            Learn from the source. Then learn from the practitioner who applies it daily.
          </motion.h2>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          {/* Rolnick, primary */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            variants={fadeUp}
            className="lg:col-span-7 grid gap-8 sm:grid-cols-[180px_1fr] lg:gap-10"
          >
            <div className="relative aspect-[4/5] w-44 sm:w-full overflow-hidden rounded-2xl ring-1 ring-line">
              <Image
                src="/images/instructors/rolnick-large.jpg"
                alt={`${ROLNICK.fullName}, founder of The BFR Pros`}
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="small-caps-line text-accent">Lead instructor</p>
              <h3 className="mt-3 font-display text-display-md text-navy">
                {ROLNICK.fullName}
              </h3>
              <p className="mt-1 text-base text-muted">
                {ROLNICK.credentials} · {ROLNICK.tagline}
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink/85">
                {ROLNICK.fullName} has authored more peer-reviewed BFR studies than any other single individual in the field. He earned his Doctor of Physical Therapy at Columbia University with honors and his Master of Science in Health Promotion Management at American University.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/85">
                He maintains an active clinical practice in {ROLNICK.city}, sees patients weekly, and teaches Exercise Science as faculty at Lehman College CUNY and Concordia University Chicago. He authored Chapter 12 (Warm-up, Recovery, Injury Prevention) of the National Academy of Sports Medicine textbook.
              </p>

              <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
                {ROLNICK_FACTS.map((f) => (
                  <div key={f.label}>
                    <dt className="stat-value text-2xl">{f.value}</dt>
                    <dd className="stat-label text-[0.65rem]">{f.label}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 flex flex-wrap gap-2">
                {ROLNICK.mediaList.slice(0, 4).map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-medium text-muted"
                  >
                    Featured · {m}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          {/* Licameli, secondary */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            variants={fadeUp}
            className="lg:col-span-5 pro-card p-7"
          >
            <div className="flex items-start gap-5">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-2 ring-cream">
                <Image
                  src="/images/instructors/licameli.jpg"
                  alt={LICAMELI.fullName}
                  fill
                  sizes="96px"
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
              {LICAMELI.fullName} brings the strength-coaching lens. {LICAMELI.tagline}. He's the bridge between rehab-side BFR programming and athletic performance applications.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              His chapters cover athletic BFR programming, in-season maintenance protocols, and the bodybuilding-adjacent hypertrophy applications most rehab-led courses skip entirely.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
