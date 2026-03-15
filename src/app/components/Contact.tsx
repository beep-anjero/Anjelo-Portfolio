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
    <footer className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-lg">
          <span className="text-sm text-emerald-300 font-mono">📬 Let's Connect</span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Get In <span className="text-emerald-400">Touch</span>
        </h2>
        
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Open to new opportunities, collaborations, and technical discussions
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="https://github.com/beep-anjero"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 text-slate-200 px-6 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-800 group-hover:bg-emerald-600/20 flex items-center justify-center transition-colors">
              <Github className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs text-slate-500 font-mono">View Code</div>
              <div className="font-semibold">GitHub</div>
            </div>
          </a>
          
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 text-slate-200 px-6 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-800 group-hover:bg-emerald-600/20 flex items-center justify-center transition-colors">
              <Linkedin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs text-slate-500 font-mono">Connect</div>
              <div className="font-semibold">LinkedIn</div>
            </div>
          </a>
          
          <button
            onClick={copyEmail}
            className="group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-slate-950 px-6 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/50"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-950/20 flex items-center justify-center">
              {copied ? (
                <Check className="w-5 h-5" />
              ) : (
                <Mail className="w-5 h-5" />
              )}
            </div>
            <div className="text-left">
              <div className="text-xs text-slate-950/60 font-mono">
                {copied ? 'Copied!' : 'Copy Email'}
              </div>
              <div className="font-semibold flex items-center gap-2">
                {email}
                {!copied && <Copy className="w-4 h-4" />}
              </div>
            </div>
          </button>
        </div>
        
        <div className="pt-8 border-t border-slate-800/50">
          <p className="text-sm text-slate-500 font-mono">
            © {new Date().getFullYear()} Jullian Anjelo C. Vidal. Engineered with <span className="text-emerald-400">React</span> & <span className="text-emerald-400">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}