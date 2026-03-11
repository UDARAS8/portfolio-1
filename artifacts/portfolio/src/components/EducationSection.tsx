import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import { GraduationCap, Award } from "lucide-react";

const EDUCATION = [
  {
    degree: "BSc (Hons) Software Engineering",
    school: "Birmingham City University (BCUIC)",
    date: "2021 – 2026 (Final Year)",
    type: "University"
  },
  {
    degree: "G.C.E. Advanced Level",
    school: "Samudradevi Balika Vidyalaya, Nugegoda",
    date: "2020",
    type: "School"
  },
  {
    degree: "G.C.E. Ordinary Level",
    school: "Samudradevi Balika Vidyalaya, Nugegoda",
    date: "2017",
    type: "School"
  }
];

export function EducationSection() {
  return (
    <SectionWrapper id="education">
      <SectionHeader title="Education & Leadership" />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Education */}
        <div className="space-y-6">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-secondary border border-white/5 flex gap-5 items-start hover:border-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center shrink-0 border border-white/5">
                <GraduationCap className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.school}</p>
                <p className="text-sm font-medium text-accent mt-2">{edu.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership */}
        <div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 relative overflow-hidden h-full flex flex-col justify-center">
            {/* abstract bg element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            
            <Award className="w-12 h-12 text-primary mb-6 relative z-10" />
            <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-2 relative z-10">
              Leadership
            </h3>
            <h2 className="text-3xl font-display font-bold text-white mb-4 relative z-10 leading-tight">
              Vice President <br/>
              <span className="text-muted-foreground text-2xl">Leo Club of Colombo Centrum</span>
            </h2>
            <p className="text-accent font-medium relative z-10">2025 / 2026</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
