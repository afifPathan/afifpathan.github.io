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

  const filterId = `arch-blend-shadow-${variant}-${flipSides ? 'f' : 'n'}`;

  // Pure seamless geometry without any strokes or dividing lines
  const renderGeometry = () => {
    switch (variant) {
      case 'roman':
        return (
          <path
            d="M 0,0 L 0,1000 L 500,1000 L 500,780 C 500,780 620,680 620,500 C 620,320 500,220 500,220 L 500,0 Z"
            className={leftColorClass}
            filter={`url(#${filterId})`}
          />
        );

      case 'cathedral':
        return (
          <path
            d="M 0,0 L 0,1000 L 500,1000 L 500,800 C 500,800 550,680 640,500 C 550,320 500,200 500,200 L 500,0 Z"
            className={leftColorClass}
            filter={`url(#${filterId})`}
          />
        );

      case 'ogee':
        return (
          <path
            d="M 0,0 L 0,1000 L 500,1000 C 500,850 440,780 440,640 C 440,550 580,450 580,360 C 580,220 500,150 500,0 Z"
            className={leftColorClass}
            filter={`url(#${filterId})`}
          />
        );

      case 'parabolic':
        return (
          <path
            d="M 0,0 L 0,1000 L 500,1000 L 500,880 C 500,750 640,650 640,500 C 640,350 500,250 500,120 L 500,0 Z"
            className={leftColorClass}
            filter={`url(#${filterId})`}
          />
        );

      case 'trefoil':
        return (
          <path
            d="M 0,0 L 0,1000 L 500,1000 L 500,850 C 500,850 570,800 570,735 C 570,670 500,620 500,620 C 500,620 610,570 610,500 C 610,430 500,380 500,380 C 500,380 570,330 570,265 C 570,200 500,150 500,150 L 500,0 Z"
            className={leftColorClass}
            filter={`url(#${filterId})`}
          />
        );

      case 'horseshoe':
        return (
          <path
            d="M 0,0 L 0,1000 L 500,1000 L 500,800 L 460,720 C 460,720 630,650 630,500 C 630,350 460,280 460,280 L 500,200 L 500,0 Z"
            className={leftColorClass}
            filter={`url(#${filterId})`}
          />
        );

      case 'stepped':
        return (
          <path
            d="M 0,0 L 0,1000 L 500,1000 L 500,800 L 540,800 L 540,660 L 580,660 L 580,550 L 630,550 L 630,450 L 580,450 L 580,340 L 540,340 L 540,200 L 500,200 L 500,0 Z"
            className={leftColorClass}
            filter={`url(#${filterId})`}
          />
        );

      case 'vault':
        return (
          <path
            d="M 0,0 L 0,1000 L 500,1000 L 500,900 C 500,900 620,750 620,500 C 620,250 500,100 500,100 L 500,0 Z"
            className={leftColorClass}
            filter={`url(#${filterId})`}
          />
        );

      case 'portal':
      default:
        return (
          <path
            d="M 0,0 L 0,1000 L 500,1000 L 500,840 C 500,840 600,720 600,500 C 600,280 500,160 500,160 L 500,0 Z"
            className={leftColorClass}
            filter={`url(#${filterId})`}
          />
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
        <defs>
          {/* Soft architectural depth shadow where the two colors mix together */}
          <filter id={filterId} x="-20%" y="-10%" width="150%" height="120%">
            {/* Primary soft color bleed shadow */}
            <feDropShadow
              dx={flipSides ? '-12' : '12'}
              dy="0"
              stdDeviation="18"
              floodColor={flipSides ? '#eab308' : '#8b5cf6'}
              floodOpacity="0.22"
            />
            {/* Secondary volumetric ambient shadow */}
            <feDropShadow
              dx={flipSides ? '-4' : '4'}
              dy="0"
              stdDeviation="8"
              floodColor="#0f172a"
              floodOpacity="0.10"
            />
          </filter>
        </defs>

        {renderGeometry()}
      </svg>
    </div>
  );
};

export default VerticalArchSplit;
