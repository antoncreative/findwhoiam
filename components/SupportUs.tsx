export default function SupportUs() {
  return (
    <section id="support" className="bg-[#FAFAF8] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-px bg-[#B8956A]" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#B8956A]">
                Support the Mission
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1A] leading-[1.1] mb-6">
              Help others find
              <br />
              their way
            </h2>
            <p className="text-[#6B6A66] text-lg leading-relaxed mb-6">
              You don't have to be someone who needed this service to support
              it. If this mission resonates with you — if you believe people
              deserve to live a life that is truly theirs — you can help make
              more of these conversations possible.
            </p>
            <p className="text-[#6B6A66] text-base leading-relaxed mb-10">
              Every contribution, no matter the size, helps keep this project
              free and available to those who need it most.
            </p>

            {/* Support options */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Placeholder support button — replace href with actual payment link */}
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B8956A] text-[#FAFAF8] rounded-full text-base font-medium hover:bg-[#A07850] transition-colors duration-300"
              >
                Support Us
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2C8 2 3 5.5 3 9a5 5 0 0010 0c0-3.5-5-7-5-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#E0DBD0] text-[#6B6A66] rounded-full text-base font-medium hover:border-[#B8956A] hover:text-[#B8956A] transition-colors duration-300"
              >
                Book a Talk Instead
              </a>
            </div>
          </div>

          {/* Visual card */}
          <div className="bg-[#1C1C1A] rounded-2xl p-10 md:p-12 text-center">
            <div className="w-14 h-14 rounded-full bg-[#B8956A]/20 flex items-center justify-center mx-auto mb-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21C12 21 4 15.5 4 10a8 8 0 0116 0c0 5.5-8 11-8 11z"
                  stroke="#B8956A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-[#FAFAF8] mb-4">
              Every conversation matters
            </h3>
            <p className="text-[#FAFAF8]/55 text-sm leading-relaxed mb-8">
              One honest conversation can change a person's trajectory for
              years. Your support makes it possible for more people to have that
              conversation — especially those who couldn't otherwise afford it.
            </p>
            <div className="border-t border-white/10 pt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { value: "Free", label: "to start" },
                { value: "1:1", label: "personal calls" },
                { value: "∞", label: "no limit" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl text-[#B8956A]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#FAFAF8]/40 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
