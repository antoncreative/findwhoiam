export default function About() {
  return (
    <section id="about" className="bg-[#FAFAF8] py-28 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — visual accent */}
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#EAE5DC]">
            {/* Decorative shapes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-10">
                <p className="font-serif text-2xl md:text-3xl text-[#1C1C1A] leading-[1.4] italic">
                  "Most people are living someone else's life. This project
                  exists to help you find your own."
                </p>
                <div className="w-12 h-px bg-[#B8956A] mx-auto mt-8" />
              </div>
            </div>
            <div className="absolute top-8 right-8 w-16 h-16 border border-[#E0DBD0] rounded-full" />
            <div className="absolute bottom-10 left-10 w-8 h-8 bg-[#B8956A] rounded-full opacity-30" />
          </div>
        </div>

        {/* Right — text */}
        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-6 h-px bg-[#B8956A]" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#B8956A]">
              The Mission
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1A] leading-[1.1] mb-8">
            Why this project exists
          </h2>

          <div className="space-y-5 text-[#6B6A66] text-base leading-relaxed">
            <p>
              Too many people wake up one day and realize they've been living on
              autopilot — doing what was expected of them, following paths that
              felt safe but not theirs.
            </p>
            <p>
              They chose careers for money or pressure. They pushed down what
              they truly wanted. And now they feel stuck, confused, or quietly
              unhappy — without knowing why.
            </p>
            <p>
              This project is built for those moments. Not as a quick fix or a
              personality test — but as a real conversation with a real person
              who listens without judgment.
            </p>
            <p>
              The goal is simple: help you hear your own inner voice again. And
              from there, find a path that is genuinely yours.
            </p>
          </div>

          <a
            href="#booking"
            className="inline-flex items-center gap-2 mt-10 text-[#B8956A] font-medium hover:gap-4 transition-all duration-300"
          >
            Start a conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
