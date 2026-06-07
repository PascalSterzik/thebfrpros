"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import VideoPoster from "@/components/shared/VideoPoster";
import { WHAT_BFR_DOES } from "@/content/home";
import { VIDEOS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Section 4 — Modality explainer. Belief 1 deepening (mechanism + safety + breadth).
// Awareness 2-3 primarily. The hero's secondary CTA "What is BFR?" anchors here.

export default function WhatBFRDoes() {
  return (
    <section id="what-bfr-does" className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={WHAT_BFR_DOES.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {WHAT_BFR_DOES.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-7 mx-auto max-w-2xl text-lg leading-relaxed text-ink/80"
          >
            {WHAT_BFR_DOES.intro}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 mx-auto w-full max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="relative w-full overflow-hidden rounded-lg bg-black/5 ring-1 ring-line shadow-[0_30px_80px_-40px_rgba(25,55,99,0.35)]"
          >
            <VideoPoster
              posterSrc="/images/posters/what-is-bfr.webp"
              videoSrc={VIDEOS.whatIsBFR}
              title="What is Blood Flow Restriction training? Dr. Nicholas Rolnick explains the modality."
              sizes="(max-width: 1024px) 100vw, 800px"
              animated={{ webm: "/videos/thumbnails/what-is-bfr.webm", mp4: "/videos/thumbnails/what-is-bfr.mp4" }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {WHAT_BFR_DOES.pillars.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              className="rounded-lg border border-line bg-white p-7 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <p className="small-caps-line text-accent">{p.eyebrow}</p>
              <h3 className="mt-3 font-display text-2xl text-navy text-balance">{p.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-ink/80">{p.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
