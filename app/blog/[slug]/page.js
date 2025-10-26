import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostsMeta, getPostBySlug, getPostMeta } from "../../../lib/posts";

const formatDate = (dateString) => {
  if (!dateString) return null;
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllPostsMeta();
  if (posts.length == 0) return []
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPostMeta(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: `${post.title} | RKT Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { content, meta } = post;

  return (
    <div className="px-4 sm:px-6">
      <div className="page mx-auto space-y-8">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-wide text-primary-500">Blog</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">{meta.title}</h1>
          <div className="text-sm text-primary-500">
            {meta.date && <time>{formatDate(meta.date)}</time>}
          </div>
          {meta.description && <p className="text-lg text-primary-600 dark:text-primary-200">{meta.description}</p>}
        </header>

        <article className="max-w-none">
          {content}
        </article>

        <div className="flex gap-4 text-sm text-primary-500">
          <Link href="/blog" className="hover:underline">
            &larr; All posts
          </Link>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
