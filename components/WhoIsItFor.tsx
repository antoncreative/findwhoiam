const profiles = [
  {
    icon: "◦",
    text: "You chose your career because of money or family pressure — and now something feels off.",
  },
  {
    icon: "◦",
    text: "You feel lost and don't know what direction to take in life.",
  },
  {
    icon: "◦",
    text: "You're young and facing the pressure of choosing a path that feels right for others, not you.",
  },
  {
    icon: "◦",
    text: "You've been successful on paper, but quietly wonder if this is really your life.",
  },
  {
    icon: "◦",
    text: "You want to change direction but don't know where to start or what you really want.",
  },
  {
    icon: "◦",
    text: "You feel like you're living someone else's life — and you're ready to find your own.",
  },
];

export default function WhoIsItFor() {
  return (
    <section id="who-is-it-for" className="bg-[#1C1C1A] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-6 h-px bg-[#B8956A]" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#B8956A]">
              Is This You?
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#FAFAF8] leading-[1.1] mb-5">
            Who this is for
          </h2>
          <p className="text-[#6B6A66] text-lg leading-relaxed">
            This project is for anyone who has ever felt that their life belongs
            to someone else — and wants to find the path that is truly theirs.
          </p>
        </div>

        {/* Profile cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {profiles.map((profile, i) => (
            <div
              key={i}
              className="flex gap-5 p-7 rounded-xl border border-white/5 bg-white/3 hover:bg-white/6 hover:border-[#B8956A]/20 transition-all duration-300 group"
            >
              <span className="text-[#B8956A] text-xl mt-0.5 shrink-0">◦</span>
              <p className="text-[#FAFAF8]/75 text-base leading-relaxed group-hover:text-[#FAFAF8]/90 transition-colors">
                {profile.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#6B6A66] mb-6 text-base">
            If any of this resonates with you, a conversation is the first step.
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8956A] text-[#FAFAF8] rounded-full text-base font-medium hover:bg-[#A07850] transition-colors duration-300"
          >
            Book a Free Talk
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
