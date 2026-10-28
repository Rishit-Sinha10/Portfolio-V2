import Link from "next/link";
import { getAllBlogPosts } from "../../lib/blog";
import { ChevronLeft } from "lucide-react";
export const metadata = {
  title: "Blog",
  description:
    "Technical articles about building real-time systems, React, and full-stack development.",
};
export default function BlogPage() {
  const posts = getAllBlogPosts();
  return (
    <section className="mx-auto w-full max-w-[768px] px-5 py-12">
      <Link
        href="/"
        className="inline-flex w-fit items-center gap-1.5 rounded-md px-2 py-1 text-[12px] font-medium text-[var(--muted)] no-underline transition-colors hover:bg-[var(--accent-light)] hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)] sm:px-2.5 sm:py-1.5 sm:text-[13px]"
      >
        <ChevronLeft size={12} strokeWidth={2} aria-hidden="true" />
        Back To Portfolio
      </Link>
      <div className="mb-12">
        <h1 className="heading-section text-[var(--foreground)]">Blog</h1>
        <p className="mt-3 text-body">
          Writing about building real-time systems, React patterns, and lessons
          from shipping production apps.
        </p>
      </div>
      {posts.length === 0 ? (
        <p className="text-body">No posts yet. Check back soon.</p>
      ) : (
        <div className="space-y-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex items-baseline justify-between gap-4 border-b border-[var(--border)] py-4 transition"
            >
              <div className="min-w-0 flex-1">
                <h2 className="text-base font-medium text-[var(--foreground)] transition group-hover:text-[var(--accent)]">
                  {post.title}
                </h2>
                <p className="mt-1 text-sm text-[var(--muted)] line-clamp-1">
                  {post.excerpt}
                </p>
              </div>
              <time
                dateTime={post.date}
                className="shrink-0 text-sm text-[var(--muted)] tabular-nums"
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
