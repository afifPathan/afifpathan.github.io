import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import { PHILOSOPHY_PRINCIPLES } from '../data/portfolioData';
import { Code, CheckCircle, Terminal } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const [selectedPrincipleIndex, setSelectedPrincipleIndex] = useState(0);
  const activePrinciple = PHILOSOPHY_PRINCIPLES[selectedPrincipleIndex];

  return (
    <section
      id="philosophy"
      aria-label="Architecture and Engineering Philosophy"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden overflow-x-clip"
    >
      {/* Signature Section Marker from Reference */}
      <div className="section-marker">
        <span>03 — ARCHITECTURAL PHILOSOPHY · HOW I BUILD</span>
        <span>ARCHITECTURE &amp; SYSTEM PHILOSOPHY</span>
      </div>

      <div className="mb-12">
        <motion.h2
          initial={{ opacity: 0, scale: 0.92, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.05] mb-4"
        >
          Engineering Principles &amp;<br />
          <em className="text-slate-900 dark:text-white font-serif font-normal italic">
            System Boundaries.
          </em>
        </motion.h2>
        <div className="text-sm font-mono text-blue-700 dark:text-cyan-400 font-semibold mb-2">
          Enterprise Clean Architecture &amp; System Boundary Model
        </div>
        <p className="text-slate-700 dark:text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
          Robust mobile engineering is not about assembling widgets; it is about establishing strict architectural boundaries, deterministic reactive data flow, and resilient fail-safes that guarantee continuity across offline edge conditions and market volatility.
        </p>
      </div>

      {/* Interactive Clean Architecture Diagram Component: Fast Repeat Swipe from Left */}
      <motion.div
        initial={{ opacity: 0, x: -110 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.08 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 transform-gpu"
      >
        <ArchitectureDiagram />
      </motion.div>

      {/* Architectural Principles & Code Snippets Explorer: Fast Repeat Swipe from Right */}
      <motion.div
        initial={{ opacity: 0, x: 110 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.08 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel rounded-2xl p-6 lg:p-8 border border-slate-200/60 dark:border-white/10 bg-white/35 dark:bg-slate-800/35 backdrop-blur-md shadow-xl transform-gpu"
      >
        <div className="flex items-center gap-2 text-xs font-mono text-indigo-700 dark:text-indigo-400 mb-6 uppercase tracking-wider font-semibold">
          <Terminal className="w-4 h-4" />
          <span>Core Engineering Principles &amp; Verified Implementations</span>
        </div>

        {/* Principle Tab Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-8">
          {PHILOSOPHY_PRINCIPLES.map((principle, idx) => {
            const isSelected = idx === selectedPrincipleIndex;
            return (
              <button
                key={principle.title}
                onClick={() => setSelectedPrincipleIndex(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between backdrop-blur-md shadow-sm ${
                  isSelected
                    ? 'bg-blue-50/80 dark:bg-cyan-500/20 border-blue-400 dark:border-cyan-500/40 shadow-md'
                    : 'bg-white/40 dark:bg-slate-800/40 border-slate-200/60 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                  {isSelected && <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400" />}
                </div>
                <h3
                  className={`text-xs font-semibold leading-snug ${
                    isSelected ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-600 dark:text-slate-400'
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Description Column */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-xs font-mono text-blue-600 dark:text-cyan-400 font-semibold">ARCHITECTURAL RATIONALE</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">{activePrinciple.title}</h3>
                <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mt-1">{activePrinciple.subtitle}</p>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {activePrinciple.description}
              </p>

              <div className="pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Enforced in production at Degreed, Buyzaar &amp; Roadzen</span>
              </div>
            </div>

            {/* Code Snippet Column */}
            <div className="lg:col-span-7 rounded-xl overflow-hidden border border-slate-200/60 dark:border-slate-700/60 bg-white/30 dark:bg-[#1e2538]/40 backdrop-blur-md shadow-md transition-colors">
              <div className="bg-white/50 dark:bg-[#283248]/50 px-4 py-2.5 border-b border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Code className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                  <span className="font-semibold">architectural_pattern.dart / .py</span>
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-medium">Production Snippet</span>
              </div>
              <pre className="p-4 sm:p-5 text-xs font-mono text-slate-800 dark:text-slate-200 overflow-x-auto leading-relaxed bg-white/20 dark:bg-[#1e2538]/20 transition-colors">
                <code>{activePrinciple.codeSnippet}</code>
              </pre>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
