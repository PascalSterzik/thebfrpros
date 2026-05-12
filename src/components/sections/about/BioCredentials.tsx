"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// eyebrow + headline + list of {role, org?}. Org can be empty when the role
// is self-evident (e.g. "Active natural bodybuilder competitor"). Renders
// each row with a vertical hairline between role and org so the list reads
// as a credentials column rather than a paragraph list.

type Item = { role: string; org: string };

export default function BioCredentials({
  eyebrow,
  headline,
  items,
}: {
  eyebrow: string;
  headline: string;
  items: ReadonlyArray<Item>;
}) {
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
            <SectionLabel label={eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-md text-navy text-balance"
          >
            {headline}
          </motion.h2>
          <motion.ul
            variants={stagger}
            className="mt-10 border-t border-line"
          >
            {items.map((item) => (
              <motion.li
                key={`${item.role}-${item.org}`}
                variants={fadeUp}
                className="grid gap-2 border-b border-line py-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
              >
                <p className="text-base text-ink/90">{item.role}</p>
                {item.org ? (
                  <p className="text-sm text-muted sm:text-right">{item.org}</p>
                ) : null}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
