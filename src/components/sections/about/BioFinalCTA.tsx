"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Shared bio-page → /get-certified soft gateway. Same visual as AboutFinalCTA
// and HomeFinalCTA. The bio page does not sell the cert; this is just the exit.

export default function BioFinalCTA({
  eyebrow,
  headline,
  body,
  primaryCta,
  primaryCtaHref,
}: {
  eyebrow: string;
  headline: string;
  body: string;
  primaryCta: string;
  primaryCtaHref: string;
}) {
  return (
    <section className="section-wrap navy-field text-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="eyebrow-light">
            {eyebrow}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl lg:text-display-2xl text-white text-balance"
          >
            {headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-7 mx-auto max-w-2xl text-lg leading-relaxed text-white/85"
          >
            {body}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex justify-center">
            <Link href={primaryCtaHref} className="btn-primary">
              {primaryCta}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
