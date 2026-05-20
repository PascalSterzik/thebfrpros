"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Highlighted from "@/components/shared/Highlighted";
import SectionLabel from "@/components/shared/SectionLabel";
import { CERTIFICATION } from "@/content/certification";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Rev 1 (2026-05-20, REVISION-01.md §4 + §9): campaign-only Problem block.
// Forks the shared ProblemBlock so the cert page can apply its own
// Highlighted phrase (the shared block hardcodes a v3-specific phrase
// that does not appear in the cert headline) and add a clinical image
// (§9 Problem-section imagery candidate). Visual pattern mirrors the
// shared block. Anchors the loading-wall pain with the verbatim
// voiceQuote pull-quote.
export default function CertProblemBlock() {
  const { problem } = CERTIFICATION;
  const layers = [
    { eyebrow: "Surface", body: problem.surface },
    { eyebrow: "What you actually feel", body: problem.emotional },
    { eyebrow: "Where this leads", body: problem.future },
    { eyebrow: "Underneath it all", body: problem.visceral },
  ];

  return (
    <section className="section-wrap cream-field" id="problem">
      <div className="container-narrow">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="text-center mx-auto max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={problem.label} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy"
          >
            <Highlighted text={problem.headline} phrase={problem.highlight} />
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-7 mx-auto max-w-2xl text-lg leading-relaxed text-ink/80"
          >
            {problem.intro}
          </motion.p>
        </motion.div>

        {/* Rev 1 §9: clinical scene that anchors the pain. Sourced from
            /images/action/ (real BFR-in-clinic imagery, brand-policy
            compliant: no stock, no AI). */}
        <motion.figure
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mt-12 mx-auto max-w-3xl"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg ring-1 ring-line shadow-[0_30px_60px_-30px_rgba(25,55,99,0.22)]">
            <Image
              src="/images/action/rolnick-coaching-client.jpg"
              alt="A clinician coaching a patient through a low-load rehab set"
              fill
              sizes="(max-width: 1024px) 100vw, 720px"
              className="object-cover"
            />
          </div>
        </motion.figure>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 mx-auto max-w-2xl space-y-10 text-left"
        >
          {layers.map((l, i) => (
            <motion.li key={l.eyebrow} variants={fadeUp} className="grid grid-cols-[auto_1fr] gap-5">
              <span className="font-display text-4xl text-accent leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="small-caps-line text-muted">{l.eyebrow}</p>
                <p className="mt-2 text-lg leading-relaxed text-ink">{l.body}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>

        {/* Verbatim avatar pull-quote that anchors the loading-wall pain. */}
        <motion.figure
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mt-14 mx-auto max-w-2xl rounded-lg border-l-4 border-accent bg-white px-6 py-6 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
        >
          <p className="editorial-quote font-quote text-2xl leading-snug text-navy">
            &ldquo;{problem.voiceQuote}&rdquo;
          </p>
          <figcaption className="mt-3 text-xs uppercase tracking-[0.16em] text-muted">
            Forum quote, named verbatim per source-of-truth rule
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
