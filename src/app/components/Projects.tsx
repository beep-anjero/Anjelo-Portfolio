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
    <section id="projects" className="bg-[#fbf8f2] px-4 py-24 text-[#1d1b18] transition-colors duration-500 sm:px-6 lg:px-8 dark:bg-[#151411] dark:text-[#f7f2ea]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 border-b border-[#1d1b18]/10 pb-10 dark:border-white/10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-[#d95f35]">Featured builds</p>
            <h2 className="mt-4 max-w-4xl text-[clamp(3rem,8vw,7.5rem)] font-black uppercase leading-[0.86]">
              Work with a job to do.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-[#6b6258] dark:text-[#cfc4b6]">
            Each build solves a concrete problem: managing operations, predicting outcomes, or making database design easier to understand.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-lg border border-[#1d1b18]/10 bg-[#f7f2ea] shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(60,48,34,0.12)] dark:border-white/10 dark:bg-[#1e1c18] ${index === 0 ? 'lg:col-span-7' : 'lg:col-span-5'}`}
            >
              <div className={`relative overflow-hidden bg-[#ebe2d5] ${index === 0 ? 'h-80' : 'h-56'}`}>
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 rounded-full bg-[#f7f2ea]/90 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#1d1b18] dark:bg-[#11110f]/85 dark:text-[#f7f2ea]">
                  {project.eyebrow}
                </span>
                <span className="absolute bottom-5 right-5 font-mono text-5xl font-black text-white/80">
                  0{index + 1}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-3xl font-black text-[#1d1b18] dark:text-[#f7f2ea]">{project.title}</h3>
                    <p className="mt-4 text-base leading-7 text-[#6b6258] dark:text-[#cfc4b6]">{project.problemSolved}</p>
                  </div>
                  <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d95f35] text-white sm:flex">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>

                <div className="mt-7 grid gap-4 border-y border-[#1d1b18]/10 py-5 dark:border-white/10 sm:grid-cols-2">
                  <div className="flex gap-3">
                    <Target className="mt-1 h-5 w-5 shrink-0 text-[#d95f35]" />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#9b8f7f]">Outcome</p>
                      <p className="mt-1 font-semibold text-[#1d1b18] dark:text-[#f7f2ea]">{project.result}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Layers className="mt-1 h-5 w-5 shrink-0 text-[#d95f35]" />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#9b8f7f]">Stack</p>
                      <p className="mt-1 font-semibold text-[#1d1b18] dark:text-[#f7f2ea]">{project.tools.join(', ')}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1d1b18]/10 px-4 py-2.5 font-semibold text-[#1d1b18] transition hover:bg-white dark:border-white/10 dark:text-[#f7f2ea] dark:hover:bg-white/10">
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1d1b18] px-4 py-2.5 font-semibold text-[#f7f2ea] transition hover:-translate-y-0.5 hover:bg-[#2e2a25] dark:bg-[#f4c542] dark:text-[#1d1b18] dark:hover:bg-[#ffd95e]">
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
