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
    <footer id="contact" className="bg-[#071014] px-4 py-20 text-[#eef8f6] transition-colors duration-500 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-[#18d6c4]">Contact</p>
          <h2 className="mt-4 max-w-5xl text-5xl font-black uppercase leading-[0.84] sm:text-7xl lg:text-8xl">
            Start a project with me.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#b7cac5]">
            I am open to computer science internship roles, project collaborations, and conversations about building useful apps.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:min-w-96">
          <button
            onClick={copyEmail}
            className="group flex items-center justify-between gap-4 rounded-[8px] border border-[#eef8f6]/15 bg-[#eef8f6] px-5 py-4 text-left text-[#071014] shadow-[0_18px_45px_rgba(0,0,0,0.24)] transition hover:-translate-y-1 hover:bg-[#18d6c4]"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#071014] text-[#18d6c4]">
                {copied ? <Check className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
              </span>
              <span>
                <span className="block font-mono text-xs uppercase tracking-[0.18em] text-[#526460]">
                  {copied ? 'Copied' : 'Copy Email'}
                </span>
                <span className="block break-all font-bold">{email}</span>
              </span>
            </span>
            <Copy className="h-5 w-5 shrink-0 opacity-60 transition group-hover:opacity-100" />
          </button>

          <div className="grid grid-cols-2 gap-3">
            <a href="https://github.com/beep-anjero" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-[8px] border border-[#eef8f6]/15 bg-[#0d1b20] px-4 py-4 font-bold text-[#eef8f6] transition hover:-translate-y-1 hover:border-[#18d6c4]">
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/search/results/people/?keywords=Jullian%20Anjelo%20Vidal" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-[8px] border border-[#eef8f6]/15 bg-[#0d1b20] px-4 py-4 font-bold text-[#eef8f6] transition hover:-translate-y-1 hover:border-[#18d6c4]">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <nav className="mx-auto mt-14 grid max-w-7xl gap-3 text-3xl font-black uppercase leading-[0.92] sm:grid-cols-2 sm:text-4xl lg:text-5xl xl:grid-cols-4 xl:text-[2.75rem]">
        <a className="min-w-0 overflow-hidden rounded-[8px] border border-[#eef8f6]/15 bg-[#0d1b20] p-4 transition hover:bg-[#18d6c4] hover:text-[#071014]" href="#projects">Projects</a>
        <a className="min-w-0 overflow-hidden rounded-[8px] border border-[#eef8f6]/15 bg-[#0d1b20] p-4 transition hover:bg-[#d9ff5d] hover:text-[#071014]" href="#services">Services</a>
        <a className="min-w-0 overflow-hidden rounded-[8px] border border-[#eef8f6]/15 bg-[#0d1b20] p-4 transition hover:bg-[#ff6b6b] hover:text-[#071014]" href="#about">About</a>
        <a className="min-w-0 overflow-hidden rounded-[8px] border border-[#eef8f6]/15 bg-[#0d1b20] p-4 transition hover:bg-[#eef8f6] hover:text-[#071014]" href="#contact">Contact</a>
      </nav>

      <div className="mx-auto mt-10 max-w-7xl border-t border-[#eef8f6]/15 pt-6">
        <p className="font-mono text-sm text-[#91a5a0]">
          Copyright {new Date().getFullYear()} Jullian Anjelo C. Vidal. Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
