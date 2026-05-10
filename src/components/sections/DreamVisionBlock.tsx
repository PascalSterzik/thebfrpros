"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variant } from "@/content/variants";
import SectionLabel from "@/components/shared/SectionLabel";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
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

export default function DreamVisionBlock({ variant }: { variant: Variant }) {
  return (
    <section className="section-wrap bg-white" id="dream">
      <div className="container-narrow text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={variant.dreamVision.label} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy mx-auto max-w-4xl"
          >
            <Highlighted text={variant.dreamVision.headline} phrase="book with you" />
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="mt-10 mx-auto max-w-prose-narrow text-left space-y-6 text-lg leading-relaxed text-ink"
          >
            {variant.dreamVision.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          {/* §Pascal-2026-05-08 v9: in-action shot of Rolnick applying a BFR
             cuff. The image visualizes the destination — the practitioner
             actually delivering BFR — right before the CTA. */}
          <motion.div variants={fadeUp} className="mt-12 mx-auto max-w-3xl">
            <div className="relative overflow-hidden rounded-lg ring-1 ring-line shadow-[0_30px_60px_-30px_rgba(25,55,99,0.32)]">
              <Image
                src="/images/action/rolnick-coaching-client.jpg"
                alt="Dr. Nicholas Rolnick coaching a client with BFR cuffs on"
                width={1600}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 800px"
                className="block h-auto w-full"
              />
            </div>
          </motion.div>

          {/* §Pascal-2026-05-08: Destination is the conviction moment. CTA here. */}
          <motion.div variants={fadeUp} className="mt-12 flex justify-center">
            <PrimaryCTA />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
