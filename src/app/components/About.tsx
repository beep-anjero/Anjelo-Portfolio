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
    <section id="about" className="bg-[#f5f0e8] px-4 py-24 transition-colors duration-500 sm:px-6 lg:px-8 dark:bg-[#11100e]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-10">
            <p className="font-mono text-sm uppercase tracking-[0.28em] text-[#d95f35]">About</p>
            <h2 className="mt-4 text-[clamp(3.25rem,7vw,6.75rem)] font-black uppercase leading-[0.84] text-[#191714] transition-colors dark:text-[#f5f0e8]">
              Practical engineer. Curious builder.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#575047] transition-colors dark:text-[#c9bca9]">
              I am Jullian Anjelo C. Vidal, a Junior Software Engineer who enjoys building the quiet parts of software that make the visible parts work well.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#575047] transition-colors dark:text-[#c9bca9]">
              My projects sit across mobile apps, machine learning tools, and database systems. The common thread is simple: make complicated work easier for the person using the product.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="border border-[#191714]/10 bg-[#fdfaf4] p-6 shadow-sm transition-colors dark:border-white/10 dark:bg-[#211e19]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#191714] text-[#f4c542] dark:bg-[#f4c542] dark:text-[#191714]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-black uppercase leading-tight text-[#191714] dark:text-[#f5f0e8]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#575047] dark:text-[#c9bca9]">{item.copy}</p>
                </article>
              );
            })}

            <div className="border border-[#191714]/10 bg-[#d95f35] p-6 text-white sm:col-span-2 dark:border-white/10">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/75">Working style</p>
              <p className="mt-4 text-3xl font-black uppercase leading-tight">
                I like software that is direct, maintainable, and easy to explain to the next person who has to improve it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
