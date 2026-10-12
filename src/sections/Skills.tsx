import React from 'react';
import { motion } from 'framer-motion';
import { TechCluster } from '../components/TechCluster';
import { TechMarquee } from '../components/TechMarquee';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-label="Technical Skills and Stack"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden overflow-x-clip scroll-mt-24"
    >
      {/* Section Header Tag */}
      <div className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest text-primary uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span>Skills · Technical Arsenal</span>
      </div>

      {/* Balanced Desktop Header (Left: Heading, Right: Supporting Competency Note) */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.08] mb-3"
          >
            Tools &amp; Technologies I've<br />
            <span className="bg-gradient-to-r from-primary via-accent-violet to-accent-cyan bg-clip-text text-transparent font-normal italic font-serif">
              Mastered.
            </span>
          </motion.h2>
          <p className="text-dark-textMuted text-sm sm:text-base max-w-2xl font-normal">
            An interactive physical view of my production arsenal across mobile client runtimes, enterprise architectural patterns, deterministic reactive state machines, cloud infrastructure, and algorithmic trading daemons.
          </p>
        </div>

        {/* Supporting Header Card */}
        <div className="lg:max-w-xs w-full p-4 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 shadow-glass shrink-0">
          <div className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold mb-1.5 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-primary" />
            <span>Core Competencies</span>
          </div>
          <p className="text-white/80 text-xs font-mono leading-relaxed">
            Clean Architecture, deterministic state machines (BLoC/Cubit), and low-latency real-time systems.
          </p>
        </div>
      </div>

      {/* Infinite Bi-Directional Animated Tech Marquee */}
      <TechMarquee />

      {/* Interactive HUD Telemetry & Skill Matrix Grid */}
      <div className="mt-8">
        <TechCluster />
      </div>
    </section>
  );
};
