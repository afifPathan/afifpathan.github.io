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
  '25+ PRODUCTION SYSTEMS DELIVERED',
  'DETERMINISTIC BLOC / CUBIT',
  '6+ YEARS CROSS-PLATFORM & FLUTTER',
  'FASTAPI & PYTHON TRADING DAEMONS',
  'REAL-TIME WEBSOCKET TELEMETRY',
  'WEBRTC VIDEO TELECONSULTATION',
  'OFFLINE-FIRST (SQLITE / HIVE)',
  'GEMINI & OPENAI AI WORKFLOWS',
  'COMPILED 60-120 FPS CLIENTS',
  'ZERO MEMORY LEAKS',
];

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction and Senior Engineering Profile"
      className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-8 px-4 sm:px-6 lg:px-8 bg-blueprint-grid overflow-hidden"
    >
      {/* Ambient Lighting Cones */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/[0.06] dark:bg-cyan-500/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[320px] bg-amber-500/[0.04] dark:bg-indigo-500/[0.05] rounded-full blur-[130px] pointer-events-none" />

      {/* Animated Kinetic Watermark Track (Never Clipped, Infinite Fluid Motion) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 overflow-hidden pointer-events-none select-none z-0">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
          className="flex whitespace-nowrap text-[clamp(4.5rem,11vw,9.5rem)] font-black uppercase tracking-tight text-slate-900/[0.04] dark:text-white/[0.035] leading-none select-none font-mono"
        >
          <span className="mr-12">SENIOR MOBILE ARCHITECT &amp; FLUTTER LEAD · AFIF PATHAN · SOFTWARE ARCHITECT · 25+ SYSTEMS ·</span>
          <span className="mr-12">SENIOR MOBILE ARCHITECT &amp; FLUTTER LEAD · AFIF PATHAN · SOFTWARE ARCHITECT · 25+ SYSTEMS ·</span>
        </motion.div>
      </div>

      {/* Main Hero Content Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10 flex-1 my-auto py-4">
        {/* Left Column: Big Role Headline, Name Signature & Senior Positioning */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Status & Identity Header Bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-800 dark:text-emerald-300 backdrop-blur-sm shadow-2xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold">Available for Remote &amp; Architecture Advisory</span>
            </div>

            {/* Verified Identity Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 shadow-2xs">
              <span className="font-bold text-slate-900 dark:text-white">Afif Pathan</span>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-slate-500 dark:text-slate-400">8+ Years in Production · 25+ Systems</span>
            </div>
          </motion.div>

          {/* Primary Editorial Heading: SENIOR MOBILE ARCHITECT & FLUTTER LEAD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.05] mb-3">
              Senior Mobile Architect &amp;{' '}
              <em className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-600 dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-300">
                Flutter Lead.
              </em>
            </h1>

            <div className="text-base sm:text-xl font-bold tracking-tight text-slate-700 dark:text-slate-300 font-mono">
              Software Architect
            </div>
          </motion.div>

          {/* Specialization Chips Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 mb-6"
          >
            <span className="px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-900 border border-slate-200 dark:border-white/10 font-medium shadow-2xs">
              ✦ Cross-Platform Systems
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-900 border border-slate-200 dark:border-white/10 font-medium shadow-2xs">
              ✦ Enterprise Clean Architecture
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-900 border border-slate-200 dark:border-white/10 font-medium shadow-2xs">
              ✦ FastAPI &amp; Trading Daemons
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-900 border border-slate-200 dark:border-white/10 font-medium shadow-2xs">
              ✦ Google Antigravity &amp; Codex
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-900 border border-slate-200 dark:border-white/10 font-medium shadow-2xs">
              ✦ AI Agentic Automation
            </span>
          </motion.div>

          {/* Positioning Statement Card: Generous Padding & Elegant Framing */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 border-l-4 border-l-blue-600 dark:border-l-cyan-400 shadow-xs mb-8"
          >
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
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
              , offline-first SQLite/Hive engines, Python/FastAPI algorithmic trading daemons, and{' '}
              <span className="text-blue-700 dark:text-cyan-400 font-medium">AI Automation (Google Antigravity, OpenAI Codex, Gemini &amp; Claude)</span> across EdTech, InsurTech, e-commerce, healthcare &amp; telemedicine, algorithmic fintech, enterprise facility geofencing, hardware POS access control, audio streaming, and automotive telematics.
            </p>
          </motion.div>

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
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-semibold text-white bg-slate-900 hover:bg-black dark:bg-white dark:hover:bg-slate-100 dark:text-[#0e121d] transition-all duration-200 shadow-md cursor-pointer"
            >
              <span>Explore 25+ Systems &amp; Work</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download="Afif_Pathan_Senior_Mobile_Architect_CV.pdf"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-white/10 hover:border-slate-500 shadow-2xs transition-all duration-200 cursor-pointer"
            >
              <Download className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span>Download Verified CV</span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ x: 3 }}
              className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl font-mono text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <span>Initiate Contact</span>
              <span>↗</span>
            </motion.a>
          </motion.div>

          {/* Direct Verified Channels in Dedicated Pill Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-slate-600 dark:text-slate-400 shadow-xs"
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
