export function AboutSection() {
  return (
    <section id="about" className="section about">
      <div className="section-inner about-grid">
        <div className="portrait">
          <img src="/images/anjelo-profile.png" alt="Jullian Anjelo C. Vidal" />
          <div className="portrait-label">
            <span className="status-dot" />
            based in the Philippines
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">About me</p>
          <h2>
            Curious by default.
            <br />
            Precise by practice.
          </h2>
          <p className="about-lead">
            I like turning complex requirements into software that feels
            straightforward.
          </p>
          <p>
            My work sits at the intersection of backend architecture, relational
            data, and clean interface design. I care about dependable
            foundations, considered details, and learning fast enough to make
            each build better than the last.
          </p>
          <div className="about-stats">
            <div>
              <strong>07</strong>
              <span>Featured builds</span>
            </div>
            <div>
              <strong>10+</strong>
              <span>Technologies</span>
            </div>
            <div>
              <strong>2026</strong>
              <span>Open to work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
