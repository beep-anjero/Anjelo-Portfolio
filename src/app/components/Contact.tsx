import { Check, Copy, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
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
    <footer id="contact" className="relative overflow-hidden bg-background border-t border-border px-4 py-20 text-foreground transition-colors duration-500 sm:px-6 lg:px-8 lg:py-28">
      {/* Background grid */}
      <div className="absolute inset-0 portfolio-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Contact CTA Text */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent)]">Get in Touch</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Let's work together.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I am open to computer science internship roles, project collaborations, and conversations about building useful web applications and backend systems.
            </p>
          </div>

          {/* Contact Action Buttons */}
          <div className="flex flex-col gap-4 sm:min-w-[24rem] lg:justify-self-end">
            <button
              onClick={copyEmail}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-6 py-5 text-left transition-all duration-300 hover:border-[var(--accent)] hover:shadow-lg active:scale-98"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground group-hover:bg-[var(--accent)] group-hover:text-[#080809] transition-colors duration-300">
                  {copied ? <Check className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
                </span>
                <span>
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                    {copied ? 'Copied to Clipboard' : 'Copy Email Address'}
                  </span>
                  <span className="block font-mono text-sm font-bold text-foreground mt-0.5 break-all">{email}</span>
                </span>
              </span>
              <Copy className="h-4.5 w-4.5 shrink-0 text-muted-foreground/60 transition group-hover:text-foreground" />
            </button>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/beep-anjero"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-5 py-4 font-mono text-xs font-bold uppercase tracking-wider text-foreground transition-all duration-300 hover:border-foreground hover:bg-secondary active:scale-95"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href="www.linkedin.com/in/anjelo-vidal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-5 py-4 font-mono text-xs font-bold uppercase tracking-wider text-foreground transition-all duration-300 hover:border-foreground hover:bg-secondary active:scale-95"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Footer Navigation Bar */}
        <div className="mt-20 border-t border-border/60 pt-10">
          <nav className="grid grid-cols-2 gap-4 sm:flex sm:items-center sm:justify-between font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
              <a className="transition hover:text-foreground" href="#projects">Work</a>
              <a className="transition hover:text-foreground" href="#services">Stack</a>
              <a className="transition hover:text-foreground" href="#about">Principles</a>
              <a className="transition hover:text-foreground" href="#certifications">Credentials</a>
              <a className="transition hover:text-foreground" href="#contact">Contact</a>
            </div>

            <p className="col-span-2 sm:col-span-1 text-muted-foreground/60 mt-4 sm:mt-0">
              Copyright © {new Date().getFullYear()} Anjelo Vidal. Built with React and Tailwind.
            </p>
          </nav>
        </div>
      </div>
    </footer>
  );
}
