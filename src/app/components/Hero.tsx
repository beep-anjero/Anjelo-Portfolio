import { ArrowDown, ArrowUpRight, Github, Mail, MapPin, Moon, Sparkles, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

type HeroProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export function Hero({ isDark, onToggleTheme }: HeroProps) {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section className="relative overflow-hidden border-b border-border bg-background pt-24 px-4 text-foreground transition-colors duration-500 sm:px-6 lg:px-8">
      {/* Mesh grid pattern background */}
      <div className="absolute inset-0 portfolio-grid opacity-50 pointer-events-none" />

      {/* Floating navigation bar */}
      <div className="fixed top-4 inset-x-4 z-40 mx-auto max-w-5xl">
        <header className="flex items-center justify-between rounded-full border border-border/80 bg-background/60 px-6 py-3.5 shadow-lg backdrop-blur-md">
          <a href="#" className="font-mono text-sm font-black uppercase tracking-[0.24em] text-foreground transition hover:text-[var(--accent)]">
            JACV / 26
          </a>

          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-wider text-muted-foreground md:flex">
            <a className="transition hover:text-foreground" href="#projects">Work</a>
            <a className="transition hover:text-foreground" href="#services">Stack</a>
            <a className="transition hover:text-foreground" href="#about">Principles</a>
            <a className="transition hover:text-foreground" href="#certifications">Credentials</a>
            <a className="transition hover:text-foreground" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onToggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/50 text-foreground transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-95"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href="mailto:anjelovidal28@gmail.com"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:bg-[var(--accent)] hover:text-[#080809] active:scale-95"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Connect</span>
            </a>
          </div>
        </header>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid max-w-7xl gap-12 pb-16 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:pb-24 lg:pt-16"
      >
        {/* Left Side: Typography and Stats */}
        <div className="order-1 flex flex-col justify-center">
          <motion.div variants={itemVariants} className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/65 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] shadow-sm">
              <Sparkles className="h-3 w-3 animate-pulse" />
              CS Intern
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/65 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground shadow-sm">
              CS Intern & Learner
            </span>
          </motion.div>

          <motion.p variants={itemVariants} className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-sm">
            Jullian Anjelo C. Vidal
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mt-4 max-w-5xl text-5xl font-black uppercase leading-[0.88] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.5rem]"
          >
            Anjelo
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-[var(--accent)]">Vidal</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I am a Computer Science student intern passionate about learning cutting‑edge technologies. I build practical projects to deepen my expertise, collaborate on open‑source initiatives, and deliver clean, maintainable code that solves real‑world problems.
            </p>
            <a
              href="#contact"
              className="hidden h-14 w-14 items-center justify-center rounded-full border border-border bg-card hover:bg-[var(--accent)] hover:text-[#080809] hover:border-[var(--accent)] transition-all duration-300 lg:inline-flex active:scale-95"
              aria-label="Go to contact"
            >
              <ArrowUpRight className="h-6 w-6" />
            </a>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-md transition-all duration-300 hover:bg-[var(--accent)] hover:text-[#080809] active:scale-95"
            >
              <span>View Selected Work</span>
              <ArrowDown className="h-4 w-4 transition group-hover:translate-y-1" />
            </button>
            <a
              href="https://github.com/beep-anjero"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-border bg-card px-8 py-4 text-sm font-bold uppercase tracking-wider text-foreground transition-all duration-300 hover:border-foreground hover:bg-secondary active:scale-95"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </motion.div>

          {/* Stats bento layout */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-3 gap-4 border-t border-border/60 pt-8"
          >
            <div>
              <p className="font-mono text-3xl font-black text-foreground sm:text-4xl">03</p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mt-1">Featured Builds</p>
            </div>
            <div>
              <p className="font-mono text-3xl font-black text-foreground sm:text-4xl">15+</p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mt-1">Tools & Stack</p>
            </div>
            <div>
              <p className="font-mono text-3xl font-black text-[var(--accent)] sm:text-4xl">100%</p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mt-1">Sturdy Dev</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Profile Bento block */}
        <motion.aside variants={itemVariants} className="order-2 grid gap-4 lg:sticky lg:top-28">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-xl group">
            <div className="relative h-[20rem] w-full overflow-hidden rounded-xl bg-muted/30 sm:h-[24rem] lg:h-[26rem]">
              <img
                src="/images/anjelo-profile.png"
                alt="Portrait of Jullian Anjelo C. Vidal"
                className="h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-90" />
              <div className="absolute inset-0 portfolio-grid opacity-10 mix-blend-overlay" />
              
              <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/5 bg-black/45 p-5 backdrop-blur-md text-white">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--accent)]">Portfolio 2026</p>
                <p className="mt-1 text-2xl font-black uppercase leading-none tracking-tight">Anjelo Vidal</p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5 transition duration-300 hover:border-border/80">
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Current Status</p>
              <p className="mt-2 text-lg font-black uppercase leading-tight text-foreground">Computer Science Intern</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 transition duration-300 hover:border-[var(--accent)]/50">
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Location</p>
              <p className="mt-2 flex items-center gap-1.5 text-lg font-black uppercase leading-tight text-foreground">
                <MapPin className="h-4 w-4 text-[var(--accent)]" />
                Philippines
              </p>
            </div>
          </div>
        </motion.aside>
      </motion.div>

      {/* Infinite loop Marquee */}
      <div className="relative z-10 border-y border-border/80 bg-card py-5 text-foreground overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="marquee-track flex w-[200%] gap-12 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          {[0, 1].map((group) => (
            <div key={group} className="flex min-w-[50%] justify-around gap-12">
              <span>Full-stack Development</span>
              <span className="text-[var(--accent)] font-black">•</span>
              <span>CS Intern & Learner</span>
              <span className="text-[var(--accent)] font-black">•</span>
              <span>Machine Learning Tools</span>
              <span className="text-[var(--accent)] font-black">•</span>
              <span>Clear Relational Schemas</span>
              <span className="text-[var(--accent)] font-black">•</span>
              <span>Clean User Interfaces</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
