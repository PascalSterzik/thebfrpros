"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { CERTIFICATION } from "@/content/certification";
import { COMPETITOR_TABLE } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Three pillars + competitor table. The 3 pillars are vendor-neutral by
// structure / built so the cuff leaves the drawer by week two / taught by a
// clinician who is in clinic next Tuesday (certification.difference.pillars).
// The table reuses COMPETITOR_TABLE on consistent axes (format, hours, CEUs,
// equipment, money-back) per PLAN.md §5 row 7 and the tableNote in copy.
export default function CertDifferenceSection() {
  const { difference } = CERTIFICATION;
  return (
    <section className="section-wrap bg-white" id="difference" aria-label="The BFR Pros difference">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={difference.label} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {difference.headline}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {difference.pillars.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              className="rounded-lg border border-line bg-white p-7 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <h3 className="font-display text-2xl text-navy text-balance">{p.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-ink/85">{p.body}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-20"
        >
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-ink/85"
          >
            {difference.tableIntro}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 overflow-x-auto rounded-lg border border-line bg-white"
          >
            <table className="min-w-[760px] w-full text-left">
              <caption className="sr-only">
                Comparison of The Complete BFR Certification against Owens Recovery Science, NE Seminars / UT BFRT, PESI, and Mike Reinold on consistent axes: format, hours of content, CEUs, equipment requirements, and money-back guarantee.
              </caption>
              <thead className="bg-cream">
                <tr>
                  <th scope="col" className="small-caps-line p-4 text-muted">Program</th>
                  <th scope="col" className="small-caps-line p-4 text-muted">Format</th>
                  <th scope="col" className="small-caps-line p-4 text-muted">Hours</th>
                  <th scope="col" className="small-caps-line p-4 text-muted">CEUs</th>
                  <th scope="col" className="small-caps-line p-4 text-muted">Equipment required</th>
                  <th scope="col" className="small-caps-line p-4 text-muted">Money-back</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITOR_TABLE.map((row) => (
                  <tr
                    key={row.name}
                    className={`border-t border-line ${row.isUs ? "bg-accent/5" : ""}`}
                  >
                    <th scope="row" className="p-4 align-top">
                      <span
                        className={`font-display text-lg ${
                          row.isUs ? "text-accent" : "text-navy"
                        }`}
                      >
                        {row.name}
                      </span>
                    </th>
                    <td className="p-4 align-top text-sm text-ink/85">{row.format}</td>
                    <td className="p-4 align-top text-sm text-ink/85">{row.hours}</td>
                    <td className="p-4 align-top text-sm text-ink/85">{row.ceus}</td>
                    <td className="p-4 align-top text-sm text-ink/85">{row.equipment}</td>
                    <td className="p-4 align-top text-sm text-ink/85">{row.guarantee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
