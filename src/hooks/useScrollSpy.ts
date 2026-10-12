import { useState, useEffect } from 'react';

/**
 * Robust scroll-spy hook utilizing IntersectionObserver with rootMargin around 40% viewport,
 * coupled with exact scroll bounds to ensure:
 * - Empty string ('') when scrollY < 200 (hero at top).
 * - Exact active section corresponding to viewport position.
 */
export function useScrollSpy(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Strictly empty at the top (hero section)
      if (window.scrollY < 200) {
        setActiveId('');
        return;
      }

      // 2. Check if at bottom of page -> contact
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;
      if (isBottom) {
        setActiveId('contact');
        return;
      }

      // 3. Fallback/Geometry check: 40% viewport trigger line
      const triggerY = window.innerHeight * 0.4;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerY && rect.bottom >= triggerY) {
            setActiveId(id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver with rootMargin around 40% viewport
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          if (window.scrollY < 200) {
            setActiveId('');
            return;
          }
          const visible = entries.filter((e) => e.isIntersecting);
          if (visible.length > 0) {
            // Pick section closest to 40% of viewport
            const triggerY = window.innerHeight * 0.4;
            let closest = visible[0];
            let minDistance = Infinity;
            for (const entry of visible) {
              const distance = Math.abs(entry.boundingClientRect.top - triggerY);
              if (distance < minDistance) {
                minDistance = distance;
                closest = entry;
              }
            }
            setActiveId(closest.target.id);
          }
        },
        {
          rootMargin: '-20% 0px -40% 0px',
          threshold: [0, 0.2, 0.5],
        }
      );

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer?.observe(el);
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      observer?.disconnect();
    };
  }, [sectionIds]);

  return activeId;
}
