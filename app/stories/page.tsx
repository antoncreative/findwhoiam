import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Stories — FindWhoIAm",
  description:
    "Real stories from real people who found their true path. Read how others discovered who they are and what they are meant to do.",
};

export default async function StoriesPage() {
  const { data: stories } = await supabase
    .from("stories")
    .select("id, name, location, title, content, slug, published_at")
    .eq("status", "approved")
    .order("published_at", { ascending: false });

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
              Real People, Real Paths
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-[#FAFAF8] leading-[1.1] mb-5">
            Stories
          </h1>
          <p className="text-[#FAFAF8]/50 text-lg max-w-xl leading-relaxed">
            People who found their way. Their stories are honest, personal, and
            written in their own words.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Stories list */}
        {stories && stories.length > 0 ? (
          <div className="flex flex-col gap-6 mb-20">
            {stories.map((story) => (
              <Link
                key={story.id}
                href={`/stories/${story.slug}`}
                className="group bg-[#FAFAF8] border border-[#E0DBD0] hover:border-[#B8956A] rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      {/* Avatar initial */}
                      <div className="w-9 h-9 rounded-full bg-[#EAE5DC] flex items-center justify-center shrink-0">
                        <span className="font-serif text-sm text-[#B8956A]">
                          {story.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#1C1C1A]">{story.name}</p>
                        {story.location && (
                          <p className="text-xs text-[#6B6A66]">{story.location}</p>
                        )}
                      </div>
                    </div>
                    <h2 className="font-serif text-2xl text-[#1C1C1A] leading-snug mb-3 group-hover:text-[#B8956A] transition-colors duration-300">
                      {story.title}
                    </h2>
                    <p className="text-[#6B6A66] text-base leading-relaxed line-clamp-3">
                      {story.content.slice(0, 200)}…
                    </p>
                  </div>
                  <div className="hidden md:flex items-center self-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12M12 5l5 5-5 5" stroke="#B8956A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-20 mb-20">
            <div className="w-16 h-16 rounded-full bg-[#F2EFE9] flex items-center justify-center mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 21C12 21 4 15.5 4 10a8 8 0 0116 0c0 5.5-8 11-8 11z" stroke="#B8956A" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className="font-serif text-2xl text-[#1C1C1A] mb-3">
              Be the first to share
            </h2>
            <p className="text-[#6B6A66] max-w-sm mx-auto mb-8">
              No stories yet. If you have found your path — or are on your way — share it here.
            </p>
          </div>
        )}

        {/* Submit CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F2EFE9] rounded-2xl p-8">
            <h3 className="font-serif text-xl text-[#1C1C1A] mb-3">
              Share your story
            </h3>
            <p className="text-[#6B6A66] text-sm leading-relaxed mb-6">
              Found your path? Changed direction? Still searching? Your story
              might be exactly what someone else needs to hear.
            </p>
            <Link
              href="/stories/submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1C1A] text-[#FAFAF8] rounded-full text-sm font-medium hover:bg-[#B8956A] transition-colors duration-300"
            >
              Write Your Story
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className="bg-[#1C1C1A] rounded-2xl p-8">
            <h3 className="font-serif text-xl text-[#FAFAF8] mb-3">
              Start your own journey
            </h3>
            <p className="text-[#FAFAF8]/50 text-sm leading-relaxed mb-6">
              Not sure where to begin? Book a free conversation and we'll
              explore it together.
            </p>
            <Link
              href="/#booking"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#B8956A] text-[#FAFAF8] rounded-full text-sm font-medium hover:bg-[#A07850] transition-colors duration-300"
            >
              Book a Free Talk
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
