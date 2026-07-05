import { ArrowDown, ArrowUpRight, Github, Mail, MapPin, Moon, Sparkles, Sun } from 'lucide-react';

type HeroProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export function Hero({ isDark, onToggleTheme }: HeroProps) {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden border-b border-[#071014]/15 bg-[#eaf5f3] px-4 text-[#071014] transition-colors duration-500 sm:px-6 lg:px-8 dark:border-[#eef8f6]/15 dark:bg-[#071014] dark:text-[#eef8f6]">
      <div className="absolute inset-0 portfolio-grid opacity-45" />
      <div className="absolute inset-x-0 top-0 h-24 border-b border-[#071014]/10 bg-[#eaf5f3]/80 backdrop-blur dark:border-[#eef8f6]/10 dark:bg-[#071014]/80" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between py-5">
        <a href="#" className="font-mono text-sm font-semibold uppercase tracking-[0.24em] text-[#071014] dark:text-[#eef8f6]">
          JACV / 26
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#51635f] dark:text-[#a7bbb6] md:flex">
          <a className="transition hover:text-[#071014] dark:hover:text-white" href="#projects">/Work</a>
          <a className="transition hover:text-[#071014] dark:hover:text-white" href="#services">/Services</a>
          <a className="transition hover:text-[#071014] dark:hover:text-white" href="#about">/About</a>
          <a className="transition hover:text-[#071014] dark:hover:text-white" href="#contact">/Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#071014]/15 bg-[#f7fbf8]/80 text-[#071014] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-[#18d6c4] dark:border-[#eef8f6]/15 dark:bg-[#0d1b20]/80 dark:text-[#eef8f6] dark:hover:border-[#18d6c4]"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="mailto:anjelovidal28@gmail.com"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#071014]/15 bg-[#071014] text-[#eef8f6] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-[#18d6c4] hover:text-[#071014] sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2 dark:border-[#eef8f6]/15 dark:bg-[#eef8f6] dark:text-[#071014] dark:hover:bg-[#18d6c4]"
            aria-label="Email Anjelo"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden text-sm font-semibold sm:inline">Start a build</span>
          </a>
        </div>
      </header>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-16 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-20 lg:pt-16">
        <div className="order-1">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 border border-[#071014]/15 bg-[#f7fbf8] px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#071014] shadow-sm dark:border-[#eef8f6]/15 dark:bg-[#0d1b20] dark:text-[#eef8f6]">
              <Sparkles className="h-4 w-4 text-[#18d6c4]" />
              Computer Science Intern
            </span>
            <span className="inline-flex items-center gap-2 border border-[#071014]/15 bg-[#f7fbf8] px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#071014] shadow-sm dark:border-[#eef8f6]/15 dark:bg-[#0d1b20] dark:text-[#eef8f6]">
              Full-stack development / Backend systems
            </span>
          </div>

          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#0b8e83] dark:text-[#18d6c4] sm:text-sm">
            Jullian Anjelo C. Vidal
          </p>

          <h1 className="mt-4 max-w-5xl text-6xl font-black uppercase leading-[0.78] text-[#071014] sm:text-8xl md:text-9xl lg:text-[8.25rem] xl:text-[9.5rem] dark:text-[#eef8f6]">
            Anjelo
            <span className="block text-[#0b8e83] dark:text-[#18d6c4]">Vidal</span>
          </h1>

          <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-2xl text-lg leading-8 text-[#435550] dark:text-[#b7cac5] sm:text-xl">
              I design and build practical software for student, business, and data workflows: clear interfaces, sturdy backend logic, and products that make sense from the first click.
            </p>
            <a
              href="#contact"
              className="hidden h-20 w-20 items-center justify-center rounded-[8px] border border-[#071014]/15 bg-[#ff6b6b] text-[#071014] transition hover:-translate-y-1 hover:bg-[#d9ff5d] lg:inline-flex dark:border-[#eef8f6]/15"
              aria-label="Go to contact"
            >
              <ArrowUpRight className="h-8 w-8" />
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center justify-center gap-3 rounded-[8px] bg-[#071014] px-6 py-4 text-base font-semibold text-[#eef8f6] shadow-[0_18px_45px_rgba(7,16,20,0.18)] transition hover:-translate-y-1 hover:bg-[#0b8e83] dark:bg-[#d9ff5d] dark:text-[#071014] dark:hover:bg-[#18d6c4]"
            >
              View selected work
              <ArrowDown className="h-5 w-5 transition group-hover:translate-y-1" />
            </button>
            <a
              href="https://github.com/beep-anjero"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-[8px] border border-[#071014]/15 bg-[#f7fbf8]/80 px-6 py-4 text-base font-semibold text-[#071014] shadow-sm transition hover:-translate-y-1 hover:border-[#18d6c4] hover:bg-white dark:border-[#eef8f6]/15 dark:bg-[#0d1b20]/80 dark:text-[#eef8f6] dark:hover:border-[#18d6c4]"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>

        <aside className="order-2 grid gap-4">
          <div className="relative overflow-hidden rounded-[8px] border border-[#071014]/15 bg-[#071014] p-3 shadow-[0_24px_60px_rgba(7,16,20,0.18)] dark:border-[#eef8f6]/15 dark:bg-[#0d1b20] dark:shadow-black/35">
            <img
              src="/images/anjelo-profile.png"
              alt="Portrait of Jullian Anjelo C. Vidal"
              className="h-[30rem] w-full rounded-[6px] object-cover object-top sm:h-[36rem] lg:h-[39rem]"
            />
            <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-b-[6px] bg-gradient-to-t from-[#071014]/95 via-[#071014]/50 to-transparent p-5 pt-20 text-[#eef8f6]">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#18d6c4]">/Portfolio 2026</p>
              <p className="mt-2 text-3xl font-black uppercase leading-none">Computer Science Intern</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[8px] border border-[#071014]/15 bg-[#071014] p-5 text-[#eef8f6] dark:border-[#eef8f6]/15 dark:bg-[#eef8f6] dark:text-[#071014]">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#18d6c4] dark:text-[#0b776e]">/Status</p>
              <p className="mt-4 text-2xl font-black uppercase leading-none">Computer Science Intern</p>
            </div>
            <div className="rounded-[8px] border border-[#071014]/15 bg-[#d9ff5d] p-5 text-[#071014] dark:border-[#eef8f6]/15">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#38530f]">/Location</p>
              <p className="mt-4 flex items-center gap-2 text-2xl font-black uppercase leading-none">
                <MapPin className="h-5 w-5" />
                Philippines
              </p>
            </div>
          </div>
        </aside>
      </div>

      <div className="relative z-10 border-t border-[#071014]/15 bg-[#071014] py-4 text-[#eef8f6] dark:border-[#eef8f6]/15 dark:bg-[#eef8f6] dark:text-[#071014]">
        <div className="marquee-track flex w-[200%] gap-8 whitespace-nowrap font-mono text-sm font-semibold uppercase tracking-[0.18em]">
          {[0, 1].map((group) => (
            <div key={group} className="flex min-w-[50%] gap-8">
              <span>Full-stack development</span>
              <span className="text-[#18d6c4] dark:text-[#0b8e83]">/</span>
              <span>Backend systems</span>
              <span className="text-[#d9ff5d] dark:text-[#0b776e]">/</span>
              <span>Machine learning tools</span>
              <span className="text-[#ff6b6b]">/</span>
              <span>Clear interfaces</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
