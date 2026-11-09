import { LinkPreview } from "./link_preview";
import { SectionHeading } from "./section-heading";
const Highlight = {
  title: {
    openSource: "Klyro Selected for Sentry's OSS Program",
    leetcode: "Solved 430+ Problems on LeetCode",
  },
  link: {
    opensource: "https://lnkd.in/p/db2sBWiJ",
    leetcode: "https://leetcode.com/u/rizz4566",
  },
  subtitle: {
    openSource: "Sentry OSS",
    leetcode: "LeetCode",
  },
};
const highlights = [
  {
    id: "openSource",
    title: Highlight.title.openSource,
    subtitle: Highlight.subtitle.openSource,
    link: Highlight.link.opensource,
  },
  {
    id: "Leetcode",
    title: Highlight.title.leetcode,
    subtitle: Highlight.subtitle.leetcode,
    link: Highlight.link.leetcode,
  },
];

export function Highlights() {
  return (
    <section
      aria-labelledby="highlights-heading"
      className="mx-auto w-full max-w-[34rem] font-sans"
    >
      <SectionHeading id="highlights-heading">Highlights</SectionHeading>
      <div className="divide-y divide-[var(--border)] border-y border-[var(--border)] border-none">
        {highlights.map((highlight) => {
          const content = (
            <div className="flex min-w-0 flex-col gap-1.5">
              <h3 className="text-sm font-medium leading-relaxed text-[var(--foreground)] transition-colors group-hover:text-[var(--muted)] sm:text-base">
                {highlight.title}
              </h3>

              <p className="text-xs text-[var(--muted)] sm:text-sm">
                {highlight.subtitle}
              </p>
            </div>
          );

          return (
            <article
              key={highlight.id}
              className="group flex items-center justify-between gap-4 py-5"
            >
              {highlight.link ? (
                <LinkPreview url={highlight.link}>{content}</LinkPreview>
              ) : (
                content
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
