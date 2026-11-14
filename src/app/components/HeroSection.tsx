import { ArrowUpRight, Github } from 'lucide-react';
import { Terminal } from './Terminal';

export function HeroSection() {
  return (
    <section className="hero section">
      <div className="hero-glow" />
      <div className="section-inner hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            Computer science intern · Philippines
          </p>
          <h1>
            <span>Building useful</span>
            <br />
            software, end to end.
          </h1>
          <p className="hero-lead">
            I'm Anjelo, a full-stack developer building reliable web
            applications, clean APIs, and responsive product experiences.
          </p>
          <div className="hero-actions">
            <a className="button accent" href="#work">
              Explore my work <ArrowUpRight />
            </a>
            <a
              className="button ghost"
              href="https://github.com/beep-anjero"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
              GitHub
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="core">
            <div className="cube">
              {['front', 'back', 'right', 'left', 'top', 'bottom'].map(
                (f) => (
                  <span key={f} className={`face ${f}`} />
                ),
              )}
            </div>
          </div>
          <Terminal />
        </div>
      </div>
      <div className="ticker">
        <div>
          Laravel ◆ Vue.js ◆ Python ◆ Flutter ◆ PostgreSQL ◆ TypeScript ◆ REST
          APIs ◆ Product Engineering
        </div>
      </div>
    </section>
  );
}
