"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
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
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="work"
      className="mx-auto flex w-full max-w-4xl flex-col px-4 py-6 sm:px-6 md:px-8 lg:px-10"
    >
      <Link
        href="/"
        className="inline-flex w-fit items-center gap-1.5 rounded-md px-2 py-1 text-[12px] font-medium text-[var(--muted)] no-underline transition-colors hover:bg-[var(--accent-light)] hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)] sm:px-2.5 sm:py-1.5 sm:text-[13px]"
      >
        <ChevronLeft size={12} strokeWidth={2} aria-hidden="true" />
        Back To Portfolio
      </Link>

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
