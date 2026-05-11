"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import { HOME_COURSE_OVERVIEW } from "@/content/home";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Section 8 — Course Overview teaser. Bridges to /get-certified for full
// curriculum. Awareness 4-5. Four-course preview, four highlight stats, two CTAs.

export default function HomeCourseOverview() {
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
            <SectionLabel label={HOME_COURSE_OVERVIEW.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {HOME_COURSE_OVERVIEW.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-7 mx-auto max-w-2xl text-lg leading-relaxed text-ink/80"
          >
            {HOME_COURSE_OVERVIEW.summary}
          </motion.p>
        </motion.div>

        <motion.dl
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 max-w-4xl mx-auto"
        >
          {HOME_COURSE_OVERVIEW.highlights.map((h) => (
            <motion.div
              key={h.label}
              variants={fadeUp}
              className="rounded-lg border border-line bg-white p-5 sm:p-6 text-center"
            >
              <dt
                className="font-display text-navy leading-none"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 3rem)" }}
              >
                {h.value}
              </dt>
              <dd className="mt-2 small-caps-line text-accent text-[0.78rem]">{h.label}</dd>
            </motion.div>
          ))}
        </motion.dl>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 mx-auto max-w-4xl grid gap-4 md:grid-cols-2"
        >
          {HOME_COURSE_OVERVIEW.courses.map((c) => (
            <motion.li
              key={c.n}
              variants={fadeUp}
              className="rounded-lg border border-line bg-white p-6 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.12)]"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl text-accent leading-none">
                  {c.n.padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl text-navy text-balance">{c.title}</h3>
              </div>
              <p className="mt-3 small-caps-line text-muted text-[0.78rem]">{c.detail}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{c.summary}</p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-4"
        >
          <PrimaryCTA
            label={HOME_COURSE_OVERVIEW.ctaLabel}
            secondary="11.75 CEUs · Equipment-agnostic"
            href="/get-certified"
            showStars={false}
          />
          <Link
            href={HOME_COURSE_OVERVIEW.ctaSecondaryHref}
            className="btn-secondary"
          >
            {HOME_COURSE_OVERVIEW.ctaSecondaryLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
