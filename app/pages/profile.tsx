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
    label: "Spotify",
    href: "https://open.spotify.com/user/31gb7sg44lchyz5ljlbkr2t7dsma",
    Icon: SpotifyIcon,
  },
  {
    label: "Pintrest",
    href: "https://in.pinterest.com/sinharishit04/",
    Icon: PintrestIcon,
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@gwlucifer5818",
    Icon: YoutubeIcon,
  },
  {
    label: "Product Hunt",
    href: "https://www.producthunt.com/@rishit_sinha3",
    Icon: ProductHuntIcon,
  },
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/rs9379842",
    Icon: CodeForcesIcon,
  },
];

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-[34rem] font-sans">
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
          <p className="font-mono text-[12px] leading-none text-[var(--muted)]">
            CS student, age 21
          </p>
        </div>
      </header>

      {/* Links + now playing */}
      <div className="mt-6 flex flex-col gap-3 border-t border-black/10 pt-4 dark:border-white/10">
        <ul className="-ml-1.5 flex items-center gap-0.5">
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
                  className="inline-flex h-8 w-8 items-center justify-center rounded-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)] [&_svg]:h-[18px] [&_svg]:w-[18px]"
                >
                  <Icon aria-hidden="true" />
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
        <p className="text-[15px] leading-[1.75] text-[var(--muted)]">
          I&apos;m a frontend-focused software engineer who enjoys building
          thoughtful interfaces and turning ideas into working
          software.Currently work as a Technical Intern at Harnav Ventures and
          build projects in the open, including{" "}
          <LinkPreview url="https://tunnel-sable.vercel.app/">
            Tunnel
          </LinkPreview>{" "}
          and{" "}
          <LinkPreview url="https://github.com/Rishit-Sinha10/OpenLink">
            OpenLink
          </LinkPreview>
          . I work primarily with React, Next.js, and TypeScript, while
          exploring backend systems, application architecture, and the
          engineering decisions behind reliable software. My goal is to build
          products that are as solid under the hood as they are on the surface.
        </p>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <a
          href="https://cal.com/rishit-sinha-eku02v/30min?overlayCalendar=true"
          className="inline-flex items-center gap-2 rounded-sm bg-[var(--foreground)] px-3.5 py-2 text-[13px] font-medium text-[var(--background)] transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
        >
          Book a call
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
