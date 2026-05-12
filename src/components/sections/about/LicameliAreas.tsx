"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { LICAMELI_AREAS } from "@/content/about";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// What Dr. Licameli covers in the certification. Five-item bullet list
// framed as "where his chapters fit" — defines his role inside the cert
// without overstating his solo authority.

export default function LicameliAreas() {
  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-prose-wide"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={LICAMELI_AREAS.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-md text-navy text-balance"
          >
            {LICAMELI_AREAS.headline}
          </motion.h2>
          <motion.ul variants={stagger} className="mt-10 space-y-4">
            {LICAMELI_AREAS.items.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-start gap-4 border-b border-line pb-4"
              >
                <span
                  aria-hidden
                  className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-accent"
                />
                <span className="text-base leading-relaxed text-ink/85">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
