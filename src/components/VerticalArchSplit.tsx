import React from 'react';

export type VerticalArchVariant =
  | 'roman'
  | 'cathedral'
  | 'ogee'
  | 'parabolic'
  | 'trefoil'
  | 'horseshoe'
  | 'stepped'
  | 'vault'
  | 'portal';

interface VerticalArchSplitProps {
  variant?: VerticalArchVariant;
  flipSides?: boolean;
  className?: string;
}

/**
 * Ambient background lighting system featuring smooth organic radial gradients
 * that fade out completely to transparent with zero hard seams or clipped geometry
 * across all screen widths (including 1440px and 1920px+).
 */
export const VerticalArchSplit: React.FC<VerticalArchSplitProps> = ({
  flipSides = false,
  className = '',
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* Primary Soft Radial Glow Mesh (Fades to 0% smoothly) */}
      <div
        className="absolute top-1/4 w-[750px] h-[750px] rounded-full blur-[140px] opacity-25 dark:opacity-20 transition-all duration-500"
        style={{
          left: flipSides ? '70%' : '15%',
          transform: 'translate(-50%, -50%)',
          background: flipSides
            ? 'radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, rgba(139, 92, 246, 0) 70%)'
            : 'radial-gradient(circle, rgba(91, 140, 255, 0.35) 0%, rgba(91, 140, 255, 0) 70%)',
        }}
      />

      {/* Secondary Complementary Cyan / Violet Glow */}
      <div
        className="absolute bottom-1/4 w-[650px] h-[650px] rounded-full blur-[150px] opacity-20 dark:opacity-15 transition-all duration-500"
        style={{
          left: flipSides ? '20%' : '80%',
          transform: 'translate(-50%, 50%)',
          background: flipSides
            ? 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, rgba(34, 211, 238, 0) 70%)'
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0) 70%)',
        }}
      />
    </div>
  );
};
