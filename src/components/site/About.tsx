import { motion } from "framer-motion";
import about from "@/assets/about.jpg";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-secondary/30 py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-gold md:-left-6 md:-top-6 md:h-32 md:w-32" />
          <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b border-r border-gold md:-bottom-6 md:-right-6 md:h-32 md:w-32" />
          <img
            src={about}
            alt="Isabella Cortina, makeup artist"
            loading="lazy"
            className="relative aspect-[4/5] w-full object-cover shadow-luxury"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">About Isabella</span>
          </div>
          <h2 className="mt-6 font-display text-4xl leading-tight text-foreground md:text-6xl">
            Beauty as a quiet
            <br />
            <em className="font-script not-italic text-gold">love letter</em>
          </h2>
          <div className="mt-8 space-y-5 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Born and raised in Barranquilla, Isabella Cortina has spent over a decade refining
              the art of revealing a woman's most natural radiance — without ever overwhelming it.
            </p>
            <p>
              Trained between Bogotá, Madrid and Milan, her work weaves Latin warmth with the
              precision of European editorial. Each face becomes a canvas; each moment, a memory
              softly preserved in light.
            </p>
            <p className="font-display text-2xl italic text-foreground">
              "I don't paint faces. I listen to them."
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { n: "12+", l: "Years" },
              { n: "600+", l: "Brides" },
              { n: "100%", l: "Devotion" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-gold md:text-4xl">{s.n}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
