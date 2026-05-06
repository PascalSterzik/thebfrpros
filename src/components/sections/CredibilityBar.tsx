"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FEATURED_IN } from "@/lib/constants";
import { fadeIn, inViewOnce } from "@/lib/motion";

export default function CredibilityBar() {
  return (
    <section
      aria-label="Featured in"
      className="border-y border-line bg-white"
    >
      <div className="container-rail py-10 sm:py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeIn}
          className="flex flex-col items-center gap-7 sm:flex-row sm:items-center sm:justify-between sm:gap-12"
        >
          <p className="small-caps-line text-muted">
            BFR research featured in
          </p>
          <div className="grid w-full grid-cols-3 items-center gap-x-8 gap-y-6 sm:flex sm:flex-1 sm:flex-wrap sm:justify-end">
            {FEATURED_IN.map((logo) => (
              <div
                key={logo.name}
                className="flex h-9 items-center justify-center grayscale opacity-65 transition hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={logo.w}
                  height={logo.h}
                  className="max-h-9 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
