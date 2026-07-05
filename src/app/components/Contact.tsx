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
    <footer id="contact" className="border-t border-[#191714]/10 bg-[#fdfaf4] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.28em] text-[#d95f35]">Contact</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-[#191714] sm:text-6xl">
            Have a build, internship, or collaboration in mind?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#575047]">
            I am open to junior software engineering roles, project collaborations, and conversations about building useful apps.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:min-w-96">
          <button
            onClick={copyEmail}
            className="group flex items-center justify-between gap-4 rounded-lg bg-[#191714] px-5 py-4 text-left text-[#f5f0e8] shadow-[0_18px_45px_rgba(25,23,20,0.18)] transition hover:-translate-y-1 hover:bg-[#2d2923]"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f4c542] text-[#191714]">
                {copied ? <Check className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
              </span>
              <span>
                <span className="block font-mono text-xs uppercase tracking-[0.18em] text-[#c9bca9]">
                  {copied ? 'Copied' : 'Copy Email'}
                </span>
                <span className="block break-all font-bold">{email}</span>
              </span>
            </span>
            <Copy className="h-5 w-5 shrink-0 opacity-60 transition group-hover:opacity-100" />
          </button>

          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://github.com/beep-anjero"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-[#191714]/10 bg-white/70 px-4 py-4 font-bold text-[#191714] transition hover:-translate-y-1 hover:bg-white"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/search/results/people/?keywords=Jullian%20Anjelo%20Vidal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-[#191714]/10 bg-white/70 px-4 py-4 font-bold text-[#191714] transition hover:-translate-y-1 hover:bg-white"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-[#191714]/10 pt-6">
        <p className="font-mono text-sm text-[#7a6b5b]">
          Copyright {new Date().getFullYear()} Jullian Anjelo C. Vidal. Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
