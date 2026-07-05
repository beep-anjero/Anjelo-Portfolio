import { Code2, Database, FileCode, Server } from 'lucide-react';

const powerTrio = [
  {
    name: 'TypeScript',
    icon: Code2,
    description: 'Interfaces, reusable components, API integration, and tooling that keeps the frontend predictable.',
    accent: 'bg-[#7f9fd4]',
    frameworks: ['React', 'Node.js', 'Vite'],
  },
  {
    name: 'Python',
    icon: FileCode,
    description: 'Model experiments, Flask/Django applications, automation scripts, and practical data workflows.',
    accent: 'bg-[#d95f35]',
    frameworks: ['Django', 'Flask', 'FastAPI'],
  },
  {
    name: 'Java',
    icon: Server,
    description: 'Object-oriented services, structured backend logic, and maintainable application layers.',
    accent: 'bg-[#8aae9a]',
    frameworks: ['Spring Boot', 'Hibernate', 'Maven'],
  },
];

export function PowerTrio() {
  return (
    <section id="services" className="bg-[#f7f2ea] px-4 py-24 text-[#1d1b18] transition-colors duration-500 sm:px-6 lg:px-8 dark:bg-[#11110f] dark:text-[#f7f2ea]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-[#1d1b18]/10 pb-10 dark:border-white/10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-[#d95f35]">Services</p>
            <h2 className="mt-4 text-[clamp(3rem,7vw,6.5rem)] font-black uppercase leading-[0.86]">
              What I can build.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#6b6258] dark:text-[#cfc4b6] lg:justify-self-end">
            A focused set of development services: soft in presentation, direct in purpose, and built around real product workflows.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {powerTrio.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <article key={tech.name} className="group rounded-lg border border-[#1d1b18]/10 bg-[#fbf8f2] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(60,48,34,0.1)] dark:border-white/10 dark:bg-[#1e1c18]">
                <div className="flex items-center justify-between">
                  <div className={`flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-lg ${tech.accent} text-white shadow-sm transition group-hover:rotate-3`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-sm text-[#9b8f7f]">0{index + 1}</span>
                </div>

                <h3 className="mt-7 text-3xl font-black uppercase leading-none">{tech.name}</h3>
                <p className="mt-3 min-h-24 text-base leading-7 text-[#6b6258] dark:text-[#cfc4b6]">{tech.description}</p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {tech.frameworks.map((framework) => (
                    <span key={framework} className="rounded-full border border-[#1d1b18]/10 bg-white/70 px-3 py-1.5 font-mono text-xs font-semibold text-[#6b6258] dark:border-white/10 dark:bg-white/10 dark:text-[#d8cfc2]">
                      {framework}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-5 grid gap-4 rounded-lg border border-[#1d1b18]/10 bg-[#1d1b18] p-5 text-[#f7f2ea] md:grid-cols-[auto_1fr] md:items-center dark:border-white/10 dark:bg-[#f4c542] dark:text-[#1d1b18]">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f4c542] text-[#1d1b18] dark:bg-[#1d1b18] dark:text-[#f7f2ea]">
            <Database className="h-6 w-6" />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#f4c542] dark:text-[#6a4a18]">Also comfortable with</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['PHP', 'Dart', 'JavaScript', 'C++', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'Git', 'AWS'].map((skill) => (
                <span key={skill} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-mono text-xs dark:border-[#1d1b18]/10 dark:bg-[#1d1b18]/10">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
