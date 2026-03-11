import { SectionWrapper } from "./SectionWrapper";
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="pb-32">
      <div className="relative rounded-[3rem] overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-secondary" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
        
        <div className="relative z-10 px-8 py-20 md:p-24 flex flex-col md:flex-row gap-16 justify-between items-center border border-white/10 rounded-[3rem]">
          
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-display font-extrabold text-white mb-6">
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">extraordinary.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              I'm always open to discussing web development projects, AI integrations, or exciting new opportunities.
            </p>
            
            <a 
              href="mailto:udara@example.com" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-background font-bold text-lg hover:scale-105 transition-transform"
            >
              Get In Touch
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col gap-6 w-full md:w-auto min-w-[300px]">
            <a 
              href="tel:+94766141460"
              className="flex items-center gap-5 p-5 rounded-2xl glass-panel hover:bg-white/5 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="text-white font-semibold text-lg">+94 76 614 1460</p>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/udara-wijesekara-4a5469261/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 p-5 rounded-2xl glass-panel hover:bg-white/5 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Linkedin className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                <p className="text-white font-semibold text-lg">Udara Wijesekara</p>
              </div>
            </a>

            <div className="flex items-center gap-5 p-5 rounded-2xl glass-panel">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <MapPin className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-white font-semibold text-lg">Sri Lanka</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </SectionWrapper>
  );
}
