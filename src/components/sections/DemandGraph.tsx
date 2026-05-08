"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Static Google Trends chart for "blood flow restriction" (Worldwide), with
// brand-typed annotations baked into the image (Pascal's Canva export, 2026-05-08).
//
// Source files committed alongside the deliverable:
//   - public/images/demand-trend.jpg  (annotated 2000x1500 export)
//   - docs/data/google-trends-bfr-worldwide.csv  (full monthly time series)
//
// To refresh: replace the image with a fresh export and update the absolute volume
// constants below if the peak or take-off figures change.

// Glimpse-derived absolute monthly search volumes
const PRE_SURGE_MONTH = "July 2025";
const PRE_SURGE_VOLUME = "~19,000";
const PEAK_MONTH = "February 2026";
const PEAK_VOLUME = "~84,000";
const PRIOR_ALL_TIME_HIGH_MONTH = "September 2021";
const PRIOR_ALL_TIME_HIGH_VOLUME = "~33,000"; // back-derived from index ratio (39/100 of 84k)
const SURGE_MULTIPLE = "4.4";
const SURGE_PERCENT = 342;
const SURGE_DURATION_MONTHS = 7;
const PEAK_VS_PRIOR = "2.6";

// Returns months elapsed since February 2026 (the all-time peak). Updates automatically
// as time passes so the body copy stays current without manual edits.
function monthsSincePeak(): number {
  const peak = new Date(2026, 1, 1); // Feb 2026 (month is 0-indexed)
  const now = new Date();
  const months =
    (now.getFullYear() - peak.getFullYear()) * 12 +
    (now.getMonth() - peak.getMonth());
  return Math.max(0, months);
}

export default function DemandGraph() {
  const peakMonthsAgo = monthsSincePeak();
  const peakAgoLabel =
    peakMonthsAgo === 0
      ? "this month"
      : peakMonthsAgo === 1
      ? "last month"
      : `${peakMonthsAgo} months ago`;

  return (
    <section className="section-wrap bg-white" aria-label="BFR search demand trend">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="grid gap-12 lg:grid-cols-12 lg:items-center"
        >
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <SectionLabel label="Patient demand trajectory" />
            <h2 className="mt-5 font-display text-display-xl text-navy text-balance">
              Worldwide searches for blood flow restriction just {SURGE_MULTIPLE}×&apos;d in {SURGE_DURATION_MONTHS} months.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/85">
              From {PRE_SURGE_MONTH} to {PEAK_MONTH}, Google searches for &ldquo;blood flow restriction&rdquo; climbed from roughly {PRE_SURGE_VOLUME} per month to roughly {PEAK_VOLUME} per month. That is +{SURGE_PERCENT}% in {SURGE_DURATION_MONTHS} months.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/85">
              The previous all-time high was {PRIOR_ALL_TIME_HIGH_VOLUME} per month, set in {PRIOR_ALL_TIME_HIGH_MONTH}. The new peak cleared it by {PEAK_VS_PRIOR}×.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/80">
              We are not waiting for the wave. We are at the inflection point right now. The clinics that get certified this quarter are the ones that show up first when those new patients search next quarter.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              All-time peak was {peakAgoLabel}. The trajectory took fourteen years to build. The last seven months redrew it.
            </p>
          </motion.div>

          <motion.figure variants={fadeUp} className="lg:col-span-7">
            <Image
              src="/images/demand-trend.jpg"
              alt={`Annotated Google Trends chart showing worldwide search interest for "blood flow restriction" from January 2012 to May 2026. Two anchor points: take-off at July 2025 (~19,000 searches per month) and the all-time high in ${PEAK_MONTH} (~84,000 searches per month).`}
              width={2000}
              height={1500}
              sizes="(max-width: 1024px) 100vw, 600px"
              className="block h-auto w-full"
              style={{ width: "100%", height: "auto" }}
            />
            <figcaption className="mt-3 text-xs leading-relaxed text-muted">
              Source: Google Trends + Glimpse, search term &ldquo;blood flow restriction,&rdquo; Worldwide, January 2012 to May 2026. Index normalized 0-100 where 100 represents peak interest. Absolute monthly volumes anchored to Glimpse&apos;s peak figure (~84,000/month). Full time series at <code className="font-mono">docs/data/google-trends-bfr-worldwide.csv</code>.
            </figcaption>
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
}
