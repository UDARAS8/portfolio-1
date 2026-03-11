import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract background"
          className="w-full h-full object-cover opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        {/* Glow orb */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium tracking-wide uppercase">Available for work</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.1] text-white mb-6">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent text-glow">
              Udara Wijesekara
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-10 max-w-2xl leading-relaxed">
            AI Native Developer & Web Content Developer. I specialize in combining creativity with technology to build high-quality digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold transition-all flex items-center justify-center gap-2 hover:-translate-y-1 hover:box-glow"
            >
              View My Work
              <ArrowRight size={20} />
            </a>
            
            <div className="flex gap-4 w-full sm:w-auto">
              <a
                href="https://www.linkedin.com/in/udara-wijesekara-4a5469261/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                <Linkedin size={20} />
                <span className="sm:hidden">LinkedIn</span>
              </a>
              <a
                href="#contact"
                className="flex-1 sm:flex-none px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                <Download size={20} />
                <span className="sm:hidden">Resume</span>
                <span className="hidden sm:inline">Resume</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
