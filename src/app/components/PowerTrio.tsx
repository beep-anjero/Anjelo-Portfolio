import { Code2, Database, FileCode, Server } from 'lucide-react';

const powerTrio = [
  {
    name: 'TypeScript',
    icon: Code2,
    description: 'Interfaces, reusable components, API integration, and tooling that keeps the frontend predictable.',
    accent: 'bg-[#2f6fed]',
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
    accent: 'bg-[#15806d]',
    frameworks: ['Spring Boot', 'Hibernate', 'Maven'],
  },
];

export function PowerTrio() {
  return (
    <section className="bg-[#fdfaf4] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.28em] text-[#d95f35]">Core Stack</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#191714] sm:text-5xl">
              The tools I reach for when ideas need to become working products.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#575047] lg:justify-self-end">
            I like stacks that are boring in production and expressive while building. These are the languages I use to move from backend logic to usable interfaces.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {powerTrio.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <article
                key={tech.name}
                className="group border border-[#191714]/10 bg-[#f5f0e8] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#191714]/25 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className={`flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-lg ${tech.accent} text-white shadow-lg transition group-hover:rotate-3`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-sm text-[#8a7b6a]">0{index + 1}</span>
                </div>

                <h3 className="mt-7 text-3xl font-black text-[#191714]">{tech.name}</h3>
                <p className="mt-3 min-h-24 text-base leading-7 text-[#575047]">{tech.description}</p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {tech.frameworks.map((framework) => (
                    <span
                      key={framework}
                      className="rounded-full border border-[#191714]/10 bg-white/70 px-3 py-1.5 font-mono text-xs font-semibold text-[#575047]"
                    >
                      {framework}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-5 grid gap-4 border border-[#191714]/10 bg-[#191714] p-5 text-[#f5f0e8] md:grid-cols-[auto_1fr] md:items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f4c542] text-[#191714]">
            <Database className="h-6 w-6" />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#f4c542]">Also comfortable with</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['PHP', 'Dart', 'JavaScript', 'C++', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'Git', 'AWS'].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-mono text-xs text-[#f5f0e8]"
                >
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
