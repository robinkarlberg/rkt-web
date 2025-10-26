import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

async function readPostFile(slug) {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const file = await fs.readFile(filePath, "utf8");
  return matter(file);
}

export async function getPostSlugs() {
  const items = await fs.readdir(POSTS_DIR, { withFileTypes: true });
  return items
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
    .map((entry) => entry.name.replace(/\.mdx$/, ""));
}

export async function getAllPostsMeta() {
  const slugs = await getPostSlugs();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { data } = await readPostFile(slug);
      if (!data?.title) {
        return null;
      }

      return {
        slug,
        title: data.title,
        description: data.description ?? "",
        date: data.date ?? null,
      };
    })
  );

  return posts
    .filter(Boolean)
    .sort((a, b) => {
      const aDate = a.date ? new Date(a.date).getTime() : 0;
      const bDate = b.date ? new Date(b.date).getTime() : 0;
      return bDate - aDate;
    });
}

export async function getPostMeta(slug) {
  try {
    const { data } = await readPostFile(slug);
    if (!data?.title) {
      return null;
    }

    return {
      slug,
      title: data.title,
      description: data.description ?? "",
      date: data.date ?? null,
    };
  } catch {
    return null;
  }
}

export async function getPostBySlug(slug) {
  try {
    const { content, data } = await readPostFile(slug);
    const { content: MDXContent } = await compileMDX({
      source: content,
    });

    return {
      slug,
      meta: {
        title: data.title,
        description: data.description ?? "",
        date: data.date ?? null,
      },
      Content: MDXContent,
    };
  } catch {
    return null;
  }
}
