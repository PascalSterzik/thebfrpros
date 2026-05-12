"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPostBody as BlogPostData } from "@/content/blog-posts";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Renders a blog post's paragraphs, headings, blockquotes, and list items
// with brand-consistent prose styling. Single-column, prose-wide, plenty
// of vertical breathing room — same long-form rhythm as the legal pages.
// "View on the legacy site" link at the bottom for reader continuity
// during the migration window.

export default function BlogPostBody({ post }: { post: BlogPostData }) {
  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-prose-wide"
        >
          <motion.article variants={fadeUp} className="space-y-5">
            {post.paragraphs.map((para, i) => {
              const key = `${i}-${para.tag}`;
              if (para.tag === "h2") {
                return (
                  <h2
                    key={key}
                    className="mt-12 font-display text-display-md text-navy text-balance"
                  >
                    {para.text}
                  </h2>
                );
              }
              if (para.tag === "h3") {
                return (
                  <h3
                    key={key}
                    className="mt-10 font-display text-2xl text-navy text-balance"
                  >
                    {para.text}
                  </h3>
                );
              }
              if (para.tag === "h4") {
                return (
                  <h4
                    key={key}
                    className="mt-8 font-display text-xl text-navy text-balance"
                  >
                    {para.text}
                  </h4>
                );
              }
              if (para.tag === "blockquote") {
                return (
                  <blockquote
                    key={key}
                    className="border-l-4 border-accent pl-6 my-8 editorial-quote text-navy-deeper"
                  >
                    {para.text}
                  </blockquote>
                );
              }
              if (para.tag === "li") {
                return (
                  <li
                    key={key}
                    className="ml-6 list-disc text-base leading-relaxed text-ink/85 marker:text-accent"
                  >
                    {para.text}
                  </li>
                );
              }
              return (
                <p
                  key={key}
                  className="text-base leading-relaxed text-ink/85"
                >
                  {para.text}
                </p>
              );
            })}
          </motion.article>

          <motion.div
            variants={fadeUp}
            className="mt-14 rounded-lg border border-line bg-cream p-7"
          >
            <p className="small-caps-line text-accent">During the migration window</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/85">
              This post originally lives on the legacy site. If anything renders oddly here, the live version is{" "}
              <a
                href={post.legacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent hover:text-accent-deeper transition"
              >
                available at thebfrpros.com/bfr-blog
                <span aria-hidden className="ml-1">↗</span>
              </a>
              .
            </p>
            <p className="mt-5 text-sm">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-semibold text-navy hover:text-accent transition"
              >
                <span aria-hidden>←</span>
                Back to all posts
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
