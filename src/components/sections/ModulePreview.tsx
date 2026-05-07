"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { VIDEOS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Free Module Preview section per §D.12 + §J.9 correction. Pulls Module 0 video and
// the Module-by-Module Bibliography PDF download.
const PREVIEW_PDF_HREF = "/downloads/bfr-pros-module-bibliographies-preview.pdf";

export default function ModulePreview() {
  return (
    <section
      id="module-preview"
      className="section-wrap bg-white"
      aria-label="Free preview module"
    >
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="grid gap-12 lg:grid-cols-12 lg:items-center"
        >
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <SectionLabel label="Free preview" />
            <h2 className="mt-5 font-display text-display-xl text-navy text-balance">
              See exactly what Monday looks like.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/85">
              Watch the orientation video. Download the bibliography behind every cited study. Decide if it's the certification for your practice without a single dollar at risk.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The first video in Course 1 is Module 0: Course Overview. The download is the Module-by-Module Bibliography (Bonus 5), every PubMed link the curriculum references.
            </p>
            <a
              href={PREVIEW_PDF_HREF}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="mt-7 inline-flex items-center gap-3 rounded-full border border-navy/20 bg-cream px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy hover:bg-white"
            >
              <span aria-hidden>📄</span>
              Download the bibliography (PDF, ~620 KB)
              <span aria-hidden className="text-base">↓</span>
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-7">
            <p className="small-caps-line text-accent">Module 00: Course Overview</p>
            <div className="mt-3 relative w-full overflow-hidden rounded-2xl bg-black/5 ring-1 ring-line shadow-[0_30px_60px_-30px_rgba(25,55,99,0.35)]">
              <div className="relative pb-[56.25%]">
                <iframe
                  src={VIDEOS.module0Preview}
                  title="Module 0: Introduction to BFR Training (Free Preview)"
                  loading="lazy"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>
            <p className="mt-3 text-xs text-muted">
              No email required. No paywall. Hit play.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
