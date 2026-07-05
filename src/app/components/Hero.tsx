import { ArrowDown, ArrowUpRight, Github, Mail, MapPin, Moon, Sparkles, Sun } from 'lucide-react';

type HeroProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export function Hero({ isDark, onToggleTheme }: HeroProps) {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] overflow-hidden border-b border-[#191714]/10 bg-[#f5f0e8] px-4 transition-colors duration-500 sm:px-6 lg:px-8 dark:border-white/10 dark:bg-[#11100e]">
      <div className="absolute inset-0 opacity-[0.32] [background-image:linear-gradient(#191714_1px,transparent_1px),linear-gradient(90deg,#191714_1px,transparent_1px)] [background-size:56px_56px] dark:opacity-[0.18] dark:[background-image:linear-gradient(#f5f0e8_1px,transparent_1px),linear-gradient(90deg,#f5f0e8_1px,transparent_1px)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between py-6">
        <a href="#" className="font-mono text-sm font-semibold tracking-[0.24em] text-[#191714] transition-colors dark:text-[#f5f0e8]">
          JACV
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-[#575047] sm:flex dark:text-[#b9ad9e]">
          <a className="transition hover:text-[#191714] dark:hover:text-white" href="#projects">Work</a>
          <a className="transition hover:text-[#191714] dark:hover:text-white" href="#about">About</a>
          <a className="transition hover:text-[#191714] dark:hover:text-white" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#191714]/20 bg-white/50 text-[#191714] shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-[#f5f0e8] dark:hover:bg-white/15"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="mailto:anjelovidal28@gmail.com"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#191714]/20 bg-white/50 text-[#191714] shadow-sm transition hover:-translate-y-0.5 hover:bg-white sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2 dark:border-white/15 dark:bg-white/10 dark:text-[#f5f0e8] dark:hover:bg-white/15"
            aria-label="Email Anjelo"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden text-sm font-semibold sm:inline">Email me</span>
          </a>
        </div>
      </header>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 pb-16 pt-10 lg:min-h-[78vh] lg:grid-cols-[1.05fr_0.95fr] lg:pb-20 lg:pt-6">
        <div>
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#191714]/15 bg-white/55 px-4 py-2 text-sm font-semibold text-[#191714] shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-[#f5f0e8]">
              <Sparkles className="h-4 w-4 text-[#d95f35]" />
              Junior Software Engineer
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#191714]/15 bg-[#191714] px-4 py-2 text-sm font-semibold text-[#f5f0e8] dark:border-white/15 dark:bg-[#f5f0e8] dark:text-[#191714]">
              <MapPin className="h-4 w-4 text-[#f4c542]" />
              Philippines
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-normal text-[#191714] transition-colors dark:text-[#f5f0e8] sm:text-7xl lg:text-8xl">
            I build useful software with backend grit and frontend taste.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#575047] transition-colors dark:text-[#c9bca9] sm:text-xl">
            I'm Jullian Anjelo Vidal, a developer turning student, business, and data problems into practical apps that feel clear from the first click.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#191714] px-6 py-4 text-base font-bold text-[#f5f0e8] shadow-[0_18px_45px_rgba(25,23,20,0.22)] transition hover:-translate-y-1 hover:bg-[#2d2923] dark:bg-[#f4c542] dark:text-[#191714] dark:hover:bg-[#ffd95e]"
            >
              View selected work
              <ArrowDown className="h-5 w-5 transition group-hover:translate-y-1" />
            </button>
            <a
              href="https://github.com/beep-anjero"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#191714]/20 bg-white/60 px-6 py-4 text-base font-bold text-[#191714] shadow-sm transition hover:-translate-y-1 hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-[#f5f0e8] dark:hover:bg-white/15"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-lg border border-[#191714]/15 bg-[#191714] p-3 shadow-[0_28px_80px_rgba(25,23,20,0.28)] dark:border-white/15 dark:bg-[#25211c] dark:shadow-[0_28px_80px_rgba(0,0,0,0.42)]">
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Developer workspace with code on screen"
              className="h-[28rem] w-full rounded-md object-cover grayscale-[18%]"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/15 bg-[#f5f0e8]/92 p-5 shadow-2xl backdrop-blur dark:bg-[#11100e]/88">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#7a6b5b] dark:text-[#b9ad9e]">Current focus</p>
                  <p className="mt-2 text-2xl font-black text-[#191714] dark:text-[#f5f0e8]">Build, measure, refine.</p>
                </div>
                <a
                  href="#projects"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d95f35] text-white transition hover:-translate-y-0.5 hover:bg-[#c64f2a]"
                  aria-label="Jump to projects"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
                {['Flutter apps', 'ML tools', 'Database design'].map((item) => (
                  <span key={item} className="rounded-full border border-[#191714]/10 bg-white/65 px-3 py-2 text-center font-semibold text-[#575047] dark:border-white/15 dark:bg-white/10 dark:text-[#d8cbbb]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
