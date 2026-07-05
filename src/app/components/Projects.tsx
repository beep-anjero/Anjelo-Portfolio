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
    <section id="projects" className="border-b border-[#071014]/15 bg-[#dcebe8] px-4 py-20 text-[#071014] transition-colors duration-500 sm:px-6 lg:px-8 lg:py-24 dark:border-[#eef8f6]/15 dark:bg-[#071014] dark:text-[#eef8f6]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-8 border-b border-[#071014]/15 pb-10 dark:border-[#eef8f6]/15 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-[#0b8e83] dark:text-[#18d6c4]">/Featured builds</p>
            <h2 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-[0.84] sm:text-7xl lg:text-8xl">
              Work with a job to do.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-[#435550] dark:text-[#b7cac5]">
            Each build solves a concrete problem: managing operations, predicting outcomes, or making database design easier to understand.
          </p>
        </div>

        <div className="grid gap-5">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group grid overflow-hidden rounded-[8px] border border-[#071014]/15 bg-[#f7fbf8] shadow-sm transition duration-500 hover:-translate-y-1 hover:border-[#0b8e83] hover:shadow-[0_22px_60px_rgba(7,16,20,0.12)] dark:border-[#eef8f6]/15 dark:bg-[#0d1b20] dark:hover:border-[#18d6c4] lg:grid-cols-[0.86fr_1.14fr]"
            >
              <div className={`relative min-h-[18rem] overflow-hidden bg-[#c6d8d3] dark:bg-[#13282f] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#071014]/10 mix-blend-multiply dark:bg-[#071014]/20" />
                <span className="absolute left-5 top-5 border border-[#071014]/15 bg-[#eef8f6]/90 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#071014] dark:border-[#eef8f6]/15 dark:bg-[#071014]/85 dark:text-[#eef8f6]">
                  {project.eyebrow}
                </span>
                <span className="absolute bottom-5 right-5 font-mono text-6xl font-black text-white/85">
                  /0{index + 1}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#0b8e83] dark:text-[#18d6c4]">Selected work</p>
                    <h3 className="mt-4 text-4xl font-black uppercase leading-none text-[#071014] sm:text-5xl dark:text-[#eef8f6]">{project.title}</h3>
                    <p className="mt-5 text-base leading-7 text-[#435550] dark:text-[#b7cac5]">{project.problemSolved}</p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-[#18d6c4] text-[#071014] sm:flex">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>

                <div className="mt-7 grid gap-4 border-y border-[#071014]/15 py-5 dark:border-[#eef8f6]/15 sm:grid-cols-2">
                  <div className="flex gap-3">
                    <Target className="mt-1 h-5 w-5 shrink-0 text-[#0b8e83] dark:text-[#18d6c4]" />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#70847f] dark:text-[#91a5a0]">Outcome</p>
                      <p className="mt-1 font-semibold text-[#071014] dark:text-[#eef8f6]">{project.result}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Layers className="mt-1 h-5 w-5 shrink-0 text-[#0b8e83] dark:text-[#18d6c4]" />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#70847f] dark:text-[#91a5a0]">Stack</p>
                      <p className="mt-1 font-semibold text-[#071014] dark:text-[#eef8f6]">{project.tools.join(', ')}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-[#071014]/15 px-4 py-2.5 font-semibold text-[#071014] transition hover:border-[#18d6c4] hover:bg-white dark:border-[#eef8f6]/15 dark:text-[#eef8f6] dark:hover:bg-[#13282f]">
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#071014] px-4 py-2.5 font-semibold text-[#eef8f6] transition hover:-translate-y-0.5 hover:bg-[#0b8e83] dark:bg-[#d9ff5d] dark:text-[#071014] dark:hover:bg-[#18d6c4]">
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
