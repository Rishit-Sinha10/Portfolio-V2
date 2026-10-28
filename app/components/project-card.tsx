"use client";

import { ExternalLink } from "lucide-react";
import { useState } from "react";
import type { ProjectCaseStudy } from "../../data/projects";
import AccordionCard from "./accordion-card";
import GithubIcon from "./github";

function Initial({ name, accent }: { name: string; accent: string }) {
  return (
    <span
      aria-hidden="true"
      className="text-[11px] font-semibold leading-none"
      style={{ color: accent }}
    >
      {name.charAt(0).toUpperCase()}
    </span>
  );
}

const iconLinkClass =
  "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded text-[var(--muted)] transition-colors hover:text-[var(--foreground)]";

function ProjectLinks({ project }: { project: ProjectCaseStudy }) {
  if (!project.githubUrl && !project.liveUrl) return null;

  return (
    <div className="flex items-center gap-1">
      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub`}
          className={iconLinkClass}
        >
          <GithubIcon />
        </a>
      ) : null}
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
          className={iconLinkClass}
        >
          <ExternalLink size={13} strokeWidth={1.75} aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="mt-3.5 flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-[var(--border)] px-2 py-0.5 text-[11px] leading-none text-[var(--muted)]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
function Status({ status }: { status: ProjectCaseStudy["status"] }) {
  const dot =
    status === "Live"
      ? "bg-emerald-500"
      : status === "In dev"
        ? "bg-amber-500"
        : "bg-zinc-400";
  return (
    <span className="mb-3 inline-flex items-center gap-1.5 text-[11px] text-[var(--muted)]">
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {status}
    </span>
  );
}
export default function ProjectOverviewList({
  projects,
}: {
  projects: ProjectCaseStudy[];
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <div className="space-y-2">
      {projects.map((project) => (
        <AccordionCard
          key={project.id}
          logo={<Initial name={project.title} accent={project.accent} />}
          title={project.title}
          trailing={<ProjectLinks project={project} />}
        >
          <Status status={project.status} />
          <p className="text-[12px] leading-[1.6] text-[var(--muted)]">
            {project.summary}
          </p>
          <Tags items={project.techStack.skill} />
        </AccordionCard>
      ))}
    </div>
  );
}
