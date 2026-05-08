"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Static Google Trends screenshot for "blood flow restriction" (Worldwide), with
// King-Kong-style annotations overlaid by Pascal in Canva (peak = ~80k searches/month,
// +317% growth label).
// Source files committed alongside the deliverable:
//   - public/images/demand-trend.jpg  (the annotated 1400x1300 export, 2026-05-08)
//   - docs/data/google-trends-bfr-worldwide.csv  (full monthly time series)
//
// To refresh: replace both files with fresh exports from
// trends.google.com/trends/explore?q=blood+flow+restriction&date=all and Glimpse,
// then update the constants below if the inflection or peak shift.

// CSV-validated key data points
const PRE_SURGE_MONTH = "July 2025";
const PRE_SURGE_VALUE = 24; // last month before the August leap
const PRE_SURGE_VOLUME = "~19,000"; // Glimpse-derived absolute monthly searches
const AUGUST_SURGE_VALUE = 64; // single-month jump
const PEAK_MONTH = "February 2026";
const PEAK_VALUE = 100; // all-time high
const PEAK_VOLUME = "~80,000"; // Glimpse-derived absolute monthly searches at peak
const PRIOR_ALL_TIME_HIGH_MONTH = "September 2021";
const PRIOR_ALL_TIME_HIGH_VALUE = 39;
const PRIOR_ALL_TIME_HIGH_VOLUME = "~31,000"; // back-derived from index ratio
const SURGE_MULTIPLE = (PEAK_VALUE / PRE_SURGE_VALUE).toFixed(1); // 4.2
const SURGE_PERCENT = Math.round(((PEAK_VALUE - PRE_SURGE_VALUE) / PRE_SURGE_VALUE) * 100); // 317
const SURGE_DURATION_MONTHS = 7; // July to February
const PEAK_VS_PRIOR = (PEAK_VALUE / PRIOR_ALL_TIME_HIGH_VALUE).toFixed(1); // 2.6

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
              The previous all-time high was {PRIOR_ALL_TIME_HIGH_VOLUME} per month in {PRIOR_ALL_TIME_HIGH_MONTH}. {PEAK_MONTH} cleared it by {PEAK_VS_PRIOR}×.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/80">
              We are not waiting for the wave. We are at the inflection point right now. The clinics that get certified this quarter are the ones that show up first when those new patients search next quarter.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              All-time peak was {peakAgoLabel}. The trajectory took fourteen years to build. The last seven months redrew it.
            </p>
          </motion.div>

          <motion.figure variants={fadeUp} className="lg:col-span-7">
            <div className="rounded-2xl border border-line bg-white p-3 sm:p-5 shadow-[0_30px_60px_-30px_rgba(25,55,99,0.18)]">
              <Image
                src="/images/demand-trend.jpg"
                alt={`Annotated Google Trends chart showing worldwide search interest for "blood flow restriction" from January 2012 to May 2026. The line climbs slowly until July 2025 then spikes to a peak of about 80,000 searches per month in ${PEAK_MONTH}, a 317% jump in seven months.`}
                width={1400}
                height={1300}
                sizes="(max-width: 1024px) 100vw, 600px"
                className="block h-auto w-full rounded-lg"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <figcaption className="mt-3 text-xs text-muted">
              Source: Google Trends + Glimpse, search term &ldquo;blood flow restriction,&rdquo; Worldwide, January 2012 to May 2026. Absolute monthly search volumes derived by anchoring Glimpse&apos;s peak figure (~80,000/month) to the normalized Trends index. Full time series archived at <code className="font-mono">docs/data/google-trends-bfr-worldwide.csv</code>.
            </figcaption>
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
}
