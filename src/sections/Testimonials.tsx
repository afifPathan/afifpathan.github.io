import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';

/**
 * Testimonials Section.
 * Strictly adheres to rule: only renders if authentic testimonials exist in portfolioData.ts.
 * If empty, returns null with zero DOM footprint.
 */
export const Testimonials: React.FC = () => {
  if (!TESTIMONIALS || TESTIMONIALS.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      aria-label="Professional Testimonials and Recommendations"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden"
    >
      <div className="section-marker mb-8">
        <span>09 — TESTIMONIALS</span>
        <span>CLIENT &amp; COLLEAGUE PERSPECTIVES</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between"
          >
            <p className="text-sm text-dark-textMuted italic mb-4">"{t.quote}"</p>
            <div>
              <div className="font-bold text-dark-text text-sm">{t.author}</div>
              <div className="text-xs text-accent-cyan font-mono">
                {t.role} · {t.company}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
