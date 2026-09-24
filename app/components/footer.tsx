"use client";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "./github";
import LinkedinIcon from "./linkedin";
import TwitterXIcon from "./x-icon";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[var(--background)] px-5 pb-5 pt-12 sm:px-7 sm:pt-16">
      <div className="mx-auto max-w-[925px]">
        <div className="flex flex-col gap-6 font-mono text-xs text-[var(--foreground)] md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-8">
            <span className="max-w-[48px] leading-[1.35]">Get in touch:</span>
            <a
              href="mailto:Sinharishit04@gmail.com"
              className="font-semibold underline underline-offset-2 transition hover:text-[var(--muted)]"
            >
              Sinharishit04@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-3 md:max-w-[650px] md:justify-end">
            <a
              href="https://github.com/Rishit-Sinha10"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--muted)] transition hover:text-[var(--foreground)]"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://x.com/RishitSinh41144"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--muted)] transition hover:text-[var(--foreground)]"
              aria-label="X (Twitter)"
            >
              <TwitterXIcon className="h-4 w-4" />
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://www.linkedin.com/in/rishit-sinha-6953ab363"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--muted)] transition hover:text-[var(--foreground)]"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="/resume.pdf"
              className="transition hover:text-[var(--muted)]"
            >
              Resume
            </a>
            <span aria-hidden="true">·</span>
            <Link
              href="/acknowledgement"
              className="transition hover:text-[var(--muted)]"
            >
              Acknowledgements
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/uses" className="transition hover:text-[var(--muted)]">
              Uses
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              href="/manifesto"
              className="transition hover:text-[var(--muted)]"
            >
              Manifesto
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/now" className="transition hover:text-[var(--muted)]">
              Now
            </Link>
            <span aria-hidden="true">·</span>
            <a
              href="/llms.txt"
              className="transition hover:text-[var(--muted)]"
            >
              llms.txt
            </a>
          </div>
        </div>
        <div className="mt-4 text-center font-mono text-xs text-[var(--muted)] sm:mt-6 sm:text-sm">
          <p className="italic">
            &quot;Everyone has the right to freedom of thought, conscience, and
            expression.&quot;
          </p>
          <p className="mt-3">
            &copy; {new Date().getFullYear()} Rishit Sinha{" "}
            <span className="px-2">·</span> All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
