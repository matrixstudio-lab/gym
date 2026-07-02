"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900&auto=format&fit=crop",
    alt: "Lifter mid-squat under a loaded barbell",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?q=80&w=900&auto=format&fit=crop",
    alt: "Rack of iron weight plates lined up on the gym floor",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1584863231364-2edc166de576?q=80&w=900&auto=format&fit=crop",
    alt: "Coach spotting a lifter on the bench press",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=900&auto=format&fit=crop",
    alt: "Close-up of chalked hands gripping a barbell",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=900&auto=format&fit=crop",
    alt: "Group training session on the open gym floor",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=900&auto=format&fit=crop",
    alt: "Athlete resting between heavy deadlift sets",
    span: "",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-charcoal">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="The Floor" title="Where It" accent="Happens" />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] gap-3 sm:gap-4">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: "easeOut" }}
              className={`relative overflow-hidden rounded-xl group ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300" />
              <div className="absolute inset-0 ring-1 ring-inset ring-bone/10 group-hover:ring-beast/60 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
