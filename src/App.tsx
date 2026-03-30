import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { CanvasBackground } from "./components/CanvasBackground";
import { SceneControls } from "./components/SceneControls";
import { PerformanceMonitor } from "./components/PerformanceMonitor";
import { LoadingScreen } from "./components/LoadingScreen";
import { InteractionInfo } from "./components/InteractionInfo";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of navigation bar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setActiveSection(sectionId);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle loading complete
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className="relative min-h-screen">
        {/* Canvas Background with Particle System */}
        <CanvasBackground />

        {/* Navigation */}
        <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

        {/* Interaction Info */}
        <InteractionInfo />

        {/* Main Content */}
        <main>
          <Hero onNavigate={scrollToSection} />
          <About />
          <Services />
          <Contact />
        </main>

        {/* Scene Controls */}
        <SceneControls />

        {/* Performance Monitor */}
        <PerformanceMonitor />

        {/* Footer */}
        <footer className="relative bg-[#0a0e27] border-t border-[#00d4ff]/20 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-400">
              © 2025 INVEARN. All rights reserved.
            </p>
            <p className="text-gray-500 mt-2">
              Leading Innovation in Blockchain, AI, DevOps & Cloud Solutions
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
