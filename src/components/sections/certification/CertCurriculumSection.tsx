"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Highlighted from "@/components/shared/Highlighted";
import SectionLabel from "@/components/shared/SectionLabel";
import VideoPoster from "@/components/shared/VideoPoster";
import { CERTIFICATION } from "@/content/certification";
import { CURRICULUM, VIDEOS, type CourseModule } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Curriculum-as-capabilities (Belief 5). PLAN.md §5 row 8: "Not a module
// list. A capability list." Per-course capability framing comes from
// certification.curriculum.capabilities; the module data underneath comes
// from the CURRICULUM constant. Accordion stays closed by default; on cold
// paid the capability headline is the conversion lever, the module list is
// the proof.
//
// Rev 1 (2026-05-20, REVISION-01.md §4, §5):
//  - Highlighted underline-accent applied to the curriculum headline.
//  - CEU banner PNG (transparent, /images/ceus/) placed top-right of every
//    course card with negative offsets so the banner overlaps the card edge
//    for the 3D peek Pascal sketched. Banner files: course-1.png,
//    course-2.png, course-3-4.png (shared between Course 3 + Course 4 since
//    both are 2 CEUs).
//  - Subtitle now reads "{moduleCount} modules · {totalDuration}" only;
//    the "{ceus} CEUs" segment was removed since the banner carries it.
//  - Each card gets a video preview via the shared VideoPoster click-to-play
//    pattern, mirroring /get-certified's CurriculumSection. Uses each
//    course's posterSrc + VIDEOS[promoVideoKey] from the CURRICULUM
//    constant, so the integration lights up wherever the constant has data.

// CEU banner per course slug. Course 3 and Course 4 share the 2-CEU banner
// because both courses are 2 CEUs each (the asset Pascal supplied is a
// combined "Course 3/4" banner).
const CEU_BANNER_BY_SLUG: Record<string, string> = {
  "course-1": "/images/ceus/course-1.png",
  "course-2": "/images/ceus/course-2.png",
  "course-3": "/images/ceus/course-3-4.png",
  "course-4": "/images/ceus/course-3-4.png",
};

function ModuleRow({ module }: { module: CourseModule }) {
  const num = typeof module.n === "number" ? String(module.n).padStart(2, "0") : module.n;
  return (
    <li className="grid grid-cols-[28px_1fr_auto] gap-x-3 gap-y-1 border-b border-line/60 py-3 last:border-b-0 text-left">
      <span className="font-display text-base text-muted tabular-nums pt-0.5">{num}</span>
      <p className="text-sm leading-snug text-navy font-bold">{module.title}</p>
      <span className="text-xs text-muted tabular-nums whitespace-nowrap pt-1">{module.duration}</span>
      {module.description && (
        <p className="col-start-2 text-sm leading-relaxed text-muted">{module.description}</p>
      )}
    </li>
  );
}

export default function CertCurriculumSection() {
  const { curriculum } = CERTIFICATION;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="curriculum" className="section-wrap cream-field" aria-label="What you can actually do after">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={curriculum.label} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            <Highlighted text={curriculum.headline} phrase={curriculum.highlight} />
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-ink/85 text-left"
          >
            {curriculum.intro}
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-20 mx-auto max-w-4xl space-y-14 sm:space-y-16"
        >
          {CURRICULUM.map((c, i) => {
            const open = openIndex === i;
            const capability = curriculum.capabilities.find((x) => x.courseSlug === c.slug);
            const courseLabel = `Course ${String(i + 1).padStart(2, "0")}`;
            const ceuBanner = CEU_BANNER_BY_SLUG[c.slug];
            const promoVideoSrc = VIDEOS[c.promoVideoKey];
            return (
              <motion.li
                key={c.slug}
                variants={fadeUp}
                className="relative rounded-lg border border-line bg-white pt-9 pb-7 px-5 sm:px-7"
              >
                <span className="absolute left-1/2 -top-3 -translate-x-1/2 inline-flex items-center bg-navy text-white px-4 py-1.5 rounded-full font-body font-semibold text-xs tracking-[0.18em] uppercase whitespace-nowrap">
                  {courseLabel}
                </span>

                {/* Rev 1 §5a + Rev 2 (2026-05-21, REVISION-02.md §2): CEU
                    banner top-right, slightly off the card so the badge
                    overlaps the corner with a 3D peek. Rev 2 halved the
                    sizes (Rev 1 banner was reading as too dominant on the
                    card and covering headline edges); offsets reduced
                    proportionally so the smaller badge still peeks without
                    collapsing into the corner. The "$349 value" caption is
                    part of the banner PNG itself, no code change for it. */}
                {ceuBanner && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-3 -right-1 sm:-top-4 sm:-right-2 block"
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

                <div className="grid grid-cols-[88px_1fr] sm:grid-cols-[120px_1fr] gap-5 sm:gap-7 items-start">
                  <div className="relative h-20 w-20 sm:h-28 sm:w-28 shrink-0">
                    <Image
                      src={c.coatOfArmsSrc}
                      alt={`${c.title} course logo`}
                      fill
                      sizes="112px"
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0 pr-0 sm:pr-[140px]">
                    <h3 className="font-display text-2xl sm:text-display-md text-navy text-balance leading-tight">
                      {c.title}
                    </h3>
                    <p className="mt-2 small-caps-line text-accent">
                      {c.moduleCount} modules · {c.totalDuration}
                    </p>
                  </div>
                </div>

                {capability && (
                  <p className="mt-6 text-base leading-relaxed text-ink/90">
                    {capability.capability}
                  </p>
                )}

                {/* Rev 1 §5b: per-course video preview. Mirrors the shared
                    VideoPoster click-to-play pattern from /get-certified's
                    CurriculumSection. Uses each course's posterSrc and the
                    promoVideoKey-resolved video URL from the CURRICULUM
                    constant. */}
                {promoVideoSrc && (
                  <div className="mt-7 relative w-full overflow-hidden rounded-lg bg-black/5 ring-1 ring-line">
                    <VideoPoster
                      posterSrc={c.posterSrc}
                      videoSrc={promoVideoSrc}
                      title={`${c.title} promo`}
                      sizes="(max-width: 1024px) 100vw, 600px"
                      animated={c.animatedSrc}
                    />
                  </div>
                )}

                <div
                  id={`${c.slug}-panel`}
                  role="region"
                  aria-hidden={!open}
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mt-6 border-t border-line/60 pt-5">
                      <ul className="divide-y divide-line/40">
                        {c.modules.map((m) => (
                          <ModuleRow key={`${c.slug}-${m.n}`} module={m} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`${c.slug}-panel`}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-cream/60 hover:bg-cream transition py-3.5 font-body font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase text-navy/80"
                >
                  <span>{open ? "Hide modules" : "See the modules"}</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden
                    className={`transition-transform ${open ? "rotate-180" : ""}`}
                  >
                    <path d="M2.5 5l4.5 4.5L11.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
