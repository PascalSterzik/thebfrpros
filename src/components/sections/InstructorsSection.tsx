"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import Marquee from "@/components/shared/Marquee";
import {
  LICAMELI,
  ROLNICK,
  ROLNICK_PUBLICATIONS,
  STATS,
} from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// 2026-05-15: "2 university faculty appointments" + "8+ major media features"
// were stale here even after the Phase 0 CV audit (that pass fixed about.ts /
// constants.ts but missed this component's own hardcoded copy). Lehman ended
// Jul 2025, Concordia ended Jul 2021 — the live faculty appointment is NY
// Medical College. Numbers realigned to the CV-verified ROLNICK_STATS set.
const ROLNICK_FACTS = [
  { value: STATS.publications, label: "peer-reviewed BFR publications" },
  { value: STATS.yearsInClinic, label: "years in active Manhattan practice" },
  { value: "26", label: "journals peer-reviewed" },
  { value: "14", label: "major media features" },
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
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="Your instructors" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy"
          >
            Learn from <span className="underline-accent">the source</span>
          </motion.h2>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          {/* §N.12: Rolnick rebuilt in the same card pattern as Licameli, image
             matched to Licameli's smaller size per Pascal feedback (smaller image
             reads better than oversized). Stats numbers enlarged. */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            variants={fadeUp}
            className="lg:col-span-7 rounded-lg border border-line bg-white p-7 lg:p-9 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
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
                <h3 className="mt-2 font-display text-2xl text-navy">
                  {ROLNICK.fullName}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {ROLNICK.credentials} · {ROLNICK.tagline}
                </p>
              </div>
            </div>
            <p className="mt-5 text-base leading-relaxed text-ink/85">
              {ROLNICK.fullName} has authored {STATS.publications} peer-reviewed BFR publications. The Complete BFR Certification is built on that body of work. He earned his Doctor of Physical Therapy at Columbia University with honors and his Master of Science in Health Promotion Management at American University.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/85">
              He maintains an active clinical practice in {ROLNICK.city}, sees patients weekly, and is Adjunct Assistant Professor of Physical Therapy at New York Medical College. He authored Chapter 12 (Warm-up, Recovery, Injury Prevention) of the National Academy of Sports Medicine textbook.
            </p>
            <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 border-t border-line pt-6">
              {ROLNICK_FACTS.map((f) => (
                <div key={f.label}>
                  <dt className="font-display text-4xl sm:text-5xl text-navy leading-none">
                    {f.value}
                  </dt>
                  <dd className="mt-2 stat-label text-[0.65rem]">{f.label}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/about/nicholas-rolnick"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-deeper transition"
            >
              Read the full profile
              <span aria-hidden>→</span>
            </Link>
          </motion.article>

          {/* Licameli, secondary — same card pattern. */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            variants={fadeUp}
            className="lg:col-span-5 rounded-lg border border-line bg-white p-7 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
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

            {/* §Pascal-2026-05-08 v9: specialty chips so Licameli's card has
               weight at the bottom matching Rolnick's stat grid. Numbers
               weren't available — flagged for Pascal to supply hard data. */}
            <ul className="mt-7 grid grid-cols-1 gap-2 border-t border-line pt-6 text-sm">
              <li className="flex items-baseline gap-2">
                <span className="font-display text-accent leading-none shrink-0">▸</span>
                <span className="text-ink/85">Director, outpatient therapy clinic</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="font-display text-accent leading-none shrink-0">▸</span>
                <span className="text-ink/85">Injury Reduction Specialist, 3D Muscle Journey</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="font-display text-accent leading-none shrink-0">▸</span>
                <span className="text-ink/85">Active natural bodybuilder competitor</span>
              </li>
            </ul>
            <Link
              href="/about/nicholas-licameli"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-deeper transition"
            >
              Read the full profile
              <span aria-hidden>→</span>
            </Link>
          </motion.article>
        </div>

        {/* §Pascal-2026-05-08: Published In rebuilt as a colored RTL marquee with
           outbound journal links for SEO. No grayscale, no hover effect (nothing
           to click except the link itself). The Heard On / podcasts strip Pascal
           previously asked for is removed — podcasts don't belong on this page. */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-16 border-t border-line pt-12 text-center"
        >
          <motion.div variants={fadeUp}>
            <p className="small-caps-line text-accent">Published in</p>
            <h3 className="mt-3 font-display text-display-md text-navy mx-auto max-w-2xl">
              {ROLNICK.fullName}'s research appears in the journals clinicians actually read.
            </h3>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 mx-auto max-w-2xl">
            <Marquee
              logos={ROLNICK_PUBLICATIONS}
              ariaLabel="Peer-reviewed journals where Dr. Rolnick has published"
              variant="light"
              itemHeight="h-14 sm:h-16"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
