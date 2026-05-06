"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { PARTNERS, STATS } from "@/lib/constants";
import { fadeUp, inViewOnce } from "@/lib/motion";

export default function PartnersSection() {
  return (
    <section className="section-wrap cream-field" aria-label="Clinical partnerships">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="grid items-center gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-4">
            <SectionLabel label="Clinical partnerships" />
            <h2 className="mt-5 font-display text-display-md text-navy text-balance">
              Trusted by {STATS.clinicsTrusted} clinics, including the largest PT network in the Northeast.
            </h2>
          </div>
          <ul className="lg:col-span-8 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
            {PARTNERS.map((p) => (
              <li
                key={p.name}
                className="flex h-14 items-center justify-center grayscale opacity-75 transition hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={p.src}
                  alt={`${p.name} logo`}
                  width={p.w}
                  height={p.h}
                  className="max-h-12 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
