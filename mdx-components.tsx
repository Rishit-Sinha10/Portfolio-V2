import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h2 className="mt-10 mb-4 text-2xl leading-tight font-bold tracking-[-0.02em] text-[var(--foreground)]">
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 text-2xl leading-tight font-bold tracking-[-0.02em] text-[var(--foreground)]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-xl leading-snug font-semibold tracking-[-0.01em] text-[var(--foreground)]">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-6 mb-2 text-lg leading-snug font-semibold text-[var(--foreground)]">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="mb-5 text-[17px] leading-[1.8] text-[var(--muted)] sm:text-[18px]">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[var(--foreground)]">
      {children}
    </strong>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-2 transition hover:decoration-[var(--foreground)]"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="mb-5 list-disc space-y-2 pl-6 text-[17px] leading-[1.8] text-[var(--muted)] sm:text-[18px] [&_li>ol]:my-2 [&_li>ul]:my-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-5 list-decimal space-y-2 pl-6 text-[17px] leading-[1.8] text-[var(--muted)] sm:text-[18px] [&_li>ol]:my-2 [&_li>ul]:my-2">
      {children}
    </ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-2 border-[var(--border)] py-1 pl-5 text-[var(--muted)] italic">
      {children}
    </blockquote>
  ),
  pre: ({ children }) => (
    <pre className="my-6 max-w-full overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--background-secondary)] p-4 font-mono text-sm leading-relaxed text-[var(--foreground)]">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-8 border-[var(--border)]" />,
  table: ({ children }) => (
    <div className="my-6 max-w-full overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b border-[var(--border)]">{children}</thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-[var(--border)]">{children}</tbody>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 font-semibold text-[var(--foreground)]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-[var(--muted)]">{children}</td>
  ),
};

export function useMDXComponents(): MDXComponents {
  return mdxComponents;
}
