"use client";

import { motion } from "framer-motion";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// 4-stat strip. Pattern matches the InstructorsSection stats dl on /get-
// certified for visual consistency across the site.

type Stat = { value: string; label: string };

export default function BioStats({ stats }: { stats: ReadonlyArray<Stat> }) {
  return (
    <section className="bg-white">
      <div className="container-rail py-16 lg:py-20">
        <motion.dl
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 border-y border-line py-10 lg:py-12"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="text-center sm:text-left">
              <dt className="font-display text-5xl sm:text-6xl text-navy leading-none">
                {s.value}
              </dt>
              <dd className="mt-3 stat-label text-[0.7rem]">{s.label}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
