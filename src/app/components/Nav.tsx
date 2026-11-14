import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <a className="brand" href="#top">
        <span className="brand-mark" />
        JACV
        <span className="brand-year">/26</span>
      </a>

      <nav className={open ? 'nav-links open' : 'nav-links'}>
        <a href="#work">Work</a>
        <a href="#stack">Stack</a>
        <a href="#about">About</a>
        <a href="#credentials">Credentials</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="nav-cta" href="#contact">
        Let's talk
      </a>

      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
