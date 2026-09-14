import { Briefcase, Cpu, BookOpen, Award, Mail, Check } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { id: 'projects', label: 'Work', icon: Briefcase },
  { id: 'stack', label: 'Stack', icon: Cpu },
  { id: 'principles', label: 'Ideas', icon: BookOpen },
  { id: 'credentials', label: 'Badges', icon: Award },
] as const;

export function MobileNav() {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');
  const email = 'anjelovidal28@gmail.com';

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.4;
      let currentSection = navItems[0].id;

      for (const { id } of navItems) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= marker) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-4 inset-x-4 z-50 mx-auto max-w-md md:hidden pointer-events-auto">
      <nav className="flex items-center justify-around rounded-2xl border-2 border-[#946D6D]/40 bg-[#FDF4D2]/95 backdrop-blur-md px-3 py-2.5 shadow-[0_8px_20px_rgba(148,109,109,0.25)] dark:bg-[#322727]/95 dark:border-[#FDF4D2]/30 dark:shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id;

          return (
            <a
              key={id}
              href={`#${id}`}
              aria-current={isActive ? 'location' : undefined}
              className={`flex flex-col items-center gap-1 rounded-xl px-2.5 py-1 hover:opacity-80 active:scale-95 transition-all ${
                isActive
                  ? 'bg-[#946D6D] text-[#FDF4D2] shadow-sm dark:bg-[#B0CDE6] dark:text-[#251D1D]'
                  : 'text-[#946D6D] dark:text-[#FDF4D2]'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="font-display text-[10px] font-bold uppercase tracking-wider">{label}</span>
            </a>
          );
        })}

        <button
          onClick={copyEmail}
          className="flex flex-col items-center gap-1 rounded-xl px-3 py-1 text-[#946D6D] hover:opacity-80 active:scale-95 transition-all dark:text-[#FDF4D2]"
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
