import { ArrowDown, Code2 } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative max-w-5xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-lg">
          <Code2 className="w-4 h-4 text-emerald-400" />
          <span className="text-sm text-emerald-300 font-mono">Junior Software Engineer</span>
        </div>
        
        <h1 className="text-6xl sm:text-7xl lg:text-8xl mb-6 font-bold tracking-tight">
          <span className="text-white">Jullian Anjelo C. </span>
          <span className="text-emerald-400">Vidal</span>
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl mb-12 text-slate-300 max-w-4xl mx-auto leading-relaxed">
          Bridging the gap between <span className="text-emerald-400 font-semibold">robust backends</span> and <span className="text-emerald-400 font-semibold">clean frontends</span>.
        </p>
        
        <button
          onClick={scrollToProjects}
          className="group inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/50 hover:scale-105"
        >
          <span className="text-lg">View Projects</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
      
      {/* Terminal-style decoration */}
      <div className="absolute bottom-8 left-8 right-8 max-w-2xl mx-auto">
        <div className="bg-slate-900/80 backdrop-blur-sm border border-emerald-500/20 rounded-lg p-4 font-mono text-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <span className="text-slate-500">~/portfolio</span>
          </div>
          <p className="text-emerald-400">
            <span className="text-slate-500">$</span> cat about.txt
          </p>
          <p className="text-slate-400 mt-1">Building scalable solutions, one line at a time.</p>
        </div>
      </div>
    </section>
  );
}