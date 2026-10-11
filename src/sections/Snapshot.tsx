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
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const SNAPSHOT_PILLARS = [
  {
    icon: Layers,
    title: 'Cross-Platform & Native Architecture',
    description:
      '6+ years architecting enterprise Flutter applications and native Android services. Deep focus on modularization, memory profiling, and smooth 60fps/120fps client experiences.',
    tags: ['Flutter', 'Dart', 'Android (Java/Kotlin)', 'Material 3'],
  },
  {
    icon: Workflow,
    title: 'Enterprise Clean Architecture',
    description:
      'Designing strict feature-based modular systems adhering to SOLID principles and Inversion of Control. Keeping domain business logic immune to third-party SDK deprecation.',
    tags: ['Clean Architecture', 'SOLID', 'BLoC / Cubit', 'Riverpod'],
  },
  {
    icon: GitBranch,
    title: 'Full-Stack & Systems Automation',
    description:
      'Building real-time observability SPAs (React 18, Vite, WebSocket), automated Python & FastAPI algorithmic trading daemons with risk circuit breakers, and Gemini, OpenAI & Claude AI data workflows.',
    tags: ['FastAPI', 'Python', 'Angel One SmartAPI', 'Gemini AI', 'OpenAI APIs', 'React 18'],
  },
  {
    icon: Code2,
    title: 'Offline-First & Cloud Infrastructure',
    description:
      'Engineering persistent local caching engines (SQLite, Hive) paired with Firebase (Auth, Firestore, Cloud Functions) and robust REST/GraphQL client communication.',
    tags: ['Firebase Suite', 'SQLite', 'GraphQL / REST', 'CI/CD Pipelines'],
  },
];

export const Snapshot: React.FC = () => {
  return (
    <section
      id="snapshot"
      aria-label="Engineering Profile and Summary"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden overflow-x-clip"
    >
      {/* Signature Section Marker from Reference */}
      <div className="section-marker">
        <span>01 — THE ARCHITECT · A LITTLE CONTEXT</span>
        <span>SENIOR MOBILE ARCHITECT &amp; FLUTTER LEAD</span>
      </div>

      {/* Editorial Split: Hi, I'm Afif + Action Links on Left, Story + Quote on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        {/* Left Side: Large Name & Vertical Quick Links */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-5xl sm:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[0.95]">
            Hi, I'm<br />
            <em className="text-slate-900 dark:text-white font-serif font-normal italic">
              Afif.
            </em>
          </h2>

          <p className="text-sm font-mono text-slate-500 dark:text-slate-400">
            Senior Mobile Architect · Flutter Lead · Ahmedabad, India
          </p>

          {/* Quick Action Link Pills */}
          <div className="flex flex-wrap lg:flex-col gap-2 pt-2">
            <a
              href="/resume.pdf"
              download="Afif_Pathan_Senior_Mobile_Architect_CV.pdf"
              className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-white/10 hover:border-slate-800 dark:hover:border-white text-xs font-mono font-medium text-slate-800 dark:text-slate-200 shadow-2xs transition-all w-fit"
            >
              <span className="flex items-center gap-2">
                <Download className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                <span>Download Résumé</span>
              </span>
              <span>↓</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-white/10 hover:border-slate-800 dark:hover:border-white text-xs font-mono font-medium text-slate-800 dark:text-slate-200 shadow-2xs transition-all w-fit"
            >
              <span className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                <span>GitHub Profile</span>
              </span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-white/10 hover:border-slate-800 dark:hover:border-white text-xs font-mono font-medium text-slate-800 dark:text-slate-200 shadow-2xs transition-all w-fit"
            >
              <span className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                <span>LinkedIn Network</span>
              </span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-white/10 hover:border-slate-800 dark:hover:border-white text-xs font-mono font-medium text-slate-800 dark:text-slate-200 shadow-2xs transition-all w-fit"
            >
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />
                <span>Email Directly</span>
              </span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Right Side: Editorial Pull Quote & Deep Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <blockquote className="p-6 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border-l-4 border-amber-600 dark:border-amber-400 text-lg sm:text-xl font-serif italic text-slate-900 dark:text-slate-100 leading-snug">
            "Architecture isn't just about writing code that works today. It's about engineering resilient state machines, strict domain boundaries, and zero-leak pipelines so teams can scale without regressions."
          </blockquote>

          <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a <strong className="text-slate-900 dark:text-white">Senior Mobile Architect and Flutter Tech Lead</strong> with <strong className="text-slate-900 dark:text-white">8+ years of total software engineering excellence</strong>, including <strong className="text-slate-900 dark:text-white">6+ years architecting enterprise cross-platform mobile systems</strong> and delivering <strong className="text-slate-900 dark:text-white">25+ production platforms</strong>.
            </p>
            <p>
              Throughout my career at enterprise and high-growth organizations like <strong>Degreed</strong> (Bangalore), <strong>Rana Dev</strong> (Washington, USA), <strong>Roadzen / MVPEX</strong>, <strong>Buyzaar</strong>, <strong>Webclues Infotech</strong>, <strong>Ashutec Solutions</strong>, and <strong>SMG Info Solutions</strong>, I have established Clean Architecture standards, managed mission-critical Google Play and Apple App Store releases, and spearheaded distributed engineering teams across India and the United States.
            </p>
            <p>
              Beyond mobile, I engineer automated <strong>Python &amp; FastAPI algorithmic trading daemons</strong> interfacing with <strong>Angel One SmartAPI</strong>, real-time WebSocket telemetry dashboards on React 18, and production-grade <strong>Gemini, OpenAI, Claude, and LLM automation workflows</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Verified Metrics Counter Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          transition={{ duration: 0.35, delay: 0.04, ease: 'easeOut' }}
          className="p-6 rounded-2xl glass-panel border border-slate-200/60 dark:border-white/10 hover:border-slate-400 dark:hover:border-cyan-500/40 transition-all bg-white/35 dark:bg-slate-800/30 backdrop-blur-md shadow-md hover:shadow-lg transform-gpu"
        >
          <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono mb-1">
            {PERSONAL_INFO.yearsTotal}
          </div>
          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1">
            Total Engineering Experience
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400">
            Delivering software across mobile, web, backend &amp; systems since 2017.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          transition={{ duration: 0.35, delay: 0.08, ease: 'easeOut' }}
          className="p-6 rounded-2xl glass-panel border border-slate-200/60 dark:border-white/10 hover:border-slate-400 transition-all bg-white/35 dark:bg-slate-800/30 backdrop-blur-md shadow-md hover:shadow-lg transform-gpu"
        >
          <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-cyan-400 font-mono mb-1">
            {PERSONAL_INFO.yearsMobile}
          </div>
          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1">
            Cross-Platform Focus
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400">
            Architecting production Flutter &amp; Android platforms for global users.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          transition={{ duration: 0.35, delay: 0.12, ease: 'easeOut' }}
          className="p-6 rounded-2xl glass-panel border border-slate-200/60 dark:border-white/10 hover:border-slate-400 transition-all bg-white/35 dark:bg-slate-800/30 backdrop-blur-md shadow-md hover:shadow-lg transform-gpu"
        >
          <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono mb-1">
            {PERSONAL_INFO.productionPlatforms}
          </div>
          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1">
            Production Systems Delivered
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400">
            Delivered across e-commerce, EdTech, insurance, healthcare &amp; fintech.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          transition={{ duration: 0.35, delay: 0.16, ease: 'easeOut' }}
          className="p-6 rounded-2xl glass-panel border border-slate-200/60 dark:border-white/10 hover:border-slate-400 transition-all bg-white/35 dark:bg-slate-800/30 backdrop-blur-md shadow-md hover:shadow-lg transform-gpu"
        >
          <div className="text-3xl sm:text-4xl font-extrabold text-amber-600 dark:text-amber-400 font-mono mb-1">
            100%
          </div>
          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1">
            Verified In CV
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400">
            Zero fabricated numbers or unsupported claims. Authentic production evidence.
          </p>
        </motion.div>
      </div>

      {/* Architectural Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SNAPSHOT_PILLARS.map((pillar, idx) => {
          const IconComp = pillar.icon;
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.38, delay: (idx % 2) * 0.05, ease: 'easeOut' }}
              className="p-6 rounded-2xl bg-white/35 dark:bg-slate-800/30 backdrop-blur-md border border-slate-200/60 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200 shadow-md hover:shadow-lg transform-gpu"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700/60 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-cyan-400">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{pillar.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {pillar.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-white/5">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Recognition Card from CV */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.12 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent dark:from-amber-950/20 dark:via-slate-900/40 dark:to-slate-900/40 border border-amber-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-mono text-amber-700 dark:text-amber-400 uppercase tracking-wider font-semibold">
              Formal Industry Recognition
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.award.title}</h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5">{PERSONAL_INFO.award.description}</p>
          </div>
        </div>
        <span className="text-xs font-mono text-slate-600 dark:text-slate-400 px-3 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/5 self-start sm:self-auto shadow-xs">
          Webclues Infotech (2020)
        </span>
      </motion.div>
    </section>
  );
};
