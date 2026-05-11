"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { HOME_AUDIENCES } from "@/content/home";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Section 9 — Three profession cards (PT / AT / S&C). Self-identification
// helper. Awareness 2-4. Cards link to Phase 2 /for/* pages, rendered as
// "Coming soon" disabled state until those pages ship.

export default function WhoItsForCards() {
  return (
    <section id="who-its-for" className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="Who it's for" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            Built for licensed clinicians and performance professionals.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            The certification is approved or scope-recognized for three core audiences. Pick the lens that fits your practice.
          </motion.p>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {HOME_AUDIENCES.map((a) => (
            <motion.li
              key={a.audience}
              variants={fadeUp}
              className="rounded-lg border border-line bg-cream p-7 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.12)] flex flex-col"
            >
              <p className="small-caps-line text-accent">{a.eyebrow}</p>
              <h3 className="mt-3 font-display text-2xl text-navy text-balance">{a.audience}</h3>
              <p className="mt-4 text-base leading-relaxed text-ink/80 flex-1">{a.body}</p>
              <p className="mt-5 text-sm text-muted">{a.ceus}</p>
              <span
                aria-disabled="true"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy/40 cursor-not-allowed"
              >
                Detailed page coming soon
                <span className="rounded-full border border-line px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.18em] text-muted/70 normal-case">
                  Soon
                </span>
              </span>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
