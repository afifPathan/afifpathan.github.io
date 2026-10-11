import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LanyardBadge } from '../components/LanyardBadge';

const TICKER_ITEMS = [
  'ENTERPRISE CLEAN ARCHITECTURE',
  '25+ PRODUCTION SYSTEMS BUILT',
  'DETERMINISTIC BLOC / CUBIT',
  '6+ YEARS CROSS-PLATFORM & FLUTTER',
  'REAL-TIME WEBSOCKET TELEMETRY',
  'WEBRTC VIDEO TELECONSULTATION',
  'OFFLINE-FIRST (SQLITE / HIVE)',
  'ALGORITHMIC TRADING DAEMONS',
  'GEMINI AI WORKFLOWS',
  'COMPILED 60-120 FPS CLIENTS',
  'ZERO MEMORY LEAKS',
];

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction and Senior Engineering Profile"
      className="relative min-h-[96vh] flex flex-col justify-between pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-blueprint-grid overflow-hidden"
    >
      {/* Editorial Watermark Ghost from Reference Site */}
      <div className="hero-ghost" aria-hidden="true">
        ARCHITECT
      </div>

      {/* Ambient Lighting Cones */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/[0.06] dark:bg-cyan-500/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[320px] bg-amber-500/[0.04] dark:bg-indigo-500/[0.05] rounded-full blur-[130px] pointer-events-none" />

      {/* Main Hero Content Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10 flex-1 my-auto">
        {/* Left Column: Editorial Headlines & Senior Positioning */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Status Eyebrow Note */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 w-fit mb-6 shadow-xs backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-semibold text-slate-900 dark:text-white">Senior Mobile Architect</span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-slate-600 dark:text-slate-400">Flutter Tech Lead</span>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-medium hidden sm:inline">
              Available for Remote / Advisory
            </span>
          </motion.div>

          {/* Primary Editorial Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.02] mb-3">
              Senior Mobile<br />
              &amp; Flutter<br />
              <em className="text-slate-900 dark:text-white font-serif font-normal italic">
                Architect.
              </em>
            </h1>

            <div className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 tracking-tight flex items-center gap-2 mb-4">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-slate-400 dark:text-slate-600 font-normal">/</span>
              <span className="text-blue-700 dark:text-cyan-400 font-mono text-base font-semibold">
                Staff Engineer
              </span>
            </div>
          </motion.div>

          {/* Specialization Chips Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 mb-6"
          >
            <span className="px-2.5 py-1 rounded-md bg-white/80 dark:bg-slate-900 border border-slate-200 dark:border-white/5 font-medium shadow-xs">
              Cross-Platform Systems
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/80 dark:bg-slate-900 border border-slate-200 dark:border-white/5 font-medium shadow-xs">
              Enterprise Clean Architecture
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/80 dark:bg-slate-900 border border-slate-200 dark:border-white/5 font-medium shadow-xs">
              Algorithmic Trading &amp; Real-Time
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/80 dark:bg-slate-900 border border-slate-200 dark:border-white/5 font-medium shadow-xs">
              AI-Assisted Workflows
            </span>
          </motion.div>

          {/* Positioning Statement with Verified Metrics */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal"
          >
            <span className="text-slate-900 dark:text-white font-semibold">
              8+ years of software engineering excellence
            </span>
            , including{' '}
            <span className="text-slate-900 dark:text-white font-semibold">
              6+ years architecting production-grade cross-platform platforms
            </span>{' '}
            and{' '}
            <span className="text-blue-700 dark:text-cyan-400 font-semibold">
              {PERSONAL_INFO.productionPlatforms} production systems
            </span>
            . Specializing in enterprise{' '}
            <span className="text-blue-700 dark:text-cyan-400 font-medium">Clean Architecture &amp; SOLID</span>
            , deterministic{' '}
            <span className="text-indigo-600 dark:text-indigo-300 font-medium">
              BLoC/Cubit &amp; Riverpod state machines
            </span>
            , real-time{' '}
            <span className="text-slate-900 dark:text-white font-medium">
              WebSocket telemetry &amp; WebRTC teleconsultation
            </span>
            , offline-first SQLite/Hive engines, Python algorithmic trading daemons, and{' '}
            <span className="text-blue-700 dark:text-cyan-400 font-medium">Gemini AI automation</span> across EdTech, e-commerce, healthcare, and algorithmic fintech.
          </motion.p>

          {/* Action CTAs with Micro-Interactions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3.5 mb-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-semibold text-white bg-slate-900 hover:bg-black dark:bg-white dark:hover:bg-slate-100 dark:text-[#07090e] transition-all duration-200 shadow-md"
            >
              <span>Explore 25+ Systems &amp; Work</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download="Afif_Pathan_Senior_Mobile_Architect_CV.pdf"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-white/10 hover:border-slate-500 shadow-xs transition-all duration-200"
            >
              <Download className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span>Download Verified CV</span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ x: 3 }}
              className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl font-mono text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <span>Initiate Contact</span>
              <span>↗</span>
            </motion.a>
          </motion.div>

          {/* Direct Verified Channels */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-5 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-5 text-xs font-mono text-slate-600 dark:text-slate-400"
          >
            <span className="text-slate-500 uppercase tracking-wider text-[11px] font-semibold">
              Direct Channels:
            </span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-slate-950 dark:hover:text-cyan-300 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/afifPathan</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-slate-950 dark:hover:text-cyan-300 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>linkedin.com/in/afif-pathan</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-slate-950 dark:hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Signature Interactive 3D Lanyard ID Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
        >
          <LanyardBadge />
        </motion.div>
      </div>

      {/* Bottom Scroll Cue & Continuous Marquee Ticker */}
      <div className="relative z-10 mt-6 pt-4 border-t border-slate-200 dark:border-white/10">
        {/* Scroll Prompt */}
        <div className="flex items-center justify-between pb-3 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
            <span className="uppercase tracking-widest text-[10px]">SCROLL TO EXPLORE ARCHITECTURE</span>
          </div>
          <a href="#snapshot" className="flex items-center gap-1 text-[11px] hover:text-slate-900 dark:hover:text-white transition-colors">
            <span>Scroll</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>

        {/* Continuous Marquee Ticker */}
        <div className="overflow-hidden py-2 bg-slate-100/70 dark:bg-slate-900/50 rounded-xl border border-slate-200/80 dark:border-white/5 select-none">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
            className="flex items-center gap-8 whitespace-nowrap text-[11px] font-mono text-slate-700 dark:text-slate-300 uppercase tracking-widest"
          >
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
              <span key={idx} className="flex items-center gap-4">
                <span>{item}</span>
                <span className="text-blue-500 dark:text-cyan-400 font-bold">·</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
