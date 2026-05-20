"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { CERTIFICATION } from "@/content/certification";
import { CEU_COURSE_APPROVALS, CEU_PROFESSION_SCOPE } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// CEU approvals (will my license accept this). Two distinct claims kept
// separate (PLAN.md §5 row 11 + certification.approvals): COURSE approvals
// (the course IS approved for credit, concrete IDs + dates) vs PROFESSION
// SCOPE (the modality is in scope per these bodies). The state map is
// intentionally omitted from /certification, the campaign LP, to keep the
// proof block tight; the full map lives on /get-certified.
export default function CertApprovalsSection() {
  const { approvals } = CERTIFICATION;
  return (
    <section className="section-wrap cream-field" aria-label="CEU approvals">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={approvals.label} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {approvals.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-ink/85 text-left"
          >
            {approvals.intro}
          </motion.p>
        </motion.div>

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
                <li key={a.body} className="rounded-lg border border-line bg-white p-5">
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
                      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-accent">
                        For {a.audience}
                      </p>
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
                <li key={a.body} className="rounded-lg border border-line bg-white p-5">
                  <p className="font-display text-lg text-navy leading-tight">{a.body}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/85">{a.detail}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
