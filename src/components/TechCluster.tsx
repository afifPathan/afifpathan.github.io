import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  CheckCircle2,
  Sparkles,
  Wifi,
  Battery,
} from 'lucide-react';

interface FlatSkill {
  name: string;
  category: string;
  level: string;
  context: string;
  badge: string;
  color: string;
}

// Flatten all skills into a unified list with icon colors and badges
const ALL_SKILLS: FlatSkill[] = SKILL_CATEGORIES.flatMap((category, catIdx) => {
  const colors = [
    'from-sky-500 to-blue-600',
    'from-indigo-500 to-purple-600',
    'from-emerald-500 to-teal-600',
    'from-amber-500 to-orange-600',
    'from-rose-500 to-red-600',
    'from-cyan-500 to-blue-500',
  ];
  const color = colors[catIdx % colors.length];

  return category.skills.map((skill) => {
    // Generate clean 2-letter abbreviation
    const words = skill.name.replace(/[^a-zA-Z0-9 ]/g, '').split(' ');
    const badge = words.length > 1
      ? (words[0][0] + words[1][0]).toUpperCase()
      : skill.name.slice(0, 2).toUpperCase();

    return {
      name: skill.name,
      category: category.name,
      level: skill.level,
      context: skill.context,
      badge,
      color,
    };
  });
});

export const TechCluster: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkill, setActiveSkill] = useState<FlatSkill>(ALL_SKILLS[0]);

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.name)];

  const displayedSkills = selectedCategory === 'All'
    ? ALL_SKILLS
    : ALL_SKILLS.filter((s) => s.category === selectedCategory);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Refined, Luxury Interactive Pocket Device (Zero Overflow) */}
      <div className="lg:col-span-7 flex flex-col items-center w-full">
        <div className="w-full max-w-[440px] rounded-[38px] p-3 sm:p-4 shadow-2xl bg-slate-950 border-4 border-slate-800 dark:border-slate-700 text-white select-none">
          {/* Phone Top Speaker Notch & Status Bar */}
          <div className="pt-1 pb-2.5 px-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="font-bold text-slate-200">9:41</span>

            {/* Dynamic Island Pill */}
            <div className="w-24 h-4 bg-black rounded-full flex items-center justify-center gap-1.5 px-2 border border-white/10 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[8px] font-mono text-slate-300 tracking-wider">60 FPS</span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-300">
              <Wifi className="w-3.5 h-3.5" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Screen Content Wrapper */}
          <div className="bg-slate-900/95 rounded-[28px] p-3.5 sm:p-4 border border-white/10 flex flex-col gap-3">
            {/* Screen Header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                  PRODUCTION TOOLKIT
                </div>
                <h3 className="text-sm font-bold text-white">Engineering Arsenal</h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/5">
                {displayedSkills.length} Systems
              </span>
            </div>

            {/* Category Filter Chips with Horizontal Scroll */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                const shortLabel = cat
                  .replace(' & Full-Stack Systems', ' & AI')
                  .replace(' Engineering', '')
                  .replace(' Integrations & Hardware', ' & Hardware');

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono whitespace-nowrap transition-all border ${
                      isSelected
                        ? 'bg-cyan-400 text-slate-950 font-bold border-cyan-300 shadow-xs'
                        : 'bg-slate-800/80 text-slate-400 border-white/5 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {shortLabel}
                  </button>
                );
              })}
            </div>

            {/* Interactive App Grid - Spacious 3-Column Layout with ZERO Overflows */}
            <div className="grid grid-cols-3 gap-2.5 py-1 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-700">
              {displayedSkills.map((skill) => {
                const isCurrent = activeSkill.name === skill.name;
                return (
                  <motion.button
                    key={skill.name}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveSkill(skill)}
                    className={`p-2 rounded-xl flex flex-col items-center text-center group cursor-pointer transition-all border ${
                      isCurrent
                        ? 'bg-white/10 border-cyan-400 shadow-md shadow-cyan-500/10'
                        : 'bg-slate-800/50 border-white/5 hover:bg-slate-800 hover:border-white/20'
                    }`}
                  >
                    {/* App Icon Square */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs shadow-sm transition-transform duration-200 relative bg-gradient-to-br ${skill.color} text-white mb-1`}
                    >
                      <span>{skill.badge}</span>
                      {isCurrent && (
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-950" />
                      )}
                    </div>
                    {/* Label underneath */}
                    <span className="text-[10px] font-mono text-slate-200 leading-tight font-medium line-clamp-1 w-full">
                      {skill.name}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Active App Telemetry Dock - Dedicated, Spacious, and Adaptive */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="p-3.5 rounded-2xl bg-slate-950 border border-cyan-500/40 text-left shadow-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${activeSkill.color} flex items-center justify-center text-xs font-mono font-bold text-white shadow-xs shrink-0`}>
                      {activeSkill.badge}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-tight">{activeSkill.name}</h4>
                      <span className="text-[9px] font-mono text-cyan-400">{activeSkill.category}</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-700/60 font-semibold shrink-0">
                    {activeSkill.level}
                  </span>
                </div>

                <p className="text-[10px] text-slate-300 leading-relaxed font-mono pl-2.5 border-l-2 border-cyan-500/40">
                  {activeSkill.context}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="w-28 h-1 bg-white/40 rounded-full mx-auto mt-2.5" />
        </div>
      </div>

      {/* Right Column: Architectural Discipline & Standards Narrative */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <span className="text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-widest font-semibold">
            ENGINEERING PRINCIPLES
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1 leading-tight">
            Tools chosen for longevity, not hype.
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            In mobile architecture, dependencies are liabilities unless guarded by clean abstractions. Every library in this arsenal has been tested under enterprise production pressure.
          </p>
        </div>

        {/* Pillars of Stack Selection */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-xs">
            <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white text-sm mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Inversion of Control &amp; Zero Lock-In</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
              Third-party SDKs (Firebase, WebRTC, payment gateways) are hidden behind abstract repository interfaces. Replacing an API never ripples into business rules.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-xs">
            <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white text-sm mb-1">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
              <span>Strict 16ms Frame Budget (60-120 FPS)</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
              Heavy calculations (cryptographic hashing, parsing large JSON feeds, signal processing) execute in isolated Dart isolates or worker threads to ensure stutter-free scrolling.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-xs">
            <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white text-sm mb-1">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <span>FastAPI &amp; Algorithmic Reliability</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
              Python and FastAPI daemons interface with Angel One SmartAPI under strict risk circuit breakers, duplicate-order protection, and daily loss safeguards.
            </p>
          </div>
        </div>

        {/* Verification Note */}
        <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs font-mono text-slate-700 dark:text-slate-300 flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <span>Tap any app icon on the simulated device to inspect verified production use, proficiency, and scope.</span>
        </div>
      </div>
    </div>
  );
};
