"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { BLOG_POSTS } from "@/lib/constants";
import { HOME_RECENT_BLOG } from "@/content/home";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Phase 4 (2026-05-13): homepage brand-richness strip — 3 newest blog
// posts. BLOG_POSTS is newest-first per the 2026-05-12 migration order,
// so .slice(0, 3) gives the right cards. Internal links to /blog/[slug]
// (full content was migrated onto this site in the same migration).

export default function HomeRecentBlog() {
  const recent = BLOG_POSTS.slice(0, 3);

  return (
    <section id="recent-blog" className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={HOME_RECENT_BLOG.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {HOME_RECENT_BLOG.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {HOME_RECENT_BLOG.intro}
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {recent.map((post) => (
            <motion.li key={post.slug} variants={fadeUp}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)] transition hover:border-accent/40 hover:shadow-[0_18px_40px_-22px_rgba(25,55,99,0.32)]"
              >
                <p className="small-caps-line text-accent text-xs">{post.category}</p>
                <h3 className="mt-3 flex-1 font-display text-lg text-navy leading-snug group-hover:text-accent transition">
                  {post.title}
                </h3>
                <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted">
                  Read the post
                  <span aria-hidden className="ml-1 text-accent">→</span>
                </p>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-10 text-center">
          <Link
            href={HOME_RECENT_BLOG.ctaHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-deeper transition"
          >
            {HOME_RECENT_BLOG.ctaLabel}
            <span aria-hidden>{` (${BLOG_POSTS.length})`}</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
