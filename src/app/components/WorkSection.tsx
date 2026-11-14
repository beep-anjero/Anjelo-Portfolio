import { ArrowUpRight, Github } from 'lucide-react';
import type { ComponentType } from 'react';

type Project = readonly [
  name: string,
  category: string,
  image: string,
  description: string,
  tags: readonly string[],
  repoUrl: string,
  icon: ComponentType,
  liveUrl: string,
];

type WorkSectionProps = {
  projects: readonly Project[];
};

export function WorkSection({ projects }: WorkSectionProps) {
  return (
    <section id="work" className="section work">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Projects made to be used.</h2>
          </div>
          <p>
            Projects spanning crew scheduling, passenger mobility, data tools,
            machine learning, and education.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((p, i) => {
            const ProjectIcon = p[6];
            return (
              <article className="project-card" key={p[0]}>
                <a
                  className="project-image"
                  href={p[7] || p[5]}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${p[0]} project link`}
                >
                  {p[2] ? (
                    <img src={p[2]} alt={`${p[0]} screenshot`} />
                  ) : (
                    <div className="project-artwork">
                      <ProjectIcon />
                      <span>{p[0]}</span>
                      <small>{p[1]}</small>
                    </div>
                  )}
                  <span className="project-index">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="open-icon">
                    <ArrowUpRight />
                  </span>
                </a>
                <div className="project-copy">
                  <p className="eyebrow">{p[1]}</p>
                  <h3>{p[0]}</h3>
                  <p>{p[3]}</p>
                  <div className="tags">
                    {p[4].map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  {p[7] && p[0] !== 'Timplora' && (
                    <div className="project-links">
                      <a href={p[5]} target="_blank" rel="noreferrer">
                        <Github />
                        Source
                      </a>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
