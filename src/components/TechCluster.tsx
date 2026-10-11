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
    // Generate 2-letter abbreviation
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
      {/* Left Column: Interactive Pocket Smartphone */}
      <div className="lg:col-span-7 flex flex-col items-center">
        <div className="w-full max-w-[420px] skill-phone border-4 border-slate-800 dark:border-slate-700 rounded-[38px] p-3 shadow-2xl bg-slate-950 text-white select-none">
          {/* Phone Top Notch & Dynamic Island */}
          <div className="relative pt-1 pb-2 px-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="font-semibold text-slate-200">9:41</span>

            {/* Dynamic Island Pill */}
            <div className="w-24 h-4 bg-black rounded-full flex items-center justify-center gap-2 px-2 border border-white/10 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[8px] font-mono text-slate-300 tracking-wider">60 FPS</span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-300">
              <Wifi className="w-3.5 h-3.5" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Screen Content Wrapper */}
          <div className="bg-slate-900/90 rounded-[28px] p-4 border border-white/10 min-h-[460px] flex flex-col justify-between">
            {/* Screen Header & Categories Bar */}
            <div>
              <div className="flex items-center justify-between mb-3 px-1">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                    Toolkit Dashboard
                  </div>
                  <h3 className="text-sm font-bold text-white">Production Arsenal</h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">
                  {displayedSkills.length} Tools
                </span>
              </div>

              {/* Category Filter Chips inside Phone */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none mb-3">
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-mono whitespace-nowrap transition-all border ${
                        isSelected
                          ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-xs'
                          : 'bg-slate-800/80 text-slate-400 border-white/5 hover:text-white hover:border-white/20'
                      }`}
                    >
                      {cat.replace(' & Full-Stack Systems', '').replace(' Engineering', '')}
                    </button>
                  );
                })}
              </div>

              {/* 4-Column iOS/Android App Grid */}
              <div className="grid grid-cols-4 gap-3 py-1 max-h-[260px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-700">
                {displayedSkills.map((skill) => {
                  const isCurrent = activeSkill.name === skill.name;
                  return (
                    <motion.button
                      key={skill.name}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveSkill(skill)}
                      className="flex flex-col items-center text-center group cursor-pointer focus:outline-hidden"
                    >
                      {/* App Icon Square */}
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-xs shadow-md transition-all duration-200 relative ${
                          isCurrent
                            ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-900 scale-105 shadow-cyan-500/20'
                            : 'opacity-90 hover:opacity-100'
                        } bg-gradient-to-br ${skill.color} text-white`}
                      >
                        <span>{skill.badge}</span>
                        {isCurrent && (
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-950" />
                        )}
                      </div>
                      {/* Label underneath */}
                      <span className="text-[10px] font-mono text-slate-300 mt-1 line-clamp-1 leading-tight group-hover:text-white">
                        {skill.name}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Simulated Phone Dock: Shows Details of the Selected Technology */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-3 p-3 rounded-2xl bg-slate-950/90 border border-cyan-500/30 text-left shadow-lg"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${activeSkill.color} flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-xs`}>
                      {activeSkill.badge}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-none">{activeSkill.name}</h4>
                      <span className="text-[9px] font-mono text-cyan-400">{activeSkill.category}</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-700/50">
                    {activeSkill.level}
                  </span>
                </div>

                <p className="text-[10px] text-slate-300 leading-relaxed font-mono pl-2 border-l border-cyan-500/30">
                  {activeSkill.context}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="w-28 h-1 bg-white/40 rounded-full mx-auto mt-2" />
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
              <span>Deterministic Reactive Streams</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
              BLoC and Cubit enforce unidirectional data flows with immutable state objects. Stream subscriptions are strictly cancelled on disposal to guarantee zero memory leaks.
            </p>
          </div>
        </div>

        {/* Verification Note */}
        <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs font-mono text-slate-700 dark:text-slate-300 flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <span>Tap any app icon on the simulated smartphone to inspect verified production use and scope.</span>
        </div>
      </div>
    </div>
  );
};
