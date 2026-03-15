import { Blocks, Code2, Layers, Zap } from 'lucide-react';

export function About() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-lg">
            <span className="text-sm text-emerald-300 font-mono">👨‍💻 Engineering Philosophy</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-emerald-400">Me</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Main about content */}
          <div className="md:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 lg:p-10">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I'm <span className="text-emerald-400 font-semibold">Jullian Anjelo C. Vidal</span>, a Junior Software Engineer with a passion for building 
              <span className="text-emerald-400 font-semibold"> scalable, maintainable architectures</span> that solve real-world problems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              My journey in software engineering is driven by a deep fascination with <span className="text-emerald-400 font-semibold">backend systems</span> — 
              the invisible engines that power modern applications. From designing efficient database schemas to implementing robust API endpoints, 
              I thrive on creating solutions that are both elegant and performant.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Whether it's optimizing database queries, implementing caching strategies, or architecting microservices, 
              I approach every challenge with a commitment to <span className="text-emerald-400 font-semibold">clean code</span> and 
              <span className="text-emerald-400 font-semibold"> best practices</span>.
            </p>
          </div>
          
          {/* Engineering principles */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-600/20 flex items-center justify-center">
                <Blocks className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Scalable Architecture</h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Building systems that grow with demand. I design with horizontal scaling, load balancing, and distributed systems in mind.
            </p>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-600/20 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Clean Code</h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Writing readable, maintainable code following SOLID principles, design patterns, and industry standards.
            </p>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-600/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Performance First</h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Optimizing every layer — from database indexing to API response times. Performance isn't an afterthought.
            </p>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-600/20 flex items-center justify-center">
                <Layers className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Full-Stack Mindset</h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Understanding both frontend and backend allows me to build cohesive, end-to-end solutions.
            </p>
          </div>
        </div>
        
        {/* Quote section */}
        <div className="bg-gradient-to-r from-slate-900/50 to-emerald-950/30 backdrop-blur-sm border border-emerald-800/30 rounded-2xl p-8 text-center">
          <p className="text-2xl text-slate-200 italic mb-4">
            "Great software is built on great architecture."
          </p>
          <p className="text-slate-500 font-mono">— My Engineering Mantra</p>
        </div>
      </div>
    </section>
  );
}