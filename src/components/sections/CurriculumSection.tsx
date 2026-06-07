"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import VideoPoster from "@/components/shared/VideoPoster";
import { CURRICULUM, type CourseModule, VIDEOS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// CEU banner per course slug. Course 3 and Course 4 share the 2-CEU banner
// (both courses are 2 CEUs each). Mirrors /certification's CertCurriculumSection.
const CEU_BANNER_BY_SLUG: Record<string, string> = {
  "course-1": "/images/ceus/course-1.png",
  "course-2": "/images/ceus/course-2.png",
  "course-3": "/images/ceus/course-3-4.png",
  "course-4": "/images/ceus/course-3-4.png",
};

// Module rows: number, bold navy title, optional muted description, duration on right.
function ModuleRow({ module }: { module: CourseModule }) {
  const num = typeof module.n === "number" ? String(module.n).padStart(2, "0") : module.n;
  return (
    <li className="grid grid-cols-[28px_1fr_auto] gap-x-3 gap-y-1 border-b border-line/60 py-4 last:border-b-0 text-left">
      <span className="font-display text-base text-muted tabular-nums pt-0.5">
        {num}
      </span>
      <p className="text-sm sm:text-base leading-snug text-navy font-bold">
        {module.title}
      </p>
      <span className="text-xs text-muted tabular-nums whitespace-nowrap pt-1">
        {module.duration}
      </span>
      {module.description && (
        <p className="col-start-2 text-sm leading-relaxed text-muted">
          {module.description}
        </p>
      )}
    </li>
  );
}

export default function CurriculumSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="curriculum" className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="The curriculum" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy"
          >
            4 courses. 37 modules. <span className="underline-accent">11.75 CEUs.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-ink/80 mx-auto max-w-2xl text-left"
          >
            Built on 74 peer-reviewed publications by the lead instructor. Every module ships with the citation list, so the science is auditable from inside the course.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg leading-relaxed text-ink/80 mx-auto max-w-2xl text-left"
          >
            11.75 hours of video content. Do it in a weekend or take 4 weeks. On-demand, your pace.
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-20 mx-auto max-w-6xl space-y-16"
        >
          {CURRICULUM.map((c, i) => {
            const open = openIndex === i;
            const promoVideoSrc = VIDEOS[c.promoVideoKey];
            const courseLabel = `Course ${String(i + 1).padStart(2, "0")}`;
            const ceuBanner = CEU_BANNER_BY_SLUG[c.slug];
            return (
              <motion.li
                key={c.slug}
                variants={fadeUp}
                className="relative rounded-lg border border-line bg-white pt-9 pb-7 px-5 sm:px-7"
              >
                {/* Pill says ONLY "Course 01". DM Sans eyebrow style. */}
                <span className="absolute left-1/2 -top-3 -translate-x-1/2 inline-flex items-center bg-navy text-white px-4 py-1.5 rounded-full font-body font-semibold text-xs tracking-[0.18em] uppercase whitespace-nowrap">
                  {courseLabel}
                </span>

                {/* CEU banner: transparent PNG peeks off the top-right corner
                    with a 3D peek. Course 3 + Course 4 share the 2-CEU banner.
                    Mirrors /certification's CertCurriculumSection; the CEU /
                    value caption is part of the PNG itself. */}
                {ceuBanner && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-3 -right-2 sm:-top-4 lg:right-auto lg:left-2 block"
                  >
                    <Image
                      src={ceuBanner}
                      alt=""
                      width={160}
                      height={88}
                      className="h-auto w-[55px] sm:w-[70px] lg:w-[80px] drop-shadow-[0_12px_22px_rgba(25,55,99,0.2)]"
                    />
                  </span>
                )}

                {/* §Pascal-2026-05-08 v9: desktop two-column layout. Left side
                   (course meta) is sticky; right side (video + module list)
                   scrolls. Mobile keeps the existing single-column flow. */}
                <div className="lg:grid lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-10">
                  {/* Left column — sticky on desktop. */}
                  <div className="lg:sticky lg:top-[80px] lg:self-start lg:py-2">
                    <div className="grid grid-cols-[96px_1fr] sm:grid-cols-[128px_1fr] lg:grid-cols-1 gap-5 sm:gap-7 lg:gap-0 items-start lg:items-center lg:text-center">
                      <div className="flex flex-col items-center text-center lg:order-1">
                        <div className="relative h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32 shrink-0">
                          <Image
                            src={c.coatOfArmsSrc}
                            alt={`${c.title} course logo`}
                            fill
                            sizes="128px"
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="min-w-0 lg:order-2 lg:mt-6">
                        <h3 className="font-display text-2xl sm:text-display-md text-navy text-balance leading-tight">
                          {c.title}
                        </h3>
                        <p className="mt-2 small-caps-line text-accent">
                          {c.totalDuration} · {c.moduleCount} modules
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 lg:mt-5 text-base leading-relaxed text-ink/85 lg:text-left">
                      {c.summary}
                    </p>
                  </div>

                  {/* Right column — video + module list + toggle. Scrolls past
                     the sticky left column on desktop. The toggle lives INSIDE
                     this column so it only spans the video/curriculum area,
                     not the entire card. */}
                  <div className="mt-6 lg:mt-0">
                    <div className="relative w-full overflow-hidden rounded-lg bg-black/5 ring-1 ring-line">
                      <VideoPoster
                        posterSrc={c.posterSrc}
                        videoSrc={promoVideoSrc}
                        title={`${c.title} promo`}
                        sizes="(max-width: 1024px) 100vw, 600px"
                        animated={c.animatedSrc}
                      />
                    </div>

                    <div
                      id={`${c.slug}-panel`}
                      role="region"
                      aria-hidden={!open}
                      className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="mt-7 border-t border-line/60 pt-6">
                          <ul className="divide-y divide-line/40">
                            {c.modules.map((m) => (
                              <ModuleRow key={`${c.slug}-${m.n}`} module={m} />
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Toggle scoped to the right column. */}
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : i)}
                      aria-expanded={open}
                      aria-controls={`${c.slug}-panel`}
                      className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-cream/60 hover:bg-cream transition py-4 font-body font-semibold text-sm tracking-[0.18em] uppercase text-navy/80"
                    >
                      <span>{open ? "Hide curriculum" : "View curriculum"}</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden
                        className={`transition-transform ${open ? "rotate-180" : ""}`}
                      >
                        <path d="M2.5 5l4.5 4.5L11.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* CTA at the bottom of the curriculum block — Pascal: people see the
           offer breakdown, then act. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.7 }}
          className="mt-16 flex justify-center"
        >
          <PrimaryCTA />
        </motion.div>
      </div>
    </section>
  );
}
