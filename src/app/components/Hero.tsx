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
    <section className="relative min-h-screen overflow-hidden border-b border-[#191714]/10 bg-[#f5f0e8] px-4 transition-colors duration-500 sm:px-6 lg:px-8 dark:border-white/10 dark:bg-[#11100e]">
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

      <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-12 pb-20 pt-10 lg:min-h-[78vh] lg:grid-cols-[1.18fr_0.82fr] lg:pb-24 lg:pt-6">
        <div className="min-w-0">
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

          <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-[#d95f35] sm:text-base">
            Full-stack development & Backend systems & Data tools
          </p>

          <h1 className="mt-5 max-w-6xl text-[clamp(4.25rem,13vw,11.5rem)] font-black uppercase leading-[0.78] tracking-normal text-[#191714] transition-colors dark:text-[#f5f0e8]">
            Anjelo
            <span className="block text-[#d95f35]">Vidal</span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#575047] transition-colors dark:text-[#c9bca9] sm:text-xl">
            I design and build practical software for student, business, and data workflows: clear interfaces, sturdy backend logic, and products that make sense from the first click.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#191714] px-7 py-4 text-base font-black uppercase tracking-[0.04em] text-[#f5f0e8] shadow-[0_18px_45px_rgba(25,23,20,0.22)] transition hover:-translate-y-1 hover:bg-[#2d2923] dark:bg-[#f4c542] dark:text-[#191714] dark:hover:bg-[#ffd95e]"
            >
              Start with the work
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

          <div className="mt-10 grid max-w-2xl grid-cols-3 border-y border-[#191714]/15 py-4 text-center dark:border-white/15">
            {[
              ['03', 'Featured builds'],
              ['11+', 'Tools used'],
              ['2026', 'Available'],
            ].map(([value, label]) => (
              <div key={label} className="border-r border-[#191714]/10 last:border-r-0 dark:border-white/10">
                <p className="text-2xl font-black text-[#191714] dark:text-[#f5f0e8]">{value}</p>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#7a6b5b] dark:text-[#b9ad9e]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:self-center">
          <div className="rounded-lg border border-[#191714]/15 bg-[#191714] p-3 shadow-[0_28px_80px_rgba(25,23,20,0.28)] dark:border-white/15 dark:bg-[#25211c] dark:shadow-[0_28px_80px_rgba(0,0,0,0.42)]">
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Developer workspace with code on screen"
              className="h-[24rem] w-full rounded-md object-cover grayscale-[18%] sm:h-[30rem]"
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

      <div className="absolute bottom-0 left-0 right-0 z-10 border-y border-[#191714]/10 bg-[#d95f35] py-3 text-[#f5f0e8] dark:border-white/10">
        <div className="animate-[marquee_24s_linear_infinite] whitespace-nowrap font-mono text-sm font-bold uppercase tracking-[0.22em]">
          <span className="mx-6">Build useful software</span>
          <span className="mx-6">Design clean workflows</span>
          <span className="mx-6">Ship maintainable systems</span>
          <span className="mx-6">Build useful software</span>
          <span className="mx-6">Design clean workflows</span>
          <span className="mx-6">Ship maintainable systems</span>
        </div>
      </div>
    </section>
  );
}
