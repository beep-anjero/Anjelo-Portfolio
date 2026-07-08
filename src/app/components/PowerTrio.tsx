import { Database } from 'lucide-react';
import { motion } from 'framer-motion';

/* ── Real brand logos as inline SVG components ── */

function TypeScriptLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="20" fill="#3178C6"/>
      <path d="M150.518 200.475V228.121C154.984 230.459 160.322 232.243 166.53 233.473C172.739 234.703 179.302 235.318 186.219 235.318C192.965 235.318 199.177 234.58 204.855 233.104C210.534 231.628 215.413 229.393 219.494 226.4C223.575 223.406 226.735 219.615 228.973 215.027C231.211 210.438 232.33 205.06 232.33 198.892C232.33 194.426 231.695 190.488 230.424 187.076C229.153 183.665 227.285 180.6 224.82 177.881C222.356 175.163 219.329 172.69 215.74 170.462C212.152 168.234 208.04 166.101 203.404 164.063C200.065 162.622 197.128 161.194 194.592 159.779C192.056 158.364 189.93 156.918 188.214 155.442C186.498 153.966 185.193 152.386 184.3 150.703C183.407 149.019 182.96 147.127 182.96 145.026C182.96 143.097 183.372 141.345 184.196 139.769C185.02 138.194 186.222 136.836 187.802 135.697C189.381 134.558 191.324 133.667 193.63 133.023C195.936 132.379 198.562 132.057 201.507 132.057C203.63 132.057 205.859 132.228 208.194 132.57C210.528 132.913 212.862 133.459 215.196 134.21C217.53 134.961 219.765 135.908 221.899 137.052C224.033 138.196 225.95 139.509 227.652 140.992V115.313C223.53 113.693 219.011 112.491 214.093 111.705C209.176 110.92 203.579 110.527 197.303 110.527C190.627 110.527 184.433 111.325 178.723 112.92C173.012 114.515 168.072 116.912 163.901 120.111C159.73 123.31 156.464 127.282 154.103 132.028C151.742 136.773 150.561 142.266 150.561 148.504C150.561 156.212 152.587 162.845 156.641 168.404C160.694 173.962 167.208 178.791 176.183 182.891C179.699 184.442 182.828 185.944 185.571 187.398C188.314 188.853 190.637 190.335 192.54 191.846C194.443 193.357 195.906 194.958 196.929 196.65C197.952 198.342 198.464 200.222 198.464 202.29C198.464 204.115 198.084 205.78 197.325 207.286C196.566 208.791 195.395 210.088 193.812 211.176C192.23 212.264 190.269 213.112 187.929 213.72C185.59 214.329 182.86 214.633 179.741 214.633C174.445 214.633 169.217 213.606 164.058 211.551C158.899 209.497 154.328 206.518 150.518 200.475Z" fill="white"/>
      <path d="M106.08 132.886H141.18V111.814H44.629V132.886H79.529V228.875H106.08V132.886Z" fill="white"/>
    </svg>
  );
}

function PythonLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 255" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pyBlue" x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%">
          <stop offset="0%" stopColor="#387EB8"/>
          <stop offset="100%" stopColor="#366994"/>
        </linearGradient>
        <linearGradient id="pyYellow" x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%">
          <stop offset="0%" stopColor="#FFC836"/>
          <stop offset="100%" stopColor="#FFD43B"/>
        </linearGradient>
      </defs>
      <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="url(#pyBlue)"/>
      <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.519 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="url(#pyYellow)"/>
    </svg>
  );
}

function JavaLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 346" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M82.554 267.473s-13.198 7.675 9.393 10.272c27.369 3.122 41.356 2.675 71.517-3.034 0 0 7.93 4.972 19.003 9.279-67.611 28.977-153.019-1.679-99.913-16.517M74.292 229.66s-14.803 10.958 7.805 13.296c29.236 3.016 52.324 3.263 92.276-4.43 0 0 5.526 5.602 14.215 8.666-81.747 23.904-172.839 1.885-114.296-17.532" fill="#5382A1"/>
      <path d="M143.942 165.515c16.66 19.18-4.377 36.44-4.377 36.44s42.301-21.837 22.874-49.183c-18.144-25.5-32.059-38.172 43.268-81.858 0 0-118.238 29.53-61.765 94.6" fill="#E76F00"/>
      <path d="M233.364 295.442s9.767 8.047-10.757 14.273c-39.026 11.823-162.432 15.393-196.714.471-12.323-5.36 10.787-12.8 18.056-14.362 7.581-1.644 11.914-1.337 11.914-1.337-13.705-9.655-88.583 18.957-38.034 27.15 137.853 22.356 251.292-10.066 215.535-26.195M88.9 190.48s-62.771 14.91-22.228 20.323c17.118 2.292 51.243 1.774 83.03-.89 25.978-2.19 52.063-6.85 52.063-6.85s-9.16 3.923-15.787 8.448c-63.744 16.765-186.886 8.966-151.435-8.183 29.981-14.492 54.358-12.848 54.358-12.848M201.506 253.422c64.8-33.672 34.839-66.03 13.927-61.67-5.126 1.066-7.411 1.99-7.411 1.99s1.903-2.98 5.537-4.27c41.37-14.545 73.187 42.897-13.355 65.647 0 0 1.003-.895 1.302-1.697" fill="#5382A1"/>
      <path d="M162.439.371s35.887 35.9-34.037 91.101c-56.071 44.282-12.786 69.53-.023 98.377-32.73-29.53-56.75-55.526-40.635-79.72C111.395 74.612 176.918 57.393 162.439.37" fill="#E76F00"/>
      <path d="M95.268 344.665c62.199 3.982 157.712-2.209 159.974-31.64 0 0-4.348 11.158-51.404 20.018-53.088 9.99-118.564 8.824-157.399 2.421 0 0 7.95 6.58 48.83 9.201" fill="#5382A1"/>
    </svg>
  );
}

/* ── Icon wrapper to render SVG logos inside the accent box ── */
type LogoComponent = ({ className }: { className?: string }) => JSX.Element;

const powerTrio: {
  name: string;
  icon: LogoComponent;
  description: string;
  accent: string;
  frameworks: string[];
}[] = [
  {
    name: 'TypeScript',
    icon: TypeScriptLogo,
    description: 'Interfaces, reusable components, API integration, and tooling that keeps the frontend predictable.',
    accent: 'bg-[#3178C6]/15',
    frameworks: ['React', 'Node.js', 'Vite'],
  },
  {
    name: 'Python',
    icon: PythonLogo,
    description: 'Model experiments, Flask/Django applications, automation scripts, and practical data workflows.',
    accent: 'bg-[#FFD43B]/15',
    frameworks: ['Django', 'Flask', 'FastAPI'],
  },
  {
    name: 'Java',
    icon: JavaLogo,
    description: 'Object-oriented services, structured backend logic, and maintainable application layers.',
    accent: 'bg-[#E76F00]/15',
    frameworks: ['Spring Boot', 'Hibernate', 'Maven'],
  },
];

const auxiliarySkills = [
  'PHP', 'Dart', 'JavaScript', 'C++', 'PostgreSQL', 
  'MySQL', 'MongoDB', 'Redis', 'Docker', 'Git', 'AWS'
];

export function PowerTrio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 85, damping: 14 },
    },
  };

  return (
    <section id="services" className="relative overflow-hidden border-b border-border bg-background py-20 px-4 text-foreground transition-colors duration-500 sm:px-6 lg:px-8 lg:py-28">
      {/* Background grid */}
      <div className="absolute inset-0 portfolio-grid opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-14 border-b border-border/60 pb-12">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent)]">Capabilities</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            What I build.
          </h2>
        </div>

        {/* Bento Language Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {powerTrio.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.article
                key={tech.name}
                variants={itemVariants}
                className="bento-card p-6 sm:p-8 flex flex-col justify-between group min-h-[24rem]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${tech.accent} shadow-md transition-all duration-300 group-hover:scale-105 overflow-hidden`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-muted-foreground/50">CORE // 0{index + 1}</span>
                  </div>

                  <h3 className="mt-8 text-3xl font-black uppercase tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-border/40">
                  {tech.frameworks.map((framework) => (
                    <span 
                      key={framework} 
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-[10px] font-bold text-muted-foreground"
                    >
                      {framework}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom Bento Box: Auxiliary Skills */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 rounded-2xl border border-border bg-card p-6 sm:p-8 grid gap-6 md:grid-cols-[auto_1fr] md:items-center hover:border-border/80 transition-colors"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
            <Database className="h-5.5 w-5.5" />
          </div>
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--accent)]">Auxiliary Tech Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {auxiliarySkills.map((skill) => (
                <span 
                  key={skill} 
                  className="rounded-full border border-border bg-background px-4 py-1.5 font-mono text-[10px] font-bold text-foreground transition-all duration-300 hover:border-[var(--accent)] hover:bg-secondary cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
