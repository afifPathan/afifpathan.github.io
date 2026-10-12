import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Search,
  Cpu,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface FlatSkill {
  name: string;
  category: string;
  level: string;
  context: string;
  badge: string;
  color: string;
  deployedSystems: string;
}

// Map each skill to rich architecture metadata with 100% safe badges
const ALL_SKILLS: FlatSkill[] = SKILL_CATEGORIES.flatMap((category, catIdx) => {
  const colors = [
    'from-primary to-accent-violet',
    'from-accent-violet to-purple-600',
    'from-accent-cyan to-blue-600',
    'from-emerald-500 to-teal-600',
    'from-amber-500 to-orange-600',
    'from-primary to-accent-cyan',
  ];
  const color = colors[catIdx % colors.length];

  return category.skills.map((skill) => {
    // Clean string from non-alphanumeric and split into valid words
    const words = skill.name
      .replace(/[^a-zA-Z0-9]/g, ' ')
      .trim()
      .split(/\s+/)
      .filter((w) => Boolean(w) && w.length > 0);

    let badge = 'AP';
    if (words.length > 1 && words[0] && words[1]) {
      badge = (words[0][0] + words[1][0]).toUpperCase();
    } else if (words.length === 1 && words[0].length >= 2) {
      badge = words[0].slice(0, 2).toUpperCase();
    } else if (words.length === 1 && words[0].length === 1) {
      badge = (words[0][0] + 'X').toUpperCase();
    }

    // Contextual systems where Afif deployed this
    let deployedSystems = 'Cross-platform mobile & system architectures';
    if (skill.name === 'Flutter') {
      deployedSystems = 'Degreed Mobile · Buyzaar Web · Roadzen SDK';
    } else if (skill.name === 'Clean Architecture') {
      deployedSystems = 'Practo Healthcare · Degreed · Enterprise SOLID Boundaries';
    } else if (skill.name.includes('BLoC') || skill.name.includes('Cubit')) {
      deployedSystems = 'Degreed · Buyzaar · Diversified Maintenance';
    } else if (skill.name.includes('FastAPI') || skill.name.includes('Python') || skill.name.includes('SmartAPI')) {
      deployedSystems = 'Swing Stock Trading Bot · NSE Algorithmic Daemons';
    } else if (skill.name.includes('Antigravity') || skill.name.includes('Codex') || skill.name.includes('Automation')) {
      deployedSystems = 'Agentic Multi-Step Pipelines · Codex Codebase Workflows';
    } else if (skill.name.includes('WebSocket')) {
      deployedSystems = 'Trading Bot Terminal Dashboard · Real-Time Telemetry';
    } else if (skill.name.includes('WebRTC')) {
      deployedSystems = 'Practo Doctor Hub · Teleconsultation Video Engine';
    } else if (skill.name.includes('Firebase')) {
      deployedSystems = 'Buyzaar Web · ProHOff · BBC Connect';
    } else if (skill.name.includes('Gemini') || skill.name.includes('OpenAI') || skill.name.includes('Claude')) {
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
  const prefersReducedMotion = useReducedMotion();
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
    <div className="flex flex-col gap-6 w-full">
      {/* Top Filter Controls: Category Pills & Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 shadow-glass">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl font-mono text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-primary text-slate-950 font-bold shadow-glow-primary'
                    : 'bg-dark-surface/80 hover:bg-dark-surfaceElevated text-dark-textMuted hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-72 shrink-0">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search technologies..."
            className="w-full pl-10 pr-4 py-2 text-xs font-mono rounded-xl bg-dark-surface/90 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary transition-all"
          />
        </div>
      </div>

      {/* Main Grid: HUD Inspector on Left (5 cols) + Skill Cards Matrix on Right (7 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Active Tech HUD Inspector */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="p-6 rounded-2xl bg-dark-surface/80 text-white border border-white/10 shadow-glass relative overflow-hidden backdrop-blur-xl">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header Telemetry Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 font-bold">
                  PRODUCTION ARSENAL
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/70">
                AFIF PATHAN
              </span>
            </div>

            {/* Active Tech Spotlight */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill.name}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="pt-5 flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeSkill.color} flex items-center justify-center font-mono font-black text-xl text-white shadow-glow-primary shrink-0`}
                  >
                    {activeSkill.badge}
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-accent-cyan font-semibold">
                      {activeSkill.category}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-heading">
                      {activeSkill.name}
                    </h3>
                  </div>
                </div>

                {/* Proficiency Gauge Pill */}
                <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono">
                  <span className="text-dark-textMuted">Proficiency Level:</span>
                  <span className="text-accent-cyan font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent-cyan" />
                    {activeSkill.level}
                  </span>
                </div>

                {/* Production Context Snippet */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-dark-textMuted mb-1">
                    Production Implementation:
                  </div>
                  <p className="text-xs text-white/90 leading-relaxed font-sans font-normal">
                    Enterprise production deployment focused on deterministic reliability, clean module boundaries, and high-performance throughput.
                  </p>
                </div>

                {/* Deployed Systems Tag */}
                <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-primary mb-1 flex items-center gap-1">
                    <Cpu className="w-3 h-3" /> Deployed Systems:
                  </div>
                  <div className="text-xs font-mono text-white font-medium">
                    {activeSkill.deployedSystems}
                  </div>
                </div>

                {/* Architectural Standard */}
                <div className="text-[11px] font-mono text-dark-textMuted pt-1 flex items-center justify-between border-t border-white/10">
                  <span>Architecture Standard:</span>
                  <span className="text-emerald-400 font-semibold">Clean Architecture &amp; SOLID</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick Audited Stats Pod (Only Real Numbers) */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 text-center shadow-glass">
              <div className="text-xl font-bold text-white font-mono">
                {ALL_SKILLS.length}+
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-dark-textMuted mt-0.5">
                Technologies
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 text-center shadow-glass">
              <div className="text-xl font-bold text-primary font-mono">
                25+
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-dark-textMuted mt-0.5">
                Platforms
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 text-center shadow-glass">
              <div className="text-xl font-bold text-accent-cyan font-mono">
                6+ Yrs
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-dark-textMuted mt-0.5">
                Flutter Focus
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Technology Cards Matrix */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="flex items-center justify-between pb-2 text-xs font-mono text-dark-textMuted">
            <span>SHOWING {filteredSkills.length} TECHNOLOGIES</span>
            <span className="flex items-center gap-1 text-primary">
              <Sparkles className="w-3 h-3" />
              <span>TAP ANY TO INSPECT</span>
            </span>
          </div>

          <div
            tabIndex={0}
            role="region"
            aria-label="Technology skills list"
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[640px] overflow-y-auto pr-1 focus:outline-none focus:ring-1 focus:ring-primary/40"
          >
            {filteredSkills.map((skill) => {
              const isActive = activeSkill.name === skill.name;
              return (
                <div
                  key={skill.name}
                  onClick={() => setActiveSkill(skill)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 text-left backdrop-blur-xl ${
                    isActive
                      ? 'bg-primary/15 border-primary shadow-glow-primary ring-1 ring-primary/40'
                      : 'bg-dark-surface/65 hover:bg-dark-surfaceElevated border-white/10 hover:border-white/20 shadow-glass'
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
                        <h4 className="font-bold text-sm text-white leading-tight font-heading">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] font-mono text-dark-textMuted uppercase tracking-wider">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-primary text-slate-950'
                          : 'bg-white/10 text-white/70'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-xs text-dark-textMuted font-sans line-clamp-2 leading-relaxed">
                    {skill.context}
                  </p>

                  <div className="flex items-center justify-between text-[10px] font-mono text-dark-textMuted pt-2 border-t border-white/10">
                    <span className="text-accent-cyan font-medium">{skill.category}</span>
                    <span className="text-primary font-semibold shrink-0">
                      Telemetry →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
