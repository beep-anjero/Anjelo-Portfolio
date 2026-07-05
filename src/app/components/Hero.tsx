import { ArrowDown, Github, Mail, MapPin, Moon, Sparkles, Sun } from 'lucide-react';

type HeroProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export function Hero({ isDark, onToggleTheme }: HeroProps) {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f2ea] px-4 text-[#1d1b18] transition-colors duration-500 sm:px-6 lg:px-8 dark:bg-[#11110f] dark:text-[#f7f2ea]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(217,95,53,0.11),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(244,197,66,0.12),transparent_26%)] dark:bg-[radial-gradient(circle_at_18%_12%,rgba(217,95,53,0.18),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(244,197,66,0.1),transparent_26%)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between py-6">
        <a href="#" className="font-mono text-sm font-semibold tracking-[0.24em] text-[#1d1b18] dark:text-[#f7f2ea]">
          JACV
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#726a60] dark:text-[#bfb4a5] md:flex">
          <a className="transition hover:text-[#1d1b18] dark:hover:text-white" href="#projects">Projects</a>
          <a className="transition hover:text-[#1d1b18] dark:hover:text-white" href="#services">Services</a>
          <a className="transition hover:text-[#1d1b18] dark:hover:text-white" href="#about">About</a>
          <a className="transition hover:text-[#1d1b18] dark:hover:text-white" href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1d1b18]/10 bg-white/65 text-[#1d1b18] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-[#f7f2ea] dark:hover:bg-white/15"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="mailto:anjelovidal28@gmail.com"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1d1b18]/10 bg-white/65 text-[#1d1b18] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2 dark:border-white/10 dark:bg-white/10 dark:text-[#f7f2ea] dark:hover:bg-white/15"
            aria-label="Email Anjelo"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden text-sm font-semibold sm:inline">Start a build</span>
          </a>
        </div>
      </header>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 pb-20 pt-12 lg:min-h-[78vh] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-4">
        <div>
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1d1b18]/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[#1d1b18] shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-[#f7f2ea]">
              <Sparkles className="h-4 w-4 text-[#d95f35]" />
              Junior Software Engineer
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1d1b18]/10 bg-[#1d1b18] px-4 py-2 text-sm font-semibold text-[#f7f2ea] dark:bg-[#f7f2ea] dark:text-[#1d1b18]">
              <MapPin className="h-4 w-4 text-[#f4c542]" />
              Philippines
            </span>
          </div>

          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#d95f35] sm:text-sm">
            Full-stack development / Backend systems / Machine learning tools
          </p>

          <h1 className="mt-5 max-w-5xl text-[clamp(4rem,11vw,10rem)] font-black uppercase leading-[0.82] tracking-normal text-[#1d1b18] dark:text-[#f7f2ea]">
            Anjelo
            <span className="block text-[#d95f35]">Vidal</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5d564e] dark:text-[#d8cfc2] sm:text-xl">
            I design and build practical software for student, business, and data workflows: clear interfaces, sturdy backend logic, and products that make sense from the first click.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#1d1b18] px-6 py-4 text-base font-semibold text-[#f7f2ea] shadow-[0_18px_45px_rgba(29,27,24,0.16)] transition hover:-translate-y-1 hover:bg-[#2e2a25] dark:bg-[#f4c542] dark:text-[#1d1b18] dark:hover:bg-[#ffd95e]"
            >
              View selected work
              <ArrowDown className="h-5 w-5 transition group-hover:translate-y-1" />
            </button>
            <a
              href="https://github.com/beep-anjero"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#1d1b18]/10 bg-white/65 px-6 py-4 text-base font-semibold text-[#1d1b18] shadow-sm transition hover:-translate-y-1 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-[#f7f2ea] dark:hover:bg-white/15"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-[#1d1b18]/10 bg-white/55 p-3 shadow-[0_24px_70px_rgba(60,48,34,0.14)] backdrop-blur dark:border-white/10 dark:bg-white/10 dark:shadow-black/30">
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Developer workspace with code on screen"
              className="h-[24rem] w-full rounded-md object-cover grayscale-[12%] sm:h-[30rem]"
            />
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {['Flutter apps', 'ML tools', 'Database design'].map((item) => (
                <span key={item} className="rounded-full border border-[#1d1b18]/10 bg-[#f7f2ea]/85 px-3 py-2 text-center text-sm font-semibold text-[#5d564e] dark:border-white/10 dark:bg-[#11110f]/80 dark:text-[#d8cfc2]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
