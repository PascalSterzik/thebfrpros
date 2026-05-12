"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { heroItem, heroStagger } from "@/lib/motion";

// Shared bio-page hero. Portrait-led layout (image left, name+credentials right
// on desktop; image stacked above text mobile). Used by both /about/nicholas-
// rolnick and /about/nicholas-licameli. Breadcrumb above the eyebrow gives
// search-engine and user back-context.

export default function BioHero({
  eyebrow,
  name,
  credentialsLine,
  tagline,
  subhead,
  photoSrc,
}: {
  eyebrow: string;
  name: string;
  credentialsLine: string;
  tagline: string;
  subhead: string;
  photoSrc: string;
}) {
  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-navy transition">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-muted/50">
              /
            </li>
            <li>
              <Link href="/about" className="hover:text-navy transition">
                About
              </Link>
            </li>
            <li aria-hidden className="text-muted/50">
              /
            </li>
            <li className="text-navy" aria-current="page">
              {name}
            </li>
          </ol>
        </nav>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroStagger}
          className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
        >
          <motion.div variants={heroItem} className="lg:col-span-5 order-1">
            <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg ring-1 ring-line">
              <Image
                src={photoSrc}
                alt={`${name}, ${tagline}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 36vw"
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div variants={heroItem} className="lg:col-span-7 order-2">
            <SectionLabel label={eyebrow} />
            <motion.h1
              variants={heroItem}
              className="mt-6 font-display text-display-2xl lg:text-display-3xl text-navy text-balance"
            >
              {name}
            </motion.h1>
            <motion.p
              variants={heroItem}
              className="mt-4 font-semibold text-lg text-accent"
            >
              {credentialsLine}{" "}
              <span className="text-ink/70 font-normal">&middot; {tagline}</span>
            </motion.p>
            <motion.p
              variants={heroItem}
              className="mt-7 max-w-prose-wide subhead text-ink/85"
            >
              {subhead}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
