import { useState } from 'react';
import { Check, Copy, Github, Linkedin } from 'lucide-react';

export function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const email = 'anjelovidal28@gmail.com';

  const copy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <footer id="contact" className="contact section">
      <div className="section-inner contact-grid">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2>
            Have a useful problem?
            <br />
            <span>Let's build it.</span>
          </h2>
        </div>
        <div className="contact-panel">
          <p>
            I'm open to computer science internships, collaborative builds, and
            thoughtful conversations about backend architecture and product
            interfaces.
          </p>
          <button className="email-button" onClick={copy}>
            <span>
              <small>{copied ? 'Copied to clipboard' : 'Email me directly'}</small>
              {email}
            </span>
            {copied ? <Check /> : <Copy />}
          </button>
          <div className="socials">
            <a
              href="https://github.com/beep-anjero"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anjelo-vidal/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="footer-line">
        <span>© {new Date().getFullYear()} Jullian Anjelo C. Vidal</span>
        <span>React · Vite · TypeScript</span>
      </div>
    </footer>
  );
}
