const steps = [
  {
    number: "01",
    title: "Book a Conversation",
    description:
      "Choose a time that works for you. No forms to fill. No pressure. Just a space for an honest conversation.",
  },
  {
    number: "02",
    title: "We Talk, Deeply",
    description:
      "I ask questions that go beyond the surface. We explore what you love, what drains you, what you've always wanted but never dared to pursue.",
  },
  {
    number: "03",
    title: "You Start to See",
    description:
      "Patterns emerge. Clarity comes. You begin to understand your strengths, your values, and the direction that feels true to you.",
  },
  {
    number: "04",
    title: "You Take a Step",
    description:
      "Not a big leap — just one honest step. A small experiment in the direction of who you might really be.",
  },
  {
    number: "05",
    title: "Come Back If You Need",
    description:
      "The process rarely ends in one session. You can return for another conversation whenever you need. There's no rush.",
  },
  {
    number: "06",
    title: "Pay What It's Worth",
    description:
      "The service starts free. If it genuinely helped you, you can support it with any amount — from nothing to whatever feels right.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#F2EFE9] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-xl mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-6 h-px bg-[#B8956A]" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#B8956A]">
              The Process
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1A] leading-[1.1] mb-5">
            How it works
          </h2>
          <p className="text-[#6B6A66] text-lg leading-relaxed">
            Simple, human, and without pressure. Every step is designed to help
            you feel safe and heard.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E0DBD0]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#F2EFE9] p-10 hover:bg-[#EAE5DC] transition-colors duration-300 group"
            >
              <span className="block font-serif text-4xl text-[#E0DBD0] group-hover:text-[#B8956A] transition-colors duration-300 mb-6">
                {step.number}
              </span>
              <h3 className="font-serif text-xl text-[#1C1C1A] mb-3">
                {step.title}
              </h3>
              <p className="text-[#6B6A66] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
