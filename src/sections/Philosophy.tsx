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
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      {/* Section Marker */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
          02 — Architecture &amp; System Philosophy
        </span>
        <div className="h-px bg-cyan-500/20 flex-1 max-w-[120px]" />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Architectural Blueprints.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
            Systems designed to scale under stress.
          </span>
        </h2>
        <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
          Robust mobile engineering is not about assembling widgets; it is about establishing strict architectural boundaries, deterministic reactive data flow, and resilient fail-safes that guarantee continuity across offline edge conditions and market volatility.
        </p>
      </div>

      {/* Interactive Clean Architecture Diagram Component */}
      <div className="mb-16">
        <ArchitectureDiagram />
      </div>

      {/* Architectural Principles & Code Snippets Explorer */}
      <div className="glass-panel rounded-2xl p-6 lg:p-8 border border-white/10">
        <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-6 uppercase tracking-wider">
          <Terminal className="w-4 h-4" />
          <span>Core Engineering Principles &amp; Verified Implementations</span>
        </div>

        {/* Principle Tab Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
          {PHILOSOPHY_PRINCIPLES.map((principle, idx) => {
            const isSelected = idx === selectedPrincipleIndex;
            return (
              <button
                key={principle.title}
                onClick={() => setSelectedPrincipleIndex(idx)}
                className={`p-3.5 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-cyan-500/10 border-cyan-500/40 shadow-sm'
                    : 'bg-slate-900/40 border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                  {isSelected && <div className="w-2 h-2 rounded-full bg-cyan-400" />}
                </div>
                <h3
                  className={`text-xs font-semibold leading-snug ${
                    isSelected ? 'text-white' : 'text-slate-400'
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
                <span className="text-xs font-mono text-cyan-400">ARCHITECTURAL RATIONALE</span>
                <h3 className="text-xl font-bold text-white mt-1">{activePrinciple.title}</h3>
                <p className="text-sm font-medium text-indigo-300 mt-1">{activePrinciple.subtitle}</p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activePrinciple.description}
              </p>

              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Enforced in production at Degreed, Buyzaar &amp; Roadzen</span>
              </div>
            </div>

            {/* Code Snippet Column */}
            <div className="lg:col-span-7 rounded-xl overflow-hidden border border-white/10 bg-[#06080d]">
              <div className="bg-[#0b0e17] px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-400">
                  <Code className="w-3.5 h-3.5 text-cyan-400" />
                  <span>architectural_pattern.dart / .py</span>
                </div>
                <span className="text-[10px] text-slate-500 uppercase">Production Snippet</span>
              </div>
              <pre className="p-4 sm:p-5 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                <code>{activePrinciple.codeSnippet}</code>
              </pre>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
