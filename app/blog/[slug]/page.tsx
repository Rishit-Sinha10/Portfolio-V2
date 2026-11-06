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
    <article className="w-full min-w-0">
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
        <h1 className="heading-hero font-serif text-[2rem] font-normal leading-none tracking-[-0.02em] text-[var(--foreground)] sm:text-[2.5rem]">
          {post.title}
        </h1>
      </header>

      <div className="article-content min-w-0 text-[17px] leading-[1.8] text-[var(--muted)] sm:text-[18px]">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
