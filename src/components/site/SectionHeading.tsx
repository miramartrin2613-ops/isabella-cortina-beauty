import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  const a = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-5 ${a}`}
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-gold" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-gold">{eyebrow}</span>
        <span className="h-px w-8 bg-gold" />
      </div>
      <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base font-light leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
