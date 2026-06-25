"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import Highlighted from "@/components/shared/Highlighted";
import { HOME_TRAIN_YOUR_TEAM } from "@/content/home";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Homepage "Train Your Team" self-ID band (spec §4.3). Inserted immediately after
// WhoItsForCards: it extends the same self-ID axis ("or do you own/run a
// clinic?"), so the individual audience cards stay first and primary. This is a
// wayfinding POINTER that sells the team IDEA and routes to /train-your-team.
//
// HARD scope gate (spec §4.3 / brand-guide Principle 6, BLOCKS the build): NO
// price, NO in-person-vs-virtual comparison, NO CEU stack, NO offer stack, NO
// booking embed, NO qualify form. Idea and link only. The CTA uses an exploratory
// verb for Stage-2 traffic (never "Book"/"Get started"); rendered as a soft
// secondary CTA so it doesn't compete with the homepage's one cert gateway.

export default function HomeTrainYourTeam() {
  const t = HOME_TRAIN_YOUR_TEAM;
  return (
    <section className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={t.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            <Highlighted text={t.headline} phrase={t.highlight} />
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {t.body}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex justify-center">
            <Link href={t.href} className="btn-secondary">
              <span>{t.ctaLabel}</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
