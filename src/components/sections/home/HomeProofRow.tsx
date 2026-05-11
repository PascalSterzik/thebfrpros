"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import Marquee from "@/components/shared/Marquee";
import { PARTNERS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Proof — answers ONE question for the homepage visitor: "Will my license
// accept BFR?" Frames the proof as BFR-modality SCOPE (APTA recognizes
// BFR in PT scope; NATA approves BFR for ATs), not as cert-CEU approvals
// (BOC AP# / NY State PT / NJ State PT — those are cert-page material and
// answer a different question, "is the COURSE approved for CEU credit").
// See brand-guide.md Copy & Customer Journey Principles Principle 6 and
// website-builder Site-Level Congruence Principle: a section answers one
// question per the visitor's awareness stage, no mixing of cert and
// modality proof.

const SCOPE_STATEMENTS = [
  {
    body: "American Physical Therapy Association",
    short: "APTA",
    detail: "BFR is within the PT scope of practice.",
    audience: "Physical Therapists",
  },
  {
    body: "National Athletic Trainers Association",
    short: "NATA",
    detail: "BFR is approved for use by Athletic Trainers within the NATA scope.",
    audience: "Athletic Trainers",
  },
] as const;

export default function HomeProofRow() {
  return (
    <section id="proof" className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="BFR within your scope" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-md text-navy text-balance"
          >
            BFR is in scope for licensed PTs and ATs
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-muted"
          >
            The two governing bodies for the primary practitioner audiences have stated, in plain language, that BFR is within practice scope.
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto"
        >
          {SCOPE_STATEMENTS.map((s) => (
            <motion.li
              key={s.short}
              variants={fadeUp}
              className="rounded-lg border border-line bg-cream p-7 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.12)]"
            >
              <p className="small-caps-line text-accent">{s.short}</p>
              <h3 className="mt-3 font-display text-xl text-navy text-balance">
                {s.body}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink/85">{s.detail}</p>
              <p className="mt-4 text-xs text-muted">For {s.audience}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <p className="text-center small-caps-line text-muted text-[0.78rem]">
            Adopted by clinic networks treating thousands of patients
          </p>
          <div className="mt-6">
            <Marquee
              logos={PARTNERS}
              ariaLabel="Clinic and equipment partners"
              variant="light"
              itemHeight="h-12 sm:h-14"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
