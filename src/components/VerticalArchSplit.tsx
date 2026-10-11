import React from 'react';

export type VerticalArchVariant =
  | 'roman'       // Classical rounded semicircular vault arch
  | 'cathedral'   // Gothic pointed lancet arch with apex
  | 'ogee'        // Venetian / Moorish double-curvature S-curve
  | 'parabolic'   // Modern structural catenary curve
  | 'trefoil'     // Triple-lobed rhythmic arcade
  | 'horseshoe'   // Moorish keyhole horseshoe arch
  | 'stepped'     // Art Deco tiered architectural stepping
  | 'vault'       // Wide segmental compression barrel vault
  | 'portal';     // Grand multi-layered concentric portal

interface VerticalArchSplitProps {
  variant: VerticalArchVariant;
  /** If true, left is purple and right is yellow; otherwise left is yellow and right is purple */
  flipSides?: boolean;
  className?: string;
}

export const VerticalArchSplit: React.FC<VerticalArchSplitProps> = ({
  variant,
  flipSides = false,
  className = '',
}) => {
  // Color palette definitions
  // Side A (Light Yellow): Warm ivory sunshine
  // Side B (Light Purple): Lavender pastel
  const leftColorClass = flipSides
    ? 'fill-[#faf5ff] dark:fill-[#131427]' // Purple on left
    : 'fill-[#fefce8] dark:fill-[#0d111b]'; // Yellow on left

  const containerBgClass = flipSides
    ? 'bg-[#fefce8] dark:bg-[#0d111b]' // Yellow on right
    : 'bg-[#faf5ff] dark:bg-[#131427]'; // Purple on right

  const strokeColorClass = flipSides
    ? 'text-amber-500/25 dark:text-purple-400/25'
    : 'text-purple-400/25 dark:text-cyan-400/25';

  const renderGeometry = () => {
    switch (variant) {
      case 'roman':
        return (
          <>
            {/* Left side filled path */}
            <path
              d="M 0,0 L 0,1000 L 500,1000 L 500,780 C 500,780 620,680 620,500 C 620,320 500,220 500,220 L 500,0 Z"
              className={leftColorClass}
            />
            {/* Dividing architectural contour */}
            <path
              d="M 500,0 L 500,220 C 500,220 620,320 620,500 C 620,680 500,780 500,780 L 500,1000"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={strokeColorClass}
            />
            {/* Dashed alignment guideline */}
            <path
              d="M 500,0 L 500,1000"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 6"
              className={`${strokeColorClass} opacity-40`}
            />
            {/* Keystone node */}
            <circle cx="620" cy="500" r="5" fill="currentColor" className={strokeColorClass} />
          </>
        );

      case 'cathedral':
        return (
          <>
            <path
              d="M 0,0 L 0,1000 L 500,1000 L 500,800 C 500,800 550,680 640,500 C 550,320 500,200 500,200 L 500,0 Z"
              className={leftColorClass}
            />
            <path
              d="M 500,0 L 500,200 C 500,200 550,320 640,500 C 550,680 500,800 500,800 L 500,1000"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={strokeColorClass}
            />
            {/* Gothic Apex Crosshair */}
            <path
              d="M 630,500 L 650,500 M 640,490 L 640,510"
              stroke="currentColor"
              strokeWidth="1.5"
              className={strokeColorClass}
            />
          </>
        );

      case 'ogee':
        return (
          <>
            <path
              d="M 0,0 L 0,1000 L 500,1000 C 500,850 440,780 440,640 C 440,550 580,450 580,360 C 580,220 500,150 500,0 Z"
              className={leftColorClass}
            />
            <path
              d="M 500,0 C 500,150 580,220 580,360 C 580,450 440,550 440,640 C 440,780 500,850 500,1000"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={strokeColorClass}
            />
          </>
        );

      case 'parabolic':
        return (
          <>
            <path
              d="M 0,0 L 0,1000 L 500,1000 L 500,880 C 500,750 640,650 640,500 C 640,350 500,250 500,120 L 500,0 Z"
              className={leftColorClass}
            />
            <path
              d="M 500,0 L 500,120 C 500,250 640,350 640,500 C 640,650 500,750 500,880 L 500,1000"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="8 4"
              className={strokeColorClass}
            />
          </>
        );

      case 'trefoil':
        return (
          <>
            <path
              d="M 0,0 L 0,1000 L 500,1000 L 500,850 C 500,850 570,800 570,735 C 570,670 500,620 500,620 C 500,620 610,570 610,500 C 610,430 500,380 500,380 C 500,380 570,330 570,265 C 570,200 500,150 500,150 L 500,0 Z"
              className={leftColorClass}
            />
            <path
              d="M 500,0 L 500,150 C 500,150 570,200 570,265 C 570,330 500,380 500,380 C 500,380 610,430 610,500 C 610,570 500,620 500,620 C 500,620 570,670 570,735 C 570,800 500,850 500,850 L 500,1000"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={strokeColorClass}
            />
            <circle cx="500" cy="380" r="4" fill="currentColor" className={strokeColorClass} />
            <circle cx="500" cy="620" r="4" fill="currentColor" className={strokeColorClass} />
          </>
        );

      case 'horseshoe':
        return (
          <>
            <path
              d="M 0,0 L 0,1000 L 500,1000 L 500,800 L 460,720 C 460,720 630,650 630,500 C 630,350 460,280 460,280 L 500,200 L 500,0 Z"
              className={leftColorClass}
            />
            <path
              d="M 500,0 L 500,200 L 460,280 C 460,280 630,350 630,500 C 630,650 460,720 460,720 L 500,800 L 500,1000"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={strokeColorClass}
            />
          </>
        );

      case 'stepped':
        return (
          <>
            <path
              d="M 0,0 L 0,1000 L 500,1000 L 500,800 L 540,800 L 540,660 L 580,660 L 580,550 L 630,550 L 630,450 L 580,450 L 580,340 L 540,340 L 540,200 L 500,200 L 500,0 Z"
              className={leftColorClass}
            />
            <path
              d="M 500,0 L 500,200 L 540,200 L 540,340 L 580,340 L 580,450 L 630,450 L 630,550 L 580,550 L 580,660 L 540,660 L 540,800 L 500,800 L 500,1000"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={strokeColorClass}
            />
          </>
        );

      case 'vault':
        return (
          <>
            <path
              d="M 0,0 L 0,1000 L 500,1000 L 500,900 C 500,900 620,750 620,500 C 620,250 500,100 500,100 L 500,0 Z"
              className={leftColorClass}
            />
            <path
              d="M 500,0 L 500,100 C 500,100 620,250 620,500 C 620,750 500,900 500,900 L 500,1000"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 4"
              className={strokeColorClass}
            />
          </>
        );

      case 'portal':
      default:
        return (
          <>
            <path
              d="M 0,0 L 0,1000 L 500,1000 L 500,840 C 500,840 600,720 600,500 C 600,280 500,160 500,160 L 500,0 Z"
              className={leftColorClass}
            />
            {/* Multi-tier concentric portal contour lines */}
            <path
              d="M 500,0 L 500,160 C 500,160 600,280 600,500 C 600,720 500,840 500,840 L 500,1000"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={strokeColorClass}
            />
            <path
              d="M 520,60 L 520,200 C 520,200 620,310 620,500 C 620,690 520,800 520,800 L 520,940"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
              className={`${strokeColorClass} opacity-60`}
            />
          </>
        );
    }
  };

  return (
    <div
      className={`absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden ${containerBgClass} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        {renderGeometry()}
      </svg>
    </div>
  );
};

export default VerticalArchSplit;
