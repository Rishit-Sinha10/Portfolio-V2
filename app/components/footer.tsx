export default function Footer() {
  return (
    <section className="mx-auto w-full max-w-[34rem] font-sans">
      <footer className="mt-12 w-full border-t border-[var(--border)] bg-[var(--background-secondary)]">
        <div className="mx-auto w-full max-w-[34rem] px-5 py-8 sm:py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 font-mono text-[11px] text-[var(--muted)]">
                Get in touch
              </p>
              <a
                href="mailto:Sinharishit04@gmail.com"
                className="text-[15px] font-medium text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-4 transition-colors hover:decoration-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--foreground)]"
              >
                Sinharishit04@gmail.com
              </a>
            </div>

            <nav
              aria-label="Footer links"
              className="flex flex-wrap gap-x-4 gap-y-2 text-[12px] text-[var(--muted)]"
            >
              <a
                href="https://github.com/Rishit-Sinha10"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--foreground)]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rishit-sinha-6953ab363"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--foreground)]"
              >
                LinkedIn
              </a>
              <a
                href="/resume.pdf"
                className="transition-colors hover:text-[var(--foreground)]"
              >
                Resume
              </a>
              <a
                href="/now"
                className="transition-colors hover:text-[var(--foreground)]"
              >
                Now
              </a>
            </nav>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border)] pt-4 font-mono text-[10px] text-[var(--muted)]">
            <span>Rishit Sinha</span>
            <span>Building useful things for the web.</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
