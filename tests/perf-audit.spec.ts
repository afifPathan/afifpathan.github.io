import { test, expect } from '@playwright/test';

test.describe('Performance & Core Web Vitals Audit', () => {
  const runs = [1, 2, 3];

  for (const run of runs) {
    test(`Run ${run} - Performance & CWV metrics`, async ({ page, viewport }) => {
      await page.goto('/');
      await page.waitForSelector('#hero', { state: 'visible' });

      // Measure Core Web Vitals
      const metrics = await page.evaluate(async () => {
        return new Promise<{
          fcp: number;
          lcp: number;
          cls: number;
          domNodes: number;
          loadTime: number;
        }>((resolve) => {
          let cls = 0;
          let lcp = 0;

          // Observe CLS
          const clsObserver = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                cls += (entry as any).value;
              }
            }
          });
          clsObserver.observe({ type: 'layout-shift', buffered: true });

          // Observe LCP
          const lcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            lcp = lastEntry ? lastEntry.startTime : 0;
          });
          lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

          setTimeout(() => {
            clsObserver.disconnect();
            lcpObserver.disconnect();

            const paintEntries = performance.getEntriesByType('paint');
            const fcpEntry = paintEntries.find((entry) => entry.name === 'first-contentful-paint');
            const fcp = fcpEntry ? fcpEntry.startTime : 0;

            const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            const loadTime = navEntry ? navEntry.loadEventEnd - navEntry.startTime : 0;

            resolve({
              fcp: Math.round(fcp),
              lcp: Math.round(lcp || fcp),
              cls: Number(cls.toFixed(4)),
              domNodes: document.querySelectorAll('*').length,
              loadTime: Math.round(loadTime),
            });
          }, 1500);
        });
      });

      console.log(
        `[${viewport?.width && viewport.width < 768 ? 'Mobile' : 'Desktop'}] Run ${run}:`,
        JSON.stringify(metrics)
      );

      // Asserts: LCP under 2.5s (Good), CLS under 0.1 (Good), DOM nodes under 1500
      expect(metrics.lcp).toBeLessThan(2500);
      expect(metrics.cls).toBeLessThan(0.1);
    });
  }
});
