import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What I am focused on right now — the current state of my work and projects.",
};

const FOCUS = [
  {
    title: "Final year of Computer Science",
    note: "Open to full-time roles starting 2026.",
  },
  {
    title: "Production storefronts",
    note: "Shipping a Shopify storefront as a developer — frontend, integrations, and what keeps it running.",
  },
  {
    title: "Going deeper",
    note: "TypeScript, Node.js, backend architecture, and AI systems.",
  },
];

const PROJECTS = [
  {
    name: "Klryo",
    status: "Live",
    note: "Selected for Sentry’s Open Source Program.",
  },
  { name: "Financcino", status: "Live", note: "Personal finance, in production." },
  { name: "Flux", status: "Live", note: "Real-time streaming platform." },
  { name: "OpenLink", status: "In dev", note: "Unified AI provider layer." },
  { name: "ClarityCXR", status: "In dev", note: "Multimodal chest X-ray workspace." },
];

export default function NowPage() {
  return (
    <section className="mx-auto w-full max-w-[768px] px-5 py-12">
      <header className="border-b border-[var(--border)] pb-8">
        <h1 className="heading-section text-[var(--foreground)]">Now</h1>
        <p className="mt-3 text-body">Where my attention goes, right now.</p>
      </header>

      <div className="mt-10 border-b border-[var(--border)] pb-8">
        <p className="text-label mb-2">Last updated</p>
        <time
          dateTime="2026-09-24"
          className="font-mono text-[clamp(26px,5vw,40px)] tabular-nums tracking-tight text-[var(--foreground)]"
        >
          September 2026
        </time>
      </div>

      <div className="mt-10">
        <p className="text-label mb-3">Focus</p>
        <ul>
          {FOCUS.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-1 border-b border-[var(--border)] py-3.5 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="text-[15px] font-medium text-[var(--foreground)]">
                {item.title}
              </span>
              <span className="font-mono text-xs text-[var(--muted)] sm:text-right">
                {item.note}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <p className="text-label mb-3">Projects</p>
        <ul>
          {PROJECTS.map((project) => (
            <li
              key={project.name}
              className="grid grid-cols-1 gap-1 border-b border-[var(--border)] py-3.5 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[15px] font-medium text-[var(--foreground)]">
                  {project.name}
                </span>
                <span className="text-sm text-[var(--muted)]">
                  {project.note}
                </span>
              </div>
              <span
                className={`shrink-0 font-mono text-[11px] font-bold uppercase tracking-[0.14em] ${
                  project.status === "Live"
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted)]"
                } sm:text-right`}
              >
                {project.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}