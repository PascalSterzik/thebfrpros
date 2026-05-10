"use client";

import { motion } from "framer-motion";
import type { Variant } from "@/content/variants";
import SectionLabel from "@/components/shared/SectionLabel";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

function Highlighted({ text, phrase }: { text: string; phrase: string }) {
  const i = text.indexOf(phrase);
  if (i === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className="underline-accent">{phrase}</span>
      {text.slice(i + phrase.length)}
    </>
  );
}

export default function ProblemBlock({ variant }: { variant: Variant }) {
  const layers = [
    { eyebrow: "Surface", body: variant.problem.surface },
    { eyebrow: "What you actually feel", body: variant.problem.emotional },
    { eyebrow: "Where this leads", body: variant.problem.future },
    { eyebrow: "Underneath it all", body: variant.problem.visceral },
  ];

  return (
    <section className="section-wrap cream-field" id="problem">
      <div className="container-narrow">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="text-center mx-auto max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={variant.problem.label} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy"
          >
            <Highlighted text={variant.problem.headline} phrase="you're stalling" />
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-7 mx-auto max-w-2xl text-lg leading-relaxed text-ink/80"
          >
            {variant.problem.intro}
          </motion.p>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 mx-auto max-w-2xl space-y-10 text-left"
        >
          {layers.map((l, i) => (
            <motion.li key={l.eyebrow} variants={fadeUp} className="grid grid-cols-[auto_1fr] gap-5">
              <span className="font-display text-4xl text-accent leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="small-caps-line text-muted">{l.eyebrow}</p>
                <p className="mt-2 text-lg leading-relaxed text-ink">{l.body}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
