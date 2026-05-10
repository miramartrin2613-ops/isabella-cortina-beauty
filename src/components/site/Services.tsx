import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  { name: "Bridal Makeup", price: "From $480", desc: "Full bridal experience with trial session, on-location service, and touch-up kit.", featured: true },
  { name: "Social Glam", price: "From $180", desc: "Refined glam designed for galas, parties and unforgettable nights." },
  { name: "Event Makeup", price: "From $150", desc: "Polished, photo-ready beauty for ceremonies, dinners and brand events." },
  { name: "Makeup & Hairstyling", price: "From $280", desc: "A full transformation pairing artistry of hair and face in one ritual." },
  { name: "Premium Experience", price: "From $620", desc: "Private studio session, champagne welcome, professional photo finish." },
  { name: "Quinceañera", price: "From $220", desc: "A first taste of glamour — soft, radiant and tailored for her debut." },
];

export function Services() {
  return (
    <section id="services" className="relative bg-background py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Services"
          title={<>The <em className="font-script not-italic text-gold">Atelier</em> menu</>}
          description="Every service is tailored. Final pricing is shared after a private consultation, ensuring your experience is unmistakably yours."
        />

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className={`group relative flex flex-col justify-between overflow-hidden border p-10 transition-all duration-500 ${
                s.featured
                  ? "border-gold bg-gradient-to-br from-card to-secondary/40"
                  : "border-border bg-card hover:border-gold"
              }`}
            >
              {s.featured && (
                <span className="absolute right-6 top-6 text-[9px] uppercase tracking-[0.3em] text-gold">
                  Signature
                </span>
              )}
              <div>
                <h3 className="font-display text-3xl text-foreground">{s.name}</h3>
                <div className="mt-2 text-[11px] uppercase tracking-[0.3em] text-gold">{s.price}</div>
                <p className="mt-6 text-sm font-light leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-2 self-start text-[11px] uppercase tracking-[0.3em] text-foreground"
              >
                Reserve
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
