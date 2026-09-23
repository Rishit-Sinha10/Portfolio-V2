"use client";
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siMongodb,
  siGit,
  siGithub,
  siMysql,
} from "simple-icons";
import { type SkillCategory, PROJECTS } from "../../data/projects";
import type { SimpleIcon } from "simple-icons";
import FileDescriptionIcon from "../components/file";
import { LinkPreview } from "../components/link_preview";
import SendIcon from "../components/send-icon";
import { ProjectOverviewCard } from "../components/project-card";
import { ArrowUpRight } from "lucide-react";
const SKILLS: {
  name: string;
  icon: SimpleIcon;
}[] = [
  // Frontend
  { name: "React", icon: siReact },
  { name: "Next.js", icon: siNextdotjs },
  { name: "TypeScript", icon: siTypescript },
  { name: "Tailwind CSS", icon: siTailwindcss },
  // Backend
  { name: "Node.js", icon: siNodedotjs },
  { name: "Express", icon: siExpress },
  // Database
  { name: "MongoDB", icon: siMongodb },
  { name: "MySQL", icon: siMysql },
];
function SkillIcon({ icon }: { icon: SimpleIcon }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0"
      fill={`#${icon.hex}`}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

function SkillBadge({ name, icon }: { name: string; icon: SimpleIcon }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors hover:bg-muted">
      <SkillIcon icon={icon} />
      <span className="whitespace-nowrap">{name}</span>
    </span>
  );
}

export default function Portfolio() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col px-4 py-6 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[900px]"></div>
      <p className="mt-4 text-left text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
        Hey, I’m{" "}
        <LinkPreview url="https://www.rishitsinha.online/">
          <span className="font-medium text-[var(--foreground)]">
            Rishit Sinha
          </span>
        </LinkPreview>
        , a final-year Computer Science student and developer building
        full-stack products with a growing focus on backend engineering and AI.
        Currently, I work as a Shopify Developer, building and maintaining
        production storefronts, frontend experiences, and integrations.
        Previously, I worked as a Full Stack Developer Intern at{" "}
        <LinkPreview url="https://www.nextlearn.in/">
          <span className="font-medium text-[var(--foreground)]">
            NextLearn Technologies
          </span>
        </LinkPreview>
        . Outside of work, I build and ship products like{" "}
        <LinkPreview url="https://code.rishitsinha.online/">
          <span className="font-medium text-[var(--foreground)]">Klyro</span>
        </LinkPreview>
        , was Also Selected as Open Source Program for{" "}
        <span className="font-medium text-[var(--foreground)]">Sentry </span> ,{" "}
        for{" "}
        <LinkPreview url="https://www.linkedin.com/posts/rishit-sinha-6953ab363_excited-to-share-that-klyro-has-been-selected-share-7506795350159118336-fHg-/">
          <span className="font-medium text-[var(--foreground)]">Proof</span>
        </LinkPreview>
        ,{" "}
        <LinkPreview url="https://finan-cino.vercel.app/">
          <span className="font-medium text-[var(--foreground)]">
            Financcino
          </span>
        </LinkPreview>
        , and{" "}
        <LinkPreview url="https://claritycxr.vercel.app/">
          <span className="font-medium text-[var(--foreground)]">
            ClarityCXR
          </span>
        </LinkPreview>
        , and I’m currently building{" "}
        <LinkPreview url="">
          <span className="font-medium text-[var(--foreground)]">OpenLink</span>
        </LinkPreview>
        , a unified AI provider infrastructure project. I’m going deeper into
        TypeScript, Node.js, backend architecture, system design, and AI
        systems.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:gap-3">
        <a
          href="https://cal.com/rishit-sinha-eku02v/30min?overlayCalendar=true"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)]"
        >
          Book A Call
          <span></span>
          <SendIcon size={10} className="h-4 w-4" />
        </a>
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold"
        >
          Resume
          <FileDescriptionIcon size={10} className="h-4 w-4" />
        </a>
      </div>
      <div className="mt-6">
        <p className="mb-3 text-left text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[var(--muted)] sm:text-[0.72rem] ">
          Skills
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {SKILLS.map((skill) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="mb-3 text-left text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[var(--muted)] sm:text-[0.72rem]">
          Selected work
        </p>
        <div className="flex flex-col gap-0 overflow-hidden rounded-lg border border-[var(--border)]">
          {PROJECTS.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="border-b border-[var(--border)] last:border-b-0"
            >
              <ProjectOverviewCard project={project} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--accent-light)]"
        >
          View more projects
          <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
