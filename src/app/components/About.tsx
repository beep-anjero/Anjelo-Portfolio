import { Blocks, Code2, Layers, Zap, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const principles = [
  {
    title: 'Start With The Workflow',
    icon: Blocks,
    copy: 'I map what the user needs to finish, then shape the data model and interface around that path.',
  },
  {
    title: 'Make The Backend Honest',
    icon: Code2,
    copy: 'Clear schemas, predictable endpoints, and readable service logic matter more to me than clever code.',
  },
  {
    title: 'Keep Feedback Fast',
    icon: Zap,
    copy: 'I care about responsive interactions, useful errors, and small details that make software feel trustworthy.',
  },
  {
    title: 'Connect The Layers',
    icon: Layers,
    copy: 'Frontend, backend, and database choices should support each other instead of becoming separate islands.',
  },
];

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="about" className="relative overflow-hidden border-b border-border bg-background py-20 px-4 text-foreground transition-colors duration-500 sm:px-6 lg:px-8 lg:py-28">
      {/* Background grid */}
      <div className="absolute inset-0 portfolio-grid opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* About Column */}
          <div className="lg:sticky lg:top-28">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent)]">Philosophy</p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              A developer focused on backend systems and clean code.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I am Jullian Anjelo C. Vidal, a Computer Science Intern who enjoys building the quiet parts of software that make the visible parts work well.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              My projects sit across mobile apps, machine learning tools, and database systems. The common thread is simple: make complicated work easier for the person using the product.
            </p>
          </div>

          {/* Principles Column (Article Feed Style) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid gap-4 sm:grid-cols-1"
          >
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article 
                  key={item.title}
                  variants={itemVariants}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-[var(--accent)]/55 transition-all duration-300 group flex items-start gap-5 cursor-default"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground group-hover:bg-[var(--accent)] group-hover:text-[#080809] transition-all duration-300 shadow-sm">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/60">Principle 0{index + 1}</span>
                    </div>
                    <h3 className="mt-2 text-xl font-black uppercase tracking-tight text-foreground group-hover:text-[var(--accent)] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.copy}
                    </p>
                  </div>
                </motion.article>
              );
            })}

            {/* Working Style Bento Card */}
            <motion.div 
              variants={itemVariants}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8 text-foreground hover:border-[var(--accent)]/55 transition-all duration-300 group cursor-default"
            >
              <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-[var(--accent)] font-bold">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Working Style</span>
              </div>
              <p className="mt-5 text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl group-hover:text-[var(--accent)] transition-colors duration-300">
                I like software that is direct, maintainable, and easy to explain to the next person who has to improve it.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
