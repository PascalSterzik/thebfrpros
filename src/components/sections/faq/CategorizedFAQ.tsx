"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { FAQ_PAGE } from "@/content/faq-page";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Categorized FAQ accordion. Each category renders as its own
// SectionLabel + heading + accordion block, with an anchor id per
// category so the in-page nav can deep-link.

type OpenKey = `${string}-${number}`;

export default function CategorizedFAQ() {
  const [open, setOpen] = useState<OpenKey | null>(`${FAQ_PAGE[0].slug}-0`);

  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="grid gap-12 lg:grid-cols-12"
        >
          {/* Left rail: category jump nav */}
          <motion.nav
            variants={fadeUp}
            aria-label="FAQ categories"
            className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start"
          >
            <SectionLabel label="Jump to" />
            <ul className="mt-5 space-y-3">
              {FAQ_PAGE.map((cat) => (
                <li key={cat.slug}>
                  <a
                    href={`#${cat.slug}`}
                    className="group flex items-start gap-3 text-base text-navy hover:text-accent transition"
                  >
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40 group-hover:bg-accent transition"
                    />
                    <span className="font-semibold">{cat.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Right column: categorized accordions */}
          <motion.div variants={fadeUp} className="lg:col-span-8 space-y-16">
            {FAQ_PAGE.map((cat) => (
              <section
                key={cat.slug}
                id={cat.slug}
                aria-labelledby={`${cat.slug}-heading`}
                className="scroll-mt-32"
              >
                <p className="small-caps-line text-accent">{cat.label}</p>
                <h2
                  id={`${cat.slug}-heading`}
                  className="mt-3 font-display text-display-md text-navy text-balance"
                >
                  {cat.description}
                </h2>

                <ul className="mt-8 divide-y divide-line border-t border-b border-line">
                  {cat.items.map((item, i) => {
                    const key: OpenKey = `${cat.slug}-${i}`;
                    const isOpen = open === key;
                    return (
                      <li key={item.q}>
                        <button
                          type="button"
                          onClick={() => setOpen(isOpen ? null : key)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-panel-${cat.slug}-${i}`}
                          className="flex w-full items-start justify-between gap-6 py-6 text-left transition"
                        >
                          <span className="font-display text-lg text-navy text-balance lg:text-xl">
                            {item.q}
                          </span>
                          <span
                            aria-hidden
                            className={`shrink-0 mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-line text-navy transition ${
                              isOpen ? "rotate-45 border-accent text-accent" : ""
                            }`}
                          >
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path
                                d="M6 1v10M1 6h10"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                        </button>
                        <div
                          id={`faq-panel-${cat.slug}-${i}`}
                          role="region"
                          aria-hidden={!isOpen}
                          className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
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
                </ul>
              </section>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
