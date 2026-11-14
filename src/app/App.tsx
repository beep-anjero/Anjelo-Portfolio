import {
  CalendarDays,
  CarFront,
  BarChart3,
  Database,
  GraduationCap,
  Smartphone,
} from 'lucide-react';

import { Nav } from './components/Nav';
import { HeroSection } from './components/HeroSection';
import { WorkSection } from './components/WorkSection';
import { StackSection } from './components/StackSection';
import { AboutSection } from './components/AboutSection';
import { CredentialsSection } from './components/CredentialsSection';
import { ContactFooter } from './components/ContactFooter';

const projects = [
  [
    'Timplora',
    'Crew scheduling',
    '/images/timplora-preview.png',
    'A restaurant scheduling workspace that builds weekly rosters around crew availability, class schedules, rest-day requests, shift preferences, and staffing needs.',
    ['Next.js', 'TypeScript', 'Neon Auth', 'PostgreSQL'],
    'https://github.com/beep-anjero/Timplora',
    CalendarDays,
    'https://timplora.vercel.app/',
  ],
  [
    'TalaRide',
    'Privacy-first mobility',
    '/images/talaride-preview.png?v=3',
    'A mobile ride log for tricycle and pedicab passengers. Scan vehicle identifiers with on-device OCR, then search locally stored ride details when you need them.',
    ['Expo', 'React Native', 'SQLite', 'On-device OCR'],
    'https://github.com/beep-anjero/TalaRide',
    CarFront,
    '',
  ],
  [
    'Narra',
    'Data exploration',
    'https://raw.githubusercontent.com/beep-anjero/Narra/main/docs/screenshots/dashboard-desktop.png',
    'Turns a CSV into a clear dashboard with automatic visualizations, traceable insights, and fast data filtering.',
    ['Next.js', 'TypeScript', 'FastAPI'],
    'https://narra-web-bay.vercel.app/demo',
    BarChart3,
    '',
  ],
  [
    'JejeNorm',
    'Database engineering',
    '/images/jejenorm-preview.png',
    'Analyzes relational models, identifies dependencies, and guides schemas from 1NF through BCNF.',
    ['Python', 'Django', 'PostgreSQL'],
    'https://jeje-norm.vercel.app',
    Database,
    '',
  ],
  [
    'ScoreCast',
    'Machine learning',
    '/images/scorecast-preview.png',
    'Turns trained scikit-learn models into a focused, real-time academic prediction experience.',
    ['Python', 'Flask', 'scikit-learn'],
    'https://score-cast.vercel.app/',
    BarChart3,
    '',
  ],
  [
    'RentRig',
    'Mobile operations',
    '/images/rentrig-preview.png',
    'An offline-first business toolkit that keeps critical rental workflows moving without a connection.',
    ['Flutter', 'Dart', 'SQLite'],
    'https://github.com/beep-anjero/RentRig',
    Smartphone,
    '',
  ],
  [
    'PockEd',
    'Learning product',
    '/images/pocked-preview.png',
    'Transforms spare minutes into focused study sprints with spaced repetition and progress insights.',
    ['Next.js', 'TypeScript', 'Zustand'],
    'https://pock-ed.vercel.app',
    GraduationCap,
    '',
  ],
] as const;

const capabilities = [
  [
    '01',
    'Backend systems',
    'REST APIs, authentication, data modeling, and dependable server-side logic with Laravel, Django, Flask, and Java.',
  ],
  [
    '02',
    'Product interfaces',
    'Responsive, accessible interfaces built with Vue, React, Quasar, TypeScript, and a sharp eye for interaction detail.',
  ],
  [
    '03',
    'Data & mobile',
    'Relational databases, ML pipelines, and offline-first experiences with PostgreSQL, MySQL, SQLite, and Flutter.',
  ],
] as const;

export default function App() {
  return (
    <div id="top" className="site-shell">
      <Nav />
      <main>
        <HeroSection />
        <WorkSection projects={projects} />
        <StackSection capabilities={capabilities} />
        <AboutSection />
        <CredentialsSection />
      </main>
      <ContactFooter />
    </div>
  );
}
