import Link from "next/link";
import { getAllArticles } from "@/lib/knowledge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge — FindWhoIAm",
  description:
    "Articles and reflections to help you find your true path, understand yourself, and live a life that is genuinely yours.",
};

export default function KnowledgePage() {
  const articles = getAllArticles();

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <div className="bg-[#1C1C1A] pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#FAFAF8]/40 hover:text-[#B8956A] text-sm mb-10 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 7H3M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to home
          </Link>
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-6 h-px bg-[#B8956A]" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#B8956A]">
              Reflections & Insights
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-[#FAFAF8] leading-[1.1] mb-5">
            Knowledge
          </h1>
          <p className="text-[#FAFAF8]/50 text-lg max-w-xl leading-relaxed">
            Articles to help you understand yourself better, find your direction,
            and build a life that is truly yours.
          </p>
        </div>
      </div>

      {/* Articles grid */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex flex-col gap-px bg-[#E0DBD0]">
          {articles.map((article, i) => (
            <Link
              key={article.slug}
              href={`/knowledge/${article.slug}`}
              className="group bg-[#FAFAF8] hover:bg-[#F2EFE9] transition-colors duration-300 p-8 md:p-10 flex flex-col md:flex-row md:items-start gap-6"
            >
              {/* Number */}
              <span className="font-serif text-3xl text-[#E0DBD0] group-hover:text-[#B8956A] transition-colors duration-300 shrink-0 w-12">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs text-[#6B6A66]">
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#E0DBD0]" />
                  <span className="text-xs text-[#6B6A66]">{article.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl text-[#1C1C1A] leading-snug mb-3 group-hover:text-[#B8956A] transition-colors duration-300">
                  {article.title}
                </h2>
                <p className="text-[#6B6A66] text-base leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center self-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M12 5l5 5-5 5" stroke="#B8956A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center border border-[#E0DBD0] rounded-2xl p-12">
          <p className="font-serif text-2xl text-[#1C1C1A] mb-3">
            Ready to find your own path?
          </p>
          <p className="text-[#6B6A66] mb-8 max-w-md mx-auto">
            Reading is a start. A real conversation goes deeper. Book a free
            call and let's explore together.
          </p>
          <Link
            href="/#booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1C1C1A] text-[#FAFAF8] rounded-full text-base font-medium hover:bg-[#B8956A] transition-colors duration-300"
          >
            Book a Free Talk
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
