"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const experience = [
  {
    id: "01",
    title: "Full Stack Intern",
    company: "NextLearn Technologies",
    period: "Apr 2026 — May 2026",
    description:
      "Developed and optimized full-stack features for an Employee Management System.",
    responsibilities: [
      "Shipped 8 product features including authentication, dashboards, and real-time notifications.",
      "Built RESTful API endpoints with Express.js and integrated MySQL for employee data management.",
    ],
  },
  {
    id: "02",
    title: "Frontend Developer Intern",
    company: "The Tasty Millets",
    period: "May 2026 — Aug 2026",
    description:
      "Optimized responsive frontend experiences for a production Shopify storefront.",
    responsibilities: [
      "Built 12+ responsive page components using Liquid, HTML, CSS, and JavaScript.",
      "Implemented accessibility improvements including keyboard navigation, screen-reader support, and color-contrast improvements.",
      "Collaborated with design engineers to ship production-ready frontend components.",
    ],
  },
  {
    id: "03",
    title: "Shopify Developer",
    company: "The Tasty Millets",
    period: "Sep 15, 2026 — Present",
    description:
      "Focused on storefront performance, technical SEO, and custom Shopify development.",
    responsibilities: [
      "Reduced page payload from 40 MB to approximately 9 MB through media and asset optimization.",
      "Optimized 200+ assets with descriptive alt text and image filenames.",
    ],
  },
];

export default function Experience() {
  const [openJobId, setOpenJobId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenJobId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="Experience"
      className="mx-auto flex w-full max-w-4xl flex-col px-4 py-6 sm:px-6 md:px-8 lg:px-10"
    >
      <div className="divide-y divide-[var(--border)]">
        {experience.map((job) => {
          const isOpen = openJobId === job.id;

          return (
            <article key={job.id} className="py-5 first:pt-0">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-[var(--foreground)]">
                    {job.title}
                  </h3>

                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {job.company}
                  </p>
                </div>

                <p className="shrink-0 text-xs text-[var(--muted)] sm:pt-1">
                  {job.period}
                </p>
              </div>

              <p className="mt-3 max-w-[100ch] text-[13px] leading-[1.65] text-[var(--muted)]">
                {job.description}
              </p>

              <button
                type="button"
                onClick={() => handleToggle(job.id)}
                aria-expanded={isOpen}
                aria-controls={`responsibilities-content-${job.id}`}
                className="mt-3 inline-flex items-center gap-1 rounded-sm text-xs text-[var(--muted)] transition-colors hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
              >
                {isOpen ? "Show less" : "Know more"}

                <ChevronDown
                  size={13}
                  strokeWidth={1.75}
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id={`responsibilities-content-${job.id}`}
                aria-hidden={!isOpen}
                inert={!isOpen}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-2 pt-3 text-[13px] leading-[1.65] text-[var(--muted)]">
                    {job.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-[var(--foreground)]" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
