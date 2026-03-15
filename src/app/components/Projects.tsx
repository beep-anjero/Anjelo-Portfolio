import { FileText, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'MicroBiz',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    problemSolved: 'Built a mobile-first business management application using Flutter/Dart. Implemented local state management and data persistence for offline-first functionality, ensuring smooth UX even without network connectivity.',
    tools: ['Dart', 'Flutter', 'SQLite', 'Provider'],
    codeUrl: 'https://github.com/beep-anjero/MicroBiz',
    docsUrl: 'https://github.com/beep-anjero/MicroBiz#readme',
  },
  {
    title: 'Student Result Predictor',
    image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    problemSolved: 'Developed a machine learning web application to predict student academic performance. Integrated data preprocessing, model training, and real-time predictions through a clean web interface deployed on Vercel.',
    tools: ['Python', 'Flask', 'Scikit-learn', 'HTML/CSS'],
    codeUrl: 'https://github.com/beep-anjero/Student_result_predictor',
    docsUrl: 'https://student-result-predictor-theta.vercel.app/',
  },
  {
    title: 'JejeNorm',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    problemSolved: 'Created a Python-based web application with database normalization tools. Implemented algorithms to analyze database schemas and recommend optimal normal forms, helping developers design efficient relational databases.',
    tools: ['Python', 'Django', 'PostgreSQL', 'Vercel'],
    codeUrl: 'https://github.com/beep-anjero/JejeNorm',
    docsUrl: 'https://jeje-norm.vercel.app',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-lg">
            <span className="text-sm text-emerald-300 font-mono">💼 Selected Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Production-ready solutions showcasing backend engineering excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 bg-slate-800">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              </div>
              
              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                
                {/* Problem Solved */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-4 bg-emerald-400 rounded-full" />
                    <p className="text-xs uppercase tracking-wider text-emerald-400 font-mono font-semibold">
                      Problem Solved
                    </p>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>
                
                {/* Tools Used */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-mono mb-3">
                    Tools Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="text-xs bg-slate-800 text-emerald-300 px-3 py-1.5 rounded-md border border-slate-700 font-mono"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={project.codeUrl}
                    className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-3 rounded-lg border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group/btn"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-mono">Source</span>
                  </a>
                  <a
                    href={project.docsUrl}
                    className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-slate-950 px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 group/btn"
                  >
                    <FileText className="w-4 h-4" />
                    <span className="text-sm font-mono">Live Demo</span>
                  </a>
                </div>
              </div>
              
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}