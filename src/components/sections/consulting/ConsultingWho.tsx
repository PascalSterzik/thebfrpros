"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { CONSULTING_WHO } from "@/content/consulting";
import Highlighted from "@/components/shared/Highlighted";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Who it's for / what a session delivers. One question for the visitor: "is
// this hour for me, and what do I actually get?" One sentence per point.

export default function ConsultingWho() {
  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={CONSULTING_WHO.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            <Highlighted text={CONSULTING_WHO.headline} phrase={CONSULTING_WHO.highlight} />
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-ink/80"
          >
            {CONSULTING_WHO.intro}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2"
        >
          {CONSULTING_WHO.items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="rounded-lg border border-line bg-cream p-6"
            >
              <h3 className="font-display text-2xl text-navy">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink/80">{item.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
