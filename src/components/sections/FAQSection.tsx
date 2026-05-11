"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { FAQ, type FAQItem } from "@/content/faq";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

type FAQSectionProps = {
  items?: readonly FAQItem[];
  eyebrow?: string;
  title?: string;
  intro?: string;
};

export default function FAQSection({
  items = FAQ,
  eyebrow = "Common questions",
  title = "The 9 questions every clinician asks before enrolling.",
  intro = "Pulled from the actual support inbox. Answered here in plain language.",
}: FAQSectionProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="grid gap-12 lg:grid-cols-12"
        >
          <motion.div variants={fadeUp} className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <SectionLabel label={eyebrow} />
            <h2 className="mt-5 font-display text-display-xl text-navy text-balance">
              {title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              {intro}
            </p>
          </motion.div>

          <motion.ul variants={fadeUp} className="lg:col-span-8 divide-y divide-line border-t border-b border-line">
            {items.map((item, i) => {
              const open = openIndex === i;
              return (
                <li key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left transition"
                  >
                    <span className="font-display text-lg text-navy text-balance lg:text-xl">
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className={`shrink-0 mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-line text-navy transition ${
                        open ? "rotate-45 border-accent text-accent" : ""
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-hidden={!open}
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-7 text-base leading-relaxed text-ink/85">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
