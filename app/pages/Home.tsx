"use client";
import Proof from "../../public/Images/Levi_Ackermann_29_character_image.png";
import Image from "next/image";
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
import { PROJECTS } from "../../data/projects";
import type { SimpleIcon } from "simple-icons";
import FileDescriptionIcon from "../components/file";
import { LinkPreview } from "../components/link_preview";
import SendIcon from "../components/send-icon";
import { ProjectOverviewCard } from "../components/project-card";
import { ArrowUpRight, Quote, TextQuote } from "lucide-react";
import GithubIcon from "../components/github";
import TwitterXIcon from "../components/x-icon";
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
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-5xl font-bold">Rishit Sinha</h1>
          <p className="font-mono text-sm uppercase">
            Software Engineer & Shopify SEO
          </p>
        </div>

        <Image
          src={Proof}
          alt="Rishit Image"
          width={70}
          height={70}
          className="rounded-md object-cover"
        />
      </div>
      <hr className="mt-6 border-[var(--border)]" />
      {/* Description */}
      <p className="mt-6 text-left text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
        I'm a software engineer with a focus on frontend development. I enjoy
        transforming pixel-perfect designs into clean, minimal, and performant
        interfaces.
        <br />
        I am currently working as a Shopify Developer and I spend a lot of my
        time working on frontend development, technical SEO, performance and
        production websites.
        <br />
        My current stack is about React, Next.js, TypeScript and modern web
        technologies. My favorite place to work is frontend but I’m exploring
        backend engineering, APIs, system design and software architecture.
        <br />I am working toward becoming a well-rounded Software Engineer,
        taking a product from a polished interface to a reliable production
        system.
      </p>
      <hr className="mt-8 border-[var(--border)]" />
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
          href="/Rishit_resume.pdf"
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
          {PROJECTS.slice(0, 6).map((project) => (
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
