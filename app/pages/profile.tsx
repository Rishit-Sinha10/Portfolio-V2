// Hero.tsx
// Assumes: Profile, LINKS, NowPlaying, LinkPreview, SendIcon, FileDescriptionIcon
// are imported as in your current file.
//
// Fonts (Tailwind): font-serif = nameplate, font-sans = body, font-mono = labels.
// See the note in the reply for the next/font + CSS-variable setup.
import Image from "next/image";
import { useState, type ReactNode, type SVGProps } from "react";
import Profile from "../../public/Images/Levi_Ackermann_29_character_image.png";
import NowPlaying from "../components/playlist";
import { LinkPreview } from "../components/link_preview";
import SendIcon from "../components/send-icon";
import FileDescriptionIcon from "../components/file";
import GithubIcon from "../components/github";
import LinkedinIcon from "../components/linkedin";
import GmailIcon from "../components/gmail-icon";
import DiscordIcon from "../components/discord";
import TwitterXIcon from "../components/x-icon";
import {
  siLeetcode,
  siSpotify,
  siPinterest,
  siYoutube,
  siProducthunt,
  siCodeforces,
} from "simple-icons";
import { SectionHeading } from "../components/section-heading";
const LeetcodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d={siLeetcode.path} />
  </svg>
);
const SpotifyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d={siSpotify.path} />
  </svg>
);

const PintrestIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d={siPinterest.path} />
  </svg>
);
const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d={siYoutube.path} />
  </svg>
);
const ProductHuntIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d={siProducthunt.path} />
  </svg>
);
const CodeForcesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d={siCodeforces.path} />
  </svg>
);
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
  {
    label: "Leetcode",
    href: "https://leetcode.com/u/rizz4566",
    Icon: LeetcodeIcon,
  },
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/rs9379842",
    Icon: CodeForcesIcon,
  },
];

export default function Hero() {
  return (
    <section className="w-full min-w-0">
      {/* Nameplate */}
      <header className="flex items-center gap-4 sm:gap-5">
        <div className="relative shrink-0 rounded-[3px] border border-black/20 p-[3px] dark:border-white/15">
          <div className="relative h-16 w-16 overflow-hidden rounded-[1px] sm:h-20 sm:w-20">
            <Image
              src={Profile}
              alt="Rishit Sinha"
              width={160}
              height={160}
              quality={90}
              priority
              sizes="(min-width: 640px) 80px, 64px"
              className="h-full w-full translate-y-1 scale-[1.1] object-cover object-center grayscale"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-1.5">
          <h1 className="heading-hero font-serif text-[2rem] font-normal leading-none tracking-[-0.02em] text-[var(--foreground)] sm:text-[2.5rem]">
            Rishit Sinha
          </h1>
          <p className="max-w-[15rem] font-mono text-[12px] leading-snug text-[var(--muted)] sm:max-w-none sm:text-[13px]">
            Frontend Focused Software Engineer, CS'2027
          </p>
        </div>
      </header>

      {/* Links + now playing */}
      <div className="mt-6 flex flex-col gap-3 border-t border-black/10 pt-4 dark:border-white/10">
        <ul className="grid grid-cols-4 gap-1 sm:-ml-1.5 sm:flex sm:items-center sm:gap-0.5">
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
                  className="inline-flex min-h-12 w-full flex-col items-center justify-center gap-1 rounded-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)] sm:h-9 sm:min-h-0 sm:w-9 sm:flex-row sm:gap-0 [&_svg]:h-[18px] [&_svg]:w-[18px]"
                >
                  <Icon aria-hidden="true" />
                  <span className="text-[10px] leading-none sm:sr-only">
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <NowPlaying />
      </div>

      {/* Intro */}
      <div className="mt-8 border-t border-black/10 pt-4 dark:border-white/10">
        <SectionHeading id="About">About</SectionHeading>
        <p className="text-[15px] leading-[1.7] text-[var(--muted)] sm:text-base sm:leading-[1.75]">
          I'm a frontend-focused software engineer building production web
          experiences with React, Next.js and TypeScript. I've delivered 8
          production Shopify components. Outside client work, I build
          independent projects like Tunnel, exploring live-streaming
          infrastructure, and OpenLink, a unified API for AI providers. I'm
          particularly interested in application architecture, backend systems,
          performance and building reliable software.
        </p>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <a
          href="#projects-heading"
          className="inline-flex items-center gap-2 rounded-sm bg-[var(--foreground)] px-3.5 py-2 text-[13px] font-medium text-[var(--background)] transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
        >
          View Project
          <SendIcon size={10} className="h-3 w-3" />
        </a>
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-1.5 rounded-sm text-[13px] text-[var(--muted)] underline decoration-black/20 underline-offset-4 transition-colors hover:text-[var(--foreground)] hover:decoration-current focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--foreground)] dark:decoration-white/20"
        >
          Resume
          <FileDescriptionIcon size={10} className="h-3 w-3" />
        </a>
      </div>
    </section>
  );
}
