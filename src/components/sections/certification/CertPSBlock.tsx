"use client";

import { motion } from "framer-motion";
import { CERTIFICATION } from "@/content/certification";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Rev 1 (2026-05-20): campaign-only P.S. block. Lifts the shared PSBlock
// visual pattern but reads directly from CERTIFICATION.ps so the cert page
// no longer needs the variantShim object to feed the shared component.
// Kept tiny on purpose; if a richer P.S. treatment is needed later (e.g.,
// per-line styling), it lives here, not in the shared component.
export default function CertPSBlock() {
  const ps = CERTIFICATION.ps;
  return (
    <section className="bg-white pt-16 lg:pt-20 pb-24 lg:pb-32" aria-label="Postscript">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-2xl lg:border-l-2 lg:border-accent/40 lg:pl-8"
        >
          {ps.map((line, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="mt-6 first:mt-0 text-base sm:text-lg leading-relaxed text-ink/90"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
