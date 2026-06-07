"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { CONSULTING_ABOUT } from "@/content/consulting";
import Highlighted from "@/components/shared/Highlighted";
import { STATS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// About Nick (consulting authority). Reuses the STATS constant so the
// publication count and years-in-practice stay in sync sitewide. Brand/Nick-
// level claims only (modality-vs-brand discipline): no FEATURED_IN logos here.
const STATS_ROW = [
  { value: STATS.publications, label: "peer-reviewed BFR publications" },
  { value: "26", label: "journals peer-reviewed" },
  { value: STATS.yearsInClinic, label: "years in active Manhattan practice" },
];

export default function ConsultingAbout() {
  return (
    <section className="section-wrap cream-field">
      <div className="container-rail">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel label={CONSULTING_ABOUT.eyebrow} />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-5 font-display text-display-xl text-navy text-balance"
            >
              <Highlighted text={CONSULTING_ABOUT.headline} phrase={CONSULTING_ABOUT.highlight} />
            </motion.h2>
            {CONSULTING_ABOUT.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="mt-5 text-lg leading-relaxed text-ink/80"
              >
                {p}
              </motion.p>
            ))}
            <motion.dl
              variants={fadeUp}
              className="mt-8 grid grid-cols-3 gap-6 border-t border-line pt-7"
            >
              {STATS_ROW.map((s) => (
                <div key={s.label} className="stat-block">
                  <dt className="stat-value">{s.value}</dt>
                  <dd className="stat-label">{s.label}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            variants={fadeUp}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg ring-1 ring-navy/10 shadow-navy-md">
              <Image
                src={CONSULTING_ABOUT.imageSrc}
                alt={CONSULTING_ABOUT.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
