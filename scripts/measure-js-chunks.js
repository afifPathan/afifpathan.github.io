import { chromium } from '@playwright/test';
import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import http from 'http';
import { spawn } from 'child_process';

function checkServer() {
  return new Promise((resolve) => {
    const req = http.get('http://127.0.0.1:4173/', (res) => resolve(res.statusCode === 200));
    req.on('error', () => resolve(false));
    req.setTimeout(1000, () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function ensureServer() {
  if (await checkServer()) return null;
  const proc = spawn('npm', ['run', 'preview', '--', '--port', '4173'], {
    stdio: 'ignore',
    detached: true,
  });
  proc.unref();
  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 500));
    if (await checkServer()) return proc;
  }
  throw new Error('Could not start preview server');
}

async function measureJS() {
  const server = await ensureServer();
  const browser = await chromium.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });

  const initialRequests = [];
  const allRequests = [];

  page.on('response', async (res) => {
    const url = res.url();
    if (url.endsWith('.js') || url.includes('.js?')) {
      try {
        const body = await res.body();
        const gzip = zlib.gzipSync(body).length;
        const entry = {
          url: path.basename(url.split('?')[0]),
          rawBytes: body.length,
          gzipBytes: gzip,
        };
        allRequests.push(entry);
      } catch (e) {
        // Ignored
      }
    }
  });

  // 1. First View
  await page.goto('http://localhost:4173/');
  await page.waitForSelector('#hero', { state: 'visible' });
  await page.waitForTimeout(1000);

  initialRequests.push(...allRequests);

  const initialRaw = initialRequests.reduce((sum, r) => sum + r.rawBytes, 0);
  const initialGzip = initialRequests.reduce((sum, r) => sum + r.gzipBytes, 0);

  // 2. Full Scroll View
  await page.evaluate(async () => {
    const totalHeight = document.body.scrollHeight;
    const step = 400;
    for (let current = 0; current <= totalHeight; current += step) {
      window.scrollTo(0, current);
      await new Promise((r) => setTimeout(r, 100));
    }
  });
  await page.waitForTimeout(2000);

  // Deduplicate by URL
  const uniqueUrls = new Map();
  for (const r of allRequests) {
    if (!uniqueUrls.has(r.url)) {
      uniqueUrls.set(r.url, r);
    }
  }

  const finalChunks = Array.from(uniqueUrls.values());
  const finalRaw = finalChunks.reduce((sum, r) => sum + r.rawBytes, 0);
  const finalGzip = finalChunks.reduce((sum, r) => sum + r.gzipBytes, 0);

  const hasTestimonials = finalChunks.some((r) => r.url.toLowerCase().includes('testimonials'));

  const result = {
    initial: {
      rawBytes: initialRaw,
      rawKb: (initialRaw / 1024).toFixed(2),
      gzipBytes: initialGzip,
      gzipKb: (initialGzip / 1024).toFixed(2),
      chunks: initialRequests.map((r) => r.url),
    },
    fullScroll: {
      rawBytes: finalRaw,
      rawKb: (finalRaw / 1024).toFixed(2),
      gzipBytes: finalGzip,
      gzipKb: (finalGzip / 1024).toFixed(2),
      totalChunksCount: finalChunks.length,
      chunks: finalChunks.map((r) => `${r.url} (${(r.gzipBytes / 1024).toFixed(2)} kB gzip)`),
    },
    hasTestimonialsLoaded: hasTestimonials,
  };

  console.log(JSON.stringify(result, null, 2));

  await browser.close();
}

measureJS().catch(console.error);
