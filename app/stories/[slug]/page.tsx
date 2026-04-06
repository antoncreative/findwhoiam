import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await supabase
    .from("stories")
    .select("title, content")
    .eq("slug", slug)
    .eq("status", "approved")
    .single();

  if (!data) return {};
  return {
    title: `${data.title} — Stories — FindWhoIAm`,
    description: data.content.slice(0, 160),
  };
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;

  const { data: story } = await supabase
    .from("stories")
    .select("*")
    .eq("slug", slug)
    .eq("status", "approved")
    .single();

  if (!story) notFound();

  // Format content paragraphs
  const paragraphs = story.content.split(/\n+/).filter(Boolean);

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <div className="bg-[#1C1C1A] pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-[#FAFAF8]/40 hover:text-[#B8956A] text-sm mb-10 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 7H3M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All stories
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-11 h-11 rounded-full bg-[#B8956A]/20 flex items-center justify-center shrink-0">
              <span className="font-serif text-lg text-[#B8956A]">
                {story.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-[#FAFAF8]">{story.name}</p>
              {story.location && (
                <p className="text-xs text-[#FAFAF8]/40">{story.location}</p>
              )}
            </div>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl text-[#FAFAF8] leading-[1.1]">
            {story.title}
          </h1>
        </div>
      </div>

      {/* Story body */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {paragraphs.map((para: string, i: number) => (
            <p key={i} className="text-[#3a3a38] text-lg leading-[1.85]">
              {para}
            </p>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-16">
          <div className="flex-1 h-px bg-[#E0DBD0]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#B8956A]" />
          <div className="flex-1 h-px bg-[#E0DBD0]" />
        </div>

        {/* CTA */}
        <div className="bg-[#1C1C1A] rounded-2xl p-10 text-center mb-12">
          <p className="font-serif text-2xl text-[#FAFAF8] mb-3">
            Does this resonate with you?
          </p>
          <p className="text-[#FAFAF8]/50 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
            Your path is waiting. Book a free conversation and let's explore it
            together.
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

        {/* Share your story */}
        <div className="text-center">
          <p className="text-[#6B6A66] text-sm mb-4">
            Found your own path? Share it with others.
          </p>
          <Link
            href="/stories/submit"
            className="inline-flex items-center gap-2 text-[#B8956A] text-sm font-medium hover:gap-4 transition-all duration-300"
          >
            Write your story
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
