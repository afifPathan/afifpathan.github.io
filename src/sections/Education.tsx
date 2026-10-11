import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Award, Globe2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      aria-label="Education, Recognition and Languages"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/5"
    >
      {/* Signature Section Marker from Reference */}
      <div className="section-marker">
        <span>07 — FOUNDATIONS · EDUCATION &amp; HONORS</span>
        <span>MASTER OF SCIENCE IN INFORMATION TECHNOLOGY</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Education Details */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.05] mb-2">
              Academic foundation &amp;<br />
              <em className="text-slate-900 dark:text-white font-serif font-normal italic">
                credentials.
              </em>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Advanced master's degree in Information Technology with specialized coursework in distributed systems and software engineering.
            </p>
          </div>

          <div className="space-y-4">
            {EDUCATION_DATA.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="p-5 rounded-xl glass-panel border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-cyan-500/30 transition-colors flex items-start gap-4 bg-white/95 dark:bg-slate-900/60 shadow-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-cyan-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                    <span className="text-xs font-mono text-blue-600 dark:text-cyan-400 font-semibold">{edu.period}</span>
                  </div>
                  <div className="text-sm text-slate-700 dark:text-slate-300 font-medium mt-0.5">{edu.institution}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">{edu.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards & Languages Column */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
              Industry Honors.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Verifiable accolades and multilingual communication skills.
            </p>
          </div>

          {/* Award Box */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/20 dark:to-slate-900/60 border border-amber-300 dark:border-amber-500/20 shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.award.title}</h4>
                <span className="text-xs font-mono text-amber-700 dark:text-amber-400 font-semibold">{PERSONAL_INFO.award.organization}</span>
              </div>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mt-2">
              {PERSONAL_INFO.award.description}
            </p>
          </div>

          {/* Languages Box */}
          <div className="p-5 rounded-xl glass-panel border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-slate-900/60 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
              <Globe2 className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span>Languages</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {PERSONAL_INFO.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
