import { motion, type Variants } from 'framer-motion';
import { Server, Layout, Database, Layers } from 'lucide-react';

const backendStack = [
  { name: 'Laravel', type: 'Backend Framework', detail: 'Eloquent ORM, REST APIs, Authentication & Routing' },
  { name: 'PHP', type: 'Language / Web', detail: 'Server-side Logic, MVC Patterns, Web Scripting' },
  { name: 'Python', type: 'Language / ML', detail: 'Django, Flask, Scikit-learn, Model Pipelines' },
  { name: 'Java', type: 'Language / Core', detail: 'OOP Principles, Robust Backend Architecture, Spring' },
  { name: 'MySQL', type: 'Relational DB', detail: 'Schema Design, Normalization, High-performance Queries' },
  { name: 'PostgreSQL', type: 'Relational DB', detail: 'ACID Transactions, Complex Constraints, Relational Modeling' },
  { name: 'SQLite', type: 'Embedded DB', detail: 'Mobile Local State, Offline Persistence, Zero-config DB' },
];

const frontendStack = [
  { name: 'Vue.js', type: 'Frontend Framework', detail: 'Reactivity System, Composition API, Single File Components' },
  { name: 'Quasar', type: 'UI Framework', detail: 'Cross-platform UI Systems, Material Components, SPA/PWA' },
  { name: 'Flutter & Dart', type: 'Mobile Framework', detail: 'Cross-Platform Mobile Apps, Provider State, Offline Sync' },
  { name: 'TypeScript', type: 'Typed JS', detail: 'Strict Type Safety, Interfaces, Predictable Codebases' },
  { name: 'JavaScript', type: 'Core Language', detail: 'ES6+ Standards, DOM Manipulation, Async/Await APIs' },
  { name: 'HTML5 & CSS3', type: 'Markup & Styling', detail: 'Semantic Elements, Responsive Grids, Tailwind CSS' },
];

export function PowerTrio() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="stack"
      className="relative overflow-hidden border-b-2 border-[#946D6D]/20 bg-[#FDF4D2] py-20 px-4 text-[#946D6D] transition-colors duration-500 sm:px-6 lg:px-8 lg:py-28 dark:bg-[#251D1D] dark:text-[#FDF4D2] dark:border-[#FDF4D2]/20"
    >
      <div className="absolute inset-0 portfolio-grid opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-14 border-b-2 border-[#946D6D]/20 pb-8 dark:border-[#FDF4D2]/20">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#A290B7] dark:text-[#B0CDE6]">
            Active Stack & Capabilities
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#946D6D] dark:text-[#FDF4D2]">
            Tech Stack & Tools.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[#946D6D]/85 dark:text-[#FDF4D2]/85">
            Structured development stack focused on building reliable full-stack applications, mobile experiences, and data-driven systems.
          </p>
        </div>

        {/* 2-Column Primary Bento Grid: Backend & Frontend */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {/* Category 1: Backend, APIs & Databases */}
          <motion.div
            variants={itemVariants}
            className="bento-card flex flex-col justify-between p-6 sm:p-8 bg-[#B0CDE6]/20 border-2 border-[#B0CDE6]/70 dark:bg-[#B0CDE6]/10"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#946D6D]/20 pb-4 dark:border-[#FDF4D2]/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#946D6D]/30 bg-white text-[#946D6D] shadow-[2px_2px_0px_rgba(148,109,109,0.2)] dark:bg-[#322727] dark:text-[#FDF4D2]">
                    <Server className="h-5 w-5 text-[#946D6D] dark:text-[#B0CDE6]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-[#946D6D] dark:text-[#FDF4D2]">
                      Backend & Databases
                    </h3>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#A290B7] dark:text-[#B0CDE6]">
                      Architecture, APIs, Frameworks & Data Stores
                    </p>
                  </div>
                </div>
                <Database className="h-5 w-5 text-[#946D6D]/40 dark:text-[#FDF4D2]/40" />
              </div>

              {/* Items Grid */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {backendStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="rounded-xl border border-[#946D6D]/25 bg-white/90 p-3.5 shadow-[2px_2px_0px_rgba(148,109,109,0.15)] hover:border-[#946D6D] hover:shadow-[3px_3px_0px_rgba(148,109,109,0.3)] transition-all dark:bg-[#322727] dark:border-[#FDF4D2]/20"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-display text-sm font-extrabold uppercase text-[#946D6D] dark:text-[#FDF4D2]">
                        {tech.name}
                      </h4>
                      <span className="font-mono text-[8.5px] font-bold uppercase rounded-md bg-[#B0CDE6]/40 px-2 py-0.5 text-[#251D1D] dark:bg-[#B0CDE6]/20 dark:text-[#FDF4D2]">
                        {tech.type}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-[#946D6D]/80 dark:text-[#FDF4D2]/80 leading-relaxed">
                      {tech.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#946D6D]/20 flex items-center justify-between font-mono text-[11px] text-[#946D6D]/70 dark:text-[#FDF4D2]/70 dark:border-[#FDF4D2]/20">
              <span>Backends: Laravel · Django · Flask · Java</span>
              <span className="font-bold text-[#946D6D] dark:text-[#B0CDE6]">Active 2026</span>
            </div>
          </motion.div>

          {/* Category 2: Frontend, Mobile & UI */}
          <motion.div
            variants={itemVariants}
            className="bento-card flex flex-col justify-between p-6 sm:p-8 bg-[#A290B7]/20 border-2 border-[#A290B7]/70 dark:bg-[#A290B7]/10"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#946D6D]/20 pb-4 dark:border-[#FDF4D2]/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#946D6D]/30 bg-white text-[#946D6D] shadow-[2px_2px_0px_rgba(148,109,109,0.2)] dark:bg-[#322727] dark:text-[#FDF4D2]">
                    <Layout className="h-5 w-5 text-[#946D6D] dark:text-[#A290B7]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-[#946D6D] dark:text-[#FDF4D2]">
                      Frontend & Mobile UI
                    </h3>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#A290B7] dark:text-[#B0CDE6]">
                      Reactive Interfaces, Mobile Apps & Components
                    </p>
                  </div>
                </div>
                <Layers className="h-5 w-5 text-[#946D6D]/40 dark:text-[#FDF4D2]/40" />
              </div>

              {/* Items Grid */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {frontendStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="rounded-xl border border-[#946D6D]/25 bg-white/90 p-3.5 shadow-[2px_2px_0px_rgba(148,109,109,0.15)] hover:border-[#946D6D] hover:shadow-[3px_3px_0px_rgba(148,109,109,0.3)] transition-all dark:bg-[#322727] dark:border-[#FDF4D2]/20"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-display text-sm font-extrabold uppercase text-[#946D6D] dark:text-[#FDF4D2]">
                        {tech.name}
                      </h4>
                      <span className="font-mono text-[8.5px] font-bold uppercase rounded-md bg-[#A290B7]/30 px-2 py-0.5 text-[#251D1D] dark:bg-[#A290B7]/20 dark:text-[#FDF4D2]">
                        {tech.type}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-[#946D6D]/80 dark:text-[#FDF4D2]/80 leading-relaxed">
                      {tech.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#946D6D]/20 flex items-center justify-between font-mono text-[11px] text-[#946D6D]/70 dark:text-[#FDF4D2]/70 dark:border-[#FDF4D2]/20">
              <span>Frontend & Mobile: Vue · Quasar · Flutter</span>
              <span className="font-bold text-[#946D6D] dark:text-[#B0CDE6]">Active 2026</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
