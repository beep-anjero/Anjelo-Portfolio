import { Check, Copy, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'anjelovidal28@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="border-t border-[#1d1b18]/10 bg-[#f7f2ea] px-4 py-20 text-[#1d1b18] transition-colors duration-500 sm:px-6 lg:px-8 dark:border-white/10 dark:bg-[#11110f] dark:text-[#f7f2ea]">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-[#d95f35]">Contact</p>
          <h2 className="mt-4 max-w-5xl text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.86]">
            Start a build with me.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6b6258] dark:text-[#cfc4b6]">
            I am open to junior software engineering roles, project collaborations, and conversations about building useful apps.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:min-w-96">
          <button
            onClick={copyEmail}
            className="group flex items-center justify-between gap-4 rounded-lg bg-[#1d1b18] px-5 py-4 text-left text-[#f7f2ea] shadow-[0_18px_45px_rgba(29,27,24,0.14)] transition hover:-translate-y-1 hover:bg-[#2e2a25] dark:bg-[#f4c542] dark:text-[#1d1b18] dark:hover:bg-[#ffd95e]"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f4c542] text-[#1d1b18] dark:bg-[#1d1b18] dark:text-[#f7f2ea]">
                {copied ? <Check className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
              </span>
              <span>
                <span className="block font-mono text-xs uppercase tracking-[0.18em] text-[#cfc4b6] dark:text-[#6a4a18]">
                  {copied ? 'Copied' : 'Copy Email'}
                </span>
                <span className="block break-all font-bold">{email}</span>
              </span>
            </span>
            <Copy className="h-5 w-5 shrink-0 opacity-60 transition group-hover:opacity-100" />
          </button>

          <div className="grid grid-cols-2 gap-3">
            <a href="https://github.com/beep-anjero" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg border border-[#1d1b18]/10 bg-white/65 px-4 py-4 font-bold text-[#1d1b18] transition hover:-translate-y-1 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-[#f7f2ea] dark:hover:bg-white/15">
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/search/results/people/?keywords=Jullian%20Anjelo%20Vidal" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg border border-[#1d1b18]/10 bg-white/65 px-4 py-4 font-bold text-[#1d1b18] transition hover:-translate-y-1 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-[#f7f2ea] dark:hover:bg-white/15">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <nav className="mx-auto mt-14 grid max-w-7xl gap-3 text-[clamp(2rem,5vw,4.5rem)] font-black uppercase leading-none sm:grid-cols-2 lg:grid-cols-4">
        <a className="rounded-lg border border-[#1d1b18]/10 bg-white/45 p-4 transition hover:bg-[#1d1b18] hover:text-[#f7f2ea] dark:border-white/10 dark:bg-white/5 dark:hover:bg-[#f7f2ea] dark:hover:text-[#1d1b18]" href="#projects">Projects</a>
        <a className="rounded-lg border border-[#1d1b18]/10 bg-white/45 p-4 transition hover:bg-[#1d1b18] hover:text-[#f7f2ea] dark:border-white/10 dark:bg-white/5 dark:hover:bg-[#f7f2ea] dark:hover:text-[#1d1b18]" href="#services">Services</a>
        <a className="rounded-lg border border-[#1d1b18]/10 bg-white/45 p-4 transition hover:bg-[#1d1b18] hover:text-[#f7f2ea] dark:border-white/10 dark:bg-white/5 dark:hover:bg-[#f7f2ea] dark:hover:text-[#1d1b18]" href="#about">About</a>
        <a className="rounded-lg border border-[#1d1b18]/10 bg-white/45 p-4 transition hover:bg-[#1d1b18] hover:text-[#f7f2ea] dark:border-white/10 dark:bg-white/5 dark:hover:bg-[#f7f2ea] dark:hover:text-[#1d1b18]" href="#contact">Contact</a>
      </nav>

      <div className="mx-auto mt-10 max-w-7xl border-t border-[#1d1b18]/10 pt-6 dark:border-white/10">
        <p className="font-mono text-sm text-[#8a7f72] dark:text-[#bfb4a5]">
          Copyright {new Date().getFullYear()} Jullian Anjelo C. Vidal. Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
