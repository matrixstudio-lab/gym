"use client";

import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Users2, UtensilsCrossed } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Marquee } from "@/components/ui/marquee";

const SERVICES = [
  {
    icon: Dumbbell,
    title: "Strength Programming",
    copy: "Periodized squat, bench, and deadlift blocks written by coaches who actually total.",
  },
  {
    icon: Users2,
    title: "Small-Group Coaching",
    copy: "Six lifters per session, hands-on cueing, no waiting on a rack that never opens up.",
  },
  {
    icon: HeartPulse,
    title: "Conditioning & Recovery",
    copy: "Engine work, mobility, and recovery protocols built to support the heavy days, not replace them.",
  },
  {
    icon: UtensilsCrossed,
    title: "Nutrition Coaching",
    copy: "Macro coaching tuned to your training block — bulk, cut, or maintain, without the guesswork.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Built For"
          accent="Progressive Overload"
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal-2 rounded-2xl overflow-hidden">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group relative bg-ink p-8 flex flex-col gap-5 hover:bg-charcoal transition-colors duration-300"
            >
              <span className="font-mono text-xs text-bone/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-charcoal-2 text-beast group-hover:bg-beast group-hover:text-ink transition-colors duration-300">
                <service.icon size={22} strokeWidth={2} />
              </div>
              <h3 className="font-display text-xl uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-sm text-bone/60 leading-relaxed">
                {service.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <Marquee
          items={[
            "No Mirrors",
            "No Excuses",
            "Chalk On The Floor",
            "Iron Sharpens Iron",
            "Progress Over Perfection",
          ]}
        />
      </div>
    </section>
  );
}
