import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 100): string {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(sectionIds[i]);
            return;
          }
        }
      }

      if (sectionIds.length > 0 && window.scrollY < 200) {
        setActiveId(sectionIds[0]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
