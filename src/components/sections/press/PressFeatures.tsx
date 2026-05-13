"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { ROLNICK_PERSONAL_MEDIA } from "@/lib/constants";
import { PRESS_FEATURES_INTRO } from "@/content/press";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Phase 4 (2026-05-13): /press page section #2. Renders the 18-entry
// ROLNICK_PERSONAL_MEDIA list as a card grid.
// Phase 4 (Pascal feedback rounds 1 + 2):
//   - Cards show the outlet LOGO above the headline when available.
//   - Outlet name renders as a TEXT LABEL on every card (SEO + a11y +
//     readability when a logo file isn't on disk). When the logo is
//     present, the outlet name is a small-caps caption beneath it;
//     when the logo is absent, the outlet name takes the logo's slot
//     in display caps.
//   - Cards wrap in <a target="_blank"> when a URL is on file;
//     otherwise render as static <div> with no Read-article CTA.

export default function PressFeatures() {
  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={PRESS_FEATURES_INTRO.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-md text-navy text-balance"
          >
            {PRESS_FEATURES_INTRO.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {PRESS_FEATURES_INTRO.intro}
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ROLNICK_PERSONAL_MEDIA.map((m) => {
            const cardInner = (
              <>
                <div className="flex items-start justify-between gap-3 min-h-[44px]">
                  {m.logoSrc ? (
                    <span className="relative block h-10 w-28 flex-shrink-0">
                      <Image
                        src={m.logoSrc}
                        alt={`${m.outlet} logo`}
                        fill
                        sizes="112px"
                        className="object-contain object-left"
                      />
                    </span>
                  ) : (
                    <span className="font-display text-base text-navy uppercase tracking-wide">
                      {m.outlet}
                    </span>
                  )}
                  <span className="small-caps-line text-muted text-[0.65rem] whitespace-nowrap">
                    {m.date}
                  </span>
                </div>
                {m.logoSrc ? (
                  <p className="mt-2 small-caps-line text-muted text-[0.65rem]">
                    {m.outlet}
                  </p>
                ) : null}
                <p className="mt-4 flex-1 text-sm leading-snug text-ink/85">
                  &ldquo;{m.headline}&rdquo;
                </p>
                {m.url ? (
                  <p className="mt-5 text-[0.65rem] uppercase tracking-[0.14em] text-muted group-hover:text-accent transition">
                    Read article
                    <span aria-hidden className="ml-1 text-accent">↗</span>
                  </p>
                ) : null}
              </>
            );

            const className =
              "group flex h-full flex-col rounded-lg border border-line bg-cream p-5 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]";
            const hoverClassName =
              " transition hover:border-accent/40 hover:shadow-[0_18px_40px_-22px_rgba(25,55,99,0.32)]";

            return (
              <motion.li key={`${m.outlet}-${m.date}`} variants={fadeUp}>
                {m.url ? (
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read: ${m.headline} (${m.outlet})`}
                    className={className + hoverClassName}
                  >
                    {cardInner}
                  </a>
                ) : (
                  <div className={className}>{cardInner}</div>
                )}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
