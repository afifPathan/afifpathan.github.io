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
import { useReducedMotion } from './hooks/useReducedMotion';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });
  const prefersReducedMotion = useReducedMotion();

  // Initialize theme from storage or system
  useEffect(() => {
    try {
      const savedTheme = typeof window !== 'undefined' && window.localStorage
        ? (window.localStorage.getItem('ap-theme') as 'dark' | 'light' | null)
        : null;
      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.classList.toggle('light', savedTheme === 'light');
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      } else {
        document.documentElement.classList.add('dark');
      }
    } catch {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('ap-theme', nextTheme);
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
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 z-50 origin-left"
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
          className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/[0.04] rounded-full blur-[100px] z-30 transition-transform duration-75 ease-out hidden lg:block"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Header */}
      <Header theme={theme} onToggleTheme={toggleTheme} />

      {/* Main Landmark */}
      <main id="main-content" className="flex-1 w-full">
        <Hero />
        <Snapshot />
        <Philosophy />
        <Projects />
        <Experience />
        <Skills />
        <Leadership />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
