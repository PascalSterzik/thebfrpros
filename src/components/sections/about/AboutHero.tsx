"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { ABOUT_HERO } from "@/content/about";
import { heroItem, heroStagger, inViewOnce } from "@/lib/motion";

// /about hero. Editorial portrait-and-text split (text left, image right on
// desktop; image on top mobile). Stage 2-3 traffic: visitor arrived from a
// brand search, a referral, or a CNN-style media surface. The hero installs
// the equipment-agnostic mission in two sentences, no CTA.

export default function AboutHero() {
  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroStagger}
          className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
        >
          <motion.div variants={heroItem} className="lg:col-span-7 order-2 lg:order-1">
            <SectionLabel label={ABOUT_HERO.eyebrow} />
            <motion.h1
              variants={heroItem}
              className="mt-6 font-display text-display-2xl lg:text-display-3xl text-navy text-balance"
            >
              {ABOUT_HERO.headline}
            </motion.h1>
            <motion.p
              variants={heroItem}
              className="mt-8 max-w-prose-wide subhead text-ink/85"
            >
              {ABOUT_HERO.subhead}
            </motion.p>
          </motion.div>
          <motion.div
            variants={heroItem}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg ring-1 ring-line">
              <Image
                src={ABOUT_HERO.photoSrc}
                alt={ABOUT_HERO.photoAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={inViewOnce}
        transition={{ duration: 0.8 }}
        className="container-rail mt-20 lg:mt-24"
      >
        <div className="hairline" />
      </motion.div>
    </section>
  );
}
