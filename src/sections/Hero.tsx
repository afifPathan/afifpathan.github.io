import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LanyardBadge } from '../components/LanyardBadge';
import { useReducedMotion } from '../hooks/useReducedMotion';

const ROTATING_ROLES = [
  'Clean Architecture & SOLID Contracts',
  'Real-Time Trading Systems & Telemetry',
  'AI Agentic Workflows & System Automation',
  'Flutter Tech Leadership & Cross-Platform',
];

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Rotating Role Carousel
  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Subtle Mouse Parallax on Desktop (disabled on touch / reduced motion)
  useEffect(() => {
    if (prefersReducedMotion) return;
    const isTouch = 'ontouchstart' in window || window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  // GSAP Headline Word Reveal with proper useGSAP context cleanup
  useGSAP(
    () => {
      if (prefersReducedMotion) return;

      gsap.from('.hero-word-reveal', {
        opacity: 0,
        y: 30,
        duration: 0.65,
        stagger: 0.06,
        ease: 'power3.out',
      });

      gsap.from('.hero-element-fade', {
        opacity: 0,
        y: 18,
        duration: 0.45,
        stagger: 0.07,
        delay: 0.2,
        ease: 'power2.out',
      });
    },
    { scope: heroRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-label="Introduction and Senior Engineering Profile"
      className="relative min-h-[92vh] flex flex-col justify-between pt-20 sm:pt-24 pb-6 px-4 sm:px-6 lg:px-8 bg-[var(--bg-base)] text-[var(--text-primary)] overflow-hidden w-full max-w-full"
    >
      {/* Animated Ambient Aurora Glow Cones with Mouse Parallax */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-primary/10 rounded-full blur-[130px] transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 right-10 w-[480px] h-[340px] bg-accent-violet/10 rounded-full blur-[140px] transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${-mouseOffset.x * 0.7}px, ${-mouseOffset.y * 0.7}px)`,
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 left-1/4 w-[380px] h-[280px] bg-accent-cyan/10 rounded-full blur-[120px]"
        aria-hidden="true"
      />

      {/* Top Status & Verification Header Bar (Non-wrapping on mobile) */}
      <div className="hero-element-fade max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 mb-5 pb-3 border-b border-white/10 relative z-10">
        {/* Availability Radar Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] sm:text-xs font-mono text-emerald-400 backdrop-blur-md shadow-glass">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-semibold">Available for Remote &amp; Architecture Advisory</span>
        </div>

        {/* Identity & Experience Bar (Single line clean on mobile) */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-surface/80 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs font-mono text-dark-textMuted shadow-glass">
          <span className="font-bold text-white">Afif Pathan</span>
          <span className="text-white/20">·</span>
          <span className="font-medium hidden sm:inline">8+ Years Experience · 25+ Platforms Delivered</span>
          <span className="font-medium sm:hidden">8+ Yrs · 25+ Platforms</span>
        </div>
      </div>

      {/* Main 2-Column Bento Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10 flex-1 my-auto py-1">
        {/* Left Column: ONE Primary Title, Rotating Role, Tags, 2-Line Overview, 2 CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          {/* Primary Editorial Heading: ONE Title */}
          <div className="mb-2 pt-0">
            <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-heading tracking-tight leading-[1.08] mb-2 break-words">
              <span className="hero-word-reveal inline-block mr-2 sm:mr-3">Senior</span>
              <span className="hero-word-reveal inline-block mr-2 sm:mr-3">Mobile</span>
              <span className="hero-word-reveal inline-block mr-2 sm:mr-3">Architect</span>
              <span className="hero-word-reveal inline-block mr-2 sm:mr-3">&amp;</span>
              <span className="hero-word-reveal inline-block bg-gradient-to-r from-primary via-accent-violet to-accent-cyan bg-clip-text text-transparent font-normal italic">
                Flutter Lead.
              </span>
            </h1>

            {/* Rotating Role Text Carousel */}
            <div className="hero-element-fade flex items-center gap-2 mt-2 h-7 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 1, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 1, y: -12 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="text-xs sm:text-sm font-mono font-medium text-accent-cyan flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                  <span>{ROTATING_ROLES[roleIndex]}</span>
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Specialization Chips Bar: 3 pills on mobile so CTAs appear higher, 5 on desktop */}
          <div className="hero-element-fade flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-dark-textMuted mb-4 mt-2">
            <span className="px-2.5 py-1 rounded-xl bg-dark-surface/70 backdrop-blur-md border border-white/10 hover:border-primary/40 font-medium transition-colors shadow-glass">
              ✦ Cross-Platform Systems
            </span>
            <span className="px-2.5 py-1 rounded-xl bg-dark-surface/70 backdrop-blur-md border border-white/10 hover:border-primary/40 font-medium transition-colors shadow-glass">
              ✦ Enterprise Clean Architecture
            </span>
            <span className="px-2.5 py-1 rounded-xl bg-dark-surface/70 backdrop-blur-md border border-white/10 hover:border-primary/40 font-medium transition-colors shadow-glass">
              ✦ FastAPI &amp; Trading Daemons
            </span>
            <span className="hidden sm:inline-flex px-2.5 py-1 rounded-xl bg-dark-surface/70 backdrop-blur-md border border-white/10 hover:border-primary/40 font-medium transition-colors shadow-glass">
              ✦ Google Antigravity &amp; Codex
            </span>
            <span className="hidden sm:inline-flex px-2.5 py-1 rounded-xl bg-dark-surface/70 backdrop-blur-md border border-white/10 hover:border-primary/40 font-medium transition-colors shadow-glass">
              ✦ AI Agentic Automation
            </span>
          </div>

          {/* Shortened Positioning Statement Card (Distinct Point: What I Do) */}
          <div className="hero-element-fade p-4 sm:p-5 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 shadow-glass mb-5">
            <p className="text-sm sm:text-base text-dark-textMuted leading-relaxed font-normal">
              Architecting scalable cross-platform systems, enterprise Flutter foundations, and low-latency algorithmic trading daemons. Focused on deterministic state machines and production resilience.
            </p>
          </div>

          {/* Action CTAs: Exactly TWO buttons (Primary: View Work, Secondary: Contact) */}
          <div className="hero-element-fade flex flex-wrap items-center gap-3.5 mb-2">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-primary hover:bg-primary-hover transition-all duration-200 shadow-glow-primary cursor-pointer"
            >
              <span>View Work</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-medium text-dark-text bg-dark-surface/80 hover:bg-dark-surfaceElevated border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer shadow-glass"
            >
              <span>Contact</span>
              <span>↗</span>
            </motion.a>
          </div>

          {/* Compact Production Core Tech Strip (Balances Left Column Height) */}
          <div className="hero-element-fade pt-4 mt-3 border-t border-white/5 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-dark-textDim font-semibold mr-1">
              Production Core:
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-dark-surface/60 border border-white/10 text-xs font-mono text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Flutter
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-dark-surface/60 border border-white/10 text-xs font-mono text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" /> Dart
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-dark-surface/60 border border-white/10 text-xs font-mono text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Python
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-dark-surface/60 border border-white/10 text-xs font-mono text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> FastAPI
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-dark-surface/60 border border-white/10 text-xs font-mono text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" /> Firebase
            </span>
          </div>
        </div>

        {/* Right Column: 3D ID Badge + Telemetry Pod */}
        <div className="lg:col-span-5 flex flex-col items-center justify-start relative w-full">
          <div className="w-full flex justify-center mb-2">
            <LanyardBadge />
          </div>

          {/* Telemetry Pod (Consistent Reconciled Numbers) */}
          <div className="hero-element-fade w-full max-w-[340px] rounded-2xl bg-dark-surface/75 backdrop-blur-xl border border-white/10 p-4 shadow-glass">
            {/* Header: Fixed width & unclipped label */}
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-white/10 text-xs font-mono">
              <span className="font-bold text-white uppercase tracking-wider text-[11px] truncate mr-2">
                Architecture Telemetry
              </span>
              <span className="text-[10px] text-accent-cyan font-mono shrink-0">
                {PERSONAL_INFO.yearsTotal} Yrs Exp
              </span>
            </div>

            {/* 2x2 Telemetry Metric Grid */}
            <div className="grid grid-cols-2 gap-2 font-mono mb-3">
              <div className="p-2.5 rounded-xl bg-black/30 border border-white/5 text-center">
                <div className="text-lg font-extrabold text-primary leading-tight">
                  {PERSONAL_INFO.yearsTotal}
                </div>
                <div className="text-[9px] text-dark-textMuted uppercase tracking-tight mt-0.5">
                  Years Total Exp.
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-black/30 border border-white/5 text-center">
                <div className="text-lg font-extrabold text-accent-violet leading-tight">
                  {PERSONAL_INFO.productionPlatforms}
                </div>
                <div className="text-[9px] text-dark-textMuted uppercase tracking-tight mt-0.5">
                  Platforms Delivered
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-black/30 border border-white/5 text-center">
                <div className="text-lg font-extrabold text-accent-cyan leading-tight">
                  {PERSONAL_INFO.yearsMobile}
                </div>
                <div className="text-[9px] text-dark-textMuted uppercase tracking-tight mt-0.5">
                  Years Mobile Focus
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-black/30 border border-white/5 text-center">
                <div className="text-lg font-extrabold text-amber-400 leading-tight">
                  16
                </div>
                <div className="text-[9px] text-dark-textMuted uppercase tracking-tight mt-0.5">
                  Featured Case Studies
                </div>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-1.5 text-xs font-mono text-dark-textMuted">
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-dark-textDim">
                <span>Direct Channels</span>
                <span className="text-[9px] text-accent-cyan font-mono">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-[11px]">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>github.com/afifPathan</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>linkedin.com/in/afif-pathan</span>
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue (Clean low-profile anchor link without overlapping ticker) */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-dark-textMuted">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="uppercase tracking-widest text-[10px]">SCROLL TO EXPLORE ARCHITECTURE</span>
        </div>
        <a href="#about" className="flex items-center gap-1 text-[11px] text-dark-textMuted hover:text-white transition-colors">
          <span>Scroll</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
