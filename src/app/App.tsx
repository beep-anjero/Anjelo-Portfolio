import { Hero } from "./components/Hero";
import { PowerTrio } from "./components/PowerTrio";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(window.matchMedia("(max-width: 768px)").matches || ("ontouchstart" in window));
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = target.closest("a, button, [role='button'], input, select, textarea");
      setHovered(!!isHoverable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkTouch);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isTouch || hidden) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--accent)]/40 transition-all duration-300 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${hovered ? 1.5 : 1})`,
          backgroundColor: hovered ? "var(--cursor-hover-bg)" : "transparent",
          borderColor: hovered ? "var(--accent)" : "var(--cursor-border)",
        }}
      />
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] transition-transform duration-75"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }
    const savedTheme = window.localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden selection:bg-[var(--accent)] selection:text-[#080809]">
      <div className="pointer-events-none fixed inset-0 z-0 spotlight-glow" />
      <div className="relative z-10">
        <Hero isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
        <Projects />
        <PowerTrio />
        <About />
        <Certifications />
        <Contact />
      </div>
      <CustomCursor />
    </div>
  );
}
