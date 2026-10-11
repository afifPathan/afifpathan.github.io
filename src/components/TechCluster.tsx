import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Search,
  Cpu,
  ShieldCheck,
} from 'lucide-react';

interface FlatSkill {
  name: string;
  category: string;
  level: string;
  context: string;
  badge: string;
  color: string;
  deployedSystems: string;
}

// Map each skill to rich architecture metadata
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
    const words = skill.name.replace(/[^a-zA-Z0-9 ]/g, '').split(' ');
    const badge =
      words.length > 1
        ? (words[0][0] + words[1][0]).toUpperCase()
        : skill.name.slice(0, 2).toUpperCase();

    // Contextual systems where Afif deployed this
    let deployedSystems = 'Cross-platform mobile & system architectures';
    if (skill.name.includes('Flutter') || skill.name.includes('Clean Architecture')) {
      deployedSystems = 'Degreed · Buyzaar · Practo · NewsPod · 25+ Apps';
    } else if (skill.name.includes('BLoC') || skill.name.includes('Cubit')) {
      deployedSystems = 'Degreed · Buyzaar · Diversified Maintenance';
    } else if (skill.name.includes('FastAPI') || skill.name.includes('Python') || skill.name.includes('SmartAPI')) {
      deployedSystems = 'Swing Stock Trading Bot · NSE Algorithmic Daemons';
    } else if (skill.name.includes('WebSocket')) {
      deployedSystems = 'Trading Bot Terminal Dashboard · Real-Time Telemetry';
    } else if (skill.name.includes('WebRTC')) {
      deployedSystems = 'Practo Doctor Hub · Teleconsultation Video Engine';
    } else if (skill.name.includes('Firebase')) {
      deployedSystems = 'Buyzaar Web · ProHOff · BBC Connect';
    } else if (skill.name.includes('Gemini') || skill.name.includes('OpenAI')) {
      deployedSystems = 'Buyzaar Catalog Automation · AI Synthesis Pipelines';
    } else if (skill.name.includes('SQLite') || skill.name.includes('Offline')) {
      deployedSystems = 'NewsPod · Diversified · Kaizen Dental';
    }

    return {
      name: skill.name,
      category: category.name,
      level: skill.level,
      context: skill.context,
      badge,
      color,
      deployedSystems,
    };
  });
});

export const TechCluster: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSkill, setActiveSkill] = useState<FlatSkill>(ALL_SKILLS[0]);

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.name)];

  const filteredSkills = useMemo(() => {
    return ALL_SKILLS.filter((s) => {
      const matchesCategory =
        selectedCategory === 'All' || s.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.context.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Top Interactive Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-md">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 shadow-md scale-[1.02]'
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-300'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input Bar */}
        <div className="relative min-w-[240px] max-w-xs">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search technologies..."
            className="w-full pl-9 pr-3 py-1.5 text-xs font-mono rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400"
          />
        </div>
      </div>

      {/* Main Layout: Active Technology HUD Inspector + Interactive Matrix Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (5 cols): Active Technology HUD Telemetry Console */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl relative overflow-hidden">
            {/* Ambient Corner Flare */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header Telemetry Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 font-bold">
                  VERIFIED PRODUCTION ENGINE
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                AFIF PATHAN ARSENAL
              </span>
            </div>

            {/* Active Tech Spotlight */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="pt-5 flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeSkill.color} flex items-center justify-center font-mono font-black text-xl text-white shadow-lg shrink-0`}
                  >
                    {activeSkill.badge}
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                      {activeSkill.category}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {activeSkill.name}
                    </h3>
                  </div>
                </div>

                {/* Proficiency Gauge Pill */}
                <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono">
                  <span className="text-slate-400">Architectural Tier:</span>
                  <span className="text-cyan-300 font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    {activeSkill.level}
                  </span>
                </div>

                {/* Verified Context Snippet */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                    Production Implementation Context:
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-sans font-medium">
                    {activeSkill.context}
                  </p>
                </div>

                {/* Deployed Systems Tag */}
                <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 mb-1 flex items-center gap-1">
                    <Cpu className="w-3 h-3" /> Deployed Across Systems:
                  </div>
                  <div className="text-xs font-mono text-cyan-200 font-semibold">
                    {activeSkill.deployedSystems}
                  </div>
                </div>

                {/* Architectural Pillar Summary */}
                <div className="text-[11px] font-mono text-slate-400 pt-1 flex items-center justify-between border-t border-white/10">
                  <span>Architecture Standard:</span>
                  <span className="text-emerald-400 font-semibold">Clean Architecture &amp; SOLID</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick Stats Ticker */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-center">
              <div className="text-xl font-bold text-slate-900 dark:text-white font-mono">
                {ALL_SKILLS.length}+
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-0.5">
                Mastered
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-center">
              <div className="text-xl font-bold text-blue-600 dark:text-cyan-400 font-mono">
                25+
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-0.5">
                Platforms
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-center">
              <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                0%
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-0.5">
                Leak Rate
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): Bento Matrix of Interactive Technical Mastery Cards */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="flex items-center justify-between pb-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span>SHOWING {filteredSkills.length} VERIFIED TECHNOLOGIES</span>
            <span>TAP ANY CARD TO INSPECT</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[640px] overflow-y-auto pr-1">
            {filteredSkills.map((skill) => {
              const isActive = activeSkill.name === skill.name;
              return (
                <motion.div
                  key={skill.name}
                  onClick={() => setActiveSkill(skill)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 text-left ${
                    isActive
                      ? 'bg-blue-50/80 dark:bg-slate-800/90 border-blue-500 dark:border-cyan-400 shadow-md ring-2 ring-blue-500/20 dark:ring-cyan-400/20'
                      : 'bg-white/80 hover:bg-slate-50/90 dark:bg-slate-900/70 dark:hover:bg-slate-800/70 border-slate-200 dark:border-white/10 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center font-mono font-bold text-xs text-white shadow-xs shrink-0`}
                      >
                        {skill.badge}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-tight">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-blue-600 text-white dark:bg-cyan-400 dark:text-slate-950'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 font-sans line-clamp-2 leading-relaxed">
                    {skill.context}
                  </p>

                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-white/5">
                    <span className="truncate max-w-[190px]">{skill.deployedSystems}</span>
                    <span className="text-blue-600 dark:text-cyan-400 font-semibold shrink-0">
                      Inspect →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
