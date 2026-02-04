import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import TechnicalSkills from "./components/TechnicalSkills";
import WorkExperience from "./components/WorkExperience";
import ProjectHighlights from "./components/ProjectHighlights";
import FeaturedSkills from "./components/FeaturedSkills";
import SoftSkills from "./components/SoftSkills";
import Education from "./components/Education";
import SiteFooter from "./components/SiteFooter";

function App() {
  useEffect(() => {
    const root = document.documentElement;
    let ticking = false;

    const updateScrollVars = () => {
      const scrollTop = window.scrollY || root.scrollTop;
      const docHeight = root.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;

      root.style.setProperty("--scroll-progress", `${progress * 100}%`);
      root.style.setProperty("--scroll-y", `${scrollTop}px`);
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateScrollVars();
        ticking = false;
      });
    };

    updateScrollVars();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="resume">
      <div className="scroll-progress">
        <span className="scroll-progress-bar" />
      </div>
      <Hero />

      <main className="content">
        <TechnicalSkills />
        <WorkExperience />
        <ProjectHighlights />
        <FeaturedSkills />
        <SoftSkills />
        <Education />
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
