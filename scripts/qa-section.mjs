// Usage: node scripts/qa-section.mjs <selector> <width> <out.png>
import { chromium } from 'playwright';
const [sel, w, out] = process.argv.slice(2);
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: +w, height: 900 } });
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
const el = page.locator(sel).first();
await el.scrollIntoViewIfNeeded();
await page.waitForTimeout(800);
const imgs = await el.evaluate((e) => [...e.querySelectorAll('img')].map((i) => `${i.currentSrc.split('/').pop()} complete=${i.complete} natural=${i.naturalWidth} box=${Math.round(i.getBoundingClientRect().width)}x${Math.round(i.getBoundingClientRect().height)}`));
console.log(imgs.join('\n'));
await el.screenshot({ path: out });
await browser.close();
