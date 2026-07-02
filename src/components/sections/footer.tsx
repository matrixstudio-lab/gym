import { Dumbbell, AtSign, MessageCircle, Video } from "lucide-react";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Results" },
  { href: "#plans", label: "Membership" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Free Day Pass" },
];

export function Footer() {
  return (
    <footer className="border-t border-charcoal-2">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] gap-12">
        <div>
          <a href="#top" className="flex items-center gap-2 font-display text-xl uppercase tracking-wide">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-beast text-ink">
              <Dumbbell size={18} strokeWidth={2.5} />
            </span>
            Barbell Beast
          </a>
          <p className="mt-4 max-w-xs text-sm text-bone/50 leading-relaxed">
            A strength gym for people who measure progress in plates, not
            minutes on a treadmill.
          </p>
          <div className="mt-6 flex items-center gap-4">
            {[AtSign, MessageCircle, Video].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid place-items-center w-10 h-10 rounded-full border border-charcoal-2 text-bone/60 hover:text-beast hover:border-beast transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-bone/40 mb-4">
            Navigate
          </p>
          <ul className="flex flex-col gap-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-bone/70 hover:text-beast transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-bone/40 mb-4">
            Studio Hours
          </p>
          <ul className="flex flex-col gap-3 text-sm text-bone/70">
            <li className="flex justify-between gap-4">
              <span>Mon–Fri</span>
              <span className="font-mono text-bone/50">5am – 11pm</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Saturday</span>
              <span className="font-mono text-bone/50">7am – 8pm</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Sunday</span>
              <span className="font-mono text-bone/50">8am – 6pm</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-bone/40">
          <p>© {new Date().getFullYear()} Barbell Beast Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-beast transition-colors">Privacy</a>
            <a href="#" className="hover:text-beast transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
