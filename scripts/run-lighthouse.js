import { execSync, spawn } from 'child_process';
import fs from 'fs';
import http from 'http';

function checkServer() {
  return new Promise((resolve) => {
    const req = http.get('http://127.0.0.1:4173/', (res) => {
      resolve(res.statusCode === 200);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(1000, () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function ensureServer() {
  const isUp = await checkServer();
  if (isUp) {
    console.log('Preview server is already up on http://127.0.0.1:4173');
    return null;
  }

  console.log('Starting preview server on port 4173...');
  const proc = spawn('npm', ['run', 'preview', '--', '--port', '4173'], {
    stdio: 'ignore',
    detached: true,
  });
  proc.unref();

  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 500));
    if (await checkServer()) {
      console.log('Preview server started successfully.');
      return proc;
    }
  }
  throw new Error('Timeout waiting for preview server to start.');
}

function median(values) {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 !== 0) {
    return sorted[mid];
  }
  return (sorted[mid - 1] + sorted[mid]) / 2;
}

function runCmd(cmd) {
  console.log(`Running: ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

async function runLighthouse() {
  const serverProc = await ensureServer();

  const runs = [1, 2, 3];

  console.log('\n--- RUNNING LIGHTHOUSE DESKTOP (3 RUNS) ---');
  for (const r of runs) {
    const outPath = `./lighthouse-desktop-${r}.json`;
    runCmd(
      `npx lighthouse http://127.0.0.1:4173 --preset=desktop --output=json --output-path=${outPath} --chrome-flags="--headless=new --no-sandbox" --quiet`
    );
  }

  console.log('\n--- RUNNING LIGHTHOUSE MOBILE (3 RUNS) ---');
  for (const r of runs) {
    const outPath = `./lighthouse-mobile-${r}.json`;
    runCmd(
      `npx lighthouse http://127.0.0.1:4173 --form-factor=mobile --screenEmulation.mobile --output=json --output-path=${outPath} --chrome-flags="--headless=new --no-sandbox" --quiet`
    );
  }

  const parseReport = (filePath) => {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return {
      perf: data.categories.performance?.score != null ? data.categories.performance.score * 100 : 0,
      a11y: data.categories.accessibility?.score != null ? data.categories.accessibility.score * 100 : 0,
      bp: data.categories['best-practices']?.score != null ? data.categories['best-practices'].score * 100 : 0,
      seo: data.categories.seo?.score != null ? data.categories.seo.score * 100 : 0,
      lcp: data.audits['largest-contentful-paint']?.numericValue || 0,
      cls: data.audits['cumulative-layout-shift']?.numericValue || 0,
      tbt: data.audits['total-blocking-time']?.numericValue || 0,
    };
  };

  const desktopResults = runs.map((r) => parseReport(`./lighthouse-desktop-${r}.json`));
  const mobileResults = runs.map((r) => parseReport(`./lighthouse-mobile-${r}.json`));

  const desktopSummary = {
    performance: Math.round(median(desktopResults.map((r) => r.perf))),
    accessibility: Math.round(median(desktopResults.map((r) => r.a11y))),
    bestPractices: Math.round(median(desktopResults.map((r) => r.bp))),
    seo: Math.round(median(desktopResults.map((r) => r.seo))),
    lcpMs: Math.round(median(desktopResults.map((r) => r.lcp))),
    cls: Number(median(desktopResults.map((r) => r.cls)).toFixed(4)),
    tbtMs: Math.round(median(desktopResults.map((r) => r.tbt))),
    rawRuns: desktopResults,
  };

  const mobileSummary = {
    performance: Math.round(median(mobileResults.map((r) => r.perf))),
    accessibility: Math.round(median(mobileResults.map((r) => r.a11y))),
    bestPractices: Math.round(median(mobileResults.map((r) => r.bp))),
    seo: Math.round(median(mobileResults.map((r) => r.seo))),
    lcpMs: Math.round(median(mobileResults.map((r) => r.lcp))),
    cls: Number(median(mobileResults.map((r) => r.cls)).toFixed(4)),
    tbtMs: Math.round(median(mobileResults.map((r) => r.tbt))),
    rawRuns: mobileResults,
  };

  const finalOutput = {
    desktop: desktopSummary,
    mobile: mobileSummary,
  };

  fs.writeFileSync('./lighthouse-summary.json', JSON.stringify(finalOutput, null, 2));

  console.log('\n=========================================');
  console.log('LIGHTHOUSE AUDIT RESULTS (MEDIAN OF 3 RUNS)');
  console.log('=========================================');
  console.log('\nDESKTOP:');
  console.log(`- Performance:    ${desktopSummary.performance} / 100`);
  console.log(`- Accessibility:  ${desktopSummary.accessibility} / 100`);
  console.log(`- Best Practices: ${desktopSummary.bestPractices} / 100`);
  console.log(`- SEO:            ${desktopSummary.seo} / 100`);
  console.log(`- LCP:            ${desktopSummary.lcpMs} ms`);
  console.log(`- CLS:            ${desktopSummary.cls}`);
  console.log(`- TBT:            ${desktopSummary.tbtMs} ms`);

  console.log('\nMOBILE:');
  console.log(`- Performance:    ${mobileSummary.performance} / 100`);
  console.log(`- Accessibility:  ${mobileSummary.accessibility} / 100`);
  console.log(`- Best Practices: ${mobileSummary.bestPractices} / 100`);
  console.log(`- SEO:            ${mobileSummary.seo} / 100`);
  console.log(`- LCP:            ${mobileSummary.lcpMs} ms`);
  console.log(`- CLS:            ${mobileSummary.cls}`);
  console.log(`- TBT:            ${mobileSummary.tbtMs} ms`);
  console.log('=========================================\n');
}

runLighthouse().catch((err) => {
  console.error(err);
  process.exit(1);
});
