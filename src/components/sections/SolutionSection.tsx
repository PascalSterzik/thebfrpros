"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { COMPETITOR_TABLE } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

const STRANGER_QUESTIONS = [
  {
    q: "Who is teaching this?",
    a: "Dr. Nicholas Rolnick. Active practicing PT in Manhattan. 72+ peer-reviewed BFR publications. Lehman College CUNY and Concordia University Chicago faculty. NASM Chapter 12 author. Featured in CNN, the Wall Street Journal, Forbes, ESPN, Men's Health, GQ, PubMed, and NSCA.",
  },
  {
    q: "What is being offered?",
    a: "The Complete BFR Certification: 37 modules, 4 courses, 11.75 CEUs, 11 implementation bonuses, 30-day money-back guarantee. $449 single bundle. Equipment-agnostic, works with any quality cuff.",
  },
  {
    q: "How long will it take?",
    a: "11.75 hours of video content. Do it in a weekend or take 4 weeks. On-demand video plus downloadable resources, so you complete it on your own schedule and return to it as a lifetime reference.",
  },
];

const PILLARS = [
  {
    title: "Research-led, not product-led",
    body: "Built on 72+ peer-reviewed BFR publications by the lead instructor. Updated as the literature evolves.",
  },
  {
    title: "Equipment-agnostic by design",
    body: "Works with Delfi, SmartCuffs, B Strong, LiveBand, KAATSU, or whatever your clinic owns. The certification is the technique, not the cuff.",
  },
  {
    title: "Implementation-focused",
    body: "11 bonuses cover screening forms, liability waiver, RPE tools, cuff discount codes, and a private FB group. Designed so you apply BFR with your first patient by week two, not month two.",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="The BFR Pros difference" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            Three pillars no other BFR certification combines.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80"
          >
            Every BFR course you've shopped is research-led <em>or</em> equipment-led <em>or</em> implementation-focused. The Complete BFR Certification is the only one that does all three at once, by design.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {PILLARS.map((p, i) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              className="pro-card p-7"
            >
              <span className="font-display text-2xl text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl text-navy">{p.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink/80">{p.body}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* Three Stranger Questions answered fast */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-20 grid gap-10 lg:grid-cols-12"
        >
          <motion.div variants={fadeUp} className="lg:col-span-4">
            <SectionLabel label="Three stranger questions" />
            <h3 className="mt-5 font-display text-display-md text-navy text-balance">
              Answered before you ask them.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted">
              The brain runs three threat-checks on any new offer: who, what, how long. Here are the answers.
            </p>
          </motion.div>
          <motion.dl variants={fadeUp} className="lg:col-span-8 divide-y divide-line">
            {STRANGER_QUESTIONS.map((s) => (
              <div key={s.q} className="grid gap-2 py-6 sm:grid-cols-[180px_1fr] sm:gap-8">
                <dt className="small-caps-line text-accent">{s.q}</dt>
                <dd className="text-base leading-relaxed text-ink">{s.a}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Comparison table: high AEO value, high salience for product-aware traffic */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-20"
        >
          <motion.div variants={fadeUp} className="max-w-2xl">
            <SectionLabel label="How the alternatives stack up" />
            <h3 className="mt-5 font-display text-display-md text-navy text-balance">
              The Complete BFR Certification vs the five courses you've already shopped.
            </h3>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 overflow-x-auto rounded-2xl border border-line bg-white"
          >
            <table className="min-w-[760px] w-full text-left">
              <caption className="sr-only">
                Comparison of The Complete BFR Certification against Owens Recovery Science, NE Seminars / UT BFRT, PESI, and Mike Reinold's online course on consistent axes: format, hours of content, CEUs, equipment requirements, and money-back guarantee.
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

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-3xl text-base leading-relaxed text-ink/75"
          >
            Only one of these courses is led by a clinician with 72+ peer-reviewed BFR publications. Research depth is in the body, not the table, because it doesn't fit a comparable column.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
