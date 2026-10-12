import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import { PHILOSOPHY_PRINCIPLES } from '../data/portfolioData';
import { Code, Terminal } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const Philosophy: React.FC = () => {
  const [selectedPrincipleIndex, setSelectedPrincipleIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const activePrinciple = PHILOSOPHY_PRINCIPLES[selectedPrincipleIndex];

  return (
    <section
      id="philosophy"
      aria-label="Architecture and Engineering Philosophy"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden overflow-x-clip scroll-mt-24"
    >
      {/* Section Header Tag */}
      <div className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest text-primary uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span>Architecture &amp; System Philosophy</span>
      </div>

      {/* Balanced Desktop Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.08] mb-3"
          >
            Engineering Principles &amp;<br />
            <span className="bg-gradient-to-r from-primary via-accent-violet to-accent-cyan bg-clip-text text-transparent font-normal italic font-serif">
              System Boundaries.
            </span>
          </motion.h2>
          <p className="text-dark-textMuted text-sm sm:text-base max-w-2xl font-normal">
            Strict architectural boundaries, deterministic reactive data flow, and resilient fail-safes designed for continuous enterprise scale.
          </p>
        </div>

        {/* Supporting Header Card (Hidden on Mobile) */}
        <div className="hidden lg:block lg:max-w-xs w-full p-4 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 shadow-glass shrink-0">
          <div className="text-[10px] font-mono uppercase tracking-wider text-accent-cyan font-bold mb-1.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            <span>Architectural Rigor</span>
          </div>
          <p className="text-white/80 text-xs font-mono leading-relaxed">
            Inversion of Control, testable state machines, and offline-first edge persistence.
          </p>
        </div>
      </div>

      {/* Interactive Clean Architecture Diagram Component */}
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.45 }}
        className="mb-14"
      >
        <ArchitectureDiagram />
      </motion.div>

      {/* Architectural Principles & Code Snippets Explorer */}
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl p-6 sm:p-8 bg-dark-surface/65 backdrop-blur-xl border border-white/10 shadow-glass"
      >
        <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan mb-6 uppercase tracking-wider font-semibold">
          <Terminal className="w-4 h-4 text-accent-cyan" />
          <span>Core Engineering Principles &amp; Concrete Implementations</span>
        </div>

        {/* Principle Tab Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {PHILOSOPHY_PRINCIPLES.map((principle, idx) => {
            const isSelected = idx === selectedPrincipleIndex;
            return (
              <button
                key={principle.title}
                onClick={() => setSelectedPrincipleIndex(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-dark-surfaceElevated border-primary/50 shadow-glass ring-1 ring-primary/20'
                    : 'bg-black/25 border-white/5 hover:border-white/20 hover:bg-black/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-dark-textDim font-bold">
                    0{idx + 1}
                  </span>
                  {isSelected && (
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  )}
                </div>
                <h3
                  className={`text-xs sm:text-sm font-semibold leading-snug ${
                    isSelected ? 'text-white font-bold' : 'text-dark-textMuted'
                  }`}
                >
                  {principle.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Selected Principle Body */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePrinciple.title}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
          >
            {/* Left: Principle Narrative (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-xs font-mono text-accent-cyan font-semibold uppercase tracking-wider">
                  {activePrinciple.subtitle}
                </span>
                <h4 className="text-xl font-bold text-white font-heading mt-1">
                  {activePrinciple.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-dark-textMuted leading-relaxed font-normal">
                {activePrinciple.description}
              </p>
            </div>

            {/* Right: Real Code Implementation (7 cols) */}
            <div className="lg:col-span-7">
              <div className="code-editor-surface rounded-xl bg-[#090A10] border border-white/10 overflow-hidden shadow-glass">
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#121422] border-b border-white/10 text-xs font-mono text-dark-textMuted">
                  <div className="flex items-center gap-2">
                    <Code className="w-3.5 h-3.5 text-accent-cyan" />
                    <span className="text-white/90 text-xs font-semibold">
                      Production Implementation (Dart)
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">Clean Architecture</span>
                </div>
                <div
                  tabIndex={0}
                  role="region"
                  aria-label="Architecture code specification"
                  className="p-4 overflow-x-auto text-xs font-mono text-white/90 leading-relaxed max-h-[300px] no-scrollbar focus:outline-none focus:ring-1 focus:ring-primary/40"
                >
                  <pre>
                    <code>{activePrinciple.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
