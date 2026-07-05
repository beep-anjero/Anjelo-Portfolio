import { Hero } from "./components/Hero";
import { PowerTrio } from "./components/PowerTrio";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { useEffect, useState } from "react";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const savedTheme = window.localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="min-h-screen bg-[#f7f2ea] text-[#1d1b18] transition-colors duration-500 dark:bg-[#11110f] dark:text-[#f7f2ea]">
      <Hero isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
      <PowerTrio />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
