"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import Stars from "@/components/shared/Stars";
import VideoPoster from "@/components/shared/VideoPoster";
import { STATS, TESTIMONIALS, VIDEOS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Each testimonial in TESTIMONIALS has a known photo file mapped here. Photos
// live in public/images/students/ and were copied from the brand asset folder.
const PHOTO_MAP: Record<string, string> = {
  "Dr. Clinton H. Lee, PT, DPT, CSCS": "/images/students/clinton-lee.jpeg",
  "Dr. Brian D. Whyte, DPT, CLT, CSCS": "/images/students/brian-whyte.jpeg",
  "Benjamin Toderico, MS, CSCS": "/images/students/benjamin-toderico.jpeg",
};

export default function TestimonialsSection() {
  return (
    <section className="section-wrap navy-field" id="testimonials">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="What clinicians say" variant="light" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-white"
          >
            {STATS.ratingValue} stars from {STATS.reviewCount}+ reviews, {STATS.certifiedPractitioners} certified practitioners
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-6 flex justify-center">
            <Stars variant="dark" size="md" linkTo="/reviews" />
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-white/80"
          >
            Three voices from the {STATS.certifiedPractitioners}, pulled verbatim from the live course page. Plus the full course testimonial video below.
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => {
            const photo = PHOTO_MAP[t.name];
            return (
              <motion.li
                key={t.name}
                variants={fadeUp}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
              >
                <span aria-hidden className="font-display text-4xl text-accent leading-none">
                  &ldquo;
                </span>
                <blockquote className="mt-3 text-base leading-relaxed text-white/95">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 grid grid-cols-[48px_1fr] items-center gap-3 border-t border-white/10 pt-4">
                  {photo ? (
                    <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/20">
                      <Image src={photo} alt={t.name} fill sizes="48px" className="object-cover" />
                    </div>
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 font-display text-lg text-white">
                      {t.name.split(" ").slice(-1)[0]?.[0] ?? "?"}
                    </div>
                  )}
                  <div>
                    <p className="font-display text-sm text-white leading-tight">{t.name}</p>
                    <p className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-white/60">
                      {t.role}
                    </p>
                  </div>
                </figcaption>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-center"
        >
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <p className="small-caps-line text-accent">Course graduate testimonial</p>
            <h3 className="mt-3 font-display text-display-md text-white text-balance">
              See a graduate explain why he chose this certification, in his own words.
            </h3>
          </motion.div>
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <div className="relative w-full overflow-hidden rounded-lg bg-black/40 ring-1 ring-white/15 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.55)]">
              <VideoPoster
                posterSrc="/images/testimonials/video/dhimant-indrayan.webp"
                videoSrc={VIDEOS.testimonial}
                title="Dhimant Indrayan, Founder of House of Hypertrophy, on The Complete BFR Certification"
                sizes="(max-width: 1024px) 100vw, 600px"
                animated={{ webm: "/videos/thumbnails/testimonial-dhimant-indrayan.webm", mp4: "/videos/thumbnails/testimonial-dhimant-indrayan.mp4" }}
              />
            </div>
            <p className="mt-3 text-sm text-white/70 text-center">
              <span className="font-semibold text-white">Dhimant Indrayan</span>
              <span className="mx-2 text-white/40">·</span>
              Founder, House of Hypertrophy
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.7 }}
          className="mt-12 flex justify-center"
        >
          <PrimaryCTA starsVariant="dark" />
        </motion.div>
      </div>
    </section>
  );
}
