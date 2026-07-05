import { ArrowUpRight, Github, Layers, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'MicroBiz',
    eyebrow: 'Mobile business toolkit',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    problemSolved: 'Mobile-first business management with local state and offline data persistence, built for owners who need the app to keep working during spotty connectivity.',
    result: 'Offline-ready workflows',
    tools: ['Dart', 'Flutter', 'SQLite', 'Provider'],
    codeUrl: 'https://github.com/beep-anjero/MicroBiz',
    liveUrl: 'https://github.com/beep-anjero/MicroBiz#readme',
  },
  {
    title: 'Student Result Predictor',
    eyebrow: 'ML web application',
    image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    problemSolved: 'A prediction interface for academic outcomes, connecting preprocessing, model training, and real-time Flask predictions behind a simple web flow.',
    result: 'Model to browser pipeline',
    tools: ['Python', 'Flask', 'Scikit-learn', 'HTML/CSS'],
    codeUrl: 'https://github.com/beep-anjero/Student_result_predictor',
    liveUrl: 'https://student-result-predictor-theta.vercel.app/',
  },
  {
    title: 'JejeNorm',
    eyebrow: 'Database design helper',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    problemSolved: 'A database normalization tool that analyzes schemas and suggests cleaner normal forms for developers designing relational systems.',
    result: 'Schema analysis guidance',
    tools: ['Python', 'Django', 'PostgreSQL', 'Vercel'],
    codeUrl: 'https://github.com/beep-anjero/JejeNorm',
    liveUrl: 'https://jeje-norm.vercel.app',
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-[#191714] px-4 py-24 text-[#f5f0e8] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.28em] text-[#f4c542]">Selected Work</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
              Projects with a job to do.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[#c9bca9]">
            Each build solves a concrete problem: managing operations, predicting outcomes, or making database design easier to understand.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group overflow-hidden border border-white/10 bg-[#25211c] transition duration-500 hover:-translate-y-1 hover:border-[#f4c542]/45 ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div className={`relative overflow-hidden bg-[#332d25] ${index === 0 ? 'h-80' : 'h-56'}`}>
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191714] via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-[#f5f0e8] px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#191714]">
                  {project.eyebrow}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-3xl font-black text-white">{project.title}</h3>
                    <p className="mt-4 text-base leading-7 text-[#c9bca9]">{project.problemSolved}</p>
                  </div>
                  <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d95f35] text-white sm:flex">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>

                <div className="mt-7 grid gap-4 border-y border-white/10 py-5 sm:grid-cols-2">
                  <div className="flex gap-3">
                    <Target className="mt-1 h-5 w-5 shrink-0 text-[#f4c542]" />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8f8170]">Outcome</p>
                      <p className="mt-1 font-semibold text-[#f5f0e8]">{project.result}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Layers className="mt-1 h-5 w-5 shrink-0 text-[#f4c542]" />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8f8170]">Stack</p>
                      <p className="mt-1 font-semibold text-[#f5f0e8]">{project.tools.join(', ')}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 font-semibold text-[#f5f0e8] transition hover:bg-white/10"
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f4c542] px-4 py-2.5 font-bold text-[#191714] transition hover:-translate-y-0.5 hover:bg-[#ffd95e]"
                  >
                    Live
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
