"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Static Google Trends screenshot for "blood flow restriction" (Worldwide).
// Annotations are rendered in code so they use brand typography (Compacta Bold +
// DM Sans) and stay editable. The marker-handwriting + red-oval style was rejected
// as too direct-response for the evidence-led PT audience (per dossier: "loyalty
// to evidence...A course tied to a charismatic personality on Instagram feels risky.").
//
// Source files committed alongside the deliverable:
//   - public/images/demand-trend-raw.png  (unannotated Google Trends export)
//   - docs/data/google-trends-bfr-worldwide.csv  (full monthly time series)
//
// To refresh: replace both files with fresh exports from
// trends.google.com/trends/explore?q=blood+flow+restriction&date=all and Glimpse,
// then update the constants below if the inflection or peak shift.

// CSV-validated key data points
const PRE_SURGE_MONTH = "July 2025";
const PRE_SURGE_VALUE = 24; // last month before the August leap
const PRE_SURGE_VOLUME = "~19,000"; // Glimpse-derived absolute monthly searches
const PEAK_MONTH = "February 2026";
const PEAK_VALUE = 100; // all-time high
const PEAK_VOLUME = "~80,000"; // Glimpse-derived absolute monthly searches at peak
const PRIOR_ALL_TIME_HIGH_MONTH = "September 2021";
const PRIOR_ALL_TIME_HIGH_VOLUME = "~31,000"; // back-derived from index ratio
const SURGE_MULTIPLE = (PEAK_VALUE / PRE_SURGE_VALUE).toFixed(1); // 4.2
const SURGE_PERCENT = Math.round(((PEAK_VALUE - PRE_SURGE_VALUE) / PRE_SURGE_VALUE) * 100); // 317
const SURGE_DURATION_MONTHS = 7; // July to February

// Anchor positions on the raw chart (1003x737, full Google Trends export with
// title row + legend). Expressed as percentages so the overlay scales with the
// responsive image. Validated against the screenshot:
//   plot area horizontally roughly x=80 (2012) to x=985 (May 2026), so 905px wide
//   plot area vertically roughly y=130 (index 100) to y=560 (index 0), so 430px tall
//   take-off dot sits at July 2025 / index 24 (just before the August leap)
//   peak dot sits at February 2026 / index 100 (all-time high)
const PEAK_DOT = { x: 96.7, y: 17.6 }; // % from top-left of image
const TAKEOFF_DOT = { x: 93.0, y: 62.0 };

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
              The previous all-time high was {PRIOR_ALL_TIME_HIGH_VOLUME} per month, set in {PRIOR_ALL_TIME_HIGH_MONTH}. The new peak cleared it 2.6×.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/80">
              We are not waiting for the wave. We are at the inflection point right now. The clinics that get certified this quarter are the ones that show up first when those new patients search next quarter.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              All-time peak was {peakAgoLabel}. The trajectory took fourteen years to build. The last seven months redrew it.
            </p>
          </motion.div>

          <motion.figure variants={fadeUp} className="relative lg:col-span-7">
            {/* Raw Google Trends chart, no card chrome. Annotations are layered on top. */}
            <Image
              src="/images/demand-trend-raw.png"
              alt={`Annotated Google Trends chart showing worldwide search interest for "blood flow restriction" from January 2012 to May 2026. The line climbs slowly until July 2025 then spikes to roughly 80,000 searches per month in ${PEAK_MONTH}.`}
              width={1003}
              height={737}
              sizes="(max-width: 1024px) 100vw, 600px"
              className="block h-auto w-full"
              style={{ width: "100%", height: "auto" }}
            />

            {/* Anchor dots: small filled accent-color circles with subtle ring. */}
            <span
              aria-hidden
              className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-4 ring-accent/15"
              style={{ left: `${PEAK_DOT.x}%`, top: `${PEAK_DOT.y}%` }}
            />
            <span
              aria-hidden
              className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-4 ring-accent/15"
              style={{ left: `${TAKEOFF_DOT.x}%`, top: `${TAKEOFF_DOT.y}%` }}
            />

            {/* Peak callout: top-right, in the empty space above the chart line
                (which only crosses index 60+ at the very rightmost months). */}
            <div
              className="absolute right-[2%] top-[14%] w-[42%] sm:w-[34%] max-w-[220px]"
              aria-hidden
            >
              <div className="rounded-lg bg-navy px-3 py-2.5 shadow-navy-md ring-1 ring-navy-deeper/30">
                <p className="small-caps-line text-[0.6rem] text-accent">{PEAK_MONTH}</p>
                <p className="mt-1 font-display text-xl leading-none text-white sm:text-2xl">
                  {PEAK_VOLUME}
                </p>
                <p className="mt-1 text-[0.65rem] leading-snug text-white/75">
                  searches per month · all-time high
                </p>
              </div>
            </div>

            {/* Take-off callout: middle-left, in the empty space above the early
                years of the chart (2014-2020 sits at index 5-25). */}
            <div
              className="absolute left-[10%] top-[28%] w-[42%] sm:w-[36%] max-w-[230px]"
              aria-hidden
            >
              <div className="rounded-lg border border-line bg-white px-3 py-2.5 shadow-navy-sm">
                <p className="small-caps-line text-[0.6rem] text-accent">{PRE_SURGE_MONTH}</p>
                <p className="mt-1 font-display text-xl leading-none text-navy sm:text-2xl">
                  {PRE_SURGE_VOLUME}
                </p>
                <p className="mt-1 text-[0.65rem] leading-snug text-muted">
                  searches per month · take-off point
                </p>
              </div>
            </div>

            {/* SVG connector: thin navy line from take-off callout right edge to
                take-off dot. Uses % coords matched against image position. */}
            <svg
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <path
                d={`M 45 35 C 70 50, 85 58, ${TAKEOFF_DOT.x - 1.2} ${TAKEOFF_DOT.y}`}
                stroke="currentColor"
                strokeWidth="0.25"
                fill="none"
                className="text-navy/45"
                vectorEffect="non-scaling-stroke"
                style={{ strokeWidth: 1.25 }}
              />
            </svg>

            <figcaption className="mt-3 text-xs leading-relaxed text-muted">
              Source: Google Trends + Glimpse, search term &ldquo;blood flow restriction,&rdquo; Worldwide, January 2012 to May 2026. Index normalized 0-100 where 100 represents peak interest. Absolute monthly volumes anchored to Glimpse&apos;s peak figure (~80,000/month). Full time series at <code className="font-mono">docs/data/google-trends-bfr-worldwide.csv</code>.
            </figcaption>
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
}
