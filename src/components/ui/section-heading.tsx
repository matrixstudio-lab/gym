"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-mono text-xs tracking-[0.3em] uppercase text-beast mb-3"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        className="font-display text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.95] tracking-tight"
      >
        {title} {accent && <span className="text-beast">{accent}</span>}
      </motion.h2>
    </div>
  );
}
