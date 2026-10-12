import React, { useEffect, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const CustomCursor: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };

    if (checkTouch()) {
      setIsTouch(true);
      return;
    }

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = Boolean(
        target.closest('a, button, [role="button"], input, textarea, select, label, .interactive-hover')
      );
      setIsHovering(isInteractive);
    };

    // Smooth lerp for outer ring
    const render = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(render);
    };
    animationFrameId = requestAnimationFrame(render);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleElementHover, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, [position, isVisible]);

  // Completely disable on touch devices or if user prefers reduced motion
  if (isTouch || prefersReducedMotion || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Precision Center Dot */}
      <div
        className="pointer-events-none fixed z-50 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '6px' : '4px',
          height: isHovering ? '6px' : '4px',
          boxShadow: '0 0 10px rgba(91, 140, 255, 0.8)',
        }}
        aria-hidden="true"
      />

      {/* Kinetic Outer Ring with Magnetic Expansion */}
      <div
        className="pointer-events-none fixed z-50 rounded-full border border-primary/50 -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out will-change-transform"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: isHovering ? '44px' : isClicking ? '20px' : '28px',
          height: isHovering ? '44px' : isClicking ? '20px' : '28px',
          borderColor: isHovering ? 'rgba(34, 211, 238, 0.9)' : 'rgba(91, 140, 255, 0.5)',
          backgroundColor: isHovering ? 'rgba(91, 140, 255, 0.08)' : 'transparent',
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.85 : 1})`,
        }}
        aria-hidden="true"
      />
    </>
  );
};
