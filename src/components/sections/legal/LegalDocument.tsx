"use client";

import { motion } from "framer-motion";
import type { LegalDoc } from "@/content/legal";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Long-form legal-document layout. Renders intro paragraphs, a series of
// H2-labeled sections, and a final contact block. Single column, prose-
// width, plenty of vertical breathing room — these pages are utility
// reads, not scroll-bait.

export default function LegalDocument({ doc }: { doc: LegalDoc }) {
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
          {doc.intro && doc.intro.length > 0 ? (
            <div className="space-y-5 border-l-2 border-accent/40 pl-6 mb-14">
              {doc.intro.map((p, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="text-base leading-relaxed text-ink/85"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          ) : null}

          <div className="space-y-12">
            {doc.sections.map((s) => (
              <motion.section key={s.heading} variants={fadeUp}>
                <h2 className="font-display text-display-md text-navy text-balance">
                  {s.heading}
                </h2>
                {s.paragraphs && s.paragraphs.length > 0 ? (
                  <div className="mt-5 space-y-4">
                    {s.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-base leading-relaxed text-ink/85"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                ) : null}
                {s.list && s.list.length > 0 ? (
                  <ul className="mt-5 space-y-3">
                    {s.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-base leading-relaxed text-ink/85"
                      >
                        <span
                          aria-hidden
                          className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </motion.section>
            ))}
          </div>

          {doc.contact ? (
            <motion.section
              variants={fadeUp}
              className="mt-16 rounded-lg border border-line bg-cream p-7 lg:p-8"
            >
              <h2 className="font-display text-2xl text-navy">
                {doc.contact.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {doc.contact.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-ink/85"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </motion.section>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
