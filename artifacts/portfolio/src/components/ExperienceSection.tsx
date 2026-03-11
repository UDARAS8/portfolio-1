import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Intern Developer & Web Content",
    company: "Maya Hive (Pvt) Ltd",
    date: "Jan 2026 – Present",
    highlights: [
      "Leveraging platforms like Lovable for AI-assisted full-stack prototyping and deployment.",
      "Managing web content updates to ensure visual consistency and performance optimization.",
      "Identifying and resolving UI/UX issues to improve site navigation and user engagement."
    ],
    icon: Briefcase
  },
  {
    role: "Exam Invigilator",
    company: "Lyceum International School",
    date: "2024 – 2025",
    highlights: [
      "Managed examination environments and ensured strict adherence to academic protocols.",
      "Coordinated with school staff to maintain organized and efficient testing schedules."
    ],
    icon: Calendar
  }
];

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-secondary/30 border-y border-white/5">
      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <SectionHeader 
              title="Experience" 
              subtitle="My professional journey and career progression."
            />
          </div>
        </div>

        <div className="lg:col-span-7 relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-white/10 to-transparent" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => {
              const Icon = exp.icon;
              return (
                <div key={idx} className="relative pl-24">
                  {/* Timeline Node */}
                  <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-secondary border border-primary flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                    <Icon size={14} className="text-primary" />
                  </div>

                  <div className="glass-panel p-8 rounded-3xl transition-all hover:bg-white/[0.03]">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                      {exp.date}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-muted-foreground mb-6">
                      {exp.company}
                    </h4>
                    <ul className="space-y-3">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
