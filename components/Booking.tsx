export default function Booking() {
  return (
    <section id="booking" className="bg-[#FAFAF8] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-px bg-[#B8956A]" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#B8956A]">
                Take the First Step
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1A] leading-[1.1] mb-6">
              Book a conversation
            </h2>
            <p className="text-[#6B6A66] text-lg leading-relaxed mb-8">
              Choose a time that works for you. The call is free. No agenda, no
              sales, no pressure — just an open and honest conversation.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Free 30 minute video call",
                "One-on-one with a real person",
                "No preparation needed",
                "Fully confidential",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border border-[#B8956A] flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#B8956A]" />
                  </div>
                  <span className="text-[#6B6A66] text-base">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-[#6B6A66]/60 italic">
              After booking, you will receive a confirmation with a video call
              link.
            </p>
          </div>

          {/* Right — Calendly inline embed */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-[#F2EFE9] border border-[#E0DBD0] rounded-2xl overflow-hidden">
              <div className="px-8 pt-8 pb-4">
                <h3 className="font-serif text-2xl text-[#1C1C1A] mb-1">
                  Schedule a Call
                </h3>
                <p className="text-[#6B6A66] text-sm">
                  Select a date and time to book your conversation.
                </p>
              </div>
              <iframe
                src="https://calendly.com/antoncando/30min?embed_domain=findwhoiam.vercel.app&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1"
                width="100%"
                height="700"
                frameBorder="0"
                title="Book a conversation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
