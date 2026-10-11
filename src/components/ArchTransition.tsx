import React from 'react';

export type ArchVariant =
  | 'roman'       // Classical rounded semicircular vault arch
  | 'cathedral'   // Gothic pointed lancet arch with central keystone cusp
  | 'parabolic'   // Mathematical catenary compression arch
  | 'ogee'        // Double-curvature S-curve arch
  | 'trefoil'     // Triple-lobed arcade arch
  | 'horseshoe'   // Keyhole horseshoe arch with stepped shoulders
  | 'stepped'     // Tiered Art Deco lintel stepped arch
  | 'vault'       // Broad segmental compression barrel vault
  | 'foundation'; // Deep monolithic grounding arch into footer

interface ArchTransitionProps {
  variant: ArchVariant;
  /** Background color class for the upper section */
  upperBgClass?: string;
  /** Color class for the lower section that the arch carves into */
  lowerBgClass?: string;
  /** Fill color for the SVG arch */
  archFillClass: string;
  /** Outline contour line color */
  strokeClass?: string;
  /** Optional decorative label in the center */
  label?: string;
}

export const ArchTransition: React.FC<ArchTransitionProps> = ({
  variant,
  upperBgClass = 'bg-transparent',
  archFillClass,
  strokeClass = 'text-purple-400/20 dark:text-cyan-400/20',
  label,
}) => {
  // Render distinct architectural arch geometry
  const renderArchPath = () => {
    switch (variant) {
      case 'roman':
        // Classical sweeping roman arch
        return (
          <>
            <path
              d="M 0,0 L 0,20 C 320,20 460,70 720,70 C 980,70 1120,20 1440,20 L 1440,0 Z"
              className={archFillClass}
            />
            <path
              d="M 0,20 C 320,20 460,70 720,70 C 980,70 1120,20 1440,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className={strokeClass}
            />
            {/* Architectural Keystone */}
            <circle cx="720" cy="70" r="3.5" fill="currentColor" className={strokeClass} />
          </>
        );

      case 'cathedral':
        // Gothic pointed lancet arch meeting at central apex
        return (
          <>
            <path
              d="M 0,0 L 0,25 C 280,25 520,40 720,75 C 920,40 1160,25 1440,25 L 1440,0 Z"
              className={archFillClass}
            />
            <path
              d="M 0,25 C 280,25 520,40 720,75 C 920,40 1160,25 1440,25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className={strokeClass}
            />
            {/* Gothic Apex Finial Marker */}
            <path
              d="M 720,68 L 720,78 M 715,73 L 725,73"
              stroke="currentColor"
              strokeWidth="1.5"
              className={strokeClass}
            />
          </>
        );

      case 'parabolic':
        // Modern parabolic structural compression curve
        return (
          <>
            <path
              d="M 0,0 L 0,15 Q 720,95 1440,15 L 1440,0 Z"
              className={archFillClass}
            />
            <path
              d="M 0,15 Q 720,95 1440,15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="6 3"
              className={strokeClass}
            />
          </>
        );

      case 'ogee':
        // Venetian / Mughal S-curve undulating arch
        return (
          <>
            <path
              d="M 0,0 L 0,30 C 220,65 440,15 720,55 C 1000,95 1220,15 1440,30 L 1440,0 Z"
              className={archFillClass}
            />
            <path
              d="M 0,30 C 220,65 440,15 720,55 C 1000,95 1220,15 1440,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className={strokeClass}
            />
          </>
        );

      case 'trefoil':
        // Triple-lobed arcade arch with rhythmic cusps
        return (
          <>
            <path
              d="M 0,0 L 0,25 Q 240,65 480,35 Q 720,80 960,35 Q 1200,65 1440,25 L 1440,0 Z"
              className={archFillClass}
            />
            <path
              d="M 0,25 Q 240,65 480,35 Q 720,80 960,35 Q 1200,65 1440,25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              className={strokeClass}
            />
            <circle cx="480" cy="35" r="3" fill="currentColor" className={strokeClass} />
            <circle cx="960" cy="35" r="3" fill="currentColor" className={strokeClass} />
          </>
        );

      case 'horseshoe':
        // Moorish keyhole horseshoe arch with stepped shoulders
        return (
          <>
            <path
              d="M 0,0 L 0,35 L 340,35 C 440,35 480,15 580,45 C 640,65 670,75 720,75 C 770,75 800,65 860,45 C 960,15 1000,35 1100,35 L 1440,35 L 1440,0 Z"
              className={archFillClass}
            />
            <path
              d="M 0,35 L 340,35 C 440,35 480,15 580,45 C 640,65 670,75 720,75 C 770,75 800,65 860,45 C 960,15 1000,35 1100,35 L 1440,35"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className={strokeClass}
            />
          </>
        );

      case 'stepped':
        // Art Deco tiered lintel stepped arch
        return (
          <>
            <path
              d="M 0,0 L 0,20 L 260,20 L 260,35 L 480,35 L 480,52 L 680,52 C 700,72 740,72 760,52 L 960,52 L 960,35 L 1180,35 L 1180,20 L 1440,20 L 1440,0 Z"
              className={archFillClass}
            />
            <path
              d="M 0,20 L 260,20 L 260,35 L 480,35 L 480,52 L 680,52 C 700,72 740,72 760,52 L 960,52 L 960,35 L 1180,35 L 1180,20 L 1440,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className={strokeClass}
            />
          </>
        );

      case 'vault':
        // Wide structural segmental vault arch
        return (
          <>
            <path
              d="M 0,0 L 0,25 C 380,25 500,72 720,72 C 940,72 1060,25 1440,25 L 1440,0 Z"
              className={archFillClass}
            />
            <path
              d="M 0,25 C 380,25 500,72 720,72 C 940,72 1060,25 1440,25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="8 4"
              className={strokeClass}
            />
          </>
        );

      case 'foundation':
      default:
        // Deep monolithic grounding arch into footer
        return (
          <>
            <path
              d="M 0,0 L 0,30 C 350,30 480,80 720,80 C 960,80 1090,30 1440,30 L 1440,0 Z"
              className={archFillClass}
            />
            <path
              d="M 0,30 C 350,30 480,80 720,80 C 960,80 1090,30 1440,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className={strokeClass}
            />
          </>
        );
    }
  };

  return (
    <div
      className={`w-full relative pointer-events-none select-none overflow-hidden -my-[1px] ${upperBgClass}`}
      style={{ zIndex: 10 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 85"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-16 lg:h-20 block"
      >
        {renderArchPath()}
      </svg>

      {label && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9px] font-mono tracking-widest uppercase opacity-40 px-3 py-0.5 rounded-full border border-current text-slate-600 dark:text-slate-400">
          {label}
        </div>
      )}
    </div>
  );
};
