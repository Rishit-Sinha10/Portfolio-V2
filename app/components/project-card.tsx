"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import type { ProjectCaseStudy } from "../../data/projects";
import { useState } from "react";
function StatusDot({ status, accent }: { status: string; accent: string }) {
  return (
    <span className="inline-flex items-center gap-0.5 transition-colors hover:text-[var(--foreground)]">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{
          background: status === "Live" ? accent : "var(--muted)",
        }}
      />
      <span
        style={{
          background: status === "Live" ? accent : "var(--muted)",
        }}
      >
        {status}
      </span>
    </span>
  );
}

export default function ProjectOverviewCard({
  project,
}: {
  project: ProjectCaseStudy;
}) {
  const [openJobId, setOpenJobId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenJobId((prev) => (prev === id ? null : id));
  };
  const isOpen = openJobId === project.id;
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col px-4 py-6 sm:px-6 md:px-8 lg:px-10">
      {/* Title + links */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <h2 className="text-base font-semibold text-[var(--foreground)]">
            <Link
              href={`/work/${project.id}`}
              className="transition-colors hover:text-[var(--muted)]"
            >
              {project.title}
            </Link>
          </h2>
        </div>
        <div className="flex shrink-0 items-center gap-3 pt-1.5 text-xs text-[var(--muted)]">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="inline-flex items-center gap-0.5 transition-colors hover:text-[var(--foreground)]"
            >
              Code
              <ArrowUpRight size={11} strokeWidth={1.75} aria-hidden="true" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
              className="inline-flex items-center gap-0.5 transition-colors hover:text-[var(--foreground)]"
            >
              Live
              <ArrowUpRight size={11} strokeWidth={1.75} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* Toggle */}
      <button
        type="button"
        onClick={() => handleToggle(project.id)}
        aria-expanded={isOpen}
        aria-controls={`responsibilities-content-${project.id}`}
        className="mt-1 inline-flex items-center gap-1 rounded-sm text-xs text-[var(--muted)] transition-colors hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)] text-left"
      >
        {isOpen ? "Show less" : "Know more"}
        <ChevronDown
          size={12}
          strokeWidth={1.75}
          aria-hidden="true"
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Expandable content */}
      <div
        id={`responsibilities-content-${project.id}`}
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[100ch] pt-2 text-[13px] leading-[1.55] text-[var(--muted)]">
            {project.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
