import React, { useState, useEffect, Suspense } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { VerticalArchSplit } from './components/VerticalArchSplit';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { TESTIMONIALS } from './data/portfolioData';

// Code-split below-the-fold sections to optimize initial bundle and LCP
const Snapshot = React.lazy(() =>
  import('./sections/Snapshot').then((m) => ({ default: m.Snapshot }))
);
const Philosophy = React.lazy(() =>
  import('./sections/Philosophy').then((m) => ({ default: m.Philosophy }))
);
const Projects = React.lazy(() =>
  import('./sections/Projects').then((m) => ({ default: m.Projects }))
);
const Experience = React.lazy(() =>
  import('./sections/Experience').then((m) => ({ default: m.Experience }))
);
const Skills = React.lazy(() =>
  import('./sections/Skills').then((m) => ({ default: m.Skills }))
);
const Leadership = React.lazy(() =>
  import('./sections/Leadership').then((m) => ({ default: m.Leadership }))
);
const Education = React.lazy(() =>
  import('./sections/Education').then((m) => ({ default: m.Education }))
);
const Testimonials = React.lazy(() =>
  import('./sections/Testimonials').then((m) => ({ default: m.Testimonials }))
);
const Contact = React.lazy(() =>
  import('./sections/Contact').then((m) => ({ default: m.Contact }))
);

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initialize Lenis momentum scroll driven from GSAP ticker
  useSmoothScroll(true);

  // Initialize theme from storage (default: dark)
  useEffect(() => {
    try {
      const savedTheme =
        typeof window !== 'undefined' && window.localStorage
          ? (window.localStorage.getItem('ap-portfolio-theme-v2') as 'dark' | 'light' | null)
          : null;
      if (savedTheme === 'light') {
        setTheme('light');
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      } else {
        setTheme('dark');
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }
    } catch {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
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

  return (
    <div className="relative min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] flex flex-col font-sans transition-colors duration-200 overflow-x-hidden overflow-x-clip">
      {/* Short Branded Preloader (< 1.2s, non-blocking, skipped on return & reduced motion) */}
      <Preloader />

      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-accent-violet to-accent-cyan z-50 origin-left"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading scroll progress"
      />

      {/* Header */}
      <Header theme={theme} onToggleTheme={toggleTheme} />

      {/* Main Landmark: Vertical Split with Architectural Arches */}
      <main id="main-content" className="flex-1 w-full overflow-x-hidden overflow-x-clip">
        {/* Section 01: Hero (Above the fold, statically imported for instant LCP) */}
        <section className="w-full relative overflow-hidden">
          <VerticalArchSplit variant="roman" flipSides={false} />
          <div className="relative z-10">
            <Hero />
          </div>
        </section>

        {/* Below-the-fold sections wrapped in Suspense for optimal bundle size */}
        <Suspense fallback={<div className="min-h-[200px]" />}>
          {/* Section 02: Snapshot */}
          <section className="w-full relative overflow-hidden">
            <VerticalArchSplit variant="cathedral" flipSides={true} />
            <div className="relative z-10">
              <Snapshot />
            </div>
          </section>

          {/* Section 03: Philosophy */}
          <section className="w-full relative overflow-hidden">
            <VerticalArchSplit variant="ogee" flipSides={false} />
            <div className="relative z-10">
              <Philosophy />
            </div>
          </section>

          {/* Section 04: Projects & Systems Showcase */}
          <section className="w-full relative overflow-hidden">
            <VerticalArchSplit variant="parabolic" flipSides={true} />
            <div className="relative z-10">
              <Projects />
            </div>
          </section>

          {/* Section 05: Experience Timeline */}
          <section className="w-full relative overflow-hidden">
            <VerticalArchSplit variant="trefoil" flipSides={false} />
            <div className="relative z-10">
              <Experience />
            </div>
          </section>

          {/* Section 06: Skills / Arsenal Matrix */}
          <section className="w-full relative overflow-hidden">
            <VerticalArchSplit variant="horseshoe" flipSides={true} />
            <div className="relative z-10">
              <Skills />
            </div>
          </section>

          {/* Section 07: Leadership & Milestones */}
          <section className="w-full relative overflow-hidden">
            <VerticalArchSplit variant="stepped" flipSides={false} />
            <div className="relative z-10">
              <Leadership />
            </div>
          </section>

          {/* Section 08: Education & Honors */}
          <section className="w-full relative overflow-hidden">
            <VerticalArchSplit variant="vault" flipSides={true} />
            <div className="relative z-10">
              <Education />
            </div>
          </section>

          {/* Section 09: Testimonials (lazy loaded ONLY when testimonials exist) */}
          {TESTIMONIALS.length > 0 && <Testimonials />}

          {/* Section 10: Contact & Channels */}
          <section className="w-full relative overflow-hidden">
            <VerticalArchSplit variant="portal" flipSides={false} />
            <div className="relative z-10">
              <Contact />
            </div>
          </section>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
