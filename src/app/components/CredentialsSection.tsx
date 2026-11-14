import { ArrowUpRight, Check } from 'lucide-react';

export function CredentialsSection() {
  return (
    <section id="credentials" className="section credentials">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <p className="eyebrow">Credentials</p>
            <h2>Verified foundations.</h2>
          </div>
          <p>
            Industry-recognized proof of database design, querying, and
            administration fundamentals.
          </p>
        </div>
        <article className="credential-card">
          <div className="credential-seal">
            <img
              src="/images/it-specialist-databases.png"
              alt="IT Specialist — Databases certification badge issued by Certiport"
            />
            <span>Verified digital credential</span>
          </div>
          <div className="credential-copy">
            <p className="eyebrow">Certiport · A Pearson VUE Business</p>
            <h3>IT Specialist — Databases</h3>
            <p>
              Validates competency in relational database architecture, SQL
              query formulation, and structured transaction management.
            </p>
            <ul>
              <li>
                <Check />
                Database design &amp; schema normalization
              </li>
              <li>
                <Check />
                SQL data manipulation language
              </li>
              <li>
                <Check />
                SQL data definition language
              </li>
              <li>
                <Check />
                Security, administration &amp; transaction control
              </li>
            </ul>
            <a
              className="button ghost"
              href="https://www.credly.com/badges/8bcb7d31-34c1-4028-bcb8-8c1c28d9aa2d"
              target="_blank"
              rel="noreferrer"
            >
              Verify on Credly <ArrowUpRight />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
