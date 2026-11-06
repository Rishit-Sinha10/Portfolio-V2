import { ReactNode } from "react";
import { ProjectCaseStudy } from "../../data/projects";
import GithubIcon from "./github";
import { List, LayoutGrid, ExternalLink, ArrowUpRight } from "lucide-react";
import type { SimpleIcon } from "simple-icons";
const iconLinkClass =
  "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded text-[var(--muted)] transition-colors hover:text-[var(--foreground)]";
4;
export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded border border-[var(--border)] px-1.5 py-0.5 text-[10px] leading-none text-[var(--muted)]">
      {children}
    </li>
  );
}

export function Bullets({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="space-y-2 text-[12px] leading-[1.6] text-[var(--muted)]">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span
            aria-hidden="true"
            className="mt-[0.55em] h-[3px] w-[3px] shrink-0 rounded-full bg-[var(--muted)]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Tags({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="mt-3.5 flex flex-wrap gap-1.5">
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </ul>
  );
}
export function ViewToggle({
  view,
  onChange,
}: {
  view: "list" | "grid";
  onChange: (next: "list" | "grid") => void;
}) {
  const base =
    "inline-flex h-6 w-6 items-center justify-center rounded transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--foreground)]";
  return (
    <div role="group" aria-label="Project layout" className="flex gap-0.5">
      <button
        type="button"
        aria-label="List view"
        aria-pressed={view === "list"}
        onClick={() => onChange("list")}
        className={`${base} ${view === "list" ? "text-[var(--foreground)]" : "text-[var(--muted)] hover:text-[var(--foreground)]"}`}
      >
        <List size={14} strokeWidth={1.75} aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Grid view"
        aria-pressed={view === "grid"}
        onClick={() => onChange("grid")}
        className={`${base} ${view === "grid" ? "text-[var(--foreground)]" : "text-[var(--muted)] hover:text-[var(--foreground)]"}`}
      >
        <LayoutGrid size={14} strokeWidth={1.75} aria-hidden="true" />
      </button>
    </div>
  );
}

export function ProjectLinks({ project }: { project: ProjectCaseStudy }) {
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
          <GithubIcon size={13} aria-hidden="true" />
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
export function PillLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="group/pill inline-flex items-center gap-1 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[11px] font-medium text-[var(--foreground)] transition-colors hover:border-[color-mix(in_srgb,var(--foreground)_25%,var(--border))] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
    >
      {children}
      <ArrowUpRight
        size={11}
        strokeWidth={1.75}
        aria-hidden="true"
        className="transition-transform duration-200 group-hover/pill:-translate-y-px group-hover/pill:translate-x-px"
      />
    </a>
  );
}
export function Initial({ name }: { name: string }) {
  return (
    <span
      aria-hidden="true"
      className="text-[11px] font-semibold leading-none text-[var(--foreground)]"
    >
      {name.charAt(0).toUpperCase()}
    </span>
  );
}

export function Skill({ name, icon }: { name: string; icon: SimpleIcon }) {
  return (
    <li className="inline-flex items-center gap-1.5 text-[13px] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
      {/* currentColor keeps black brand icons (Next.js, Express) visible in dark mode */}
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 shrink-0"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d={icon.path} />
      </svg>
      <span className="whitespace-nowrap">{name}</span>
    </li>
  );
}
