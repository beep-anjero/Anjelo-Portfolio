import { ArrowDown, Github, Linkedin, Mail, Sparkles, Moon, Sun, ArrowUpRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

type HeroProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export function Hero({ isDark, onToggleTheme }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 16 },
    },
  };

  const quickStackPills = ['Laravel', 'Vue.js', 'Quasar', 'Python', 'Flutter', 'Java', 'PHP', 'MySQL', 'PostgreSQL', 'TypeScript'];

  return (
    <section className="relative overflow-hidden border-b-2 border-[#946D6D]/20 bg-[#FDF4D2] pt-24 px-4 text-[#946D6D] transition-colors duration-500 sm:px-6 lg:px-8 dark:bg-[#251D1D] dark:text-[#FDF4D2] dark:border-[#FDF4D2]/20">
      {/* Background Dot Texture */}
      <div className="absolute inset-0 portfolio-grid opacity-50 pointer-events-none" />

      {/* Floating Desktop Navigation Header */}
      <div className="fixed top-4 inset-x-4 z-40 mx-auto max-w-5xl">
        <header className="flex items-center justify-between rounded-2xl border-2 border-[#946D6D]/30 bg-[#FDF4D2]/90 backdrop-blur-md px-6 py-3 shadow-[3px_3px_0px_rgba(148,109,109,0.25)] transition-all dark:bg-[#322727]/90 dark:border-[#FDF4D2]/30 dark:shadow-[3px_3px_0px_rgba(0,0,0,0.5)]">
          <a
            href="#"
            className="font-display text-sm font-extrabold uppercase tracking-widest text-[#946D6D] hover:opacity-80 transition-opacity dark:text-[#FDF4D2]"
          >
            JACV <span className="text-[#A290B7] dark:text-[#B0CDE6]">/</span> 26
          </a>

          <nav className="hidden items-center gap-7 font-display text-xs font-bold uppercase tracking-wider text-[#946D6D]/80 md:flex dark:text-[#FDF4D2]/80">
            <a className="transition-all hover:text-[#946D6D] hover:underline decoration-2 underline-offset-4 dark:hover:text-[#FDF4D2]" href="#projects">Work</a>
            <a className="transition-all hover:text-[#946D6D] hover:underline decoration-2 underline-offset-4 dark:hover:text-[#FDF4D2]" href="#stack">Stack</a>
            <a className="transition-all hover:text-[#946D6D] hover:underline decoration-2 underline-offset-4 dark:hover:text-[#FDF4D2]" href="#principles">Principles</a>
            <a className="transition-all hover:text-[#946D6D] hover:underline decoration-2 underline-offset-4 dark:hover:text-[#FDF4D2]" href="#credentials">Credentials</a>
            <a className="transition-all hover:text-[#946D6D] hover:underline decoration-2 underline-offset-4 dark:hover:text-[#FDF4D2]" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onToggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border-2 border-[#946D6D]/30 bg-white text-[#946D6D] shadow-[2px_2px_0px_rgba(148,109,109,0.2)] hover:shadow-[3px_3px_0px_rgba(148,109,109,0.35)] active:translate-y-0.5 transition-all dark:bg-[#251D1D] dark:text-[#FDF4D2] dark:border-[#FDF4D2]/30 dark:shadow-[2px_2px_0px_rgba(0,0,0,0.5)]"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="h-4 w-4 text-[#FDF4D2]" /> : <Moon className="h-4 w-4 text-[#946D6D]" />}
            </button>
            <a
              href="#contact"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-xl border-2 border-[#946D6D] bg-[#946D6D] px-4 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-[#FDF4D2] shadow-[2px_2px_0px_rgba(148,109,109,0.3)] hover:shadow-[3px_3px_0px_rgba(148,109,109,0.5)] active:translate-y-0.5 transition-all dark:bg-[#B0CDE6] dark:text-[#251D1D] dark:border-[#B0CDE6]"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Connect</span>
            </a>
          </div>
        </header>
      </div>

      {/* Main Hero Section Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl pb-16 pt-12 text-center lg:pb-24 lg:pt-18"
      >
        {/* Status Pill Badge */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#946D6D]/30 bg-white/90 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#946D6D] shadow-[2px_2px_0px_rgba(148,109,109,0.2)] dark:bg-[#322727] dark:text-[#FDF4D2] dark:border-[#FDF4D2]/25">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Computer Science Intern · Philippines
          </span>
        </motion.div>

        {/* Main Name & Title */}
        <motion.div variants={itemVariants}>
          <h1 className="font-display text-4xl font-extrabold uppercase leading-[1.08] tracking-tight text-[#946D6D] sm:text-6xl md:text-7xl lg:text-[5rem] dark:text-[#FDF4D2]">
            Jullian Anjelo <span className="text-[#946D6D] dark:text-[#B0CDE6]">C. Vidal</span>
          </h1>

          <p className="mt-4 font-display text-lg font-bold uppercase tracking-wider text-[#A290B7] sm:text-2xl dark:text-[#B0CDE6]">
            Computer Science Intern / Full-Stack Developer
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-2xl text-base font-normal leading-relaxed text-[#946D6D]/90 sm:text-xl dark:text-[#FDF4D2]/90"
        >
          "Building scalable web applications, clean REST APIs, and responsive interfaces."
        </motion.p>

        {/* Quick Actions */}
        <motion.div variants={itemVariants} className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#projects"
            className="inline-flex h-12 items-center gap-2 rounded-2xl border-2 border-[#946D6D] bg-[#946D6D] px-6 font-display text-xs font-extrabold uppercase tracking-wider text-[#FDF4D2] shadow-[3px_3px_0px_rgba(148,109,109,0.35)] hover:shadow-[4px_4px_0px_rgba(148,109,109,0.5)] active:translate-x-0.5 active:translate-y-0.5 transition-all dark:bg-[#FDF4D2] dark:text-[#251D1D] dark:border-[#FDF4D2]"
          >
            <span>View Selected Work</span>
            <ArrowDown className="h-4 w-4" />
          </a>

          <a
            href="https://github.com/beep-anjero"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-2xl border-2 border-[#946D6D]/30 bg-white px-5 font-display text-xs font-bold uppercase tracking-wider text-[#946D6D] shadow-[2px_2px_0px_rgba(148,109,109,0.2)] hover:border-[#946D6D] hover:bg-[#B0CDE6]/30 hover:shadow-[3px_3px_0px_rgba(148,109,109,0.35)] active:translate-x-0.5 active:translate-y-0.5 transition-all dark:bg-[#322727] dark:text-[#FDF4D2] dark:border-[#FDF4D2]/30"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/anjelo-vidal/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-2xl border-2 border-[#946D6D]/30 bg-white px-5 font-display text-xs font-bold uppercase tracking-wider text-[#946D6D] shadow-[2px_2px_0px_rgba(148,109,109,0.2)] hover:border-[#946D6D] hover:bg-[#B0CDE6]/30 hover:shadow-[3px_3px_0px_rgba(148,109,109,0.35)] active:translate-x-0.5 active:translate-y-0.5 transition-all dark:bg-[#322727] dark:text-[#FDF4D2] dark:border-[#FDF4D2]/30"
          >
            <Linkedin className="h-4 w-4 text-[#0077B5]" />
            <span>LinkedIn</span>
          </a>

          <a
            href="#contact"
            className="inline-flex h-12 items-center gap-2 rounded-2xl border-2 border-[#946D6D]/30 bg-white px-5 font-display text-xs font-bold uppercase tracking-wider text-[#946D6D] shadow-[2px_2px_0px_rgba(148,109,109,0.2)] hover:border-[#946D6D] hover:bg-[#B0CDE6]/30 hover:shadow-[3px_3px_0px_rgba(148,109,109,0.35)] active:translate-x-0.5 active:translate-y-0.5 transition-all dark:bg-[#322727] dark:text-[#FDF4D2] dark:border-[#FDF4D2]/30"
          >
            <Mail className="h-4 w-4 text-[#A290B7] dark:text-[#B0CDE6]" />
            <span>Get in Touch</span>
          </a>
        </motion.div>

        {/* Quick Micro-Pills under Hero */}
        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#A290B7] dark:text-[#B0CDE6] mr-1">
            Active Stack:
          </span>
          {quickStackPills.map((pill) => (
            <span
              key={pill}
              className="rounded-lg border border-[#946D6D]/25 bg-white/75 px-3 py-1 font-mono text-[11px] font-bold text-[#946D6D] shadow-sm dark:bg-[#322727] dark:text-[#FDF4D2] dark:border-[#FDF4D2]/20"
            >
              {pill}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Infinite loop Marquee */}
      <div className="relative z-10 border-y-2 border-[#946D6D]/20 bg-[#FDF4D2] py-4 text-[#946D6D] overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 dark:bg-[#251D1D] dark:border-[#FDF4D2]/20 dark:text-[#FDF4D2]">
        <div className="marquee-track flex w-[200%] gap-8 whitespace-nowrap font-mono text-xs font-bold uppercase tracking-[0.18em]">
          {[0, 1].map((group) => (
            <div key={group} className="flex min-w-[50%] justify-around gap-8">
              <span>Laravel & PHP Backends</span>
              <span className="text-[#A290B7] dark:text-[#B0CDE6]">✦</span>
              <span>Vue.js & Quasar Framework</span>
              <span className="text-[#A290B7] dark:text-[#B0CDE6]">✦</span>
              <span>Java & Spring Ecosystem</span>
              <span className="text-[#A290B7] dark:text-[#B0CDE6]">✦</span>
              <span>MySQL Relational Databases</span>
              <span className="text-[#A290B7] dark:text-[#B0CDE6]">✦</span>
              <span>RESTful API Architecture</span>
              <span className="text-[#A290B7] dark:text-[#B0CDE6]">✦</span>
              <span>Responsive Web UIs</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
