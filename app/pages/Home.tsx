"use client";
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
import { ArrowUpRight, Section } from "lucide-react";
import { PROJECTS } from "../../data/projects";
import FileDescriptionIcon from "../components/file";
import SendIcon from "../components/send-icon";
import { ProjectOverviewCard } from "../components/project-card";
import ContributionGraph from "./github";
import { SocialIcon } from "../components/social";
import Image from "next/image";
import Proof from "../../public/Images/Levi_Ackermann_29_character_image.png";
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

function SkillIcon({ icon }: { icon: SimpleIcon }) {
  return (
    <svg
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
    <li className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-3 py-2 text-sm transition-colors hover:bg-muted">
      <SkillIcon icon={icon} />
      <span className="whitespace-nowrap">{name}</span>
    </li>
  );
}

// One shared style for section headings: real <h2>, quiet visual weight.
const SECTION_HEADING =
  "text-left text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[var(--muted)]";

const FEATURED_PROJECT_IDS = ["financcino", "flux", "claritycxr"];

export default function Portfolio() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col px-4 py-6 sm:px-6 md:px-8 lg:px-10">
      {/* Intro */}
      <section id="about" aria-labelledby="about-heading" className="mt-10">
        <div className="order-2 md:order-1">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Rishit Sinha
          </h1>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Software Engineer · Jaipur, Rajasthan
          </p>

          <p className="mt-4 max-w-base text-base leading-relaxed text-[var(--foreground)] text-balance">
            I build minimalist, performance-driven frontend interfaces focused
            on SEO, accessibility, and usability.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://cal.com/rishit-sinha-eku02v/30min?overlayCalendar=true"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--accent-light)]"
            >
              Book a call
              <SendIcon size={10} className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-2 py-2.5 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              Resume
              <FileDescriptionIcon size={10} className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      <section id="about" aria-labelledby="work-heading" className="mt-10">
        <h2 id="work-heading" className={`${SECTION_HEADING} mb-3`}>
          Curious About Me
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[var(--foreground)] text-balance">
          I'm a 21-year-old Computer Science student based in Jaipur, India,
          focused on building fast, reliable web interfaces and understanding
          the systems behind them. I care about performance, clarity, and
          maintainable code, and I'm gradually exploring lower-level concepts
          such as memory management, network sockets, and container runtimes.
        </p>
      </section>
      <section id="work" aria-labelledby="work-heading" className="mt-10">
        <h2 id="work-heading" className={`${SECTION_HEADING} mb-3`}>
          My Socials
        </h2>
        <SocialIcon />
      </section>
      {/* Work: the main event, so it comes first after the intro */}
      <section id="work" aria-labelledby="work-heading" className="mt-10">
        <h2 id="work-heading" className={`${SECTION_HEADING} mb-3`}>
          Selected work
        </h2>
        <div className="flex flex-col overflow-hidden rounded-lg border border-[var(--border)]">
          {FEATURED_PROJECT_IDS.map((id) => {
            const project = PROJECTS.find((item) => item.id === id);
            return project ? (
              <div
                key={id}
                className="border-b border-[var(--border)] last:border-b-0"
              >
                <ProjectOverviewCard project={project} />
              </div>
            ) : null;
          })}
        </div>
        <a
          href="/projects"
          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--accent-light)]"
        >
          View all projects
          <ArrowUpRight size={14} />
        </a>
      </section>
      <section id="blog" aria-labelledby="blog-heading" className="mt-10">
        <h2 id="blog-heading" className={`${SECTION_HEADING} mb-3`}>
          Blog
        </h2>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
          <p className="text-base font-medium">
            Notes on frontend engineering and what I’m learning.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
            I write about building fast, accessible web experiences and the
            systems behind them.
          </p>
          <a
            href="/blog"
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--accent-light)]"
          >
            Read the blog
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* Skills: supporting info, so it sits below work */}
      <section aria-labelledby="skills-heading" className="mt-10">
        <h2 id="skills-heading" className={`${SECTION_HEADING} mb-3`}>
          Skills
        </h2>
        <ul className="flex flex-wrap gap-1.5 sm:gap-2">
          {SKILLS.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 id="skills-heading" className={`${SECTION_HEADING} mb-3`}>
          Github Activity
        </h2>
        <ContributionGraph />
      </section>
    </div>
  );
}
