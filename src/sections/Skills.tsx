import React from 'react';
import { motion } from 'framer-motion';
import { TechCluster } from '../components/TechCluster';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      aria-label="Technical Skills and Stack"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden overflow-x-clip"
    >
      {/* Signature Section Marker from Reference */}
      <div className="section-marker">
        <span>02 — THE TOOLKIT · PRODUCTION ARSENAL</span>
        <span>TESTED UNDER ENTERPRISE CONDITIONS</span>
      </div>

      <div className="mb-12">
        <motion.h2
          initial={{ opacity: 0, scale: 0.92, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.05] mb-3"
        >
          Tools &amp; Technologies I've<br />
          <em className="text-slate-900 dark:text-white font-serif font-normal italic">
            mastered.
          </em>
        </motion.h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl">
          An interactive physical device view of my production arsenal across mobile client runtimes, enterprise architectural patterns, deterministic reactive state machines, cloud infrastructure, and algorithmic trading daemons.
        </p>
      </div>

      {/* Interactive Smartphone Toolkit Matrix */}
      <TechCluster />
    </section>
  );
};
