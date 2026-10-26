import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Code2, ChevronDown } from "lucide-react";
import { PROJECTS } from "../../../data/projects";
function StatusDot({ status, accent }: { status: string; accent: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em]">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: status === "Live" ? accent : "var(--muted)" }}
      />
      <span style={{ color: status === "Live" ? accent : "var(--muted)" }}>
        {status}
      </span>
    </span>
  );
}

function ProjectCaseStudyView({ project }: { project: (typeof PROJECTS)[0] }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="border-b border-[var(--border)] pb-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-label mb-2">Selected work</p>
            <h1
              className="heading-section text-[var(--foreground)]"
              style={{ lineHeight: 1.2 }}
            >
              {project.title}
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <StatusDot status={project.status} accent={project.accent} />
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold no-underline text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                Visit
                <ArrowUpRight size={12} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--muted)] no-underline transition hover:text-[var(--foreground)]"
              >
                <Code2 size={12} />
                Code
              </a>
            )}
          </div>
        </div>
        <details className="mt-4 group">
          <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
            Key responsibilities
            <ChevronDown
              size={14}
              aria-hidden="true"
              className="transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <div
            id={`responsibilities-content-${project.id}`}
            className="mt-4 border-t border-[var(--border)] pt-4 text-sm leading-relaxed text-[var(--muted)]"
          >
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-[var(--foreground)]" />
                <span>{project.summary}</span>
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>
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
  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Rishit Sinha`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen justify-center px-5 py-8">
      <div className="w-full max-w-[768px]">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--muted)] no-underline transition hover:text-[var(--foreground)]"
        >
          ← Back to portfolio
        </Link>
        <ProjectCaseStudyView project={project} />
      </div>
    </main>
  );
}
