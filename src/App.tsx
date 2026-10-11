import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Snapshot } from './sections/Snapshot';
import { Philosophy } from './sections/Philosophy';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Leadership } from './sections/Leadership';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { VerticalArchSplit } from './components/VerticalArchSplit';
import { useReducedMotion } from './hooks/useReducedMotion';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });
  const prefersReducedMotion = useReducedMotion();

  // Initialize theme from storage or system (strictly default: light)
  useEffect(() => {
    try {
      const savedTheme = typeof window !== 'undefined' && window.localStorage
        ? (window.localStorage.getItem('ap-portfolio-theme-v2') as 'dark' | 'light' | null)
        : null;
      if (savedTheme === 'dark') {
        setTheme('dark');
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        setTheme('light');
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    } catch {
      setTheme('light');
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('ap-portfolio-theme-v2', nextTheme);
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
    document.documentElement.classList.toggle('light', nextTheme === 'light');
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  // Scroll Progress Bar calculation
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop subtle ambient cursor glow
  useEffect(() => {
    if (prefersReducedMotion || window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  return (
    <div className="relative min-h-screen bg-[#f0f9ff] dark:bg-[#0f1420] text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200 overflow-x-hidden overflow-x-clip">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 z-50 origin-left"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading scroll progress"
      />

      {/* Subtle Desktop Mouse Glow */}
      {!prefersReducedMotion && (
        <div
          className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/[0.03] dark:bg-cyan-500/[0.04] rounded-full blur-[100px] z-30 transition-transform duration-75 ease-out hidden lg:block"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Header */}
      <Header theme={theme} onToggleTheme={toggleTheme} />

      {/* Main Landmark: Vertical Split (Light Yellow & Light Purple) with Random Architectural Arch at Every Page */}
      <main id="main-content" className="flex-1 w-full overflow-x-hidden overflow-x-clip">
        {/* Section 01: Hero (Vertical Split: Left Yellow, Right Purple with Classical Roman Arch) */}
        <section className="w-full relative overflow-hidden">
          <VerticalArchSplit variant="roman" flipSides={false} />
          <div className="relative z-10">
            <Hero />
          </div>
        </section>

        {/* Section 02: Snapshot (Vertical Split: Left Purple, Right Yellow with Gothic Pointed Lancet Arch) */}
        <section className="w-full relative overflow-hidden">
          <VerticalArchSplit variant="cathedral" flipSides={true} />
          <div className="relative z-10">
            <Snapshot />
          </div>
        </section>

        {/* Section 03: Philosophy (Vertical Split: Left Yellow, Right Purple with Venetian Ogee S-Curve Arch) */}
        <section className="w-full relative overflow-hidden">
          <VerticalArchSplit variant="ogee" flipSides={false} />
          <div className="relative z-10">
            <Philosophy />
          </div>
        </section>

        {/* Section 04: Projects & Systems Showcase (Vertical Split: Left Purple, Right Yellow with Parabolic Catenary Arch) */}
        <section className="w-full relative overflow-hidden">
          <VerticalArchSplit variant="parabolic" flipSides={true} />
          <div className="relative z-10">
            <Projects />
          </div>
        </section>

        {/* Section 05: Experience Timeline (Vertical Split: Left Yellow, Right Purple with Trefoil Arcade Arch) */}
        <section className="w-full relative overflow-hidden">
          <VerticalArchSplit variant="trefoil" flipSides={false} />
          <div className="relative z-10">
            <Experience />
          </div>
        </section>

        {/* Section 06: Skills / Arsenal Matrix (Vertical Split: Left Purple, Right Yellow with Moorish Keyhole Arch) */}
        <section className="w-full relative overflow-hidden">
          <VerticalArchSplit variant="horseshoe" flipSides={true} />
          <div className="relative z-10">
            <Skills />
          </div>
        </section>

        {/* Section 07: Leadership & Milestones (Vertical Split: Left Yellow, Right Purple with Art Deco Stepped Arch) */}
        <section className="w-full relative overflow-hidden">
          <VerticalArchSplit variant="stepped" flipSides={false} />
          <div className="relative z-10">
            <Leadership />
          </div>
        </section>

        {/* Section 08: Education & Honors (Vertical Split: Left Purple, Right Yellow with Compression Vault Arch) */}
        <section className="w-full relative overflow-hidden">
          <VerticalArchSplit variant="vault" flipSides={true} />
          <div className="relative z-10">
            <Education />
          </div>
        </section>

        {/* Section 09: Contact & Channels (Vertical Split: Left Yellow, Right Purple with Grand Concentric Portal Arch) */}
        <section className="w-full relative overflow-hidden">
          <VerticalArchSplit variant="portal" flipSides={false} />
          <div className="relative z-10">
            <Contact />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
