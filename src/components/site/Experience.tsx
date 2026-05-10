import { motion } from "framer-motion";
import { Sparkles, Heart, Gem, Home, Crown, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const features = [
  { icon: Crown, title: "Long-lasting Finish", text: "Premium techniques engineered to look flawless from first light to final dance." },
  { icon: Heart, title: "Personal Attention", text: "A bespoke consultation guides every brushstroke to your unique story." },
  { icon: Gem, title: "Luxury Products", text: "Curated formulas from the world's most respected ateliers — no compromise." },
  { icon: Home, title: "Home Service", text: "The studio comes to you. Calm, elegant, perfectly prepared." },
  { icon: Sparkles, title: "Editorial Touch", text: "Soft glam crafted with cinematic eye, ready for camera and memory." },
  { icon: ShieldCheck, title: "Confidence First", text: "More than makeup — a quiet ritual that lets the woman within emerge." },
];

export function Experience() {
  return (
    <section id="experience" className="relative bg-secondary/40 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="The Experience"
          title={<>Crafted with <em className="font-script not-italic text-gold">devotion</em></>}
          description="A sensorial encounter where every detail is intentional — from the first gentle touch to the last shimmer of light."
        />
        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden bg-border/60 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="group relative bg-background p-10 transition-colors duration-500 hover:bg-card"
            >
              <f.icon className="h-7 w-7 text-gold transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-110" strokeWidth={1.2} />
              <h3 className="mt-6 font-display text-2xl text-foreground">{f.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">{f.text}</p>
              <div className="mt-8 h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
