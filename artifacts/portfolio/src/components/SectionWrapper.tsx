import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32 relative scroll-mt-20", className)}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6 md:px-12 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
        {title}
        <span className="text-primary">.</span>
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
      <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mt-6 rounded-full" />
    </div>
  );
}
