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
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/5"
    >
      {/* Section Marker */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-widest font-semibold">
          02 — Architecture &amp; System Philosophy
        </span>
        <div className="h-px bg-blue-500/20 dark:bg-cyan-500/20 flex-1 max-w-[120px]" />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          Architectural Blueprints.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700 dark:from-cyan-400 dark:to-indigo-400">
            Systems designed to scale under stress.
          </span>
        </h2>
        <p className="text-slate-700 dark:text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
          Robust mobile engineering is not about assembling widgets; it is about establishing strict architectural boundaries, deterministic reactive data flow, and resilient fail-safes that guarantee continuity across offline edge conditions and market volatility.
        </p>
      </div>

      {/* Interactive Clean Architecture Diagram Component */}
      <div className="mb-16">
        <ArchitectureDiagram />
      </div>

      {/* Architectural Principles & Code Snippets Explorer */}
      <div className="glass-panel rounded-2xl p-6 lg:p-8 border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/60 shadow-sm">
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
                className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-50 dark:bg-cyan-500/10 border-blue-400 dark:border-cyan-500/40 shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20'
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

              <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Enforced in production at Degreed, Buyzaar &amp; Roadzen</span>
              </div>
            </div>

            {/* Code Snippet Column */}
            <div className="lg:col-span-7 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#090d16] shadow-sm transition-colors">
              <div className="bg-slate-100/90 dark:bg-[#0f1422] px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Code className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                  <span className="font-semibold">architectural_pattern.dart / .py</span>
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-medium">Production Snippet</span>
              </div>
              <pre className="p-4 sm:p-5 text-xs font-mono text-slate-800 dark:text-slate-200 overflow-x-auto leading-relaxed bg-white/90 dark:bg-[#090d16] transition-colors">
                <code>{activePrinciple.codeSnippet}</code>
              </pre>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
