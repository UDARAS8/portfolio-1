import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Web Development",
    skills: ["HTML5", "Tailwind CSS", "Bootstrap", "PHP"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Programming",
    skills: ["Java", "JavaScript", "TypeScript"],
    color: "from-orange-500 to-yellow-500"
  },
  {
    title: "Databases",
    skills: ["MySQL", "Workbench", "HeidiSQL"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Tools & AI",
    skills: ["AI-Assisted Eng (Lovable)", "VS Code", "NetBeans", "Android Studio"],
    color: "from-primary to-purple-500"
  }
];

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-secondary/30 border-y border-white/5">
      <SectionHeader 
        title="Technical Arsenal" 
        subtitle="Tools and technologies I use to bring ideas to life."
      />

      <div className="grid md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-3xl bg-background border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden"
          >
            {/* Subtle background glow on hover */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
            
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium text-sm border border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
