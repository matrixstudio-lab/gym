"use client";

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Menu, X, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Results" },
  { href: "#plans", label: "Membership" },
  { href: "#gallery", label: "Gallery" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    mass: 0.4,
  });
  const headPosition = useTransform(progress, (v) => `${v * 100}%`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-charcoal-2"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-18 flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-xl uppercase tracking-wide">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-beast text-ink">
            <Dumbbell size={18} strokeWidth={2.5} />
          </span>
          Barbell Beast
        </a>

        <div className="hidden md:flex items-center gap-9">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.2em] text-bone/70 hover:text-beast transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button size="sm" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Free Day Pass
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid place-items-center w-11 h-11 text-bone cursor-pointer"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-ink border-b border-charcoal-2"
          >
            <div className="px-5 py-6 flex flex-col gap-6">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl uppercase text-bone hover:text-beast transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  setOpen(false);
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Free Day Pass
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 inset-x-0 h-px overflow-visible">
        <motion.div
          style={{ scaleX: progress }}
          className="absolute inset-y-0 left-0 w-full origin-left bg-beast/50"
        />
        <motion.div
          style={{ left: headPosition }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-2.5 w-2.5"
        >
          <span className="absolute inset-0 rounded-full bg-beast blur-[6px] motion-reduce:hidden" />
          <span className="absolute inset-0 rounded-full bg-beast animate-pulse motion-reduce:animate-none" />
        </motion.div>
      </div>
    </header>
  );
}
