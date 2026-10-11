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
import { ArchTransition } from './components/ArchTransition';
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
    <div className="relative min-h-screen bg-[#fefce8] dark:bg-[#0f1420] text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200 overflow-x-hidden overflow-x-clip">
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

      {/* Main Landmark: Alternating Light Yellow & Light Purple with Touching Architectural Arches */}
      <main id="main-content" className="flex-1 w-full overflow-x-hidden overflow-x-clip">
        {/* Section 01: Hero (Warm Sunshine Light Yellow) */}
        <div className="w-full bg-[#fefce8] dark:bg-[#0c0f17] relative">
          <Hero />
        </div>

        {/* Arch 01: Roman Classical Vault (Hero [Yellow] -> Snapshot [Purple]) */}
        <ArchTransition
          variant="roman"
          upperBgClass="bg-[#fefce8] dark:bg-[#0c0f17]"
          archFillClass="fill-[#faf5ff] dark:fill-[#121422]"
          strokeClass="text-purple-400/25 dark:text-cyan-400/25"
          label="ARCH·01 CLASSICAL VAULT"
        />

        {/* Section 02: Snapshot (Pastel Lavender Light Purple) */}
        <div className="w-full bg-[#faf5ff] dark:bg-[#121422] relative">
          <Snapshot />
        </div>

        {/* Arch 02: Gothic Pointed Lancet (Snapshot [Purple] -> Philosophy [Yellow]) */}
        <ArchTransition
          variant="cathedral"
          upperBgClass="bg-[#faf5ff] dark:bg-[#121422]"
          archFillClass="fill-[#fffdf0] dark:fill-[#0d111b]"
          strokeClass="text-amber-500/25 dark:text-purple-400/25"
          label="ARCH·02 GOTHIC LANCET"
        />

        {/* Section 03: Philosophy (Warm Sunshine Light Yellow) */}
        <div className="w-full bg-[#fffdf0] dark:bg-[#0d111b] relative">
          <Philosophy />
        </div>

        {/* Arch 03: Parabolic Compression Catenary (Philosophy [Yellow] -> Projects [Purple]) */}
        <ArchTransition
          variant="parabolic"
          upperBgClass="bg-[#fffdf0] dark:bg-[#0d111b]"
          archFillClass="fill-[#f8f5ff] dark:fill-[#131524]"
          strokeClass="text-purple-400/25 dark:text-cyan-400/25"
          label="ARCH·03 PARABOLIC CATENARY"
        />

        {/* Section 04: Projects & Systems Showcase (Pastel Lavender Light Purple) */}
        <div className="w-full bg-[#f8f5ff] dark:bg-[#131524] relative">
          <Projects />
        </div>

        {/* Arch 04: Venetian Ogee S-Curve (Projects [Purple] -> Experience [Yellow]) */}
        <ArchTransition
          variant="ogee"
          upperBgClass="bg-[#f8f5ff] dark:bg-[#131524]"
          archFillClass="fill-[#fefce8] dark:fill-[#0d121c]"
          strokeClass="text-amber-500/25 dark:text-purple-400/25"
          label="ARCH·04 VENETIAN OGEE"
        />

        {/* Section 05: Experience Timeline (Warm Sunshine Light Yellow) */}
        <div className="w-full bg-[#fefce8] dark:bg-[#0d121c] relative">
          <Experience />
        </div>

        {/* Arch 05: Trefoil Multi-Lobe Arcade (Experience [Yellow] -> Skills [Purple]) */}
        <ArchTransition
          variant="trefoil"
          upperBgClass="bg-[#fefce8] dark:bg-[#0d121c]"
          archFillClass="fill-[#faf5ff] dark:fill-[#121422]"
          strokeClass="text-purple-400/25 dark:text-cyan-400/25"
          label="ARCH·05 TREFOIL ARCADE"
        />

        {/* Section 06: Skills / Arsenal Matrix (Pastel Lavender Light Purple) */}
        <div className="w-full bg-[#faf5ff] dark:bg-[#121422] relative">
          <Skills />
        </div>

        {/* Arch 06: Moorish Keyhole Horseshoe (Skills [Purple] -> Leadership [Yellow]) */}
        <ArchTransition
          variant="horseshoe"
          upperBgClass="bg-[#faf5ff] dark:bg-[#121422]"
          archFillClass="fill-[#fffdf0] dark:fill-[#0d111b]"
          strokeClass="text-amber-500/25 dark:text-purple-400/25"
          label="ARCH·06 MOORISH KEYHOLE"
        />

        {/* Section 07: Leadership & Milestones (Warm Sunshine Light Yellow) */}
        <div className="w-full bg-[#fffdf0] dark:bg-[#0d111b] relative">
          <Leadership />
        </div>

        {/* Arch 07: Art Deco Tiered Stepped Arch (Leadership [Yellow] -> Education [Purple]) */}
        <ArchTransition
          variant="stepped"
          upperBgClass="bg-[#fffdf0] dark:bg-[#0d111b]"
          archFillClass="fill-[#f8f5ff] dark:fill-[#131524]"
          strokeClass="text-purple-400/25 dark:text-cyan-400/25"
          label="ARCH·07 ART DECO STEPPED"
        />

        {/* Section 08: Education & Honors (Pastel Lavender Light Purple) */}
        <div className="w-full bg-[#f8f5ff] dark:bg-[#131524] relative">
          <Education />
        </div>

        {/* Arch 08: Segmental Compression Vault (Education [Purple] -> Contact [Yellow]) */}
        <ArchTransition
          variant="vault"
          upperBgClass="bg-[#f8f5ff] dark:bg-[#131524]"
          archFillClass="fill-[#fefce8] dark:fill-[#0d121c]"
          strokeClass="text-amber-500/25 dark:text-purple-400/25"
          label="ARCH·08 COMPRESSION VAULT"
        />

        {/* Section 09: Contact & Channels (Flowing Dual Blend Light Yellow into Light Purple) */}
        <div className="w-full bg-gradient-to-b from-[#fefce8] via-[#faf5ff] to-[#f3e8ff] dark:from-[#0d121c] dark:via-[#111424] dark:to-[#16182a] relative">
          <Contact />
        </div>

        {/* Arch 09: Structural Foundation Arch (Contact [Light Purple] -> Footer [Lavender-Slate Grey]) */}
        <ArchTransition
          variant="foundation"
          upperBgClass="bg-[#f3e8ff] dark:bg-[#16182a]"
          archFillClass="fill-[#f0ecf7] dark:fill-[#0f1420]"
          strokeClass="text-purple-400/25 dark:text-cyan-400/25"
          label="ARCH·09 STRUCTURAL GROUND"
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
