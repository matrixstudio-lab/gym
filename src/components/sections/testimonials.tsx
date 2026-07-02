"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

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

const TESTIMONIALS_ROW_2 = [
  {
    name: "Suvam Chatterjee",
    result: "Squat 70kg → 140kg",
    quote:
      "Doubled my squat in under a year. The programming actually adapts when a lift stalls instead of grinding you into the ground.",
    image:
      "https://images.unsplash.com/photo-1583468982228-19f19164aee2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Ananya Sengupta",
    result: "Rebuilt after a shoulder injury",
    quote:
      "I was scared to press again after surgery. The coaches rebuilt my confidence rep by rep, not just my strength.",
    image:
      "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Rohan Banerjee",
    result: "Bench 60kg → 110kg",
    quote:
      "Every session has a purpose. No wasted sets, no guessing what to do next — just steady, tracked progress on the bar.",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=400&auto=format&fit=crop",
  },
];

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <figure className="mx-3 inline-flex w-85 sm:w-100 shrink-0 flex-col gap-6 whitespace-normal rounded-2xl border border-charcoal-2 bg-ink p-8 align-top">
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
    </figure>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-charcoal">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Real Numbers"
          title="Beasts In The"
          accent="Making"
        />
      </div>

      <div className="relative mt-16 sm:mt-20">
        <ScrollVelocityContainer className="w-full">
          <ScrollVelocityRow baseVelocity={3} direction={1} className="py-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={3} direction={-1} className="py-3">
            {TESTIMONIALS_ROW_2.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-linear-to-r from-charcoal to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-linear-to-l from-charcoal to-transparent" />
      </div>
    </section>
  );
}
