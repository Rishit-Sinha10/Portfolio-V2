import Link from "next/link";
import { title } from "process";

const Highlight = {
  title: {
    openSource: "Klyro Selected for Sentry's OSS Program",
    leetcode: "Solved 430+ Problems on LeetCode",
    harnav: "Delivered a Live Business Website for Harnav Ventures",
    experience:
      "Worked as a Full Stack Developer Intern at NextLearn Technologies",
  },
  subtitle: {
    openSource: "Sentry OSS",
    leetcode: "LeetCode",
    harnav: "Production Website",
    experience: "Internship",
  },
};

const highlights = [
  {
    id: "openSource",
    title: Highlight.title.openSource,
    subtitle: Highlight.subtitle.openSource,
  },
  {
    id: "Leetcode",
    title: Highlight.title.leetcode,
    subtitle: Highlight.subtitle.leetcode,
  },
  {
    id: "previousExperience",
    title: Highlight.title.experience,
    subtitle: Highlight.subtitle.experience,
  },
  {
    id: "business",
    title: Highlight.title.harnav,
    subtitle: Highlight.subtitle.harnav,
  },
];

export function Highlights() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col px-4 py-8 sm:px-6 md:px-8 lg:px-10">
      <div className="divide-y divide-[var(--border)] border-y border-[var(--border)] border-none">
        {highlights.map((highlight) => (
          <article
            key={highlight.id}
            className="group flex items-center justify-between gap-4 py-5"
          >
            <div className="flex min-w-0 flex-col gap-1.5">
              <h3 className="text-sm font-medium leading-relaxed text-[var(--foreground)] transition-colors group-hover:text-[var(--muted)] sm:text-base">
                {highlight.title}
              </h3>

              <p className="text-xs text-[var(--muted)] sm:text-sm">
                {highlight.subtitle}
              </p>
            </div>

            <span
              aria-hidden="true"
              className="shrink-0 text-lg text-[var(--muted)] transition-transform group-hover:translate-x-1"
            >
              ↗
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
