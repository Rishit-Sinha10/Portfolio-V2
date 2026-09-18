"use client";
import {
  siReact,
  siJavascript,
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siMongodb,
  siSocket,
  siVercel,
  siRender,
  siClerk,
  siBun,
  siFlask,
  siMysql,
  siCss,
  siGit,
  siGithub,
} from "simple-icons";
import { type SkillCategory, PROJECTS } from "../../data/projects";
import type { SimpleIcon } from "simple-icons";
import dynamic from "next/dynamic";
import FileDescriptionIcon from "../components/file";
import { LinkPreview } from "../components/link_preview";
import SendIcon from "../components/send-icon";
import { ProfileImage } from "../components/Profile-Image";
import { ProjectOverviewCard } from "../components/project-card";
import { motion } from "framer-motion";
import Proof from "../../public/Images/image.png";
import GmailIcon from "../components/gmail-icon";
import GithubIcon from "../components/github";
import { Code2Icon, CodeIcon, XIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import TwitterXIcon from "../components/x-icon";
import DiscordIcon from "../components/discord";
import LinkedinIcon from "../components/linkedin";
import Image from "next/image";
const ContributionGraph = dynamic(() => import("../pages/github"), {
  ssr: false,
  loading: () => (
    <div className="mx-auto mt-8 w-full max-w-5xl h-[120px] animate-pulse rounded-lg border border-[var(--border)] bg-[var(--surface)]" />
  ),
});
type HomeSkillCategory = "frontend" | "backend" | "database" | "devops";

const SKILLS: {
  name: string;
  icon: SimpleIcon;
  category: HomeSkillCategory;
}[] = [
  { name: "React", icon: siReact, category: "frontend" },
  { name: "Next.js", icon: siNextdotjs, category: "frontend" },
  { name: "TypeScript", icon: siTypescript, category: "frontend" },
  { name: "JavaScript", icon: siJavascript, category: "frontend" },
  { name: "Tailwind CSS", icon: siTailwindcss, category: "frontend" },
  { name: "CSS", icon: siCss, category: "frontend" },
  { name: "Node.js", icon: siNodedotjs, category: "backend" },
  { name: "Express", icon: siExpress, category: "backend" },
  { name: "Socket.IO", icon: siSocket, category: "backend" },
  { name: "Flask", icon: siFlask, category: "backend" },
  { name: "MongoDB", icon: siMongodb, category: "database" },
  { name: "MySQL", icon: siMysql, category: "database" },
  { name: "Vercel", icon: siVercel, category: "devops" },
  { name: "Render", icon: siRender, category: "devops" },
  { name: "Bun", icon: siBun, category: "devops" },
  { name: "Clerk", icon: siClerk, category: "devops" },
  { name: "Git", icon: siGit, category: "devops" },
  { name: "GitHub", icon: siGithub, category: "devops" },
];

const CATEGORY_LABELS: Record<HomeSkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  devops: "DevOps & Tooling",
};

const CATEGORY_ORDER: HomeSkillCategory[] = [
  "frontend",
  "backend",
  "database",
  "devops",
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
    <span className="flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs text-[var(--muted)] sm:px-3 sm:py-1.5">
      <SkillIcon icon={icon} />
      <span className="whitespace-nowrap">{name}</span>
    </span>
  );
}

export default function Portfolio() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col px-4 py-6 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[900px]">
        <div className="relative h-[200px] w-full overflow-hidden">
          <ProfileImage
            src={Proof}
            alt="Rishit Sinha"
            sizes="100vw"
            priority
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
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
      <div className="mt-6 overflow-hidden">
        <p className="mb-3 text-sm text-muted-foreground">
          Here are my socials
        </p>

        <div className="flex flex-wrap gap-2">
          <a
            href="mailto:sinharishit04@gmail.com"
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors hover:bg-muted"
          >
            <GmailIcon size={15} />
            Gmail
          </a>
          <a
            href="https://github.com/Rishit-Sinha10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors hover:bg-muted"
          >
            <GithubIcon size={15} />
            GitHub
          </a>

          <a
            href="https://x.com/RishitSinh41144"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors hover:bg-muted"
          >
            <TwitterXIcon size={15} />
            Twitter
          </a>
          <a
            href="https://discordapp.com/users/897097621049589790"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors hover:bg-muted"
          >
            <DiscordIcon size={15} />
            Discord
          </a>
          <a
            href="https://www.linkedin.com/in/rishit-sinha-6953ab363/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors hover:bg-muted"
          >
            <LinkedinIcon size={15} />
            Linkedin
          </a>
          <a
            href="https://leetcode.com/u/rizz4566/"
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors hover:bg-muted"
          >
            <Image
              src="/Images/leetcode.png"
              alt="LeetCode"
              width={16}
              height={16}
            />
            Leetcode
          </a>
          <a
            href="https://codolio.com/profile/SCXbZSeq"
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors hover:bg-muted"
          >
            <Code2Icon size={16} />
            Codolio
          </a>
        </div>
      </div>
      <div className="mt-6 overflow-hidden">
        <ContributionGraph />
      </div>
      <div className="mt-6">
        <p className="mb-3 text-left text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[var(--muted)] sm:text-[0.72rem]">
          Core technologies
        </p>
        <div className="flex flex-col gap-3">
          {CATEGORY_ORDER.map((cat) => {
            const skillsInCat = SKILLS.filter((s) => s.category === cat);
            if (skillsInCat.length === 0) return null;
            return (
              <div key={cat}>
                <p className="mb-1.5 text-left text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)] opacity-60 sm:text-[0.66rem]">
                  {CATEGORY_LABELS[cat]}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skillsInCat.map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </div>
            );
          })}
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
