export default function PayWhatYouWant() {
  return (
    <section id="pay" className="bg-[#F2EFE9] py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-6 h-px bg-[#B8956A]" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#B8956A]">
            Honest Value
          </span>
          <div className="w-6 h-px bg-[#B8956A]" />
        </div>

        <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1A] leading-[1.1] mb-6">
          Pay what it's worth to you
        </h2>
        <p className="text-[#6B6A66] text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
          This project starts free. No cost for the first conversation. If the
          work genuinely helps you — if something shifts, if you find clarity
          — you're welcome to support it with any amount that feels right.
        </p>

        {/* Value tiers — illustrative */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {[
            {
              range: "€0",
              label: "Always welcome",
              description:
                "If the conversation helped but you're not in a position to pay, that's completely fine. Your openness is enough.",
            },
            {
              range: "€20 – €100",
              label: "A token of gratitude",
              description:
                "If you felt the conversation was valuable and you'd like to acknowledge it, any amount you choose is meaningful.",
              featured: true,
            },
            {
              range: "Your choice",
              label: "Your honest reflection",
              description:
                "There is no ceiling. If the work helped you change your life's direction, you'll know what it was worth.",
            },
          ].map((tier) => (
            <div
              key={tier.range}
              className={`p-8 rounded-2xl text-left ${
                tier.featured
                  ? "bg-[#1C1C1A] text-[#FAFAF8]"
                  : "bg-[#FAFAF8] border border-[#E0DBD0]"
              }`}
            >
              <p
                className={`font-serif text-3xl mb-2 ${
                  tier.featured ? "text-[#B8956A]" : "text-[#1C1C1A]"
                }`}
              >
                {tier.range}
              </p>
              <p
                className={`text-sm font-medium mb-4 ${
                  tier.featured ? "text-[#FAFAF8]/80" : "text-[#1C1C1A]"
                }`}
              >
                {tier.label}
              </p>
              <p
                className={`text-sm leading-relaxed ${
                  tier.featured ? "text-[#FAFAF8]/55" : "text-[#6B6A66]"
                }`}
              >
                {tier.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-[#6B6A66] text-sm italic max-w-xl mx-auto">
          Payment is based on honesty and trust — not obligation. This project
          runs on the belief that if something truly helps someone, they will
          naturally want to give back.
        </p>
      </div>
    </section>
  );
}
