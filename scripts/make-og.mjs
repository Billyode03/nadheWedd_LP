// Renders public/og-image.png (1200×630) and public/apple-touch-icon.png (180×180)
// from the brand tokens, using the self-hosted fonts. Run: npm run og
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const font = (pkg, file) =>
  `data:font/woff2;base64,${readFileSync(fileURLToPath(new URL(`../node_modules/@fontsource/${pkg}/files/${file}`, import.meta.url))).toString('base64')}`;

const fonts = `
@font-face{font-family:'Playfair Display';font-weight:400;src:url(${font('playfair-display', 'playfair-display-latin-400-normal.woff2')})}
@font-face{font-family:'Playfair Display';font-style:italic;font-weight:400;src:url(${font('playfair-display', 'playfair-display-latin-400-italic.woff2')})}
@font-face{font-family:'Poppins';font-weight:500;src:url(${font('poppins', 'poppins-latin-500-normal.woff2')})}
*{margin:0;box-sizing:border-box}`;

const og = `<html><head><style>${fonts}
body{width:1200px;height:630px;display:flex;align-items:center;justify-content:center;
background:#7a1b1b radial-gradient(90% 70% at 50% 0%,rgb(171 69 69/.35),transparent 70%);font-family:Poppins;color:#fffbf4}
.frame{position:absolute;inset:34px;border:1.5px solid rgb(212 175 55/.55)}
.frame::after{content:'';position:absolute;inset:8px;border:1px solid rgb(212 175 55/.25)}
.c{text-align:center}
.eyebrow{font-size:20px;letter-spacing:.38em;text-transform:uppercase;color:#ebd3a1}
h1{font-family:'Playfair Display';font-weight:400;font-size:132px;line-height:1;margin-top:34px}
h1 i{color:#ebd3a1}
.by{margin-top:18px;font-size:20px;letter-spacing:.34em;text-transform:uppercase;color:#d4af37}
.rule{width:260px;height:1px;background:linear-gradient(90deg,transparent,#d4af37,transparent);margin:38px auto}
.line{font-family:'Playfair Display';font-style:italic;font-size:32px;color:rgb(255 251 244/.9)}
</style></head><body><div class="frame"></div><div class="c">
<p class="eyebrow">Your Digital Wedding Experience</p>
<h1>Nadhe<i>Wedd</i></h1><p class="by">by NadheStudio</p>
<div class="rule"></div>
<p class="line">Undangan Digital · Buku Tamu QR · Wedding Album</p>
</div></body></html>`;

const icon = `<html><head><style>${fonts}
body{width:180px;height:180px;display:flex;align-items:center;justify-content:center;background:#7a1b1b;font-family:'Playfair Display'}
.r{position:absolute;inset:12px;border:2px solid #d4af37;border-radius:50%}
p{font-size:66px;color:#fff7eb;margin-top:-6px}p i{color:#ebd3a1}
</style></head><body><div class="r"></div><p>N<i>W</i></p></body></html>`;

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(og);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'public/og-image.png' });
await page.setViewportSize({ width: 180, height: 180 });
await page.setContent(icon);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'public/apple-touch-icon.png' });
await browser.close();
console.log('og-image.png + apple-touch-icon.png written');
