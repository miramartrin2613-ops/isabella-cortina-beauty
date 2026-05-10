import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const items = [
  { src: p1, label: "Bridal", tall: true },
  { src: p2, label: "Soft Glam" },
  { src: p3, label: "Social Event", tall: true },
  { src: p6, label: "Editorial" },
  { src: p5, label: "Bride · Romantic", tall: true },
  { src: p4, label: "Behind the Brushes" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-background py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Portfolio"
          title={<>A gallery of <em className="font-script not-italic text-gold">timeless</em> beauty</>}
          description="Each look is a quiet conversation between light, skin and emotion — captured to last beyond the moment."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 md:mt-24 md:grid-cols-3 md:gap-6">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden bg-muted ${
                it.tall ? "row-span-2 aspect-[3/5]" : "aspect-[4/5]"
              }`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 right-0 flex translate-y-4 items-center gap-3 p-6 text-ivory opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="h-px w-6 bg-[var(--gold)]" />
                <span className="text-[10px] uppercase tracking-[0.3em]">{it.label}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
