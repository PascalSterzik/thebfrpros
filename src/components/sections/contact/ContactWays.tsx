"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { CONTACT_WAYS } from "@/content/contact";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Two contact-method cards: phone + email. Tap-to-call / mailto: links on
// the value so mobile users can act on the page in one tap. Card pattern
// matches AboutPrinciples for visual consistency.

function PhoneIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 3.5h3.5L10 8l-2.5 2a12 12 0 0 0 6.5 6.5L16 14l4.5 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5.5a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 6.5l8.5 7 8.5-7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactWays() {
  return (
    <section className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={CONTACT_WAYS.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {CONTACT_WAYS.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {CONTACT_WAYS.intro}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-6 md:grid-cols-2 max-w-3xl mx-auto"
        >
          {CONTACT_WAYS.ways.map((w) => (
            <motion.a
              key={w.label}
              href={w.valueHref}
              variants={fadeUp}
              className="group flex flex-col rounded-lg border border-line bg-white p-7 lg:p-8 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)] transition hover:border-accent/40 hover:shadow-[0_18px_40px_-22px_rgba(25,55,99,0.32)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-accent ring-1 ring-line">
                {w.icon === "phone" ? <PhoneIcon /> : <EmailIcon />}
              </span>
              <p className="mt-5 small-caps-line text-accent">{w.label}</p>
              <p className="mt-2 font-display text-2xl text-navy break-words group-hover:text-accent transition">
                {w.value}
              </p>
              <p className="mt-3 text-sm text-muted">{w.detail}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
