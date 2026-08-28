import { useState } from 'react';
import { Check, Copy, Github, Linkedin, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'anjelovidal28@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#FDF4D2] border-t-2 border-[#946D6D]/20 px-4 py-20 text-[#946D6D] transition-colors duration-500 sm:px-6 lg:px-8 lg:py-28 dark:bg-[#251D1D] dark:text-[#FDF4D2] dark:border-[#FDF4D2]/20"
    >
      <div className="absolute inset-0 portfolio-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Contact Left Copy */}
          <div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-[#A290B7] dark:text-[#B0CDE6]" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#A290B7] dark:text-[#B0CDE6]">
                Get in Touch
              </span>
            </div>

            <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl text-[#946D6D] dark:text-[#FDF4D2]">
              Let's build together.
            </h2>

            <p className="mt-6 max-w-xl text-base font-normal leading-relaxed text-[#946D6D]/85 sm:text-lg dark:text-[#FDF4D2]/85">
              I am open to computer science internship roles, collaborative open-source builds, and conversations about practical backend architecture and clean frontend interfaces.
            </p>
          </div>

          {/* Contact Actions & Buttons */}
          <div className="flex flex-col gap-4 sm:min-w-[24rem] lg:justify-self-end">
            {/* Copy Email Box */}
            <button
              onClick={copyEmail}
              className="group flex items-center justify-between gap-4 rounded-2xl border-2 border-[#946D6D]/30 bg-white p-5 text-left shadow-[3px_3px_0px_rgba(148,109,109,0.25)] hover:border-[#946D6D] hover:shadow-[4px_4px_0px_rgba(148,109,109,0.4)] active:translate-y-0.5 transition-all dark:bg-[#322727] dark:border-[#FDF4D2]/30 dark:hover:border-[#B0CDE6]"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#946D6D] text-[#FDF4D2] group-hover:scale-105 transition-transform dark:bg-[#B0CDE6] dark:text-[#251D1D]">
                  {copied ? <Check className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
                </div>
                <div>
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-[#A290B7] dark:text-[#B0CDE6]">
                    {copied ? 'Copied to Clipboard' : 'Direct Email Contact'}
                  </span>
                  <span className="block font-mono text-sm font-bold text-[#946D6D] dark:text-[#FDF4D2] mt-0.5 break-all">
                    {email}
                  </span>
                </div>
              </div>
              <Copy className="h-4.5 w-4.5 shrink-0 text-[#946D6D]/60 group-hover:text-[#946D6D] transition-colors dark:text-[#FDF4D2]/60 dark:group-hover:text-[#FDF4D2]" />
            </button>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              <a
                href="https://github.com/beep-anjero"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border-2 border-[#946D6D]/30 bg-white py-3.5 px-4 font-display text-xs font-bold uppercase tracking-wider text-[#946D6D] shadow-[2px_2px_0px_rgba(148,109,109,0.2)] hover:border-[#946D6D] hover:bg-[#B0CDE6]/30 hover:shadow-[3px_3px_0px_rgba(148,109,109,0.35)] active:translate-y-0.5 transition-all dark:bg-[#322727] dark:text-[#FDF4D2] dark:border-[#FDF4D2]/30"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/anjelo-vidal/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border-2 border-[#946D6D]/30 bg-white py-3.5 px-4 font-display text-xs font-bold uppercase tracking-wider text-[#946D6D] shadow-[2px_2px_0px_rgba(148,109,109,0.2)] hover:border-[#946D6D] hover:bg-[#B0CDE6]/30 hover:shadow-[3px_3px_0px_rgba(148,109,109,0.35)] active:translate-y-0.5 transition-all dark:bg-[#322727] dark:text-[#FDF4D2] dark:border-[#FDF4D2]/30"
              >
                <Linkedin className="h-4 w-4 text-[#0077B5]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Copyright */}
        <div className="mt-20 border-t-2 border-[#946D6D]/20 pt-8 dark:border-[#FDF4D2]/20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-display text-xs font-bold uppercase tracking-wider text-[#946D6D]/80 dark:text-[#FDF4D2]/80">
            <div className="flex flex-wrap gap-6">
              <a className="hover:text-[#946D6D] hover:underline underline-offset-4 dark:hover:text-[#FDF4D2]" href="#projects">Work</a>
              <a className="hover:text-[#946D6D] hover:underline underline-offset-4 dark:hover:text-[#FDF4D2]" href="#stack">Stack</a>
              <a className="hover:text-[#946D6D] hover:underline underline-offset-4 dark:hover:text-[#FDF4D2]" href="#principles">Principles</a>
              <a className="hover:text-[#946D6D] hover:underline underline-offset-4 dark:hover:text-[#FDF4D2]" href="#credentials">Credentials</a>
              <a className="hover:text-[#946D6D] hover:underline underline-offset-4 dark:hover:text-[#FDF4D2]" href="#contact">Contact</a>
            </div>

            <p className="font-mono text-[11px] font-normal normal-case text-[#946D6D]/60 dark:text-[#FDF4D2]/60">
              © {new Date().getFullYear()} Jullian Anjelo C. Vidal. Built with React, Vite & Tailwind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
