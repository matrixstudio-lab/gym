"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const TESTIMONIALS = [
  {
    name: "Ritika Basu",
    result: "Deadlift 55kg → 105kg",
    quote:
      "I walked in unable to hinge properly. Fourteen months later I pulled 105 at a meet. The coaching here is relentless in the best way.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Debarghya Roy",
    result: "Lost 18kg, kept the strength",
    quote:
      "Every other gym I cut, I got weaker. Barbell Beast built the nutrition plan around my lifts, not against them.",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Priya Nair",
    result: "First competition, gold in class",
    quote:
      "Six lifters to a coach means someone always sees your bar path. That's the difference between guessing and improving.",
    image:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=400&auto=format&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-charcoal">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Real Numbers"
          title="Beasts In The"
          accent="Making"
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="relative rounded-2xl border border-charcoal-2 bg-ink p-8 flex flex-col gap-6"
            >
              <Quote className="text-beast/70" size={28} strokeWidth={2} />
              <blockquote className="text-bone/80 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-4 border-t border-charcoal-2">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={t.image}
                    alt={`Portrait of ${t.name}`}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-display uppercase tracking-wide text-sm">
                    {t.name}
                  </p>
                  <p className="font-mono text-xs text-beast">{t.result}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
