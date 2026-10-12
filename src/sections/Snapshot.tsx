import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  GitBranch,
  Workflow,
  Layers,
  Award,
  Download,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  MapPin,
  Languages,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';

const ARCHITECTURAL_PILLARS = [
  {
    icon: Layers,
    title: 'Cross-Platform & Native Systems',
    description:
      '6+ years architecting enterprise Flutter applications and native Android services. Deep focus on modularization, memory profiling, and smooth 60fps/120fps client experiences.',
    tags: ['Flutter', 'Dart', 'Android (Java/Kotlin)', 'Material 3'],
    badge: 'Mobile Core',
  },
  {
    icon: Workflow,
    title: 'Enterprise Clean Architecture',
    description:
      'Designing strict feature-based modular systems adhering to SOLID principles and Inversion of Control. Keeping domain business logic immune to third-party SDK deprecation.',
    tags: ['Clean Architecture', 'SOLID', 'BLoC / Cubit', 'Riverpod'],
    badge: 'Architecture',
  },
  {
    icon: GitBranch,
    title: 'Real-Time Telemetry & Systems Automation',
    description:
      'Building real-time observability SPAs (React 18, Vite, WebSocket), automated Python & FastAPI algorithmic trading daemons with risk circuit breakers, and Gemini, OpenAI & Claude AI workflows.',
    tags: ['FastAPI', 'Python', 'Angel One SmartAPI', 'Gemini AI', 'WebSocket'],
    badge: 'Systems & AI',
  },
  {
    icon: Code2,
    title: 'Offline-First & Cloud Infrastructure',
    description:
      'Engineering persistent local caching engines (SQLite, Hive) paired with Firebase (Auth, Firestore, Cloud Functions) and robust REST/GraphQL client communication.',
    tags: ['Firebase Suite', 'SQLite', 'GraphQL / REST', 'CI/CD Pipelines'],
    badge: 'Cloud & Data',
  },
];

export const Snapshot: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-label="Engineering Profile and Summary"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden overflow-x-clip scroll-mt-24"
    >
      {/* Section Header Tag */}
      <div className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest text-primary uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span>About · Engineering Journey</span>
      </div>

      {/* Balanced Desktop Header (Left: Heading, Right: Current Engineering Focus) */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.08] mb-3"
          >
            Architectural Focus &amp;<br />
            <span className="bg-gradient-to-r from-primary via-accent-violet to-accent-cyan bg-clip-text text-transparent font-normal italic font-serif">
              Engineering Journey.
            </span>
          </motion.h2>
          <p className="text-dark-textMuted text-sm sm:text-base max-w-2xl font-normal">
            Decoupled domain layers, deterministic reactive state machines, and strict architectural boundaries engineered for maintainability and zero regressions.
          </p>
        </div>

        {/* Supporting Header Badge Card (Balances Desktop Header Space, Hidden on Mobile) */}
        <div className="hidden lg:block lg:max-w-xs w-full p-4 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 shadow-glass shrink-0">
          <div className="text-[10px] font-mono uppercase tracking-wider text-accent-cyan font-bold mb-1.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            <span>Architectural Philosophy</span>
          </div>
          <p className="text-white/80 text-xs font-mono leading-relaxed">
            Strict Clean Architecture, unidirectional BLoC contracts, and offline-first edge persistence.
          </p>
        </div>
      </div>

      {/* Main Bento Grid: Balanced Heights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
        {/* Bento Tile 1: Shortened, Crisp Narrative (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-7 p-6 sm:p-7 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-glass flex flex-col justify-between"
        >
          <div className="space-y-4">
            {/* Non-wrapping Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-white/10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-cyan flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Architectural Perspective</span>
              </span>
              <span className="text-[11px] font-mono text-white/50">8+ Years Experience</span>
            </div>

            {/* Architecture Quote */}
            <blockquote className="p-4 rounded-xl bg-primary/10 border-l-4 border-primary text-sm sm:text-base font-serif italic text-white/95 leading-snug">
              "Architecture isn't just about writing code that works today. It's about engineering resilient state machines, strict domain boundaries, and zero-leak pipelines so systems scale without regressions."
            </blockquote>

            {/* Shortened, balanced two-paragraph narrative */}
            <div className="space-y-3 text-dark-textMuted text-xs sm:text-sm leading-relaxed">
              <p>
                I am a <strong className="text-white font-semibold">Senior Mobile Architect &amp; Flutter Tech Lead</strong> with <strong className="text-white font-semibold">8+ years of software engineering excellence</strong>, specializing in enterprise Clean Architecture, deterministic BLoC state machines, and shipping <strong className="text-primary font-semibold">25+ platforms delivered</strong> across EdTech, InsurTech, Fintech, and high-growth scale-ups.
              </p>
              <p>
                Experienced spearheading distributed teams and managing mission-critical App Store &amp; Google Play releases at enterprise scale (including <strong className="text-white">Degreed</strong>, <strong className="text-white">Rana Dev</strong>, <strong className="text-white">Roadzen / MVPEX</strong>, <strong className="text-white">Buyzaar</strong>, and <strong className="text-white">Webclues Infotech</strong>), alongside engineering automated <strong className="text-white">Python &amp; FastAPI trading daemons</strong> and AI workflows.
              </p>
            </div>
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-2.5 pt-5 mt-5 border-t border-white/10">
            <a
              href="/resume.pdf"
              download="Afif_Pathan_Senior_Mobile_Architect_CV.pdf"
              aria-label="Download Résumé"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:bg-primary-hover text-slate-950 text-xs font-mono font-bold transition-colors shadow-glow-primary"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Résumé</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-surface/80 hover:bg-dark-surfaceElevated border border-white/10 hover:border-white/20 text-dark-text text-xs font-mono font-medium transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-white/40" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-surface/80 hover:bg-dark-surfaceElevated border border-white/10 hover:border-white/20 text-dark-text text-xs font-mono font-medium transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-primary" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-white/40" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-surface/80 hover:bg-dark-surfaceElevated border border-white/10 hover:border-white/20 text-dark-text text-xs font-mono font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
              <ArrowUpRight className="w-3 h-3 text-white/40" />
            </a>
          </div>
        </motion.div>

        {/* Bento Tile 2: Balanced Profile & Recognition Column (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col justify-between gap-4"
        >
          {/* Portrait & Profile Summary Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-glass flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="relative shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-primary/40 shadow-glow-primary">
                <img
                  src={PERSONAL_INFO.photo}
                  alt="Afif Pathan - Senior Mobile Architect"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="absolute bottom-1 right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
            </div>

            <div className="space-y-1.5 text-center sm:text-left flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs font-mono text-accent-cyan font-medium">
                Senior Mobile Architect &amp; Flutter Lead
              </p>
              <div className="flex flex-col gap-1 text-[11px] font-mono text-dark-textMuted pt-1">
                <div className="flex items-center justify-center sm:justify-start gap-1.5">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-1.5">
                  <Languages className="w-3 h-3 text-accent-violet" />
                  <span>{PERSONAL_INFO.languages.join(' · ')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Award & Industry Recognition Card */}
          <div className="p-5 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-glass">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[9px] font-mono text-amber-400 font-semibold uppercase">
                  Industry Recognition
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {PERSONAL_INFO.award.title}
                </h4>
                <div className="text-[11px] font-mono text-white/60">
                  {PERSONAL_INFO.award.organization}
                </div>
                <p className="text-xs text-dark-textMuted leading-relaxed pt-0.5">
                  {PERSONAL_INFO.award.description}
                </p>
              </div>
            </div>
          </div>

          {/* Production Discipline Standards */}
          <div className="p-4 sm:p-5 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 shadow-glass">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2.5">
              Architectural Standards
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-dark-textMuted">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>Strict Clean Architecture</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>BLoC / Cubit Contracts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>Offline-First (Hive/SQLite)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>Automated CI/CD Releases</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Row of 4 Audited Metric Bento Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="p-5 sm:p-6 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 hover:border-primary/40 transition-all shadow-glass"
        >
          <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mb-1">
            {PERSONAL_INFO.yearsTotal}
          </div>
          <div className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-1 font-mono">
            Total Engineering Experience
          </div>
          <p className="text-[11px] text-dark-textMuted leading-normal">
            Delivering software across mobile, web, backend &amp; systems since 2017.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="p-5 sm:p-6 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 hover:border-accent-cyan/40 transition-all shadow-glass"
        >
          <div className="text-3xl sm:text-4xl font-extrabold text-accent-cyan font-mono mb-1">
            {PERSONAL_INFO.yearsMobile}
          </div>
          <div className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-1 font-mono">
            Mobile &amp; Flutter Focus
          </div>
          <p className="text-[11px] text-dark-textMuted leading-normal">
            Architecting production Flutter &amp; Android platforms for global enterprise users.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="p-5 sm:p-6 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 hover:border-emerald-500/40 transition-all shadow-glass"
        >
          <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono mb-1">
            {PERSONAL_INFO.productionPlatforms}
          </div>
          <div className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-1 font-mono">
            Platforms Delivered
          </div>
          <p className="text-[11px] text-dark-textMuted leading-normal">
            Delivered across e-commerce, EdTech, InsurTech, healthcare &amp; fintech.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="p-5 sm:p-6 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 hover:border-accent-violet/40 transition-all shadow-glass"
        >
          <div className="text-3xl sm:text-4xl font-extrabold text-accent-violet font-mono mb-1">
            16
          </div>
          <div className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-1 font-mono">
            Featured Case Studies
          </div>
          <p className="text-[11px] text-dark-textMuted leading-normal">
            Documented production case studies across mobile, systems &amp; SDK architectures.
          </p>
        </motion.div>
      </div>

      {/* Bento Row: 4 Architectural Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {ARCHITECTURAL_PILLARS.map((pillar, idx) => {
          const IconComp = pillar.icon;
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-glass flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 font-heading">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-dark-textMuted leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-lg bg-black/25 text-white/80 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
