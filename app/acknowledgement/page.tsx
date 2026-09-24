import type { Metadata } from "next";
import { LinkPreview } from "../components/link_preview";

export const metadata: Metadata = {
  title: "Acknowledgements",
  description:
    "Programs, teams, and open-source projects that Rishit Sinha’s work stands on.",
};

const ACKNOWLEDGED = [
  {
    name: "Sentry’s Open Source Program",
    url: "https://sentry.io/",
    reason: "Selected Klryo.",
  },
  {
    name: "NextLearn Technologies",
    url: "https://www.nextlearn.in/",
    reason: "The full-stack internship where production features first shipped.",
  },
  {
    name: "TheTastyMillets",
    reason: "Where the production Shopify storefront is built.",
  },
];

const OPEN_SOURCE = [
  { name: "Next.js", url: "https://nextjs.org" },
  { name: "React", url: "https://react.dev" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com" },
  { name: "Node.js", url: "https://nodejs.org" },
  { name: "MongoDB", url: "https://www.mongodb.com" },
  { name: "Vercel", url: "https://vercel.com" },
  { name: "Clerk", url: "https://clerk.com" },
  { name: "Supabase", url: "https://supabase.com" },
  { name: "Groq", url: "https://groq.com" },
  { name: "GSAP", url: "https://gsap.com" },
  { name: "Motion", url: "https://motion.dev" },
  { name: "Lucide", url: "https://lucide.dev" },
  { name: "Simple Icons", url: "https://simpleicons.org" },
  { name: "MDX", url: "https://mdxjs.com" },
  { name: "Microlink", url: "https://microlink.io" },
];

export default function AcknowledgementPage() {
  return (
    <section className="mx-auto w-full max-w-[768px] px-5 py-12">
      <header className="border-b border-[var(--border)] pb-8">
        <h1 className="heading-section text-[var(--foreground)]">
          Acknowledgements
        </h1>
        <p className="mt-3 text-body">
          This work stands on people and tools that shipped before me.
        </p>
      </header>

      <div className="mt-10">
        <p className="text-label mb-3">Programs &amp; teams</p>
        <ul>
          {ACKNOWLEDGED.map((entry) => (
            <li
              key={entry.name}
              className="flex flex-col gap-1 border-b border-[var(--border)] py-3.5 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="text-[15px] font-medium text-[var(--foreground)]">
                {entry.url ? (
                  <LinkPreview url={entry.url}>{entry.name}</LinkPreview>
                ) : (
                  entry.name
                )}
              </span>
              <span className="font-mono text-xs text-[var(--muted)] sm:text-right">
                {entry.reason}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <p className="text-label mb-3">Open source</p>
        <p className="max-w-[60ch] text-[15px] leading-relaxed text-[var(--muted)]">
          Everything above runs on free and open software, mostly unthanked and
          under-credited:{" "}
          {OPEN_SOURCE.map((tool, index) => (
            <span key={tool.name}>
              <a
                href={tool.url}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-[var(--border)] underline-offset-4 transition hover:decoration-[var(--foreground)] hover:text-[var(--foreground)] text-[var(--muted)]"
              >
                {tool.name}
              </a>
              {index < OPEN_SOURCE.length - 1 ? ", " : "."}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}