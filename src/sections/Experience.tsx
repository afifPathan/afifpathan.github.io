import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { EXPERIENCES } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';
import {
  MapPin,
  Calendar,
  ExternalLink,
  Github,
  Sparkles,
  Package,
  Play,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // GSAP ScrollTrigger timeline scrub animation
  useGSAP(
    () => {
      if (prefersReducedMotion || !progressBarRef.current || !containerRef.current) return;

      gsap.fromTo(
        progressBarRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            end: 'bottom 85%',
            scrub: 0.35,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section
      ref={containerRef}
      id="experience"
      aria-label="Professional Experience and Career Timeline"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden overflow-x-clip scroll-mt-24"
    >
      {/* Section Header Tag */}
      <div className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest text-primary uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span>Experience · Career Timeline</span>
      </div>

      {/* Balanced Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.08] mb-3"
          >
            Engineering Leadership &amp;<br />
            <span className="bg-gradient-to-r from-primary via-accent-violet to-accent-cyan bg-clip-text text-transparent font-normal italic font-serif">
              Production Journey.
            </span>
          </motion.h2>
          <p className="text-dark-textMuted text-sm sm:text-base max-w-2xl font-normal">
            8+ years of engineering leadership across high-growth startups and enterprise platforms in India and the United States.
          </p>
        </div>

        {/* Supporting Header Card */}
        <div className="hidden lg:block lg:max-w-xs w-full p-4 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 shadow-glass shrink-0">
          <div className="text-[10px] font-mono uppercase tracking-wider text-accent-cyan font-bold mb-1.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            <span>Continuous Delivery</span>
          </div>
          <p className="text-white/80 text-xs font-mono leading-relaxed">
            Leading cross-platform engineering, distributed systems, and mobile release governance since 2017.
          </p>
        </div>
      </div>

      {/* Timeline Layout */}
      <div className="relative">
        {/* Background Track Line: Centered on desktop, left on mobile */}
        <div
          className="absolute top-4 bottom-4 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-white/10"
          aria-hidden="true"
        />

        {/* Dynamic Scrubbing Progress Line */}
        <div
          ref={progressBarRef}
          className="absolute top-4 bottom-4 left-4 md:left-1/2 -translate-x-1/2 w-[2.5px] bg-gradient-to-b from-primary via-accent-violet to-accent-cyan origin-top shadow-glow-primary"
          style={{
            transform: prefersReducedMotion ? 'scaleY(1)' : 'scaleY(0)',
          }}
          aria-hidden="true"
        />

        {/* Timeline Items */}
        <div className="space-y-12 md:space-y-16">
          {EXPERIENCES.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const isCurrent = exp.period.toLowerCase().includes('present');

            return (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-start ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node Marker */}
                <div
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isCurrent
                        ? 'bg-primary border-white ring-4 ring-primary/40 shadow-glow-primary'
                        : 'bg-dark-surfaceElevated border-accent-cyan/80'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isCurrent ? 'bg-white animate-ping' : 'bg-accent-cyan'
                      }`}
                    />
                  </div>
                </div>

                {/* Empty Half on Desktop to Alternate */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Card (Pl-12 on mobile for left marker offset) */}
                <div
                  className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    isLeft ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <motion.article
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
                    className={`p-6 sm:p-7 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-glass ${
                      isCurrent ? 'ring-1 ring-primary/30' : ''
                    }`}
                  >
                    {/* Role Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-heading">
                            {exp.role}
                          </h3>
                          {isCurrent && (
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                              Current Role
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-dark-textMuted">
                          <span className="font-semibold text-accent-cyan">
                            {exp.company}
                          </span>
                          {exp.partner && (
                            <span className="text-accent-violet">
                              ({exp.partner})
                            </span>
                          )}
                          <span className="text-white/20">·</span>
                          <span className="flex items-center gap-1 text-white/70">
                            <MapPin className="w-3 h-3 text-dark-textDim" />
                            <span>{exp.location}</span>
                          </span>
                        </div>
                      </div>

                      {/* Period Badge */}
                      <div className="self-start sm:self-center shrink-0">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-surfaceElevated border border-white/10 text-xs font-mono text-white/80">
                          <Calendar className="w-3 h-3 text-accent-cyan" />
                          <span>{exp.period}</span>
                        </span>
                      </div>
                    </div>

                    {/* Highlight Badge if present */}
                    {exp.highlight && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-accent-violet/10 border border-accent-violet/20 text-xs font-mono text-accent-violet font-semibold mb-4">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{exp.highlight}</span>
                      </div>
                    )}

                    {/* Key Impact Bullets (2-3 items) */}
                    <ul className="space-y-2 mb-5">
                      {exp.responsibilities.slice(0, 3).map((item, bulletIdx) => (
                        <li
                          key={bulletIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-dark-textMuted leading-relaxed font-normal"
                        >
                          <span className="text-primary font-bold mt-0.5 shrink-0">
                            •
                          </span>
                          <span className="text-dark-text font-normal">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/10">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-200/60 dark:bg-black/30 border border-slate-300/40 dark:border-white/5 text-slate-700 dark:text-dark-textMuted hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* External Evidence Links */}
                    {exp.links && Object.keys(exp.links).length > 0 && (
                      <div className="flex flex-wrap items-center gap-3 pt-4 mt-4 border-t border-white/5 text-xs font-mono">
                        {exp.links.live && (
                          <a
                            href={exp.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-cyan-700 dark:text-accent-cyan hover:underline"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Product</span>
                          </a>
                        )}
                        {exp.links.repo && (
                          <a
                            href={exp.links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-slate-700 dark:text-white/80 hover:text-white hover:underline"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Source Code</span>
                          </a>
                        )}
                        {exp.links.package && (
                          <a
                            href={exp.links.package}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400 hover:underline"
                          >
                            <Package className="w-3.5 h-3.5" />
                            <span>pub.dev Package</span>
                          </a>
                        )}
                        {exp.links.playStore && (
                          <a
                            href={exp.links.playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 hover:underline"
                          >
                            <Play className="w-3 h-3 fill-emerald-700 dark:fill-emerald-400" />
                            <span>Play Store</span>
                          </a>
                        )}
                        {exp.links.appStore && (
                          <a
                            href={exp.links.appStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>App Store</span>
                          </a>
                        )}
                      </div>
                    )}
                  </motion.article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
