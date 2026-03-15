import { Hero } from "./components/Hero";
import { PowerTrio } from "./components/PowerTrio";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Hero />
      <PowerTrio />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}