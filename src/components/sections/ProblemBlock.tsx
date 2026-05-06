"use client";

import { motion } from "framer-motion";
import type { Variant } from "@/content/variants";
import SectionLabel from "@/components/shared/SectionLabel";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

export default function ProblemBlock({ variant }: { variant: Variant }) {
  const layers = [
    { eyebrow: "Surface", body: variant.problem.surface },
    { eyebrow: "What you actually feel", body: variant.problem.emotional },
    { eyebrow: "Where this leads", body: variant.problem.future },
    { eyebrow: "Underneath it all", body: variant.problem.visceral },
  ];

  return (
    <section className="section-wrap cream-field" id="problem">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="grid gap-14 lg:grid-cols-12"
        >
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <SectionLabel label={variant.problem.label} />
            <h2 className="mt-5 font-display text-display-xl text-navy text-balance">
              {variant.problem.headline}
            </h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-ink/80">
              {variant.problem.intro}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-7">
            <ol className="space-y-8">
              {layers.map((l, i) => (
                <li key={l.eyebrow} className="grid grid-cols-[auto_1fr] gap-6 sm:gap-8">
                  <span className="font-display text-3xl text-accent leading-none pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="small-caps-line text-muted">{l.eyebrow}</p>
                    <p className="mt-2 text-lg leading-relaxed text-ink">{l.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
