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
    <section id="about" className="bg-[#fbf8f2] px-4 py-24 text-[#1d1b18] transition-colors duration-500 sm:px-6 lg:px-8 dark:bg-[#151411] dark:text-[#f7f2ea]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 rounded-lg border border-[#1d1b18]/10 bg-[#f7f2ea] p-8 dark:border-white/10 dark:bg-[#1e1c18]">
          <p className="max-w-6xl text-[clamp(2.25rem,5.4vw,5.25rem)] font-black uppercase leading-[0.92]">
            I turn rough ideas into software that feels clear, useful, and ready to improve.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-10">
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-[#d95f35]">About</p>
            <h2 className="mt-4 text-[clamp(3rem,7vw,6.5rem)] font-black uppercase leading-[0.86]">
              Practical engineer. Curious builder.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6b6258] dark:text-[#cfc4b6]">
              I am Jullian Anjelo C. Vidal, a Junior Software Engineer who enjoys building the quiet parts of software that make the visible parts work well.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#6b6258] dark:text-[#cfc4b6]">
              My projects sit across mobile apps, machine learning tools, and database systems. The common thread is simple: make complicated work easier for the person using the product.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="rounded-lg border border-[#1d1b18]/10 bg-[#f7f2ea] p-6 shadow-sm dark:border-white/10 dark:bg-[#1e1c18]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1d1b18] text-[#f4c542] dark:bg-[#f4c542] dark:text-[#1d1b18]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-black uppercase leading-tight">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#6b6258] dark:text-[#cfc4b6]">{item.copy}</p>
                </article>
              );
            })}

            <div className="rounded-lg border border-[#1d1b18]/10 bg-[#d95f35] p-6 text-white sm:col-span-2 dark:border-white/10">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/75">Working style</p>
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
