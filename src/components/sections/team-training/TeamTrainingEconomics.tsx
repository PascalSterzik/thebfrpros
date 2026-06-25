"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import Highlighted from "@/components/shared/Highlighted";
import { TEAM_TRAINING_ECONOMICS } from "@/content/team-training";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Section 9 — The economics. "Does the money pencil out?" Three ways it pays for
// itself: a billable service, CEUs the team needed anyway, retention. Realistic
// team size, never a 30-person fill; "industry sources report" framing on
// retention, no hard turnover dollar figure (spec §9.3.6). The callback references
// the per-seat table in the offers section above; it does not reprint it
// (Principle 3, one question per section).

export default function TeamTrainingEconomics() {
  const e = TEAM_TRAINING_ECONOMICS;
  return (
    <section className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={e.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            <Highlighted text={e.headline} phrase={e.highlight} />
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-ink/80">
            {e.intro}
          </motion.p>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3"
        >
          {e.points.map((p, i) => (
            <motion.li
              key={p.title}
              variants={fadeUp}
              className="flex flex-col rounded-lg border border-line bg-white p-7"
            >
              <span className="font-display text-display-md text-accent">{i + 1}</span>
              <h3 className="mt-3 font-display text-2xl text-navy">{p.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink/80">{p.body}</p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-ink/80"
        >
          {e.callback}
        </motion.p>
      </div>
    </section>
  );
}
