import { Briefcase, Cpu, BookOpen, Award, Mail, Check } from 'lucide-react';
import { useState } from 'react';

export function MobileNav() {
  const [copied, setCopied] = useState(false);
  const email = 'anjelovidal28@gmail.com';

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-4 inset-x-4 z-50 mx-auto max-w-md md:hidden pointer-events-auto">
      <nav className="flex items-center justify-around rounded-2xl border-2 border-[#946D6D]/40 bg-[#FDF4D2]/95 backdrop-blur-md px-3 py-2.5 shadow-[0_8px_20px_rgba(148,109,109,0.25)] dark:bg-[#322727]/95 dark:border-[#FDF4D2]/30 dark:shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
        <a
          href="#projects"
          className="flex flex-col items-center gap-1 px-2.5 py-1 text-[#946D6D] dark:text-[#FDF4D2] hover:opacity-80 active:scale-95 transition-all"
        >
          <Briefcase className="h-4 w-4" />
          <span className="font-display text-[10px] font-bold uppercase tracking-wider">Work</span>
        </a>

        <a
          href="#stack"
          className="flex flex-col items-center gap-1 px-2.5 py-1 text-[#946D6D] dark:text-[#FDF4D2] hover:opacity-80 active:scale-95 transition-all"
        >
          <Cpu className="h-4 w-4" />
          <span className="font-display text-[10px] font-bold uppercase tracking-wider">Stack</span>
        </a>

        <a
          href="#principles"
          className="flex flex-col items-center gap-1 px-2.5 py-1 text-[#946D6D] dark:text-[#FDF4D2] hover:opacity-80 active:scale-95 transition-all"
        >
          <BookOpen className="h-4 w-4" />
          <span className="font-display text-[10px] font-bold uppercase tracking-wider">Ideas</span>
        </a>

        <a
          href="#credentials"
          className="flex flex-col items-center gap-1 px-2.5 py-1 text-[#946D6D] dark:text-[#FDF4D2] hover:opacity-80 active:scale-95 transition-all"
        >
          <Award className="h-4 w-4" />
          <span className="font-display text-[10px] font-bold uppercase tracking-wider">Badges</span>
        </a>

        <button
          onClick={copyEmail}
          className="flex flex-col items-center gap-1 rounded-xl bg-[#946D6D] px-3 py-1 text-[#FDF4D2] shadow-sm hover:bg-[#946D6D]/90 active:scale-95 transition-all dark:bg-[#B0CDE6] dark:text-[#251D1D]"
          title="Copy Email"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-300 dark:text-emerald-800" /> : <Mail className="h-4 w-4" />}
          <span className="font-display text-[10px] font-bold uppercase tracking-wider">
            {copied ? 'Copied' : 'Email'}
          </span>
        </button>
      </nav>
    </div>
  );
}
