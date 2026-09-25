import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Github } from "lucide-react";
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

function Eyebrow({ label }: { label: string }) {
  return <p className="text-label mb-2">{label}</p>;
}

function CodeBlock({
  snippet,
}: {
  snippet: { language: string; filename: string; code: string };
}) {
  return (
    <div className="code-block">
      <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--muted)] opacity-30" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--muted)] opacity-30" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--muted)] opacity-30" />
        </div>
        <span className="ml-2 text-[11px] text-[var(--muted)]">
          {snippet.filename}
        </span>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed">
        <code className="text-[var(--foreground)]">{snippet.code}</code>
      </pre>
    </div>
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
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold no-underline text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              Visit
              <ArrowUpRight size={12} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--muted)] no-underline transition hover:text-[var(--foreground)]"
            >
              <Github size={12} />
              Code
            </a>
          </div>
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
          {project.tagline}
        </p>
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
    description: project.tagline,
    openGraph: {
      title: `${project.title} | Rishit Sinha`,
      description: project.tagline,
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
