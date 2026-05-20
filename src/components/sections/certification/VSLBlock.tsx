"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import VideoPoster from "@/components/shared/VideoPoster";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Optional 60-90s founder VSL. Per PLAN.md §5 row 1, this slot exists for a
// Nick Rolnick video framed as "the cert I built because I needed it for my
// own clinic". The clip itself is not yet supplied (Session B/C deliverable
// is structure + copy, the VSL recording is a Pascal-owned future asset).
// Until videoSrc and posterSrc are provided, this block renders nothing so
// the page never ships an empty player. When the assets arrive, pass both
// props from page.tsx and the block lights up without further changes.
export default function VSLBlock({
  videoSrc,
  posterSrc,
  caption,
  posterAlt,
  label = "FROM THE INSTRUCTOR",
}: {
  videoSrc?: string;
  posterSrc?: string;
  caption: string;
  posterAlt: string;
  label?: string;
}) {
  if (!videoSrc || !posterSrc) return null;

  return (
    <section className="section-wrap bg-white" aria-label="Founder VSL">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={label} />
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-lg leading-relaxed text-ink/85"
          >
            {caption}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <div className="relative w-full overflow-hidden rounded-lg bg-black/5 ring-1 ring-line shadow-[0_30px_60px_-30px_rgba(25,55,99,0.32)]">
              <VideoPoster
                posterSrc={posterSrc}
                videoSrc={videoSrc}
                title={posterAlt}
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
