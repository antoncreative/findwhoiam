export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAF8]">
      {/* Soft background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E8D9C8] rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#F2EFE9] rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center py-32 pt-40">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-10">
          <div className="w-6 h-px bg-[#B8956A]" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#B8956A]">
            Human Guidance
          </span>
          <div className="w-6 h-px bg-[#B8956A]" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-[#1C1C1A] mb-8">
          You were not born
          <br />
          <span className="italic text-[#B8956A]">just to survive.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[#6B6A66] max-w-2xl mx-auto leading-relaxed mb-14">
          Many people spend their lives working for money, following paths that
          were never really theirs. This project helps you stop, listen, and
          discover who you truly are — through honest, human conversation.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1C1C1A] text-[#FAFAF8] rounded-full text-base font-medium hover:bg-[#B8956A] transition-colors duration-300 shadow-lg shadow-black/10"
          >
            Book a Talk
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#support"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-[#E0DBD0] text-[#6B6A66] rounded-full text-base font-medium hover:border-[#B8956A] hover:text-[#B8956A] transition-colors duration-300"
          >
            Support This Mission
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-24 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest uppercase text-[#6B6A66]">Discover more</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#6B6A66] to-transparent" />
        </div>
      </div>
    </section>
  );
}
