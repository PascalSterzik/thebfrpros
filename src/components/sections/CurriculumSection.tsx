"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import { CURRICULUM, STATS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

export default function CurriculumSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="curriculum" className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="grid gap-12 lg:grid-cols-12"
        >
          <motion.div variants={fadeUp} className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <SectionLabel label="The curriculum" />
            <h2 className="mt-5 font-display text-display-xl text-navy text-balance">
              4 courses. 37 modules. 11.75 CEUs.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/80">
              Built on more peer-reviewed publications than any other BFR certification on the market. Each module ships with the citation list, so the science is auditable from inside the course.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-x-6 gap-y-2 max-w-md">
              <div>
                <dt className="stat-value">{STATS.modules}</dt>
                <dd className="stat-label">modules</dd>
              </div>
              <div>
                <dt className="stat-value">{STATS.ceus}</dt>
                <dd className="stat-label">CEUs</dd>
              </div>
              <div>
                <dt className="stat-value">4</dt>
                <dd className="stat-label">courses</dd>
              </div>
            </dl>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-7">
            <ul className="space-y-3">
              {CURRICULUM.map((c, i) => {
                const open = openIndex === i;
                return (
                  <li key={c.title}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : i)}
                      aria-expanded={open}
                      aria-controls={`curr-panel-${i}`}
                      className="group flex w-full items-start justify-between gap-6 rounded-2xl border border-line bg-white p-6 text-left transition hover:border-navy/40 hover:shadow-navy-sm"
                    >
                      <div>
                        <p className="small-caps-line text-accent">
                          Course {String(i + 1).padStart(2, "0")} · {c.ceus} · {c.moduleCount} modules
                        </p>
                        <h3 className="mt-3 font-display text-2xl text-navy">{c.title}</h3>
                      </div>
                      <span
                        aria-hidden
                        className={`shrink-0 mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-navy transition ${
                          open ? "rotate-45 border-accent text-accent" : ""
                        }`}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                    <div
                      id={`curr-panel-${i}`}
                      role="region"
                      aria-hidden={!open}
                      className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="space-y-3 px-6 pt-5 pb-6 text-base leading-relaxed text-ink/85">
                          {c.bullets.map((b, j) => (
                            <li key={j} className="grid grid-cols-[16px_1fr] gap-3">
                              <span className="mt-2 block h-1 w-1 rounded-full bg-accent" aria-hidden />
                              <p>{b}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10">
              <PrimaryCTA label="Enroll for $449" hint="30-day money-back guarantee. No equipment required." />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
