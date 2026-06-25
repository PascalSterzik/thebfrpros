"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import Highlighted from "@/components/shared/Highlighted";
import { TEAM_TRAINING_OFFERS } from "@/content/team-training";
import { TEAM_TRAINING } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Section 7 — The two offers + comparison (the heart of the page). Per card the
// presentation order is LOCKED: core -> price -> bonus -> CEU total, driven by
// TEAM_TRAINING.presentationOrder so the build CANNOT lead with the bonus
// (spec §5.3 + feedback_bonus_sequencing). The comparison is an internal
// in-person-vs-virtual table (allowed on a sales page, spec §5.3), NOT a
// vs-competitors table. The honest price anchor: virtual savings stated plainly,
// in-person shown as a transparent per-seat table with NO "half off" headline
// (spec §9.3.6).

const ORDER = TEAM_TRAINING.presentationOrder;
const o = TEAM_TRAINING_OFFERS;

export default function TeamTrainingOffers() {
  return (
    <section id="offers" className="section-wrap bg-white scroll-mt-24">
      <div className="container-rail">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={o.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            <Highlighted text={o.headline} phrase={o.highlight} />
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-ink/80">
            {o.intro}
          </motion.p>
        </motion.div>

        {/* Two offer cards (core -> price -> bonus -> CEU total, locked order) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2"
        >
          {o.cards.map((card) => (
            <motion.div
              key={card.id}
              variants={fadeUp}
              className="flex flex-col rounded-lg border border-line bg-cream p-7 sm:p-8"
            >
              <h3 className="font-display text-display-md text-navy">{card.name}</h3>
              <dl className="mt-6 flex flex-1 flex-col gap-5">
                {ORDER.map((key) => (
                  <div key={key} className="border-t border-line pt-4 first:border-t-0 first:pt-0">
                    <dt className="small-caps-line text-accent">{o.partLabels[key]}</dt>
                    {key === "price" ? (
                      <dd className="mt-2 font-display text-display-md text-navy">{card[key]}</dd>
                    ) : (
                      <dd className="mt-2 text-base leading-relaxed text-ink/80">{card[key]}</dd>
                    )}
                  </div>
                ))}
              </dl>
              <a href="#start" className="btn-primary mt-7">
                <span>{card.ctaLabel}</span>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Position-by-need (virtual de-risks in-person) */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-ink/80"
        >
          {o.positionByNeed}
        </motion.p>

        {/* At-a-glance comparison (in-person vs virtual; NOT vs competitors) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mx-auto mt-14 max-w-4xl overflow-x-auto rounded-lg border border-line bg-white"
        >
          <table className="min-w-[640px] w-full text-left">
            <caption className="sr-only">
              At-a-glance comparison of the In-Person Workshop and Live Virtual Training on format,
              time, location, team size, travel, included course, CEUs, price, and best fit.
            </caption>
            <thead className="bg-cream">
              <tr>
                <th scope="col" className="small-caps-line p-4 text-muted">
                  Compare
                </th>
                {o.comparison.columns.map((col) => (
                  <th key={col} scope="col" className="small-caps-line p-4 text-navy">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {o.comparison.rows.map((row) => (
                <tr key={row.label} className="border-t border-line">
                  <th scope="row" className="p-4 align-top text-sm font-semibold text-navy">
                    {row.label}
                  </th>
                  <td className="p-4 align-top text-sm text-ink/85">{row.inPerson}</td>
                  <td className="p-4 align-top text-sm text-ink/85">{row.virtual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* The honest price anchor (spec §9.3.6) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto mt-16 max-w-3xl"
        >
          <motion.div variants={fadeUp} className="text-center">
            <SectionLabel label={o.anchor.eyebrow} />
          </motion.div>

          {/* Virtual: savings are real, state them plainly */}
          <motion.h3
            variants={fadeUp}
            className="mt-5 font-display text-2xl text-navy"
          >
            {o.anchor.virtualHeading}
          </motion.h3>
          <motion.p variants={fadeUp} className="mt-3 text-lg leading-relaxed text-ink/80">
            {o.anchor.virtualLine}
          </motion.p>

          {/* In-Person: no "half off"; the math, straight */}
          <motion.h3
            variants={fadeUp}
            className="mt-10 font-display text-2xl text-navy"
          >
            {o.anchor.inPersonHeading}
          </motion.h3>
          <motion.p variants={fadeUp} className="mt-3 text-lg leading-relaxed text-ink/80">
            {o.anchor.inPersonIntro}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 overflow-x-auto rounded-lg border border-line bg-white"
          >
            <table className="min-w-[520px] w-full text-left">
              <caption className="sr-only">
                In-person workshop flat fee versus sending the team out individually at about $699 a
                seat, across team sizes of 10, 20, and 30.
              </caption>
              <thead className="bg-cream">
                <tr>
                  {o.anchor.inPersonTable.columns.map((col) => (
                    <th key={col} scope="col" className="small-caps-line p-4 text-muted">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {o.anchor.inPersonTable.rows.map((row) => (
                  <tr key={row[0]} className="border-t border-line">
                    <th scope="row" className="p-4 align-top text-sm font-semibold text-navy">
                      {row[0]}
                    </th>
                    <td className="p-4 align-top text-sm text-ink/85">{row[1]}</td>
                    <td className="p-4 align-top text-sm text-ink/85">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-ink/80">
            {o.anchor.inPersonAfter}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
