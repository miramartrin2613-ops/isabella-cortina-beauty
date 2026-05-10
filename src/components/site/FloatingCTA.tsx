import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WA = "https://wa.me/573001234567";

export function FloatingCTA() {
  return (
    <>
      <motion.a
        href={WA}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.08 }}
        className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.7_0.16_150)] text-white shadow-luxury md:bottom-6 md:right-6 md:h-16 md:w-16"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={1.6} />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[oklch(0.7_0.16_150)] opacity-30" />
      </motion.a>
      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 px-4 py-3 backdrop-blur-xl md:hidden">
        <a
          href={WA}
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-center gap-2 bg-foreground py-3.5 text-[11px] uppercase tracking-[0.3em] text-background"
        >
          <MessageCircle className="h-4 w-4" /> Book Appointment
        </a>
      </div>
    </>
  );
}
