"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import {
  CEU_COURSE_APPROVALS,
  CEU_PROFESSION_SCOPE,
  CEU_RECIPROCAL_STATES,
  CEU_INDIVIDUAL_FILING_STATES,
  STATS,
  SITE,
} from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// CEU section overhauled per §D.15 + §K.4. Two distinct claims kept separate:
// (1) course-specific approvals (the course IS approved for credit) and
// (2) profession-scope statements (BFR is in scope per these bodies, but the
// course itself is not a body-approved course). Map image is the headline visual.

export default function CEUBadgesSection() {
  return (
    <section id="ceus" className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="CEU credits + approvals" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy"
          >
            {STATS.ceus} CEUs that satisfy license requirements across most of the United States
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-ink/80"
          >
            Approved by the Board of Certification (athletic trainers) and the New York + New Jersey state PT boards (physical therapists). The map below shows where the courses are pre-approved and where individual filing is needed.
          </motion.p>
        </motion.div>

        <motion.figure
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mt-12 overflow-hidden rounded-lg border border-line bg-white"
        >
          <Image
            src="/images/ceus/approval-map.jpg"
            alt="US map showing states where The BFR Pros CEUs are pre-approved, accepted via reciprocity, or require individual filing"
            width={1536}
            height={930}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="block h-auto w-full"
            style={{ width: "100%", height: "auto" }}
          />
          <figcaption className="px-5 py-4 text-xs text-muted border-t border-line">
            Continuing Education approval map, current as of 2026.
          </figcaption>
        </motion.figure>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-10 lg:grid-cols-2"
        >
          <motion.div variants={fadeUp}>
            <h3 className="small-caps-line text-accent">Course-specific approvals</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              These bodies approve the courses themselves for CEU credit.
            </p>
            <ul className="mt-5 space-y-4">
              {CEU_COURSE_APPROVALS.map((a) => (
                <li
                  key={a.body}
                  className="rounded-lg border border-line bg-white p-5"
                >
                  <div className="flex items-start gap-4">
                    {a.logoSrc && (
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-cream/60">
                        <Image
                          src={a.logoSrc}
                          alt={`${a.body} logo`}
                          fill
                          sizes="56px"
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="font-display text-lg text-navy leading-tight">{a.body}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-accent">For {a.audience}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/85">{a.detail}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{a.note}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="small-caps-line text-accent">Profession-scope coverage</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              These bodies confirm BFR is in scope for the profession (different claim from course approval).
            </p>
            <ul className="mt-5 space-y-4">
              {CEU_PROFESSION_SCOPE.map((a) => (
                <li
                  key={a.body}
                  className="rounded-lg border border-line bg-white p-5"
                >
                  <p className="font-display text-lg text-navy leading-tight">{a.body}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/85">{a.detail}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-8 lg:grid-cols-2"
        >
          <motion.div variants={fadeUp} className="rounded-lg border border-line bg-white p-6">
            <h3 className="small-caps-line text-accent">
              Reciprocal coverage ({CEU_RECIPROCAL_STATES.length} states)
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              State PT boards generally accept NY/NJ approval via reciprocity.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {CEU_RECIPROCAL_STATES.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-navy tabular-nums"
                >
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-lg border border-line bg-white p-6">
            <h3 className="small-caps-line text-accent">
              File individually ({CEU_INDIVIDUAL_FILING_STATES.length} states)
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              These boards require an individual application. We provide the materials.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {CEU_INDIVIDUAL_FILING_STATES.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-accent/30 bg-white px-3 py-1 text-xs font-semibold text-accent tabular-nums"
                >
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              Questions about your state? Email{" "}
              <a href={`mailto:${SITE.contactEmail}`} className="underline hover:text-navy">
                {SITE.contactEmail}
              </a>{" "}
              for the specific path for your license.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
