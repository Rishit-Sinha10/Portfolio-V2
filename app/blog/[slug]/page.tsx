import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getAllBlogSlugs } from "../../../lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "../../../mdx-components";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-[768px] px-5 py-12 sm:px-6">
      <Link
        href="/blog"
        className="mb-8 flex w-fit items-center gap-1 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
      >
        ← Back to blog
      </Link>

      <header className="mb-10">
        <time
          dateTime={post.date}
          className="text-sm text-[var(--muted)] tabular-nums"
        >
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        <h1 className="mt-2 text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.03em] text-[var(--foreground)]">
          {post.title}
        </h1>
      </header>

      <div className="article-content min-w-0 text-[17px] leading-[1.8] text-[var(--muted)] sm:text-[18px]">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
        />
      </div>
    </article>
  );
}
