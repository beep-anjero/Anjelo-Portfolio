import { Code2, FileCode, Server } from 'lucide-react';

const powerTrio = [
  {
    name: 'TypeScript',
    icon: Code2,
    description: 'Type-safe development with modern frameworks & tooling',
    gradient: 'from-blue-500 to-cyan-600',
    frameworks: ['React', 'Next.js', 'Node.js'],
  },
  {
    name: 'Python',
    icon: FileCode,
    description: 'Data processing, automation & Django development',
    gradient: 'from-yellow-500 to-orange-600',
    frameworks: ['Django', 'Flask', 'FastAPI'],
  },
  {
    name: 'Java',
    icon: Server,
    description: 'Enterprise applications & Spring Boot microservices',
    gradient: 'from-orange-500 to-red-600',
    frameworks: ['Spring Boot', 'Hibernate', 'Maven'],
  },
];

export function PowerTrio() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-lg">
            <span className="text-sm text-emerald-300 font-mono">⚡ Core Technologies</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Featured <span className="text-emerald-400">Languages</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            My go-to languages for building scalable, production-grade systems
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {powerTrio.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Language name */}
                  <h3 className="text-3xl font-bold text-white mb-3 font-mono">
                    {tech.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {tech.description}
                  </p>
                  
                  {/* Frameworks */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-emerald-400 mb-3 font-mono">Frameworks</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.frameworks.map((framework, fIndex) => (
                        <span
                          key={fIndex}
                          className="text-sm bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md border border-slate-700 font-mono hover:border-emerald-500/50 hover:text-emerald-300 transition-all duration-300"
                        >
                          {framework}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl" />
              </div>
            );
          })}
        </div>
        
        {/* Additional skills banner */}
        <div className="mt-12 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
          <p className="text-center text-slate-400 mb-4">
            <span className="text-emerald-400 font-semibold">Additional expertise:</span>
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['PHP', 'Dart', 'JavaScript', 'C++', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'Git', 'AWS'].map((skill, index) => (
              <span
                key={index}
                className="text-sm bg-slate-800/50 text-slate-300 px-4 py-2 rounded-lg border border-slate-700/50 font-mono"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}