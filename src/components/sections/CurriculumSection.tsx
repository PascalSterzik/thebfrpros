"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import { CURRICULUM, type CourseModule, type ModuleType, VIDEOS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

const TYPE_ICON: Record<ModuleType, string> = {
  video: "▶",
  pdf: "📄",
  quiz: "❓",
  chart: "📊",
};

const TYPE_LABEL: Record<ModuleType, string> = {
  video: "Video",
  pdf: "PDF",
  quiz: "Quiz",
  chart: "Chart",
};

function ModuleRow({ module }: { module: CourseModule }) {
  return (
    <li className="grid grid-cols-[28px_24px_1fr_auto] items-baseline gap-3 border-b border-line/60 py-3 last:border-b-0">
      <span className="font-display text-base text-muted tabular-nums">
        {typeof module.n === "number" ? String(module.n).padStart(2, "0") : module.n}
      </span>
      <span aria-label={TYPE_LABEL[module.type]} className="text-base">
        {TYPE_ICON[module.type]}
      </span>
      <p className="text-sm sm:text-base leading-relaxed text-ink/85">{module.title}</p>
      <span className="text-xs text-muted tabular-nums">{module.duration}</span>
    </li>
  );
}

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
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="The curriculum" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            4 courses. 37 modules. 11.75 CEUs.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-ink/80"
          >
            Built on 72+ peer-reviewed publications by the lead instructor. Every module ships with the citation list, so the science is auditable from inside the course.
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 space-y-5"
        >
          {CURRICULUM.map((c, i) => {
            const open = openIndex === i;
            const promoVideoSrc = VIDEOS[c.promoVideoKey];
            return (
              <motion.li
                key={c.slug}
                variants={fadeUp}
                className="rounded-2xl border border-line bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`${c.slug}-panel`}
                  className="grid w-full grid-cols-[64px_1fr_auto] sm:grid-cols-[80px_1fr_auto_64px] gap-4 sm:gap-6 items-center p-5 sm:p-7 text-left transition hover:bg-cream/60"
                >
                  <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-xl ring-1 ring-line bg-white">
                    <Image
                      src={c.coatOfArmsSrc}
                      alt={`${c.title} course logo`}
                      fill
                      sizes="80px"
                      className="object-contain p-1.5"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="small-caps-line text-accent">
                      Course {String(i + 1).padStart(2, "0")} · {c.totalDuration} · {c.moduleCount} modules
                    </p>
                    <h3 className="mt-2 font-display text-xl sm:text-2xl text-navy text-balance">
                      {c.title}
                    </h3>
                  </div>
                  {/* Navy CEU pill, stacked number + label */}
                  <div className="hidden sm:flex flex-col items-center justify-center rounded-2xl bg-navy text-white px-3 py-3 leading-none">
                    <span className="font-display text-2xl">{c.ceus}</span>
                    <span className="mt-1 text-[0.6rem] uppercase tracking-[0.16em] opacity-85">CEUs</span>
                  </div>
                  <span
                    aria-hidden
                    className={`shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy transition ${
                      open ? "rotate-45 border-accent text-accent" : ""
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>

                <div
                  id={`${c.slug}-panel`}
                  role="region"
                  aria-hidden={!open}
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-line px-5 sm:px-7 pt-6 pb-7">
                      <p className="max-w-2xl text-base leading-relaxed text-ink/85">{c.summary}</p>

                      <div className="mt-6 grid gap-7 lg:grid-cols-12">
                        <div className="lg:col-span-7">
                          <p className="small-caps-line text-muted">What's inside</p>
                          <ul className="mt-4 divide-y divide-line/40">
                            {c.modules.map((m) => (
                              <ModuleRow key={`${c.slug}-${m.n}`} module={m} />
                            ))}
                          </ul>
                        </div>
                        <div className="lg:col-span-5">
                          <p className="small-caps-line text-muted">Course preview</p>
                          <div className="mt-4 relative w-full overflow-hidden rounded-xl bg-black/5 ring-1 ring-line">
                            <div className="relative pb-[56.25%]">
                              <iframe
                                src={promoVideoSrc}
                                title={`${c.title} promo`}
                                loading="lazy"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 h-full w-full border-0"
                              />
                            </div>
                          </div>
                          <p className="mt-3 text-xs text-muted">
                            Course value: ${c.courseValue}. Bundled with the other 3 courses + 11 bonuses for $449 total.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <PrimaryCTA label="See Module 1 Free" href="#module-preview" variant="secondary" />
          <p className="text-sm text-muted">
            Watch the orientation video and download the screening form before deciding.
          </p>
        </div>
      </div>
    </section>
  );
}
