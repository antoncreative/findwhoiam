import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/knowledge");

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  content: string;
};

export function getAllArticles(): Article[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        readTime: data.readTime,
        author: data.author,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | undefined {
  const filepath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return undefined;
  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    readTime: data.readTime,
    author: data.author,
    content,
  };
}
