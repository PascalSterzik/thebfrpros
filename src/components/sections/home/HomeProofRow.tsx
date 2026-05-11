"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import Marquee from "@/components/shared/Marquee";
import { CEU_COURSE_APPROVALS, PARTNERS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Section 12 — Partners + Approvals. Brand legitimacy + Belief 1 mainstream.
// Combines partners marquee (PARTNERS) and an abbreviated approval logos row
// (CEU_COURSE_APPROVALS). Full CEU detail lives on /get-certified.

export default function HomeProofRow() {
  return (
    <section id="proof" className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="Trusted, approved, partnered" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-md text-navy text-balance"
          >
            Approved by credentialing bodies, adopted by clinic networks
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 max-w-4xl mx-auto"
        >
          <motion.p variants={fadeUp} className="text-center small-caps-line text-muted text-[0.78rem]">
            Approved or recognized by
          </motion.p>
          <motion.ul
            variants={fadeUp}
            className="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-3 items-center justify-items-center"
          >
            {CEU_COURSE_APPROVALS.map((a) => (
              <li key={a.body} className="flex flex-col items-center text-center gap-3">
                {a.logoSrc ? (
                  <span className="relative h-14 w-32">
                    <Image
                      src={a.logoSrc}
                      alt={`${a.body} approval`}
                      fill
                      sizes="128px"
                      className="object-contain"
                    />
                  </span>
                ) : (
                  <span className="font-display text-lg text-navy">{a.body}</span>
                )}
                <span className="text-xs text-muted leading-tight">{a.audience}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <p className="text-center small-caps-line text-muted text-[0.78rem]">
            Partnered with clinics treating thousands of patients
          </p>
          <div className="mt-6">
            <Marquee
              logos={PARTNERS}
              ariaLabel="Clinic and equipment partners"
              variant="light"
              itemHeight="h-12 sm:h-14"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
