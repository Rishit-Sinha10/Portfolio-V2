"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronLeft, Folder, type LucideIcon } from "lucide-react";
import { PROJECTS } from "../../data/projects";
import ProjectOverviewCard from "../components/project-card";

function SectionLabel({
  id,
  icon: IconComponent,
  title,
  action,
}: {
  id: string;
  icon: LucideIcon;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h2
        id={`${id}-heading`}
        className="flex items-center gap-2 font-mono text-xs lowercase text-[var(--muted)]"
      >
        <IconComponent size={12} strokeWidth={1.75} aria-hidden="true" />
        {title}
      </h2>
      {action}
    </div>
  );
}

function Section({
  id,
  icon,
  title,
  action,
  children,
}: {
  id: string;
  icon: LucideIcon;
  title: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mt-8 scroll-mt-10"
    >
      <SectionLabel id={id} icon={icon} title={title} action={action} />
      <div className="min-w-0">{children}</div>
    </section>
  );
}

export function Work() {
  return (
    <section
      id="work"
      className="mx-auto w-full max-w-[34rem] pt-12 pb-10 font-sans"
    >
      <Section id="projects" icon={Folder} title="projects">
        <div className="flex flex-col gap-0 overflow-hidden rounded-lg border border-[var(--border)]">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="border-b border-[var(--border)] last:border-b-0"
            >
              <ProjectOverviewCard projects={[project]} />
            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}

export default Work;
