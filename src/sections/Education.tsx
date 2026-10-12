import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Award, Globe2, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      aria-label="Education, Recognition and Languages"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden overflow-x-clip"
    >
      {/* Signature Section Marker from Reference */}
      <div className="section-marker">
        <span>07 — FOUNDATIONS · EDUCATION &amp; HONORS</span>
        <span>MASTER OF SCIENCE IN INFORMATION TECHNOLOGY</span>
      </div>

      <div className="mb-12">
        <motion.h2
          initial={{ opacity: 0, scale: 0.92, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.05] mb-2"
        >
          Academic foundation &amp;<br />
          <em className="text-slate-900 dark:text-white font-serif font-normal italic">
            credentials.
          </em>
        </motion.h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl">
          Formal academic degrees in Information Technology paired with industry awards and multilingual communication capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Column: Academic Degrees (Fast Repeat Swipe from Left) */}
        <div className="flex flex-col justify-between space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-cyan-400 mb-1">
            <GraduationCap className="w-4 h-4" />
            <span>Formal Higher Education</span>
          </div>

          <div className="space-y-4 flex-1 flex flex-col justify-between">
            {EDUCATION_DATA.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -110 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.08 }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-2xl glass-panel border border-slate-300/70 dark:border-white/10 hover:border-slate-500 dark:hover:border-cyan-500/30 transition-all flex items-start gap-4 bg-white/35 dark:bg-slate-800/35 backdrop-blur-md shadow-md hover:shadow-xl flex-1 transform-gpu"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700/60 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-cyan-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono text-blue-700 dark:text-cyan-400 font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-cyan-950/40 border border-blue-200 dark:border-cyan-800/40 w-fit">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-sm text-slate-800 dark:text-slate-200 font-medium">{edu.institution}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1 flex items-center gap-1.5">
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span className="text-emerald-600 dark:text-emerald-400">Accredited Degree</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Industry Honors & Languages (Fast Repeat Swipe from Right) */}
        <div className="flex flex-col justify-between space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">
            <Award className="w-4 h-4" />
            <span>Honors &amp; Languages</span>
          </div>

          <div className="space-y-4 flex-1 flex flex-col justify-between">
            {/* Award Card */}
            <motion.div
              initial={{ opacity: 0, x: 110 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.08 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl bg-amber-50/40 dark:bg-amber-950/20 backdrop-blur-md border border-amber-300/70 dark:border-amber-500/20 shadow-md flex-1 flex flex-col justify-between transform-gpu"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                      {PERSONAL_INFO.award.title}
                    </h4>
                    <span className="text-xs font-mono text-amber-800 dark:text-amber-400 font-semibold">
                      {PERSONAL_INFO.award.organization}
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Honored by engineering leadership for architecting the NewsPod regional audio engine and delivering resilient cross-platform audio streaming.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-200 dark:border-amber-500/10 flex items-center gap-1.5 text-xs font-mono text-amber-800 dark:text-amber-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Awarded for NewsPod Architectural Excellence (2020)</span>
              </div>
            </motion.div>

            {/* Languages Card */}
            <motion.div
              initial={{ opacity: 0, x: 110 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.08 }}
              transition={{ duration: 0.4, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl glass-panel border border-slate-300/70 dark:border-white/10 bg-white/35 dark:bg-slate-800/35 backdrop-blur-md shadow-md flex-1 flex flex-col justify-between transform-gpu"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                  <Globe2 className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                  <span>Multilingual Proficiency</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                  Fluent collaboration across international, US, and distributed engineering teams.
                </p>
                <div className="flex flex-wrap gap-2">
                  {PERSONAL_INFO.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-3 text-[11px] font-mono text-slate-500">
                Primary Working Language: English (Professional Full Working Proficiency)
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
