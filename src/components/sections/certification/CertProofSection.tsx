"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Highlighted from "@/components/shared/Highlighted";
import SectionLabel from "@/components/shared/SectionLabel";
import { CERTIFICATION } from "@/content/certification";
import { STATS, TESTIMONIALS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Verbatim testimonials + the 1-of-1,467 refund stat as implementation proof
// (Belief 5). PLAN.md §5 row 10 + certification.proof.testimonialsNote: the
// TESTIMONIALS constant is the source of truth, render verbatim, never
// paraphrase. The typicalityNote sits PROXIMATE to the wall in the same type
// size per FTC Four Pillars (compliance gate).

const PHOTO_MAP: Record<string, string> = {
  "Dr. Clinton H. Lee, PT, DPT, CSCS": "/images/students/clinton-lee.jpeg",
  "Dr. Brian D. Whyte, DPT, CLT, CSCS": "/images/students/brian-whyte.jpeg",
  "Benjamin Toderico, MS, CSCS": "/images/students/benjamin-toderico.jpeg",
};

export default function CertProofSection() {
  const { proof } = CERTIFICATION;
  // Render the three named/credentialed graduates (Lee, Whyte, Toderico).
  // Nightingale's quote is verbatim long-form and reads better in a quote
  // block than a grid card; keep the grid to the photo-backed three.
  const cards = TESTIMONIALS.slice(0, 3);
  return (
    <section id="testimonials" className="section-wrap navy-field" aria-label="Proof from graduates">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={proof.label} variant="light" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-white text-balance"
          >
            <Highlighted text={proof.headline} phrase={proof.highlight} />
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-7 mx-auto max-w-2xl text-lg leading-relaxed text-white/80"
          >
            {proof.statsIntro}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mt-10 mx-auto max-w-3xl rounded-lg border border-accent/40 bg-accent/[0.08] p-7 text-center"
        >
          <p className="font-display text-4xl sm:text-5xl text-white leading-none">
            1 of {STATS.certifiedPractitioners}
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/90">
            {proof.refundProofLine}
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {cards.map((t) => {
            const photo = PHOTO_MAP[t.name];
            return (
              <motion.li
                key={t.name}
                variants={fadeUp}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
              >
                <span aria-hidden className="font-display text-4xl text-accent leading-none">
                  &ldquo;
                </span>
                <blockquote className="mt-3 text-base leading-relaxed text-white/95">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 grid grid-cols-[48px_1fr] items-center gap-3 border-t border-white/10 pt-4">
                  {photo ? (
                    <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/20">
                      <Image src={photo} alt={t.name} fill sizes="48px" className="object-cover" />
                    </div>
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 font-display text-lg text-white">
                      {t.name.split(" ").slice(-1)[0]?.[0] ?? "?"}
                    </div>
                  )}
                  <div>
                    <p className="font-display text-sm text-white leading-tight">{t.name}</p>
                    <p className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-white/60">
                      {t.role}
                    </p>
                  </div>
                </figcaption>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mt-10 mx-auto max-w-3xl text-sm leading-relaxed text-white/70 text-center"
        >
          {proof.typicalityNote}
        </motion.p>
      </div>
    </section>
  );
}
