import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleBySlug } from "@/lib/knowledge";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — FindWhoIAm`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const allArticles = getAllArticles();
  const currentIndex = allArticles.findIndex((a) => a.slug === slug);
  const prevArticle = allArticles[currentIndex + 1] ?? null;
  const nextArticle = allArticles[currentIndex - 1] ?? null;

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <div className="bg-[#1C1C1A] pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/knowledge"
            className="inline-flex items-center gap-2 text-[#FAFAF8]/40 hover:text-[#B8956A] text-sm mb-10 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 7H3M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All articles
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs text-[#FAFAF8]/35">
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#FAFAF8]/20" />
            <span className="text-xs text-[#FAFAF8]/35">{article.readTime}</span>
            <span className="w-1 h-1 rounded-full bg-[#FAFAF8]/20" />
            <span className="text-xs text-[#FAFAF8]/35">{article.author}</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl text-[#FAFAF8] leading-[1.1]">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="prose-article">
          <MDXRemote source={article.content} />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-16">
          <div className="flex-1 h-px bg-[#E0DBD0]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#B8956A]" />
          <div className="flex-1 h-px bg-[#E0DBD0]" />
        </div>

        {/* CTA */}
        <div className="bg-[#1C1C1A] rounded-2xl p-10 text-center mb-16">
          <p className="font-serif text-2xl text-[#FAFAF8] mb-3">
            Does this resonate with you?
          </p>
          <p className="text-[#FAFAF8]/50 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
            A conversation can take you further than any article. Book a free
            call and let's explore your path together.
          </p>
          <Link
            href="/#booking"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B8956A] text-[#FAFAF8] rounded-full text-sm font-medium hover:bg-[#A07850] transition-colors duration-300"
          >
            Book a Free Talk
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Prev / Next */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle && (
            <Link
              href={`/knowledge/${prevArticle.slug}`}
              className="group p-6 border border-[#E0DBD0] rounded-xl hover:border-[#B8956A] transition-colors duration-300"
            >
              <span className="text-xs text-[#6B6A66] mb-2 block">Previous</span>
              <span className="font-serif text-base text-[#1C1C1A] group-hover:text-[#B8956A] transition-colors leading-snug">
                {prevArticle.title}
              </span>
            </Link>
          )}
          {nextArticle && (
            <Link
              href={`/knowledge/${nextArticle.slug}`}
              className="group p-6 border border-[#E0DBD0] rounded-xl hover:border-[#B8956A] transition-colors duration-300 sm:text-right sm:col-start-2"
            >
              <span className="text-xs text-[#6B6A66] mb-2 block">Next</span>
              <span className="font-serif text-base text-[#1C1C1A] group-hover:text-[#B8956A] transition-colors leading-snug">
                {nextArticle.title}
              </span>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
