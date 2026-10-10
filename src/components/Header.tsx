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
  { id: 'projects', label: 'Selected Work' },
  { id: 'experience', label: 'Track Record' },
  { id: 'skills', label: 'Technical Arsenal' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
];

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(
    NAV_ITEMS.map((item) => item.id),
    120
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
            ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Monogram Brand */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 text-white font-mono font-bold tracking-tight text-lg"
            aria-label="Afif Pathan - Back to top"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 transition-colors shadow-sm">
              <span className="text-cyan-400 font-bold">AP</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-normal text-white group-hover:text-cyan-300 transition-colors">
                Afif Pathan
              </span>
              <span className="text-[10px] text-slate-400 font-normal hidden sm:inline">
                Mobile Architect & Flutter Lead
              </span>
            </div>
          </a>

          {/* Desktop Navigation Pill */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-white/10 backdrop-blur-md"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
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
              className="p-2 rounded-lg bg-slate-900/60 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
            </button>

            {/* Resume Download Button */}
            <a
              href="/resume.pdf"
              download="Afif_Pathan_Senior_Mobile_Architect_CV.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume PDF</span>
            </a>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold text-[#07090e] bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm shadow-cyan-400/20"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-lg bg-slate-900/60 border border-white/10 text-slate-300 hover:text-white"
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
            className="fixed inset-x-0 top-16 z-40 bg-[#07090e]/95 backdrop-blur-xl border-b border-white/10 p-6 lg:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-mono transition-colors ${
                    activeSection === item.id
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 mt-4 border-t border-white/10 flex flex-col gap-2">
              <a
                href="/resume.pdf"
                download="Afif_Pathan_Senior_Mobile_Architect_CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-mono text-slate-200 bg-white/5 border border-white/10"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Verified Resume PDF</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-mono font-semibold text-[#07090e] bg-cyan-400"
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
