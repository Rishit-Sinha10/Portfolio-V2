"use client";
import Image from "next/image";
import type { ReactNode } from "react";
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
import DiscordIcon from "../components/discord";
import GithubIcon from "../components/github";
import GmailIcon from "../components/gmail-icon";
import LinkedinIcon from "../components/linkedin";
import TwitterXIcon from "../components/x-icon";
import FileDescriptionIcon from "../components/file";
import SendIcon from "../components/send-icon";
import ProjectOverviewCard from "../components/project-card";
import { LinkPreview } from "../components/link_preview";
import { PROJECTS } from "../../data/projects";
import ContributionGraph from "./github";
import Experience from "../experience/[[...rest]]/page";

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

const FEATURED_PROJECT_IDS = ["claritycxr", "tunnel", "openlink"];
const lightBannerPlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 11'%3E%3Crect width='32' height='11' fill='%23d9e5e7'/%3E%3C/svg%3E";
const darkBannerPlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 11'%3E%3Crect width='32' height='11' fill='%23071329'/%3E%3C/svg%3E";
/** Editorial two-column section: quiet label on the left, content on the right. */
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mt-14 grid gap-3 md:grid-cols-[7.5rem_minmax(0,1fr)] md:gap-8"
    >
      <h2
        id={`${id}-heading`}
        className="text-sm text-[var(--muted)] md:pt-0.5"
      >
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="group/link inline-flex items-center gap-1 text-sm text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-4 transition-colors hover:decoration-[var(--foreground)]"
    >
      {children}
      <ArrowUpRight
        size={13}
        strokeWidth={1.75}
        aria-hidden="true"
        className="transition-transform duration-200 group-hover/link:-translate-y-px group-hover/link:translate-x-px"
      />
    </a>
  );
}

function Skill({ name, icon }: { name: string; icon: SimpleIcon }) {
  return (
    <li className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
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

export default function Portfolio() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 md:py-20">
      {/* Header: name and socials share one horizontal line */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-0 h-[22vh] -z-0 pointer-events-auto overflow-hidden bg-white dark:bg-black shadow-[0_4px_12px_rgba(2,6,23,0.04)] dark:shadow-[0_4px_12px_rgba(2,6,23,0.10)]">
        <Image
          src="/Banner.webp"
          alt=""
          fill
          fetchPriority="high"
          sizes="(min-width: 768px) 40vw, 100vw"
          quality={70}
          placeholder="blur"
          blurDataURL={lightBannerPlaceholder}
          className="object-cover object-center dark:hidden"
        />
        <Image
          src="/Banner.webp"
          alt=""
          fill
          fetchPriority="high"
          sizes="(min-width: 768px) 40vw, 100vw"
          quality={70}
          placeholder="blur"
          blurDataURL={darkBannerPlaceholder}
          className="hidden object-cover object-center dark:block"
        />
        <div className="absolute inset-x-0 bottom-0 h-10 pointer-events-none z-[5] bg-gradient-to-t from-white/90 to-transparent dark:from-black/50 dark:to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-8 pointer-events-none z-20 bg-gradient-to-r from-white/90 to-transparent dark:from-black/40 dark:to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none z-20 bg-gradient-to-l from-white/90 to-transparent dark:from-black/40 dark:to-transparent" />
      </div>
      {/* ← this closing tag was missing */}

      <Section id="Hero" title="Hero">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          {/* Name + location */}
          <div>
            <h1 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-4xl">
              Rishit Sinha
            </h1>

            <p className="mt-1.5 text-sm text-[var(--muted)]">
              Software engineer in Jaipur, Rajasthan
            </p>
          </div>

          {/* Social links — same horizontal line as name */}
          <ul className="flex items-center gap-1 -mx-2 sm:mx-0 sm:-mr-2">
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
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[var(--muted)] transition-colors hover:bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)] hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)] [&_svg]:h-4 [&_svg]:w-4"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href="https://cal.com/rishit-sinha-eku02v/30min?overlayCalendar=true"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--foreground)] px-3.5 py-2 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
            >
              Book a call
              <SendIcon size={10} className="h-3.5 w-3.5" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-sm text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--foreground)]"
            >
              Resume
              <FileDescriptionIcon size={10} className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </Section>

      {/* About */}
      <Section id="about" title="About">
        <div className="max-w-[62ch] space-y-4 text-[15px] leading-[1.7] text-pretty">
          <p className="text-[var(--foreground)]">
            I build thoughtful, user-friendly web experiences that balance clean
            design, performance, accessibility, and maintainable code. My main
            stack is React, Next.js, TypeScript, and Tailwind CSS. I currently
            work as a Shopify Developer at The Tasty Millets, building custom
            theme components, improving performance, and handling technical SEO
            for production sites.
          </p>

          <p className="text-[var(--muted)]">
            Beyond the frontend, I&apos;m growing into backend engineering, API
            design, databases, testing, deployment, and architecture. I also
            enjoy contributing to open source and building practical apps that
            push me past the UI.
          </p>

          <p className="text-[var(--muted)]">
            Recently, I built{" "}
            <LinkPreview url="https://code.rishitsinha.online/">
              Klyro
            </LinkPreview>
            . I&apos;m now building{" "}
            <LinkPreview url="https://tunnel-sable.vercel.app/">
              Tunnel
            </LinkPreview>{" "}
            and{" "}
            <LinkPreview url="https://github.com/Rishit-Sinha10/OpenLink">
              OpenLink
            </LinkPreview>{" "}
            for different open-source programs, and working on my first
            production website for a business,{" "}
            <LinkPreview url="https://www.harnavventures.com/">
              Harnav Ventures
            </LinkPreview>
            .
          </p>
        </div>
      </Section>

      {/* Work */}
      <Section id="work" title="Selected work">
        {/* group/list lets each card dim its siblings on hover */}
        <div className="group/list border-t border-[var(--border)]">
          {FEATURED_PROJECT_IDS.map((id) => {
            const project = PROJECTS.find((item) => item.id === id);
            return project ? (
              <ProjectOverviewCard key={id} project={project} />
            ) : null;
          })}
        </div>
        <div className="mt-5">
          <TextLink href="/projects">View all projects</TextLink>
        </div>
      </Section>

      {/* Writing */}
      <Section id="writing" title="Writing">
        <p className="max-w-[56ch] text-[15px] leading-[1.7] text-[var(--foreground)]">
          Notes on frontend engineering and what I&apos;m learning.
        </p>
        <p className="mt-1 max-w-[56ch] text-[15px] leading-[1.7] text-[var(--muted)]">
          Building fast, accessible web experiences and the systems behind them.
        </p>
        <div className="mt-4">
          <TextLink href="/blog">Read the writing</TextLink>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
          {SKILLS.map((skill) => (
            <Skill key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </ul>
      </Section>

      {/* GitHub */}
      <Section id="github" title="GitHub activity">
        <div className="overflow-x-auto">
          <ContributionGraph />
        </div>
      </Section>
      <Section id="experience" title="experience">
        <div className="group/list border-t border-[var(--border)]">
          <Experience />
        </div>
      </Section>
    </div>
  );
}
