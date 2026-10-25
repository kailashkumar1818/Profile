import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      {/* Cursor-following warm glow — sits beneath all content */}
      <CursorGlow />

      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-on-accent shadow-lift transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
