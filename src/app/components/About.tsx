import { Blocks, Code2, Layers, Zap, Compass, CheckCircle2 } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const principles = [
  {
    title: 'Start With The Workflow',
    number: '01',
    icon: Blocks,
    tint: 'bg-[#B0CDE6]/25 border-[#B0CDE6]/70 dark:bg-[#B0CDE6]/10',
    copy: 'I map what the user needs to finish, then shape the data model and interface around that path.',
  },
  {
    title: 'Make The Backend Honest',
    number: '02',
    icon: Code2,
    tint: 'bg-[#A290B7]/25 border-[#A290B7]/70 dark:bg-[#A290B7]/10',
    copy: 'Clear schemas, predictable endpoints, and readable service logic matter more to me than clever code.',
  },
  {
    title: 'Keep Feedback Fast',
    number: '03',
    icon: Zap,
    tint: 'bg-[#A290B7]/25 border-[#A290B7]/70 dark:bg-[#A290B7]/10',
    copy: 'I care about responsive interactions, useful errors, and small details that make software feel trustworthy.',
  },
  {
    title: 'Connect The Layers',
    number: '04',
    icon: Layers,
    tint: 'bg-[#B0CDE6]/25 border-[#B0CDE6]/70 dark:bg-[#B0CDE6]/10',
    copy: 'Frontend, backend, and database choices should support each other instead of becoming separate islands.',
  },
];

export function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 85, damping: 15 },
    },
  };

  return (
    <section
      id="principles"
      className="relative overflow-hidden border-b-2 border-[#946D6D]/20 bg-[#FDF4D2] py-20 px-4 text-[#946D6D] transition-colors duration-500 sm:px-6 lg:px-8 lg:py-28 dark:bg-[#251D1D] dark:text-[#FDF4D2] dark:border-[#FDF4D2]/20"
    >
      <div className="absolute inset-0 portfolio-grid opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left Column: Bio & Philosophy Overview */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-2">
              <Compass className="h-4 w-4 text-[#A290B7] dark:text-[#B0CDE6]" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#A290B7] dark:text-[#B0CDE6]">
                Principles & Philosophy
              </span>
            </div>

            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#946D6D] dark:text-[#FDF4D2]">
              Building software with intent and care.
            </h2>

            <p className="mt-6 text-base font-normal leading-relaxed text-[#946D6D]/85 sm:text-lg dark:text-[#FDF4D2]/85">
              I am Jullian Anjelo C. Vidal, a Computer Science Intern who enjoys building the quiet parts of software that make the visible parts work smoothly.
            </p>

            <p className="mt-4 text-base font-normal leading-relaxed text-[#946D6D]/85 sm:text-lg dark:text-[#FDF4D2]/85">
              My builds span mobile apps, machine learning interfaces, and database normalization tools. The unifying goal is straightforward: turn intricate complexity into predictable, dependable software.
            </p>

            {/* Quick Callout Box */}
            <div className="mt-8 bento-card p-5 bg-white dark:bg-[#322727]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#A290B7] dark:text-[#B0CDE6] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-sm font-extrabold uppercase text-[#946D6D] dark:text-[#FDF4D2]">
                    Direct & Maintainable Code
                  </h4>
                  <p className="mt-1 text-xs text-[#946D6D]/80 dark:text-[#FDF4D2]/80 leading-relaxed">
                    I believe great software is easy to explain, straightforward to refactor, and built to empower the end user.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Sleek Interactive Principle Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={itemVariants}
                  className={`bento-card flex flex-col justify-between p-6 sm:p-7 group cursor-default ${item.tint}`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#946D6D]/30 bg-white text-[#946D6D] shadow-[2px_2px_0px_rgba(148,109,109,0.2)] group-hover:scale-105 transition-transform dark:bg-[#322727] dark:text-[#FDF4D2]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs font-black text-[#946D6D]/40 group-hover:text-[#946D6D] transition-colors dark:text-[#FDF4D2]/40">
                        {item.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 font-display text-xl font-extrabold uppercase tracking-tight text-[#946D6D] dark:text-[#FDF4D2]">
                      {item.title}
                    </h3>

                    {/* Copy */}
                    <p className="mt-3 text-sm font-normal leading-relaxed text-[#946D6D]/85 dark:text-[#FDF4D2]/85">
                      {item.copy}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#946D6D]/20 dark:border-[#FDF4D2]/20">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#A290B7] dark:text-[#B0CDE6]">
                      Core Principle
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
