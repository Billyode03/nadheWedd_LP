import { chromium } from 'playwright';
const out = process.argv[2];
const browser = await chromium.launch({ channel: 'chrome' });
const errors = [];
for (const w of [320, 360, 375, 390, 768, 1024, 1440]) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 } });
  page.on('console', (m) => m.type() === 'error' && errors.push(`${w}: ${m.text()}`));
  page.on('pageerror', (e) => errors.push(`${w}: ${e.message}`));
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
  // load lazy images
  await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); } scrollTo(0, 0); });
  await page.waitForTimeout(400);
  const o = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth,
    wide: [...document.querySelectorAll('body *')].filter(e => { const r = e.getBoundingClientRect(); return r.right > document.documentElement.clientWidth + 1 && getComputedStyle(e).position !== 'fixed' && !e.closest('.snap-strip') && !e.closest('[aria-hidden=true]') && !e.classList.contains('floral'); }).slice(0, 5).map(e => e.tagName + '.' + (e.className.baseVal ?? e.className).toString().slice(0, 60)) }));
  console.log(w, 'scrollWidth', o.sw, 'clientWidth', o.cw, o.wide.length ? 'OVERFLOW: ' + o.wide.join(' | ') : 'no overflow');
  if (out !== '.' && [360, 1440].includes(w)) await page.screenshot({ path: `${out}/full-${w}.png`, fullPage: true });
  await page.close();
}
console.log('errors:', errors.length ? errors : 'none');
await browser.close();
