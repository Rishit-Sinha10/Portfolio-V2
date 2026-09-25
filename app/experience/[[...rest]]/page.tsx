"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "../../pages/reavel";
import { title } from "process";
const experience = [
  {
    id: "01",
    title: "Frontend Developer Intern",
    company: "TheTastyMillets",
    period: "May 2026 — Aug 2026",
    description:
      "Optimized responsive frontend experiences for a production Shopify storefront.",
    responsibilities: [
      "Built 12+ responsive page components with Liquid Extension Which Consist of HTML CSS JS Ruby On Rails improving UI Ux Improvement.",
      "Implemented accessibility improvements including keyboard navigation, screen-reader support, and color-contrast improvements.",
      "Collaborated with design Engineer to ship production-ready frontend Components within a 3-month development cycle.",
    ],
  },
  {
    id: "02",
    title: "Full Stack Intern",
    company: "NextLearn Technologies",
    period: "Apr 2026 — May 2026",
    description:
      "Developed and optimized full-stack features for a  Employee Management System With Mysql NodeJs Express HTML CSS JS Google Cloud  Keys",
    responsibilities: [
      "Shipped 8 product features including authentication, dashboards, and real-time notifications.",
      "Built RESTful API endpoints with Express.js and integrated MySQL for Secure Entry and Employee-progress data.",
    ],
  },
  {
    id: "03",
    title: "Shopify Developer",
    company: "The Tasty Millets",
    period: "Sept 15 2026 - ∞",
    description:
      "Optimzed SEO For The Company With Use Of Screaming Frog Seo Spider And Lighthouse",
    responsibilities: [
      "I improved Shopify storefront performance. I cut the page payload from forty megabytes, to about nine megabytes. I did this by optimizing media and assets.",
      "Optimized 200+ Assest With Correct Alt Text and Image Name and Improve Image Seo By 10%",
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
      id="experience"
      className="mx-auto flex w-full max-w-4xl flex-col px-4 py-6 sm:px-6 md:px-8 lg:px-10"
    >
      <Reveal>
        <div className="mb-8">
          <p className="mb-3  text-left text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[var(--muted)] sm:text-[0.72rem]">
            Experience
          </p>
        </div>
      </Reveal>

      <div className="overflow-hidden rounded-lg border border-[var(--border)]">
        {experience.map((job) => {
          const isOpen = openJobId === job.id;
          return (
            <article
              key={job.id}
              className="border-b border-[var(--border)] last:border-b-0"
            >
              <div className="px-4 py-5 sm:px-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div>
                    <h2 className="text-base font-semibold text-[var(--foreground)]">
                      {job.title}
                    </h2>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {job.company}
                    </p>
                  </div>
                  <time className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)] sm:pt-1">
                    {job.period}
                  </time>
                </div>

                <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted)]">
                  {job.description}
                </p>

                <button
                  type="button"
                  onClick={() => handleToggle(job.id)}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                  aria-expanded={isOpen}
                  aria-controls={`responsibilities-content-${job.id}`}
                >
                  {isOpen ? "Hide responsibilities" : "Key responsibilities"}
                  <ChevronDown
                    size={14}
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`responsibilities-content-${job.id}`}
                    className="mt-4 border-t border-[var(--border)] pt-4"
                  >
                    <ul className="space-y-2 text-sm leading-relaxed text-[var(--muted)]">
                      {job.responsibilities.map((responsibility) => (
                        <li key={responsibility} className="flex gap-3">
                          <span className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-[var(--foreground)]" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
