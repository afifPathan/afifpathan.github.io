import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Check, Sparkles, Filter } from 'lucide-react';

export const TechCluster: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const selectedCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <div className="w-full glass-panel rounded-2xl p-6 lg:p-8 border border-white/10 relative overflow-hidden">
      {/* Category Pills Navigation */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
        <Filter className="w-4 h-4 text-cyan-400 shrink-0 mr-1" />
        {SKILL_CATEGORIES.map((cat, idx) => {
          const isActive = idx === activeCategoryIndex;
          return (
            <button
              key={cat.name}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-200 border ${
                isActive
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-sm shadow-cyan-500/20 font-semibold'
                  : 'bg-slate-900/40 text-slate-400 border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Category Description */}
      <div className="mb-6 pb-4 border-b border-white/5">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span>{selectedCategory.name}</span>
          <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/30">
            {selectedCategory.skills.length} Competencies
          </span>
        </h3>
        <p className="text-sm text-slate-400 mt-1">{selectedCategory.description}</p>
      </div>

      {/* Grid of Competencies */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory.name}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {selectedCategory.skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 hover:bg-slate-900/90 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                  <h4 className="font-semibold text-white text-sm md:text-base group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h4>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/40 text-cyan-400 border border-cyan-500/20 whitespace-nowrap">
                  {skill.level}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pl-4 border-l border-white/10">
                {skill.context}
              </p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Architecture Standard Footer */}
      <div className="mt-8 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>Strictly backed by production releases (8+ yrs experience)</span>
        </div>
        <div className="flex items-center gap-1 text-slate-400 mt-2 sm:mt-0">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>Zero fabricated proficiency bars</span>
        </div>
      </div>
    </div>
  );
};
