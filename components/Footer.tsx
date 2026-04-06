export default function Footer() {
  return (
    <footer className="bg-[#1C1C1A] text-[#FAFAF8] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-serif text-2xl mb-3">FindWhoIAm</p>
            <p className="text-[#FAFAF8]/45 text-sm leading-relaxed max-w-xs">
              A project to help people stop living on autopilot and start
              walking their own path.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#B8956A] mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {[
                { label: "How It Works", href: "#how-it-works" },
                { label: "About", href: "#about" },
                { label: "Who Is It For", href: "#who-is-it-for" },
                { label: "Book a Talk", href: "#booking" },
                { label: "Support Us", href: "#support" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#FAFAF8]/55 hover:text-[#FAFAF8] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#B8956A] mb-5">
              Get in Touch
            </p>
            <p className="text-[#FAFAF8]/55 text-sm mb-3">
              Have a question before booking?
            </p>
            {/* Replace with actual email */}
            <a
              href="mailto:hello@findwhoiam.com"
              className="text-sm text-[#FAFAF8]/80 hover:text-[#B8956A] transition-colors duration-200 underline underline-offset-4 decoration-[#FAFAF8]/20"
            >
              hello@findwhoiam.com
            </a>
            <div className="mt-8">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#B8956A] text-[#FAFAF8] rounded-full text-sm font-medium hover:bg-[#A07850] transition-colors duration-300"
              >
                Book a Free Talk
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#FAFAF8]/25 text-xs">
            © {new Date().getFullYear()} FindWhoIAm. Built with purpose.
          </p>
          <p className="text-[#FAFAF8]/25 text-xs italic">
            "You were not born just to survive."
          </p>
        </div>
      </div>
    </footer>
  );
}
