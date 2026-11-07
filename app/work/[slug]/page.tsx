import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../../../data/projects";

function StatusDot({
  status,
  accent,
}: {
  status: (typeof PROJECTS)[number]["status"];
  accent: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-medium text-[var(--muted)]">
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: status === "Live" ? accent : "var(--muted)" }}
      />
      {status}
    </span>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.id === slug);
  if (!project) return {};

  const description =
    project.caseStudy?.overview ?? project.summary;

  return {
    title: `${project.title} — Case Study`,
    description,
    openGraph: {
      title: `${project.title} | Rishit Sinha`,
      description,
    },
  };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.id === slug);

  if (!project) notFound();

  const caseStudy = project.caseStudy;
  const evidence =
    caseStudy?.evidence ??
    [
      ...(project.liveUrl
        ? [
            {
              label: "Open the deployed project",
              href: project.liveUrl,
              detail: "Live product",
            },
          ]
        : []),
      ...(project.githubUrl
        ? [
            {
              label: "Inspect the source repository",
              href: project.githubUrl,
              detail: "Source code",
            },
          ]
        : []),
    ];

  return (
    <div className="mx-auto w-full max-w-[48rem] px-5 py-10 sm:py-14">
      <Link
        href="/projects"
        className="mb-10 inline-flex items-center gap-2 text-xs text-[var(--muted)] transition-colors hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--foreground)]"
      >
        <ArrowLeft size={13} aria-hidden="true" />
        All projects
      </Link>

      <article>
        <header className="border-b border-[var(--border)] pb-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
              {caseStudy?.focus ?? "Project overview"}
            </p>
            <StatusDot status={project.status} accent={project.accent} />
          </div>
          <h1 className="font-serif text-5xl font-normal leading-none tracking-[-0.04em] text-[var(--foreground)] sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-[40rem] text-[15px] leading-7 text-[var(--muted)]">
            {caseStudy?.overview ?? project.summary}
          </p>
          <ul
            aria-label="Technology stack"
            className="mt-6 flex flex-wrap gap-2"
          >
            {project.techStack.skill.map((skill) => (
              <li
                key={skill}
                className="border border-[var(--border)] px-2.5 py-1 font-mono text-[10px] text-[var(--muted)]"
              >
                {skill}
              </li>
            ))}
          </ul>
        </header>

        <section
          aria-labelledby="overview-heading"
          className="grid gap-3 border-b border-[var(--border)] py-8 sm:grid-cols-[minmax(0,1fr)_12rem] sm:gap-10"
        >
          <div>
            <h2
              id="overview-heading"
              className="font-serif text-2xl font-normal text-[var(--foreground)]"
            >
              The problem
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {caseStudy?.challenge ?? project.summary}
            </p>
          </div>
          <div className="border-t border-[var(--border)] pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
              Project status
            </p>
            <p className="mt-2 text-sm text-[var(--foreground)]">
              {project.status}
            </p>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
              Overview
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              {caseStudy
                ? "Product scope and implementation, with source links."
                : "Project summary and available links."}
            </p>
          </div>
        </section>

        {caseStudy ? (
          <>
            <section
              aria-labelledby="flow-heading"
              className="border-b border-[var(--border)] py-8"
            >
              <div className="mb-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                  System path
                </p>
                <h2
                  id="flow-heading"
                  className="mt-1 font-serif text-2xl font-normal text-[var(--foreground)]"
                >
                  How it fits together
                </h2>
              </div>
              <ol className="grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
                {caseStudy.productFlow.map((step, index) => (
                  <li key={step} className="contents">
                    <div className="flex min-h-16 items-center border border-[var(--border)] px-3.5 py-3 text-[12px] leading-5 text-[var(--foreground)]">
                      <span
                        aria-hidden="true"
                        className="mr-3 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: project.accent }}
                      />
                      {step}
                    </div>
                    {index < caseStudy.productFlow.length - 1 ? (
                      <ArrowRight
                        size={14}
                        aria-hidden="true"
                        className="mx-auto hidden text-[var(--muted)] sm:block"
                      />
                    ) : null}
                  </li>
                ))}
              </ol>
            </section>

            <section
              aria-labelledby="approach-heading"
              className="border-b border-[var(--border)] py-8"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                Build notes
              </p>
              <h2
                id="approach-heading"
                className="mt-1 font-serif text-2xl font-normal text-[var(--foreground)]"
              >
                The approach
              </h2>
              <div className="mt-5 divide-y divide-[var(--border)] border-y border-[var(--border)]">
                {caseStudy.approach.map((item) => (
                  <div
                    key={item.title}
                    className="grid gap-1 py-4 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-6"
                  >
                    <h3 className="text-[13px] font-medium text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="text-[13px] leading-6 text-[var(--muted)]">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : null}

        <section
          aria-labelledby="evidence-heading"
          className="border-b border-[var(--border)] py-8"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
            References
          </p>
          <h2
            id="evidence-heading"
            className="mt-1 font-serif text-2xl font-normal text-[var(--foreground)]"
          >
            Evidence &amp; links
          </h2>
          <ul className="mt-5 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {evidence.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-3.5 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]"
                >
                  <span>
                    <span className="block text-[13px] font-medium text-[var(--foreground)]">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-[11px] text-[var(--muted)]">
                      {item.detail}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={14}
                    aria-hidden="true"
                    className="shrink-0 text-[var(--muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--foreground)]"
                  />
                </a>
              </li>
            ))}
          </ul>
          {caseStudy ? (
            <p className="mt-4 text-[11px] leading-5 text-[var(--muted)]">
              {caseStudy.evidenceNote}
            </p>
          ) : null}
        </section>

        <nav
          aria-label="Other selected case studies"
          className="flex flex-wrap gap-x-5 gap-y-2 pt-6"
        >
          {PROJECTS.filter(
            (item) => item.caseStudy && item.id !== project.id,
          ).map((item) => (
            <Link
              key={item.id}
              href={`/work/${item.id}`}
              className="text-xs text-[var(--muted)] transition-colors hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--foreground)]"
            >
              Read {item.title}
            </Link>
          ))}
        </nav>
      </article>
    </div>
  );
}
