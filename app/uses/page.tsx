import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description: "The stack I build with — and what each piece is actually used for.",
};

const CATEGORIES: Array<{
  label: string;
  items: Array<{ name: string; use: string }>;
}> = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", use: "every project that ships" },
      { name: "JavaScript", use: "Express, Node tooling" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "Next.js", use: "this site, ClarityCXR" },
      { name: "React", use: "storefronts, Klryo, Flux, Financcino" },
      { name: "Tailwind CSS", use: "every interface here" },
      { name: "Vite", use: "Klryo and Flux builds" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", use: "the runtime behind every API here" },
      { name: "Express", use: "Financcino, Klryo, Flux" },
      { name: "NestJS", use: "OpenLink core" },
      { name: "Zod", use: "schema validation on OpenLink" },
      { name: "Socket.IO", use: "live chat on Flux" },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "MongoDB", use: "persistence across three products" },
      { name: "Mongoose", use: "the ODM between the app and the database" },
      { name: "MySQL", use: "the relational counterweight" },
    ],
  },
  {
    label: "AI & execution",
    items: [
      { name: "Groq", use: "Klryo’s code assistance" },
      { name: "Google Gemini", use: "Financcino’s spending insights" },
      { name: "Anthropic", use: "OpenLink provider" },
      { name: "Sarvam AI", use: "OpenLink provider" },
      { name: "Judge0", use: "multi-language execution in Klryo" },
    ],
  },
  {
    label: "Platform & services",
    items: [
      { name: "Vercel", use: "frontends, this site" },
      { name: "Render", use: "backends, streaming" },
      { name: "Clerk", use: "auth on Klryo, Flux, Financcino" },
      { name: "Supabase", use: "auth on ClarityCXR" },
      { name: "FFmpeg", use: "HLS transcodes on Flux" },
      { name: "Node-Media-Server", use: "RTMP ingest on Flux" },
    ],
  },
];

export default function UsesPage() {
  return (
    <section className="mx-auto w-full max-w-[768px] px-5 py-12">
      <header className="border-b border-[var(--border)] pb-8">
        <h1 className="heading-section text-[var(--foreground)]">Uses</h1>
        <p className="mt-3 text-body">
          The stack I reach for, and where each piece earns its place.
        </p>
      </header>

      <div className="mt-10">
        {CATEGORIES.map((category) => (
          <section key={category.label} className="mt-8 first:mt-0">
            <p className="text-label mb-3">{category.label}</p>
            <ul>
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col gap-1 border-b border-[var(--border)] py-3.5 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="text-[15px] font-medium text-[var(--foreground)]">
                    {item.name}
                  </span>
                  <span className="font-mono text-xs text-[var(--muted)] sm:text-right">
                    {item.use}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}