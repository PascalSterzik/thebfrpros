"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { CEU_APPROVALS, STATS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

export default function CEUBadgesSection() {
  return (
    <section id="ceus" className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="grid gap-12 lg:grid-cols-12"
        >
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <SectionLabel label="CEU credits + approvals" />
            <h2 className="mt-5 font-display text-display-xl text-navy text-balance">
              {STATS.ceus} CEUs that satisfy major US license requirements in one purchase.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/80">
              Approved by the Board of Certification, the New York and New Jersey state PT boards, and recognized by APTA and NATA. If your state isn't covered, email us and we'll confirm the path for your specific license.
            </p>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="lg:col-span-7 grid gap-4 sm:grid-cols-2"
          >
            {CEU_APPROVALS.map((a) => (
              <li
                key={a.body}
                className="grid grid-cols-[64px_1fr] items-center gap-4 rounded-2xl border border-line bg-white p-5"
              >
                <div className="relative h-14 w-14 overflow-hidden rounded-lg bg-cream">
                  {a.hasLogo && a.logoSrc ? (
                    <Image
                      src={a.logoSrc}
                      alt={`${a.body} logo`}
                      fill
                      sizes="56px"
                      className="object-contain p-1"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center font-display text-lg text-navy">
                      ✓
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-display text-base text-navy leading-tight">{a.body}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{a.detail}</p>
                </div>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
