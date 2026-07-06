import { Code2, FileCode, Server, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const powerTrio = [
  {
    name: 'TypeScript',
    icon: Code2,
    description: 'Interfaces, reusable components, API integration, and tooling that keeps the frontend predictable.',
    accent: 'bg-[var(--accent)] text-[#080809]',
    frameworks: ['React', 'Node.js', 'Vite'],
  },
  {
    name: 'Python',
    icon: FileCode,
    description: 'Model experiments, Flask/Django applications, automation scripts, and practical data workflows.',
    accent: 'bg-[#f46c38] text-white',
    frameworks: ['Django', 'Flask', 'FastAPI'],
  },
  {
    name: 'Java',
    icon: Server,
    description: 'Object-oriented services, structured backend logic, and maintainable application layers.',
    accent: 'bg-[var(--foreground)] text-[var(--background)]',
    frameworks: ['Spring Boot', 'Hibernate', 'Maven'],
  },
];

const auxiliarySkills = [
  'PHP', 'Dart', 'JavaScript', 'C++', 'PostgreSQL', 
  'MySQL', 'MongoDB', 'Redis', 'Docker', 'Git', 'AWS'
];

export function PowerTrio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 85, damping: 14 },
    },
  };

  return (
    <section id="services" className="relative overflow-hidden border-b border-border bg-background py-20 px-4 text-foreground transition-colors duration-500 sm:px-6 lg:px-8 lg:py-28">
      {/* Background grid */}
      <div className="absolute inset-0 portfolio-grid opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-14 border-b border-border/60 pb-12">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent)]">Capabilities</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            What I build.
          </h2>
        </div>

        {/* Bento Language Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {powerTrio.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.article
                key={tech.name}
                variants={itemVariants}
                className="bento-card p-6 sm:p-8 flex flex-col justify-between group min-h-[24rem]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${tech.accent} shadow-md transition-all duration-300 group-hover:scale-105`}>
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-muted-foreground/50">CORE // 0{index + 1}</span>
                  </div>

                  <h3 className="mt-8 text-3xl font-black uppercase tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-border/40">
                  {tech.frameworks.map((framework) => (
                    <span 
                      key={framework} 
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-[10px] font-bold text-muted-foreground"
                    >
                      {framework}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom Bento Box: Auxiliary Skills */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 rounded-2xl border border-border bg-card p-6 sm:p-8 grid gap-6 md:grid-cols-[auto_1fr] md:items-center hover:border-border/80 transition-colors"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
            <Database className="h-5.5 w-5.5" />
          </div>
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--accent)]">Auxiliary Tech Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {auxiliarySkills.map((skill) => (
                <span 
                  key={skill} 
                  className="rounded-full border border-border bg-background px-4 py-1.5 font-mono text-[10px] font-bold text-foreground transition-all duration-300 hover:border-[var(--accent)] hover:bg-secondary cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
