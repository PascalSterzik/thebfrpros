"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { ROLNICK_PEER_REVIEWER_JOURNALS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Phase 2b (2026-05-13): the 26 journals Dr. Rolnick serves as peer
// reviewer for. Surfaces a major credibility signal that wasn't on the
// site before — being asked to review for a journal is the field's
// vote that the reviewer knows the literature. Multi-column list keeps
// the volume readable without taking over the page.

export default function PeerReviewerList() {
  return (
    <section className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="Peer reviewer" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            Peer reviewer for {ROLNICK_PEER_REVIEWER_JOURNALS.length}+ journals
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            Being invited to peer-review for a journal is the field's signal that the reviewer reads its literature deeply enough to assess what's new vs. what's known. Dr. Rolnick reviews across exercise science, rehabilitation, sports medicine, physiology, and sports performance journals.
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 mx-auto max-w-4xl grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 text-sm text-ink/85"
        >
          {ROLNICK_PEER_REVIEWER_JOURNALS.map((j) => (
            <motion.li
              key={j}
              variants={fadeUp}
              className="border-l-2 border-line pl-3 py-1 leading-snug"
            >
              {j}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
