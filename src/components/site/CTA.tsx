import { motion } from "framer-motion";
import { MessageCircle, Instagram } from "lucide-react";

const WHATSAPP = "https://wa.me/573001234567?text=Hola%20Isabella%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita.";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-foreground py-32 text-ivory md:py-48">
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_50%_30%,oklch(0.74_0.09_78/.45),transparent_60%)]" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-4xl px-6 text-center md:px-10"
      >
        <div className="mx-auto flex w-fit items-center gap-3">
          <span className="h-px w-8 bg-[var(--gold)]" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold-soft)]">Reserve Your Date</span>
          <span className="h-px w-8 bg-[var(--gold)]" />
        </div>
        <h2 className="mt-8 font-display text-5xl leading-[1.05] text-[var(--ivory)] md:text-7xl">
          Some moments
          <br />
          deserve to be
          <br />
          <em className="font-script not-italic text-[var(--gold-soft)]">unforgettable.</em>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-[var(--ivory)]/80 md:text-lg">
          Limited availability each month. Reserve a private consultation and let us craft
          something only yours.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-[var(--gold)] px-10 py-5 text-[11px] uppercase tracking-[0.3em] text-foreground transition-all hover:bg-[var(--ivory)]"
          >
            <MessageCircle className="h-4 w-4" />
            Book via WhatsApp
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-[var(--ivory)]/40 px-10 py-5 text-[11px] uppercase tracking-[0.3em] text-[var(--ivory)] transition-all hover:border-[var(--ivory)]"
          >
            <Instagram className="h-4 w-4" />
            See Instagram
          </a>
        </div>
      </motion.div>
    </section>
  );
}
