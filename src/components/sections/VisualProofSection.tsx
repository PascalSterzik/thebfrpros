"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

const PHOTOS = [
  {
    src: "/images/action/rolnick-applying-cuff.jpg",
    alt: "Dr. Nicholas Rolnick applying a BFR cuff to a patient's biceps",
    caption: "Cuff application,biceps protocol",
  },
  {
    src: "/images/action/rolnick-endurance.jpg",
    alt: "Dr. Nicholas Rolnick using BFR cuffs on the thighs during an endurance protocol",
    caption: "Endurance protocol,thigh placement",
  },
  {
    src: "/images/action/rolnick-training.jpg",
    alt: "Dr. Nicholas Rolnick training a patient with BFR cuffs in a clinical setting",
    caption: "Patient training,clinical setting",
  },
  {
    src: "/images/action/woman-pushups.jpg",
    alt: "Female patient performing push-ups with BFR cuffs on the biceps",
    caption: "Upper-body BFR programming",
  },
];

export default function VisualProofSection() {
  return (
    <section className="section-wrap bg-white" aria-label="The certification in action">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="The certification in action" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-lg text-navy text-balance"
          >
            Every protocol you'll learn, applied in a real clinic.
          </motion.h2>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PHOTOS.map((p) => (
            <motion.li
              key={p.src}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-line"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deeper/90 via-navy-deeper/40 to-transparent p-4 pt-16"
                  aria-hidden
                >
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/85">
                    {p.caption}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
