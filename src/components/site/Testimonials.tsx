import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const reviews = [
  { name: "Camila Restrepo", role: "Bride, 2024", text: "Isabella didn't just do my makeup — she gave me the version of myself I'd dreamt of for years. I cried before walking down the aisle." },
  { name: "Valentina Mejía", role: "Gala Event", text: "Every product, every glance, every gesture felt like couture. The most luxurious morning of my life." },
  { name: "María José Lara", role: "Editorial Shoot", text: "Cinema in motion. The light caught my skin in a way I had never seen. Pure artistry." },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-foreground py-28 text-ivory md:py-40">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_20%,oklch(0.74_0.09_78/.5),transparent_60%),radial-gradient(circle_at_80%_70%,oklch(0.74_0.09_78/.3),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--gold)]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold-soft)]">Words of love</span>
            <span className="h-px w-8 bg-[var(--gold)]" />
          </div>
          <h2 className="font-display text-4xl leading-tight text-[var(--ivory)] md:text-6xl">
            What my <em className="font-script not-italic text-[var(--gold-soft)]">muses</em> say
          </h2>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="relative rounded-sm border border-[var(--ivory)]/10 bg-[var(--ivory)]/[0.04] p-10 backdrop-blur-md"
            >
              <Quote className="h-8 w-8 text-[var(--gold-soft)]" strokeWidth={1} />
              <blockquote className="mt-6 font-display text-xl leading-relaxed text-[var(--ivory)]/90 md:text-2xl">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-8">
                <div className="text-sm tracking-wide text-[var(--ivory)]">{r.name}</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold-soft)]">{r.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
