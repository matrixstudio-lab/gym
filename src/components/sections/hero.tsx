"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const STATS = [
  { value: "500+", label: "Beasts Trained" },
  { value: "12yr", label: "Iron Experience" },
  { value: "24/7", label: "Floor Access" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full bg-beast/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-beast/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          

          <h1 className="font-display uppercase leading-[0.88] tracking-tight text-[15vw] sm:text-[9vw] lg:text-[5.2vw]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="block"
            >
              Train Like
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="block text-beast"
            >
              A Beast.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="block text-outline"
            >
              Not A Number.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 max-w-md text-lg text-bone/70"
          >
            Barbell Beast Studio is a no-frills strength gym for people
            chasing real numbers on the bar — coached programming, open floor
            access, and a community that loads plates at 5am.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              size="lg"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Claim Free Day Pass
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Button>
            <Button variant="ghost" size="lg">
              <PlayCircle size={20} />
              Watch The Floor
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-md border-t border-charcoal-2 pt-8"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-2xl sm:text-3xl text-beast">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-bone/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-charcoal-2">
            <Image
              src="/hero.jpeg"
              alt="A lifter facing his own transformed reflection in a lit gym mirror"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute -bottom-6 -left-6 sm:-left-10 rounded-2xl bg-charcoal border border-charcoal-2 p-5 shadow-2xl w-52"
          >
            <p className="font-mono text-xs uppercase tracking-wide text-bone/50 mb-2">
              Today&apos;s PR Board
            </p>
            <div className="flex items-end gap-1.5 h-14">
              {[40, 65, 50, 90, 70, 100, 60].map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 + i * 0.06, ease: "easeOut" }}
                  className="flex-1 rounded-sm bg-beast/80 last:bg-beast"
                />
              ))}
            </div>
            <p className="mt-2 font-mono text-beast text-sm">+23% vs last week</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
