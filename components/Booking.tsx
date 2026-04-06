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
                "Free 45–60 minute video call",
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

          {/* Right — booking widget placeholder */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-[#F2EFE9] border border-[#E0DBD0] rounded-2xl p-8 md:p-10">
              {/* Calendly / Cal.com embed placeholder */}
              <div className="mb-6">
                <h3 className="font-serif text-2xl text-[#1C1C1A] mb-2">
                  Schedule a Call
                </h3>
                <p className="text-[#6B6A66] text-sm">
                  Select a date and time below to book your conversation.
                </p>
              </div>

              {/* Calendly embed area */}
              <div className="w-full min-h-[380px] rounded-xl bg-[#EAE5DC] flex flex-col items-center justify-center gap-4 border border-dashed border-[#E0DBD0]">
                <div className="text-center px-6">
                  <div className="w-12 h-12 rounded-full bg-[#E0DBD0] flex items-center justify-center mx-auto mb-4">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect x="2" y="4" width="16" height="14" rx="2" stroke="#B8956A" strokeWidth="1.5"/>
                      <path d="M2 8h16" stroke="#B8956A" strokeWidth="1.5"/>
                      <path d="M6 2v4M14 2v4" stroke="#B8956A" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-[#1C1C1A] mb-1">
                    Booking Calendar
                  </p>
                  <p className="text-xs text-[#6B6A66] mb-5">
                    Calendly or Cal.com integration goes here
                  </p>
                  {/*
                    To integrate: Replace this block with:
                    <div className="calendly-inline-widget" data-url="https://calendly.com/YOUR_USERNAME" style={{minWidth:320,height:700}} />
                    or import and use the @calcom/embed-react package
                  */}
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1C1A] text-[#FAFAF8] rounded-full text-sm font-medium hover:bg-[#B8956A] transition-colors duration-300"
                  >
                    Open Booking Calendar
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
