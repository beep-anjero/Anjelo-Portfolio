import { ArrowUpRight, Github, Sparkles, Smartphone, BarChart3, Database } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

type Project = {
  title: string;
  category: string;
  icon: typeof Smartphone;
  image: string;
  tint: string;
  problemSolved: string;
  outcome: string;
  tools: string[];
  codeUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    title: 'JejeNorm',
    category: 'Database Normalization Tool',
    icon: Database,
    image: '/images/jejenorm-preview.png',
    tint: 'bg-[#B0CDE6]/15 border-[#B0CDE6]/60 dark:bg-[#322727]/90 dark:border-[#B0CDE6]/30',
    problemSolved: 'A database normalization and schema engineering tool that evaluates relational models, identifies functional dependencies, and generates step-by-step 1NF to BCNF decompositions.',
    outcome: 'Schema analysis guidance',
    tools: ['PYTHON', 'DJANGO', 'POSTGRESQL', 'HTML', 'CSS'],
    codeUrl: 'https://github.com/beep-anjero/JejeNorm',
    liveUrl: 'https://jeje-norm.vercel.app',
  },
  {
    title: 'ScoreCast',
    category: 'ML Academic Predictor',
    icon: BarChart3,
    image: '/images/scorecast-preview.png',
    tint: 'bg-[#A290B7]/15 border-[#A290B7]/60 dark:bg-[#322727]/90 dark:border-[#A290B7]/30',
    problemSolved: 'An intelligent prediction interface for student academic performance, integrating feature preprocessing, trained scikit-learn models, and real-time Flask predictions behind a streamlined web experience.',
    outcome: 'Model to browser pipeline',
    tools: ['PYTHON', 'FLASK', 'SCIKIT-LEARN', 'HTML', 'CSS'],
    codeUrl: 'https://github.com/beep-anjero/ScoreCast',
    liveUrl: 'https://score-cast.vercel.app/',
  },
  {
    title: 'RentRig',
    category: 'Mobile Business Toolkit',
    icon: Smartphone,
    image: '/images/rentrig-preview.svg',
    tint: 'bg-[#B0CDE6]/15 border-[#B0CDE6]/60 dark:bg-[#322727]/90 dark:border-[#B0CDE6]/30',
    problemSolved: 'Mobile-first business management with local SQLite state and offline data persistence, engineered for owners who need critical operations to run uninterrupted even during spotty connectivity.',
    outcome: 'Offline-ready workflows',
    tools: ['DART', 'FLUTTER', 'SQLITE', 'PROVIDER'],
    codeUrl: 'https://github.com/beep-anjero/RentRig',
    liveUrl: 'https://github.com/beep-anjero/RentRig',
  },
];

export function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 85, damping: 15 },
    },
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-b-2 border-[#946D6D]/20 bg-[#FDF4D2] py-14 px-4 text-[#946D6D] transition-colors duration-500 sm:px-6 lg:px-8 lg:py-20 dark:bg-[#251D1D] dark:text-[#FDF4D2] dark:border-[#FDF4D2]/20"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 portfolio-grid opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header - Compact & Tight Typography */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between border-b-2 border-[#946D6D]/20 pb-5 dark:border-[#FDF4D2]/20">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#A290B7] dark:text-[#B0CDE6]">
                Featured Builds
              </span>
            </div>
            <h2 className="mt-1 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#946D6D] dark:text-[#FDF4D2]">
              Selected Projects.
            </h2>
          </div>
          <p className="mt-2 sm:mt-0 font-mono text-xs text-[#946D6D]/75 dark:text-[#FDF4D2]/75 max-w-xs">
            Practical applications built with offline durability, machine learning pipelines, and relational databases.
          </p>
        </div>

        {/* 2-Column Responsive Grid on Desktop, 1-Column on Mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid gap-5 sm:gap-6 md:grid-cols-2"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isFullSpan = index === 2; // Make 3rd project elegantly fill balanced 2-col layout

            return (
              <motion.article
                key={project.title}
                variants={cardVariants}
                className={`bento-card flex flex-col justify-between p-4 sm:p-5 group ${isFullSpan ? 'md:col-span-2 lg:col-span-1' : ''
                  } ${project.tint}`}
              >
                <div>
                  {/* Screenshot Preview Container with Aspect-Ratio & Hover Zoom */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[#946D6D]/25 bg-black/5 shadow-inner dark:border-[#FDF4D2]/20 dark:bg-[#251D1D]">
                    <img
                      src={project.image}
                      alt={`${project.title} Screenshot Preview`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Top Floating Badge & Number Overlay */}
                    <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#946D6D]/30 bg-[#FDF4D2]/95 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#946D6D] shadow-sm backdrop-blur-sm dark:bg-[#251D1D]/90 dark:text-[#FDF4D2] dark:border-[#FDF4D2]/30">
                        <Icon className="h-3 w-3 text-[#A290B7] dark:text-[#B0CDE6]" />
                        {project.category}
                      </span>

                      <span className="rounded-lg border border-[#946D6D]/30 bg-[#FDF4D2]/95 px-2 py-0.5 font-mono text-xs font-black text-[#946D6D] shadow-sm backdrop-blur-sm dark:bg-[#251D1D]/90 dark:text-[#FDF4D2] dark:border-[#FDF4D2]/30">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3.5 font-display text-xl font-extrabold uppercase tracking-tight text-[#946D6D] sm:text-2xl dark:text-[#FDF4D2]">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 text-xs sm:text-sm font-normal leading-relaxed text-[#946D6D]/85 dark:text-[#FDF4D2]/85">
                    {project.problemSolved}
                  </p>

                  {/* Outcome Tag - Muted Purple/Lavender Tint */}
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-[#A290B7]/40 bg-[#A290B7]/15 px-2.5 py-1 shadow-sm dark:bg-[#A290B7]/20">
                    <Sparkles className="h-3 w-3 text-[#A290B7] dark:text-[#B0CDE6] shrink-0" />
                    <span className="font-mono text-[10.5px] sm:text-[11px] font-bold text-[#946D6D] dark:text-[#FDF4D2]">
                      Outcome: <span className="font-semibold text-[#946D6D] dark:text-[#B0CDE6]">{project.outcome}</span>
                    </span>
                  </div>
                </div>

                {/* Card Bottom: Tech Stack Pills & Compact Button Bar */}
                <div className="mt-4 pt-3.5 border-t border-[#946D6D]/20 dark:border-[#FDF4D2]/20">
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md border border-[#946D6D]/25 bg-white/85 px-2 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-wider text-[#946D6D] shadow-sm dark:bg-[#251D1D] dark:text-[#FDF4D2] dark:border-[#FDF4D2]/25"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Compact Button Bar */}
                  <div className="flex items-center gap-2.5">
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 sm:h-9 flex-1 items-center justify-center gap-1.5 rounded-xl border-2 border-[#946D6D]/30 bg-white px-3 font-display text-[11px] font-bold uppercase tracking-wider text-[#946D6D] shadow-[2px_2px_0px_rgba(148,109,109,0.2)] hover:border-[#946D6D] hover:bg-[#FDF4D2] hover:shadow-[3px_3px_0px_rgba(148,109,109,0.35)] active:translate-y-0.5 transition-all dark:bg-[#251D1D] dark:text-[#FDF4D2] dark:border-[#FDF4D2]/30"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Code</span>
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 sm:h-9 flex-1 items-center justify-center gap-1.5 rounded-xl border-2 border-[#946D6D] bg-[#B0CDE6] px-3 font-display text-[11px] font-bold uppercase tracking-wider text-[#251D1D] shadow-[2px_2px_0px_rgba(148,109,109,0.3)] hover:bg-[#9ec2df] hover:shadow-[3px_3px_0px_rgba(148,109,109,0.5)] active:translate-y-0.5 transition-all dark:bg-[#B0CDE6] dark:text-[#251D1D] dark:border-[#B0CDE6]"
                    >
                      <span>Live Preview</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
