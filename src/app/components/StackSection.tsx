type Capability = readonly [number: string, title: string, description: string];

type StackSectionProps = {
  capabilities: readonly Capability[];
};

export function StackSection({ capabilities }: StackSectionProps) {
  return (
    <section id="stack" className="section stack">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <p className="eyebrow">What I build</p>
            <h2>Across the whole stack.</h2>
          </div>
          <p>
            Technical depth paired with product judgment—from schema to
            interface.
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map((c) => (
            <article className="capability" key={c[0]}>
              <div className="iso-icon">
                <span />
                <span />
                <span />
              </div>
              <p className="cap-number">{c[0]}</p>
              <h3>{c[1]}</h3>
              <p>{c[2]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
