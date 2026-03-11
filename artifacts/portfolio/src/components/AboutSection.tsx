import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import { Code2, BrainCircuit, TerminalSquare } from "lucide-react";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader 
            title="About Me" 
            subtitle="Bridging the gap between design and robust engineering." 
          />
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a Final-year Software Engineering undergraduate and a passionate AI-Native Developer. 
              My journey in tech is driven by an insatiable curiosity to solve complex problems through innovative code and design.
            </p>
            <p>
              Currently expanding my expertise in full-stack prototyping, content management, and AI-assisted engineering, 
              I am dedicated to crafting digital experiences that are not only functional but visually exceptional.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="p-5 rounded-2xl bg-secondary border border-white/5 flex flex-col gap-3">
              <Code2 className="text-primary w-8 h-8" />
              <h4 className="font-display font-bold text-white">Clean Code</h4>
            </div>
            <div className="p-5 rounded-2xl bg-secondary border border-white/5 flex flex-col gap-3">
              <BrainCircuit className="text-accent w-8 h-8" />
              <h4 className="font-display font-bold text-white">AI-Native</h4>
            </div>
            <div className="p-5 rounded-2xl bg-secondary border border-white/5 flex flex-col gap-3">
              <TerminalSquare className="text-purple-400 w-8 h-8" />
              <h4 className="font-display font-bold text-white">Problem Solver</h4>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Decorative frame */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl blur-2xl opacity-20 transform -rotate-6 scale-105" />
          <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-square glass-panel p-2">
            <img 
              src={`${import.meta.env.BASE_URL}images/avatar.png`}
              alt="Udara Abstract Avatar" 
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
