import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifesto",
  description:
    "Six principles I build by — shipping, backend depth, and learning by breaking.",
};

const PRINCIPLES = [
  {
    statement: "Ship it.",
    support:
      "Working software in production is the only real progress. Everything else is a plan that flatters itself.",
  },
  {
    statement: "Backend first.",
    support:
      "The interface is the easy part. What runs after the click decides whether a product holds together.",
  },
  {
    statement: "Learn by breaking.",
    support:
      "I read the stack trace before I read the tutorial. Failures are stubborn and honest; summaries are not.",
  },
  {
    statement: "AI is a layer, not a badge.",
    support:
      "Models rotate quarterly. The contracts, validation, and adapters around them are what last.",
  },
  {
    statement: "Specifics over adjectives.",
    support: "Not “scalable” — a number. Not “passionate” — a repository.",
  },
  {
    statement: "Cut until it’s honest.",
    support:
      "A feature that doesn’t earn its place comes out. Shipped and small beats sprawling and almost done.",
  },
];

export default function ManifestoPage() {
  return (
    <section className="mx-auto w-full max-w-[768px] px-5 py-12">
      <header className="border-b border-[var(--border)] pb-8">
        <h1 className="heading-section text-[var(--foreground)]">Manifesto</h1>
        <p className="mt-3 text-body">What I check my work against.</p>
      </header>

      <ol className="mt-10 flex flex-col gap-9">
        {PRINCIPLES.map((principle, index) => (
          <li
            key={principle.statement}
            className="grid grid-cols-[auto_1fr] gap-x-4 sm:gap-x-6"
          >
            <span className="pt-2 font-mono text-xs tabular-nums text-[var(--muted)] sm:pt-3">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="serif-display">{principle.statement}</h2>
              <p className="mt-2 max-w-[54ch] text-[15px] leading-relaxed text-[var(--muted)]">
                {principle.support}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}