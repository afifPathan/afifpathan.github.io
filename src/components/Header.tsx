import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const NAV_ITEMS = [
  { id: 'snapshot', label: 'Overview' },
  { id: 'philosophy', label: 'Architecture' },
  { id: 'projects', label: 'Projects (25+)' },
  { id: 'experience', label: 'Track Record' },
  { id: 'skills', label: 'Technical Arsenal' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
];

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const activeSection = useScrollSpy(
    NAV_ITEMS.map((item) => item.id),
    120
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setScrolledPastHero(window.scrollY > 240);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 dark:bg-[#07090e]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 py-2.5 shadow-sm'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Scroll-Responsive Brand: Minimal Monogram at Top -> Docked Photo & Name on Scroll */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5"
            aria-label="Afif Pathan - Back to top"
          >
            <AnimatePresence mode="wait">
              {!scrolledPastHero ? (
                <motion.div
                  key="top-monogram"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-cyan-500/30 flex items-center justify-center font-mono font-bold text-slate-900 dark:text-cyan-400 text-xs shadow-xs group-hover:border-blue-500 dark:group-hover:border-cyan-400 group-hover:text-blue-600 transition-colors">
                    <span>AP</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    <span>/</span>
                    <span className="group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                      portfolio
                    </span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="scrolled-identity"
                  initial={{ opacity: 0, x: -16, scale: 0.92 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -16, scale: 0.92, transition: { duration: 0.15 } }}
                  transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-blue-600 dark:border-cyan-400 shadow-md shrink-0">
                    <img
                      src="/profile.jpg"
                      alt="Afif Pathan"
                      className="w-full h-full object-cover object-top"
                    />
                    <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border border-white dark:border-slate-900" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                      Afif Pathan
                    </span>
                    <span className="text-[10px] text-blue-600 dark:text-cyan-400 font-mono hidden sm:inline leading-tight font-medium">
                      Senior Mobile Architect
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </a>

          {/* Desktop Navigation Pill */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-1 bg-white/90 dark:bg-slate-900/60 p-1 rounded-full border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-sm"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-300 font-semibold border border-blue-200 dark:border-cyan-500/40 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Header Right Actions */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20 transition-colors shadow-sm"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
            </button>

            {/* Resume Download Button */}
            <a
              href="/resume.pdf"
              download="Afif_Pathan_Senior_Mobile_Architect_CV.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-cyan-500/30 transition-all duration-200 shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
              <span>Resume PDF</span>
            </a>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:text-[#07090e] dark:bg-cyan-400 dark:hover:bg-cyan-300 transition-colors shadow-sm shadow-blue-600/20 dark:shadow-cyan-400/20"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 bg-white/95 dark:bg-[#07090e]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 p-6 lg:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-mono transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-50 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-300 font-semibold border border-blue-200 dark:border-cyan-500/30'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
              <a
                href="/resume.pdf"
                download="Afif_Pathan_Senior_Mobile_Architect_CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-mono text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span>Download Verified Resume PDF</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-mono font-semibold text-white bg-blue-600 dark:text-[#07090e] dark:bg-cyan-400"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
