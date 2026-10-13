"use client";
import Proof from "../../public/Images/Levi_Ackermann_29_character_image.png";
import Image from "next/image";
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
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../../data/projects";
import FileDescriptionIcon from "../components/file";
import SendIcon from "../components/send-icon";
import { ProjectOverviewCard } from "../components/project-card";

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
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="heading-hero text-5xl font-bold">Rishit Sinha</h1>
          <p className="font-mono text-sm uppercase">
            Software Engineer & Shopify SEO
          </p>
        </div>
        <Image
          src={Proof}
          alt="Portrait of Rishit Sinha"
          width={70}
          height={70}
          className="rounded-md object-cover"
        />
      </header>

      <hr className="mt-6 border-[var(--border)]" />

      <p className="mt-6 max-w-[65ch] text-left text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
        I'm a software engineer with a focus on frontend development. I enjoy
        transforming pixel-perfect designs into clean, minimal, and performant
        interfaces. I am currently working as a Shopify Developer and I spend a
        lot of my time working on frontend development, technical SEO,
        performance and production websites. My current stack is about React,
        Next.js, TypeScript and modern web technologies. My favorite place to
        work is frontend but I’m exploring backend engineering, APIs, system
        design and software architecture. I am working toward becoming a
        well-rounded Software Engineer, taking a product from a polished
        interface to a reliable production system.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
        <a
          href="https://cal.com/rishit-sinha-eku02v/30min?overlayCalendar=true"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)]"
        >
          Book a call
          <SendIcon size={10} className="h-4 w-4" />
        </a>
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold"
        >
          Resume
          <FileDescriptionIcon size={10} className="h-4 w-4" />
        </a>
      </div>

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
    </div>
  );
}
