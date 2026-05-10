"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { VIDEOS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Free Module Preview section per §D.12 + §J.9 + §N.11.
// §N.11: bibliography is Module 0 only, button BELOW the preview video.
const PREVIEW_PDF_HREF = "/downloads/bfr-pros-module-bibliographies-preview.pdf";

export default function ModulePreview() {
  return (
    <section
      id="module-preview"
      className="section-wrap bg-white"
      aria-label="Free preview module"
    >
      <div className="container-narrow">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="Free preview" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance mx-auto max-w-3xl"
          >
            See exactly what Monday looks like.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-ink/85 mx-auto max-w-2xl"
          >
            Watch Module 0 (Course Overview) end to end, no email, no paywall.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <p className="small-caps-line text-accent">Module 00: Course Overview</p>
            <div className="mt-3 relative w-full overflow-hidden rounded-lg bg-black/5 ring-1 ring-line shadow-[0_30px_60px_-30px_rgba(25,55,99,0.35)] mx-auto max-w-3xl">
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
          </motion.div>

          {/* §N.11: download button BELOW the preview video, Module 0 bibliography only. */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-col items-center gap-3">
            <a
              href={PREVIEW_PDF_HREF}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-3 rounded-full border border-navy/20 bg-cream px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy hover:bg-white"
            >
              Download the Module 0 bibliography (PDF)
              <span aria-hidden className="text-base">↓</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
