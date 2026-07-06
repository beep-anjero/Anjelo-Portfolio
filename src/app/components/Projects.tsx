import { ArrowUpRight, Github, Target, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'MicroBiz',
    eyebrow: 'Mobile business toolkit',
    problemSolved: 'Mobile-first business management with local state and offline data persistence, built for owners who need the app to keep working during spotty connectivity.',
    result: 'Offline-ready workflows',
    tools: ['Dart', 'Flutter', 'SQLite', 'Provider'],
    codeUrl: 'https://github.com/beep-anjero/MicroBiz',
    liveUrl: 'https://github.com/beep-anjero/MicroBiz#readme',
  },
  {
    title: 'Student Result Predictor',
    eyebrow: 'ML web application',
    problemSolved: 'A prediction interface for academic outcomes, connecting preprocessing, model training, and real-time Flask predictions behind a simple web flow.',
    result: 'Model to browser pipeline',
    tools: ['Python', 'Flask', 'Scikit-learn', 'HTML/CSS'],
    codeUrl: 'https://github.com/beep-anjero/Student_result_predictor',
    liveUrl: 'https://student-result-predictor-theta.vercel.app/',
  },
  {
    title: 'JejeNorm',
    eyebrow: 'Database design helper',
    problemSolved: 'A database normalization tool that analyzes schemas and suggests cleaner normal forms for developers designing relational systems.',
    result: 'Schema analysis guidance',
    tools: ['Python', 'Django', 'PostgreSQL', 'Vercel'],
    codeUrl: 'https://github.com/beep-anjero/JejeNorm',
    liveUrl: 'https://jeje-norm.vercel.app',
  },
];

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 70, damping: 14 },
    },
  };

  return (
    <section id="projects" className="relative overflow-hidden border-b border-border bg-background py-20 px-4 text-foreground transition-colors duration-500 sm:px-6 lg:px-8 lg:py-28">
      {/* Background grid */}
      <div className="absolute inset-0 portfolio-grid opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-14 border-b border-border/60 pb-12">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent)]">Featured Builds</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Selected Projects.
          </h2>
        </div>

        {/* Bento Typographic Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 md:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              className="bento-card flex flex-col justify-between p-6 sm:p-8 group min-h-[30rem]"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
                    {project.eyebrow}
                  </span>
                  <span className="font-mono text-4xl font-black text-muted-foreground/20 group-hover:text-[var(--accent)]/30 transition-colors duration-300">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mt-8 text-2xl font-black uppercase leading-none tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300 sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {project.problemSolved}
                </p>
              </div>

              <div>
                {/* Project Specs Grid */}
                <div className="mt-8 grid gap-4 border-t border-border/50 pt-5 text-xs">
                  <div className="flex items-start gap-3">
                    <Target className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/60">Outcome</p>
                      <p className="mt-0.5 font-bold text-foreground">{project.result}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Cpu className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/60">Technology Stack</p>
                      <p className="mt-0.5 font-bold text-foreground">{project.tools.join(', ')}</p>
                    </div>
                  </div>
                </div>

                {/* Link CTAs */}
                <div className="mt-8 flex gap-3">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-secondary transition active:scale-95"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>Source</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-[var(--accent)] hover:text-[#080809] transition active:scale-95"
                  >
                    <span>Live</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
