"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ProjectCaseStudy } from "../../data/projects";

function StatusDot({ status, accent }: { status: string; accent: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.14em]">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{
          background: status === "Live" ? accent : "var(--muted)",
        }}
      />
      <span
        style={{
          color: status === "Live" ? accent : "var(--muted)",
        }}
      >
        {status}
      </span>
    </span>
  );
}

export function ProjectOverviewCard({
  project,
}: {
  project: ProjectCaseStudy;
}) {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col px-4 py-6 transition duration-150 ease-out hover:bg-[var(--accent-light)] sm:px-6 md:px-8 lg:px-10 border-none">
      <div className="mb-2.5 flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3 border-none">
        <h3 className="text-base font-semibold text-[var(--foreground)]">
          <Link
            href={`/work/${project.id}`}
            className="hover:underline transition hover:text-[var(--muted)]"
          >
            {project.title}
          </Link>
        </h3>

        <div className="flex items-center gap-3 text-xs font-semibold text-[var(--muted)]">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-[var(--foreground)]"
            >
              GitHub
              <ArrowUpRight size={12} />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
              className="inline-flex items-center gap-1.5 transition hover:text-[var(--foreground)]"
            >
              Live
              <ArrowUpRight size={12} />
            </a>
          )}
        </div>
      </div>

      <p className="mb-3 text-[15px] leading-relaxed text-[var(--muted)] text-pretty">
        {project.summary}
      </p>
    </div>
  );
}
