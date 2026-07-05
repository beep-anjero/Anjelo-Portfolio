import { Code2, Database, FileCode, Server } from 'lucide-react';

const powerTrio = [
  {
    name: 'TypeScript',
    icon: Code2,
    description: 'Interfaces, reusable components, API integration, and tooling that keeps the frontend predictable.',
    accent: 'bg-[#18d6c4] text-[#071014]',
    frameworks: ['React', 'Node.js', 'Vite'],
  },
  {
    name: 'Python',
    icon: FileCode,
    description: 'Model experiments, Flask/Django applications, automation scripts, and practical data workflows.',
    accent: 'bg-[#ff6b6b] text-[#071014]',
    frameworks: ['Django', 'Flask', 'FastAPI'],
  },
  {
    name: 'Java',
    icon: Server,
    description: 'Object-oriented services, structured backend logic, and maintainable application layers.',
    accent: 'bg-[#d9ff5d] text-[#071014]',
    frameworks: ['Spring Boot', 'Hibernate', 'Maven'],
  },
];

export function PowerTrio() {
  return (
    <section id="services" className="border-b border-[#071014]/15 bg-[#eef8f6] px-4 py-20 text-[#071014] transition-colors duration-500 sm:px-6 lg:px-8 lg:py-24 dark:border-[#eef8f6]/15 dark:bg-[#09161a] dark:text-[#eef8f6]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-[#071014]/15 pb-10 dark:border-[#eef8f6]/15 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-[#0b8e83] dark:text-[#18d6c4]">Services</p>
            <h2 className="mt-4 text-5xl font-black uppercase leading-[0.84] sm:text-7xl lg:text-8xl">
              What I can build.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#435550] dark:text-[#b7cac5] lg:justify-self-end">
            A focused set of development services: soft in presentation, direct in purpose, and built around real product workflows.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {powerTrio.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <article key={tech.name} className="group relative overflow-hidden rounded-[8px] border border-[#071014]/15 bg-[#f7fbf8] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0b8e83] hover:shadow-[0_18px_50px_rgba(7,16,20,0.1)] dark:border-[#eef8f6]/15 dark:bg-[#0d1b20] dark:hover:border-[#18d6c4]">
                <div className="absolute inset-x-0 top-0 h-1 bg-[#071014] dark:bg-[#eef8f6]" />
                <div className="flex items-center justify-between">
                  <div className={`flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-[8px] ${tech.accent} shadow-sm transition group-hover:rotate-3`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-sm text-[#70847f] dark:text-[#91a5a0]">0{index + 1}</span>
                </div>

                <h3 className="mt-7 text-4xl font-black uppercase leading-none">{tech.name}</h3>
                <p className="mt-4 min-h-28 text-base leading-7 text-[#435550] dark:text-[#b7cac5]">{tech.description}</p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {tech.frameworks.map((framework) => (
                    <span key={framework} className="border border-[#071014]/15 bg-[#eaf5f3] px-3 py-1.5 font-mono text-xs font-semibold text-[#435550] dark:border-[#eef8f6]/15 dark:bg-[#071014] dark:text-[#b7cac5]">
                      {framework}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-5 grid gap-4 rounded-[8px] border border-[#071014]/15 bg-[#071014] p-5 text-[#eef8f6] md:grid-cols-[auto_1fr] md:items-center dark:border-[#eef8f6]/15 dark:bg-[#d9ff5d] dark:text-[#071014]">
          <div className="flex h-14 w-14 items-center justify-center rounded-[8px] bg-[#18d6c4] text-[#071014] dark:bg-[#071014] dark:text-[#d9ff5d]">
            <Database className="h-6 w-6" />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#18d6c4] dark:text-[#496516]">Also comfortable with</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['PHP', 'Dart', 'JavaScript', 'C++', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'Git', 'AWS'].map((skill) => (
                <span key={skill} className="border border-white/15 bg-white/10 px-3 py-1.5 font-mono text-xs dark:border-[#071014]/15 dark:bg-[#071014]/10">
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
