import React from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface MarqueeItem {
  name: string;
  category: string;
  badge: string;
  color: string;
}

const ROW_1_ITEMS: MarqueeItem[] = [
  { name: 'Flutter', category: 'Mobile Framework', badge: 'FL', color: 'from-[#5B8CFF] to-[#22D3EE]' },
  { name: 'Dart', category: 'Core Language', badge: 'DA', color: 'from-[#22D3EE] to-[#0284C7]' },
  { name: 'Clean Architecture', category: 'Architecture', badge: 'CA', color: 'from-[#8B5CF6] to-[#6366F1]' },
  { name: 'BLoC & Cubit', category: 'Deterministic State', badge: 'BC', color: 'from-[#5B8CFF] to-[#8B5CF6]' },
  { name: 'Riverpod', category: 'Reactive State', badge: 'RP', color: 'from-[#10B981] to-[#059669]' },
  { name: 'Python', category: 'Systems Language', badge: 'PY', color: 'from-[#F59E0B] to-[#D97706]' },
  { name: 'FastAPI', category: 'High-Perf Backend', badge: 'FA', color: 'from-[#06B6D4] to-[#0284C7]' },
  { name: 'Angel One SmartAPI', category: 'Broker Engine', badge: 'AO', color: 'from-[#F59E0B] to-[#EF4444]' },
];

const ROW_2_ITEMS: MarqueeItem[] = [
  { name: 'Native WebSockets', category: 'Real-Time Telemetry', badge: 'WS', color: 'from-[#10B981] to-[#3B82F6]' },
  { name: 'Firebase Suite', category: 'Cloud & Auth', badge: 'FB', color: 'from-[#F59E0B] to-[#F97316]' },
  { name: 'SQLite & Hive', category: 'Offline-First Engine', badge: 'DB', color: 'from-[#5B8CFF] to-[#6366F1]' },
  { name: 'WebRTC Video', category: 'Teleconsultation', badge: 'RTC', color: 'from-[#8B5CF6] to-[#EC4899]' },
  { name: 'Google Antigravity', category: 'Agentic Workflows', badge: 'AGY', color: 'from-[#5B8CFF] to-[#8B5CF6]' },
  { name: 'OpenAI & Gemini API', category: 'AI Synthesis', badge: 'AI', color: 'from-[#22D3EE] to-[#10B981]' },
  { name: 'React 18 & Vite', category: 'Observability UI', badge: 'RC', color: 'from-[#3B82F6] to-[#06B6D4]' },
  { name: 'CI/CD & Fastlane', category: 'Automated Releases', badge: 'CD', color: 'from-[#10B981] to-[#059669]' },
];

export const TechMarquee: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  // Helper to render one row track
  const renderRow = (items: MarqueeItem[], reverse = false) => {
    // Duplicate items for continuous seamless loop
    const trackItems = [...items, ...items];

    return (
      <div className="relative w-full overflow-hidden py-1.5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className={`flex items-center gap-3 w-max ${
            prefersReducedMotion
              ? 'flex-wrap justify-center'
              : reverse
              ? 'animate-marquee-reverse hover:[animation-play-state:paused]'
              : 'animate-marquee hover:[animation-play-state:paused]'
          }`}
          style={{
            animationDuration: '32s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
          }}
        >
          {trackItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-dark-surface/80 backdrop-blur-xl border border-white/10 hover:border-primary/40 transition-colors shadow-glass shrink-0 group cursor-default"
            >
              <div
                className={`w-8 h-8 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center font-mono font-bold text-xs text-white shadow-xs shrink-0 group-hover:scale-105 transition-transform`}
              >
                {item.badge}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-white group-hover:text-primary transition-colors font-heading whitespace-nowrap">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono text-dark-textMuted uppercase tracking-wider whitespace-nowrap">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-3 w-full my-6 overflow-hidden">
      {renderRow(ROW_1_ITEMS, false)}
      {renderRow(ROW_2_ITEMS, true)}
    </div>
  );
};
