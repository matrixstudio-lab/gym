"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Monthly",
    price: "2,000",
    period: "/month",
    tagline: "For lifters who just need the floor.",
    save: null,
    features: [
      "Open gym access, 6am–10pm",
      "App-based program library",
      "Monthly progress check-in",
      "Community WhatsApp group",
    ],
    highlight: false,
  },
  {
    name: "Half-Yearly",
    price: "10,000",
    period: "/6 months",
    tagline: "The most popular way to train here.",
    save: "Save ₹2,000 vs monthly",
    features: [
      "24/7 badge access",
      "Weekly small-group coaching",
      "Custom strength programming",
      "Monthly InBody scan",
      "Priority meet-day support",
    ],
    highlight: true,
  },
  {
    name: "Annual",
    price: "21,000",
    period: "/year",
    tagline: "For competitors chasing totals.",
    save: "Save ₹3,000 vs monthly",
    features: [
      "Everything in Half-Yearly",
      "1-on-1 coaching, 2x monthly",
      "Nutrition coaching included",
      "Competition prep & handling",
      "Recovery suite priority booking",
    ],
    highlight: false,
  },
];

export function MembershipPlans() {
  return (
    <section id="plans" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Membership"
          title="Pick Your"
          accent="Weight Class"
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className={cn(
                "relative rounded-3xl p-8 flex flex-col",
                plan.highlight
                  ? "bg-beast text-ink lg:-translate-y-4 shadow-[0_0_50px_-5px_rgba(198,255,61,0.35)]"
                  : "bg-charcoal border border-charcoal-2 text-bone"
              )}
            >
              {plan.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-ink text-beast px-4 py-1.5 font-mono text-xs uppercase tracking-wide">
                  <Zap size={12} className="fill-beast" />
                  Most Loaded
                </span>
              )}

              <h3 className="font-display text-2xl uppercase tracking-wide">
                {plan.name}
              </h3>
              <p
                className={cn(
                  "mt-2 text-sm",
                  plan.highlight ? "text-ink/70" : "text-bone/60"
                )}
              >
                {plan.tagline}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-mono text-4xl">₹{plan.price}</span>
                <span
                  className={cn(
                    "text-sm",
                    plan.highlight ? "text-ink/60" : "text-bone/50"
                  )}
                >
                  {plan.period}
                </span>
              </div>
              {plan.save && (
                <p
                  className={cn(
                    "mt-2 font-mono text-xs uppercase tracking-wide",
                    plan.highlight ? "text-ink/70" : "text-beast"
                  )}
                >
                  {plan.save}
                </p>
              )}

              <ul className="mt-8 flex flex-col gap-3.5 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={18}
                      className={cn(
                        "mt-0.5 shrink-0",
                        plan.highlight ? "text-ink" : "text-beast"
                      )}
                    />
                    <span className={plan.highlight ? "text-ink/85" : "text-bone/75"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlight ? "outline" : "primary"}
                className={cn(
                  "mt-8 w-full",
                  plan.highlight &&
                    "border-ink/30 text-ink hover:border-ink hover:text-ink hover:bg-ink/10"
                )}
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Start With {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
