"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { PRICING } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

export default function GuaranteeSection() {
  return (
    <section className="section-wrap cream-field" aria-label="Guarantee">
      <div className="container-narrow text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-2xl"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="relative h-32 w-32">
              <Image
                src="/images/guarantee/money-back.png"
                alt="100% money-back guarantee, risk-free"
                fill
                sizes="128px"
                className="object-contain"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <SectionLabel label="The guarantee" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-lg text-navy text-balance"
          >
            {PRICING.guaranteeDays} days. 100% money-back. No questions, no caveats.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-ink/85"
          >
            Enroll. Take the modules. Apply BFR with your first patient. If the certification doesn't earn its place in your practice, email us within {PRICING.guaranteeDays} days and we refund the full {PRICING.currencySymbol}
            {PRICING.bundlePrice}. The risk is on us, not you. The reason we can offer this is because every refund is one we don't get back.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
