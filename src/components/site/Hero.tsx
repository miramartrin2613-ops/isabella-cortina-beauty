import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-foreground text-ivory">
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Isabella Cortina luxury bridal makeup portrait"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-24 pt-40 md:px-10 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-10 bg-[var(--gold)]" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold-soft)]">
            Barranquilla · Colombia
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease }}
          className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight text-[var(--ivory)] md:text-7xl lg:text-8xl"
        >
          Professional Makeup
          <br />
          for <em className="font-script not-italic text-[var(--gold-soft)]">Unforgettable</em> Moments.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease }}
          className="mt-8 max-w-xl text-base font-light leading-relaxed text-[var(--ivory)]/80 md:text-lg"
        >
          A signature beauty experience crafted with elegance, precision and devotion —
          designed for brides, muses and women who choose to feel timeless.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 bg-[var(--gold)] px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-foreground transition-all hover:bg-[var(--ivory)]"
          >
            Book Appointment
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center border border-[var(--ivory)]/40 px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-[var(--ivory)] transition-all hover:border-[var(--ivory)] hover:bg-[var(--ivory)]/5"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[var(--ivory)]/70"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.4em]">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
