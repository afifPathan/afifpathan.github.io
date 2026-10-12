import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

async function generateAssets() {
  const browser = await chromium.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const svgContent = fs.readFileSync(path.join(publicDir, 'favicon.svg'), 'utf8');

  // 1. Generate Favicons: 32x32, 180x180, 192x192, 512x512
  const iconSizes = [
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'icon-192.png', size: 192 },
    { name: 'icon-512.png', size: 512 },
    { name: 'favicon.png', size: 64 },
  ];

  for (const { name, size } of iconSizes) {
    const page = await browser.newPage({ viewport: { width: size, height: size } });
    await page.setContent(`
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body, html { width: ${size}px; height: ${size}px; overflow: hidden; background: transparent; }
            svg { width: 100%; height: 100%; display: block; }
          </style>
        </head>
        <body>${svgContent}</body>
      </html>
    `);
    const buffer = await page.screenshot({ omitBackground: false, type: 'png' });
    fs.writeFileSync(path.join(publicDir, name), buffer);
    console.log(`Generated ${name} (${size}x${size})`);
    await page.close();
  }

  // Also write favicon.ico from 32x32 PNG (valid PNG-in-ICO format supported by all modern browsers)
  // Construct genuine ICO header with 1 PNG frame
  const png32 = fs.readFileSync(path.join(publicDir, 'favicon-32x32.png'));
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // Reserved
  icoHeader.writeUInt16LE(1, 2); // Type 1 = ICO
  icoHeader.writeUInt16LE(1, 4); // 1 Image

  const icoEntry = Buffer.alloc(16);
  icoEntry.writeUInt8(32, 0); // Width 32
  icoEntry.writeUInt8(32, 1); // Height 32
  icoEntry.writeUInt8(0, 2);  // Color count
  icoEntry.writeUInt8(0, 3);  // Reserved
  icoEntry.writeUInt16LE(1, 4); // Color planes
  icoEntry.writeUInt16LE(32, 6); // Bits per pixel
  icoEntry.writeUInt32LE(png32.length, 8); // Image size in bytes
  icoEntry.writeUInt32LE(6 + 16, 12); // Image offset (header + entry = 22)

  const icoBuffer = Buffer.concat([icoHeader, icoEntry, png32]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Generated favicon.ico (valid ICO with 32x32 frame)');

  // 2. Generate og-image.png at exactly 1200x630
  const ogPage = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await ogPage.setContent(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;700&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            width: 1200px;
            height: 630px;
            background: #0A0B14;
            color: #F8FAFC;
            font-family: 'Inter', sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 64px 80px;
            position: relative;
            overflow: hidden;
          }
          .grid-bg {
            position: absolute;
            inset: 0;
            background-image: 
              linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
            background-size: 40px 40px;
            opacity: 0.8;
          }
          .glow {
            position: absolute;
            top: -100px;
            right: -100px;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(91, 140, 255, 0.25) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
          }
          .header {
            position: relative;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .logo-badge {
            display: flex;
            align-items: center;
            gap: 16px;
          }
          .monogram {
            width: 56px;
            height: 56px;
            border-radius: 14px;
            background: #111320;
            border: 1px solid rgba(255, 255, 255, 0.15);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .badge-text {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 22px;
            font-weight: 700;
            letter-spacing: -0.02em;
          }
          .avail-chip {
            padding: 8px 18px;
            border-radius: 9999px;
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.3);
            color: #34D399;
            font-family: 'JetBrains Mono', monospace;
            font-size: 13px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #10B981;
          }
          .content {
            position: relative;
            z-index: 10;
            margin-top: 24px;
          }
          .eyebrow {
            font-family: 'JetBrains Mono', monospace;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: #5B8CFF;
            font-weight: 700;
            margin-bottom: 12px;
          }
          h1 {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 56px;
            font-weight: 800;
            line-height: 1.1;
            letter-spacing: -0.03em;
            margin-bottom: 16px;
            max-width: 900px;
          }
          .gradient-text {
            background: linear-gradient(135deg, #5B8CFF 0%, #A78BFA 50%, #22D3EE 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          p.desc {
            font-size: 20px;
            line-height: 1.5;
            color: #A7ADC7;
            max-width: 820px;
          }
          .footer {
            position: relative;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 24px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }
          .metrics {
            display: flex;
            gap: 36px;
          }
          .metric {
            display: flex;
            flex-direction: column;
          }
          .metric-value {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 26px;
            font-weight: 800;
            color: #F8FAFC;
          }
          .metric-label {
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            text-transform: uppercase;
            color: #8E96B5;
            letter-spacing: 0.05em;
          }
          .url-label {
            font-family: 'JetBrains Mono', monospace;
            font-size: 15px;
            font-weight: 600;
            color: #38BDF8;
          }
        </style>
      </head>
      <body>
        <div class="grid-bg"></div>
        <div class="glow"></div>
        <div class="header">
          <div class="logo-badge">
            <div class="monogram">
              <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
                <path d="M16 46L32 16L48 46" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 36H42" stroke="#818cf8" stroke-width="4" stroke-linecap="round"/>
                <circle cx="32" cy="16" r="3" fill="#38bdf8"/>
                <circle cx="16" cy="46" r="2.5" fill="#818cf8"/>
                <circle cx="48" cy="46" r="2.5" fill="#818cf8"/>
              </svg>
            </div>
            <div class="badge-text">Afif Pathan</div>
          </div>
          <div class="avail-chip">
            <span class="dot"></span>
            Available for Architecture Advisory
          </div>
        </div>

        <div class="content">
          <div class="eyebrow">Enterprise Mobile Architecture &amp; Engineering</div>
          <h1>Senior Mobile Architect &amp; <span class="gradient-text">Flutter Lead.</span></h1>
          <p class="desc">
            Production cross-platform platforms, enterprise Clean Architecture, deterministic state machines, and real-time algorithmic trading systems.
          </p>
        </div>

        <div class="footer">
          <div class="metrics">
            <div class="metric">
              <div class="metric-value">8+ Years</div>
              <div class="metric-label">In Production</div>
            </div>
            <div class="metric">
              <div class="metric-value">25+</div>
              <div class="metric-label">Platforms Delivered</div>
            </div>
            <div class="metric">
              <div class="metric-value">6+ Years</div>
              <div class="metric-label">Flutter Focus</div>
            </div>
          </div>
          <div class="url-label">afifpathan.github.io</div>
        </div>
      </body>
    </html>
  `);

  await ogPage.waitForLoadState('networkidle');
  const ogBuffer = await ogPage.screenshot({ omitBackground: false, type: 'png' });
  fs.writeFileSync(path.join(publicDir, 'og-image.png'), ogBuffer);
  console.log('Generated og-image.png (1200x630)');

  await ogPage.close();
  await browser.close();
}

generateAssets().catch((err) => {
  console.error(err);
  process.exit(1);
});
