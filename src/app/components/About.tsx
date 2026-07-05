import { Blocks, Code2, Layers, Zap } from 'lucide-react';

const principles = [
  {
    title: 'Start With The Workflow',
    icon: Blocks,
    copy: 'I map what the user needs to finish, then shape the data model and interface around that path.',
  },
  {
    title: 'Make The Backend Honest',
    icon: Code2,
    copy: 'Clear schemas, predictable endpoints, and readable service logic matter more to me than clever code.',
  },
  {
    title: 'Keep Feedback Fast',
    icon: Zap,
    copy: 'I care about responsive interactions, useful errors, and small details that make software feel trustworthy.',
  },
  {
    title: 'Connect The Layers',
    icon: Layers,
    copy: 'Frontend, backend, and database choices should support each other instead of becoming separate islands.',
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-[#071014]/15 bg-[#eef8f6] px-4 py-20 text-[#071014] transition-colors duration-500 sm:px-6 lg:px-8 lg:py-24 dark:border-[#eef8f6]/15 dark:bg-[#09161a] dark:text-[#eef8f6]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 border-y border-[#071014]/15 py-8 dark:border-[#eef8f6]/15">
          <p className="max-w-6xl text-4xl font-black uppercase leading-[0.92] sm:text-6xl lg:text-7xl">
            I turn rough ideas into software that feels clear, useful, and ready to improve.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-10">
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-[#0b8e83] dark:text-[#18d6c4]">/About</p>
            <h2 className="mt-4 text-5xl font-black uppercase leading-[0.84] sm:text-7xl lg:text-8xl">
              Practical engineer. Curious builder.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#435550] dark:text-[#b7cac5]">
              I am Jullian Anjelo C. Vidal, a Computer Science Intern who enjoys building the quiet parts of software that make the visible parts work well.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#435550] dark:text-[#b7cac5]">
              My projects sit across mobile apps, machine learning tools, and database systems. The common thread is simple: make complicated work easier for the person using the product.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="rounded-[8px] border border-[#071014]/15 bg-[#f7fbf8] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0b8e83] dark:border-[#eef8f6]/15 dark:bg-[#0d1b20] dark:hover:border-[#18d6c4]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#071014] text-[#18d6c4] dark:bg-[#eef8f6] dark:text-[#071014]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-black uppercase leading-tight">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#435550] dark:text-[#b7cac5]">{item.copy}</p>
                </article>
              );
            })}

            <div className="rounded-[8px] border border-[#071014]/15 bg-[#071014] p-6 text-[#eef8f6] sm:col-span-2 dark:border-[#eef8f6]/15 dark:bg-[#d9ff5d] dark:text-[#071014]">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#18d6c4] dark:text-[#496516]">/Working style</p>
              <p className="mt-4 text-2xl font-black uppercase leading-tight sm:text-3xl">
                I like software that is direct, maintainable, and easy to explain to the next person who has to improve it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
