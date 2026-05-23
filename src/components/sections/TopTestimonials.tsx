"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Pascal review (2026-05-23): the three named, photo-backed expert
// testimonials (Lee / Whyte / Toderico) lift out of the deeper
// TestimonialsSection and render immediately under CredibilityBar so cold
// traffic hits social proof at the top of the page. The 4th TESTIMONIAL
// (Nightingale, no photo) is no longer rendered on /get-certified — the
// deeper TestimonialsSection now carries the wall of {681}+ written reviews
// from STUDENT_TESTIMONIALS instead.

const PHOTO_MAP: Record<string, string> = {
  "Dr. Clinton H. Lee, PT, DPT, CSCS": "/images/students/clinton-lee.jpeg",
  "Dr. Brian D. Whyte, DPT, CLT, CSCS": "/images/students/brian-whyte.jpeg",
  "Benjamin Toderico, MS, CSCS": "/images/students/benjamin-toderico.jpeg",
};

export default function TopTestimonials() {
  const cards = TESTIMONIALS.filter((t) => PHOTO_MAP[t.name]).slice(0, 3);

  return (
    <section
      className="section-wrap bg-white"
      aria-label="Featured testimonials from clinic owners"
    >
      <div className="container-rail">
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="grid gap-5 lg:grid-cols-3"
        >
          {cards.map((t) => (
            <motion.li
              key={t.name}
              variants={fadeUp}
              className="flex flex-col rounded-lg border border-line bg-white p-6 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <span
                aria-hidden
                className="font-display text-3xl text-accent leading-none"
              >
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-base leading-relaxed text-ink/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 grid grid-cols-[40px_1fr] items-center gap-3 border-t border-line pt-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-line">
                  <Image
                    src={PHOTO_MAP[t.name]}
                    alt={t.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-display text-sm text-navy leading-tight">
                    {t.name}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">{t.role}</p>
                </div>
              </figcaption>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
