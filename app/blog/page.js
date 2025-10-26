import Link from "next/link";
import { getAllPostsMeta } from "../../lib/posts";

export const metadata = {
  title: "RKT Blog",
  description: "Notes on building useful websites, fast launch processes, and product experiments.",
};

const formatDate = (dateString) => {
  if (!dateString) return null;
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
};

export default async function BlogIndexPage() {
  const posts = await getAllPostsMeta();

  return (
    <div className="px-4 sm:px-6">
      <div className="page mx-auto space-y-6">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-wide text-primary-500">Changelog</p>
          <h1 className="text-4xl font-bold">Simple blog</h1>
          <p className="text-lg text-primary-600 dark:text-primary-200">
            In progress...
          </p>
        </header>

        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug} className="border border-primary-200 dark:border-primary-700 rounded-2xl hover:border-primary-400 dark:hover:border-primary-500 transition-colors">
              <Link href={`/blog/${post.slug}`} className="block p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h2 className="text-2xl font-semibold">{post.title}</h2>
                  {post.date && <time className="text-sm text-primary-500">{formatDate(post.date)}</time>}
                </div>
                <p className="text-primary-600 dark:text-primary-200 mt-2">{post.description}</p>
              </Link>
            </li>
          ))}
          {posts.length === 0 && (
            <li className="text-primary-500">No posts yet. The publishing script is probably still running.</li>
          )}
        </ul>

        <div className="text-sm text-primary-500">
          <Link href="/" className="hover:underline">
            &larr; Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
