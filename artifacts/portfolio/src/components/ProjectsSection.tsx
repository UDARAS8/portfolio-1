import { SectionWrapper, SectionHeader } from "./SectionWrapper";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Rio's Happy World",
    description: "An AI-enhanced personalized web platform designed for interactive user experiences. Features an advanced personalization engine and interactive UI components.",
    tech: ["JavaScript", "HTML", "CSS", "AI APIs"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80", // AI/abstract aesthetic
    color: "group-hover:shadow-[0_0_40px_-10px_rgba(124,58,237,0.3)]"
  },
  {
    title: "Real-Time Weather App",
    description: "A responsive application providing accurate, location-based weather forecasts with real-time data fetching, geolocation, and beautiful weather visualization.",
    tech: ["JavaScript", "HTML", "CSS", "Weather API"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80", // Weather/atmospheric
    color: "group-hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)]"
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack website developed featuring a robust product catalog, shopping cart functionality, secure user authentication, and seamless database integration.",
    tech: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80", // E-commerce/tech
    color: "group-hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)]"
  }
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader 
        title="Featured Projects" 
        subtitle="A selection of my recent work and technical experiments."
      />

      <div className="grid lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className={`group rounded-3xl bg-secondary border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 ${project.color}`}
          >
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium flex items-center justify-center gap-2 transition-colors">
                  <ExternalLink size={16} />
                  <span>View Project</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
