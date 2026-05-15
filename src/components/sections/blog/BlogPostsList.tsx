"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { BLOG_POSTS } from "@/lib/constants";
import { BLOG_INDEX_INTRO } from "@/content/blog";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Post cards in a 2/3-col grid. Each card is an internal Next Link
// pointing at /blog/[slug]; full post content is now hosted on this
// site (migrated 2026-05-12 from the legacy /bfr-blog URLs). Cards show
// the post's heroImage as a left-side thumbnail (mirroring the legacy
// /bfr-blog index layout); posts without a heroImage render text-only.
// heroBySlug is resolved server-side in /blog/page.tsx so the heavy
// BLOG_POST_BODIES module never enters this client bundle.

type HeroImage = { src: string; alt: string };

export default function BlogPostsList({
  heroBySlug,
}: {
  heroBySlug: Record<string, HeroImage | undefined>;
}) {
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
            <SectionLabel label={BLOG_INDEX_INTRO.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {BLOG_INDEX_INTRO.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {BLOG_INDEX_INTRO.intro}
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {BLOG_POSTS.map((post) => {
            const hero = heroBySlug[post.slug];
            return (
              <motion.li key={post.slug} variants={fadeUp}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full gap-4 rounded-lg border border-line bg-white p-5 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)] transition hover:border-accent/40 hover:shadow-[0_18px_40px_-22px_rgba(25,55,99,0.32)]"
                >
                  {hero ? (
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md border border-line bg-cream">
                      <Image
                        src={hero.src}
                        alt={hero.alt}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="flex h-full min-w-0 flex-1 flex-col">
                    <p className="small-caps-line text-accent text-xs">{post.category}</p>
                    <h3 className="mt-2 flex-1 font-display text-lg text-navy leading-snug group-hover:text-accent transition">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted">
                      Read the post
                      <span aria-hidden className="ml-1 text-accent">→</span>
                    </p>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
