"use client";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siShopify,
  siNodedotjs,
  siExpress,
  siMongodb,
  siMysql,
  siClerk,
  siSupabase,
  siZod,
  siSocketdotio,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import {
  Activity,
  ArrowUpRight,
  Briefcase,
  ExternalLink,
  Folder,
  LayoutGrid,
  Layers,
  List,
  PenLine,
  Sparkles,
  Star,
} from "lucide-react";
import DiscordIcon from "../components/discord";
import GithubIcon from "../components/github";
import GmailIcon from "../components/gmail-icon";
import LinkedinIcon from "../components/linkedin";
import TwitterXIcon from "../components/x-icon";
import FileDescriptionIcon from "../components/file";
import SendIcon from "../components/send-icon";
import AccordionCard from "../components/accordion-card";
import { LinkPreview } from "../components/link_preview";
import { PROJECTS } from "../../data/projects";
import ContributionGraph from "./github";
import { Highlights } from "../components/Highlights";
import TTMLogo from "../../public/Images/ttm.png";
import NextLearnLogo from "../../public/Images/NextLearn.png";
import HarnavVenturesLogo from "../../public/Images/logo.png";
/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const SKILLS: { name: string; icon: SimpleIcon }[] = [
  // Frontend
  { name: "React", icon: siReact },
  { name: "Next.js", icon: siNextdotjs },
  { name: "TypeScript", icon: siTypescript },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "Shopify Liquid", icon: siShopify },
  // Backend
  { name: "Node.js", icon: siNodedotjs },
  { name: "Express", icon: siExpress },
  { name: "Socket.io", icon: siSocketdotio },
  { name: "Zod", icon: siZod },
  // Data & auth
  { name: "MongoDB", icon: siMongodb },
  { name: "MySQL", icon: siMysql },
  { name: "Supabase", icon: siSupabase },
  { name: "Clerk", icon: siClerk },
];

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Rishit-Sinha10",
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rishit-sinha-6953ab363/",
    Icon: LinkedinIcon,
  },
  {
    label: "Gmail",
    href: "mailto:Sinharishit04@gmail.com",
    Icon: GmailIcon,
  },
  {
    label: "Discord",
    href: "https://discord.com/users/890116546276507688",
    Icon: DiscordIcon,
  },
  {
    label: "X",
    href: "https://x.com/RishitSinh41144",
    Icon: TwitterXIcon,
  },
];
type ExperienceItem = {
  logo: any;
  id: string;
  title: string;
  subtitle: string;
  period: string;
  bullets: string[];
  tags: string[];
};

// Add your other roles here. The first item opens by default.
const EXPERIENCE: ExperienceItem[] = [
  {
    id: "tasty-millets",
    title: "The Tasty Millets",
    subtitle: "Shopify Developer",
    logo: TTMLogo.src,
    period: "Jun 2026 – Aug 2026",
    bullets: [
      "Building custom Shopify theme components for production sites.",
      "Improving storefront performance.",
      "Handling technical SEO.",
    ],
    tags: ["Shopify Liquid", "Performance", "Technical SEO"],
  },
  {
    id: "NextLearn Technologies",
    title: "NextLearn Technologies",
    subtitle: "FullStack Intern",
    logo: NextLearnLogo.src,
    period: "Mar 2026 – Jun 2026",
    bullets: [
      "Developed full-stack application features using React, REST APIs, and a database-backed backend",
      "Implemented backend functionality and API integrations",
      "collaborated on debugging and testing to improve application reliability.",
    ],
    tags: ["Full Stack", "API Design", "Team Work"],
  },
  {
    id: "Harnav Ventures",
    title: "Harnav Ventures",
    subtitle: "Tech Intern",
    logo: HarnavVenturesLogo.src,
    period: "Sep 2026 – Present",
    bullets: [
      "Built and deployed a responsive business website with Next.js and TypeScript, including product catalog pages to showcase product offerings and manufacturing capabilities",
      "Achieved Lighthouse scores above 90 on both mobile and desktop audits through performance and responsive UI optimizations",
      "Implemented technical SEO: metadata, canonical URLs, Open Graph tags, and structured data",
    ],
    tags: ["Technical Seo", "API Design", "Performance"],
  },
];

const FEATURED_PROJECT_IDS = ["claritycxr", "tunnel", "openlink"];

/* ------------------------------------------------------------------ */
/* Project adapter: reads common field names from data/projects        */
/* ------------------------------------------------------------------ */

type ProjectView = {
  id: string;
  name: string;
  description?: string;
  href?: string;
  repo?: string;
  stars?: number;
  bullets: string[];
  tags: string[];
};

const asString = (value: unknown) =>
  typeof value === "string" && value.length > 0 ? value : undefined;

const asStringArray = (value: unknown) =>
  Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];

function firstString(record: Record<string, unknown>, keys: string[]) {
  for (const key of keys) {
    const value = asString(record[key]);
    if (value) return value;
  }
  return undefined;
}

function firstArray(record: Record<string, unknown>, keys: string[]) {
  for (const key of keys) {
    const value = asStringArray(record[key]);
    if (value.length > 0) return value;
  }
  return [];
}

function toProjectView(project: unknown): ProjectView {
  const record = project as Record<string, unknown>;
  const id = firstString(record, ["id"]) ?? "project";
  return {
    id,
    name: firstString(record, ["name", "title"]) ?? id,
    description: firstString(record, [
      "description",
      "summary",
      "tagline",
      "shortDescription",
    ]),
    href: firstString(record, ["link", "url", "liveUrl", "website", "demo"]),
    repo: firstString(record, ["github", "repo", "repoUrl", "sourceUrl"]),
    stars: typeof record.stars === "number" ? record.stars : undefined,
    bullets: firstArray(record, ["highlights", "bullets", "points"]),
    tags: firstArray(record, ["tech", "stack", "tags", "technologies"]),
  };
}

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

function SectionLabel({
  id,
  icon: IconComponent,
  title,
  action,
}: {
  id: string;
  icon: typeof Briefcase;
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
  icon: typeof Briefcase;
  title: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mt-14 scroll-mt-10"
    >
      <SectionLabel id={id} icon={icon} title={title} action={action} />
      <div className="min-w-0">{children}</div>
    </section>
  );
}

/** Bordered pill button, e.g. "View all". */
function PillLink({ href, children }: { href: string; children: ReactNode }) {
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

function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded border border-[var(--border)] px-1.5 py-0.5 text-[10px] leading-none text-[var(--muted)]">
      {children}
    </li>
  );
}

function Bullets({ items }: { items: string[] }) {
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

function Tags({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="mt-3.5 flex flex-wrap gap-1.5">
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </ul>
  );
}

function Initial({ name }: { name: string }) {
  return (
    <span
      aria-hidden="true"
      className="text-[11px] font-semibold leading-none text-[var(--foreground)]"
    >
      {name.charAt(0).toUpperCase()}
    </span>
  );
}

function Skill({ name, icon }: { name: string; icon: SimpleIcon }) {
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

function ViewToggle({
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

function ProjectLinks({ project }: { project: ProjectView }) {
  const target = project.repo ?? project.href;
  return (
    <>
      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name}`}
          className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
        >
          <ExternalLink size={13} strokeWidth={1.75} aria-hidden="true" />
        </a>
      ) : null}
      {typeof project.stars === "number" && target ? (
        <a
          href={target}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 text-[11px] tabular-nums text-[var(--muted)] transition-colors hover:text-[var(--foreground)] [&_svg]:h-3 [&_svg]:w-3"
        >
          <GithubIcon aria-hidden="true" />
          {project.stars}
        </a>
      ) : null}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Portfolio() {
  const [projectView, setProjectView] = useState<"list" | "grid">("list");

  const projects = FEATURED_PROJECT_IDS.map((id) =>
    PROJECTS.find((item) => item.id === id),
  )
    .filter(Boolean)
    .map(toProjectView);

  return (
    <div className="mx-auto w-full max-w-[44rem] px-5 pb-32 pt-10 text-[13px] sm:px-8 md:pt-14">
      {/* Header: name left, socials right, tabs underneath */}
      <header>
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-[20px] font-semibold tracking-[-0.01em] text-[var(--foreground)]">
            Rishit Sinha
          </h1>

          <ul className="-mr-1.5 flex items-center gap-0.5">
            {LINKS.map(({ label, href, Icon }) => {
              const isExternal = !href.startsWith("mailto:");
              return (
                <li key={label}>
                  <a
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    title={label}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-md text-[var(--muted)] transition-colors hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)] [&_svg]:h-[15px] [&_svg]:w-[15px]"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </header>

      {/* Intro */}
      <div className="mt-7 max-w-[80ch] space-y-3.5 leading-[1.7] text-balance text-[var(--muted)]">
        <p>
          I'm a CS student who cares about the details and enjoys turning ideas
          into working software. I work as a Technical Intern at Harnav Ventures
          and build projects in the open, including{" "}
          <LinkPreview url="https://tunnel-sable.vercel.app/">
            Tunnel
          </LinkPreview>{" "}
          and{" "}
          <LinkPreview url="https://github.com/Rishit-Sinha10/OpenLink">
            OpenLink
          </LinkPreview>
          . I'm focused on building reliable, useful software and getting better
          with every release.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <a
          href="https://cal.com/rishit-sinha-eku02v/30min?overlayCalendar=true"
          className="inline-flex items-center gap-2 rounded-md bg-[var(--foreground)] px-3 py-1.5 text-[12px] font-medium text-[var(--background)] transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
        >
          Book a call
          <SendIcon size={10} className="h-3 w-3" />
        </a>
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-1.5 rounded-sm text-[12px] text-[var(--muted)] transition-colors hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--foreground)]"
        >
          Resume
          <FileDescriptionIcon size={10} className="h-3 w-3" />
        </a>
      </div>

      {/* Experience */}
      <Section id="experience" icon={Briefcase} title="experience">
        <div className="space-y-2">
          {EXPERIENCE.map((item, index) => (
            <AccordionCard
              key={item.id}
              logo={<img src={item.logo} />}
              title={item.title}
              subtitle={item.subtitle}
              meta={item.period}
              defaultOpen={index === 0}
            >
              <Bullets items={item.bullets} />
              <Tags items={item.tags} />
            </AccordionCard>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <PillLink href="/experience">View all</PillLink>
        </div>
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        icon={Folder}
        title="projects"
        action={<ViewToggle view={projectView} onChange={setProjectView} />}
      >
        {projectView === "list" ? (
          <div className="space-y-2">
            {projects.map((project) => (
              <AccordionCard
                key={project.id}
                logo={<Initial name={project.name} />}
                title={project.name}
                trailing={<ProjectLinks project={project} />}
              >
                {project.description ? (
                  <p className="mb-3 text-[12px] leading-[1.6] text-[var(--muted)]">
                    {project.description}
                  </p>
                ) : null}
                <Bullets items={project.bullets} />
                <Tags items={project.tags} />
              </AccordionCard>
            ))}
          </div>
        ) : (
          <div className="grid gap-2 sm:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3.5 transition-colors hover:border-[color-mix(in_srgb,var(--foreground)_20%,var(--border))]"
              >
                <div className="flex items-center gap-2">
                  <span className="min-w-0 flex-1 truncate text-[13px] font-medium text-[var(--foreground)]">
                    {project.name}
                  </span>
                  <ProjectLinks project={project} />
                </div>
                {project.description ? (
                  <p className="mt-1.5 line-clamp-3 text-[12px] leading-[1.6] text-[var(--muted)]">
                    {project.description}
                  </p>
                ) : null}
                <Tags items={project.tags.slice(0, 4)} />
              </div>
            ))}
          </div>
        )}
        <div className="mt-4 flex justify-center">
          <PillLink href="/projects">View all</PillLink>
        </div>
      </Section>

      {/* Writing */}
      <Section id="writing" icon={PenLine} title="writing">
        <p className="max-w-[56ch] leading-[1.7] text-[var(--foreground)]">
          Notes on frontend engineering and what I&apos;m learning.
        </p>
        <p className="mt-1 max-w-[56ch] leading-[1.7] text-[var(--muted)]">
          Building fast, accessible web experiences and the systems behind them.
        </p>
        <div className="mt-4">
          <PillLink href="/blog">See more</PillLink>
        </div>
      </Section>

      {/* Highlights */}
      <Section id="highlights" icon={Sparkles} title="highlights">
        <div className="group/list">
          <Highlights />
        </div>
      </Section>

      {/* Stack */}
      <Section id="stack" icon={Layers} title="stack">
        <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
          {SKILLS.map((skill) => (
            <Skill key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </ul>
      </Section>
      {/* GitHub */}
      <Section id="activity" icon={Activity} title="contributions">
        <ContributionGraph />
      </Section>
      <Section id="Highlights" icon={Star} title="Highlights">
        <Highlights />
      </Section>
    </div>
  );
}
