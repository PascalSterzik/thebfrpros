// Wraps the first occurrence of `phrase` inside `text` with the brand
// .underline-accent highlighter (linear-gradient red wash, multi-line-safe).
// Used in headlines across the site to mark the outcome-bearing phrase per
// brand-guide.md voice principles. If `phrase` is undefined / empty / not
// found in `text`, renders `text` plain. Same logic the cert-page section
// components inline locally; centralized here so /about, /reviews, /research,
// /podcast, /blog, /faq, /for/* and the bios can share it without duplication.

export default function Highlighted({
  text,
  phrase,
}: {
  text: string;
  phrase?: string;
}) {
  if (!phrase) return <>{text}</>;
  const i = text.indexOf(phrase);
  if (i === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className="underline-accent">{phrase}</span>
      {text.slice(i + phrase.length)}
    </>
  );
}
