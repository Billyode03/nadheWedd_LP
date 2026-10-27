// Interaction + link checks against the running preview (http://localhost:4321).
import { chromium } from 'playwright';
const browser = await chromium.launch({ channel: 'chrome' });
const results = [];
const ok = (name, pass, info = '') => results.push(`${pass ? 'PASS' : 'FAIL'}  ${name}${info ? ' — ' + info : ''}`);

// Mobile menu (keyboard)
{
  const page = await browser.newPage({ viewport: { width: 375, height: 800 } });
  await page.goto('http://localhost:4321/');
  const toggle = page.locator('#menu-toggle');
  ok('menu hidden initially', await page.locator('#mobile-menu').isHidden());
  await toggle.focus();
  await page.keyboard.press('Enter');
  ok('Enter opens menu', (await toggle.getAttribute('aria-expanded')) === 'true' && (await page.locator('#mobile-menu').isVisible()));
  ok('toggle label updates', (await toggle.innerText()).includes('Tutup menu'));
  await page.keyboard.press('Tab');
  const focused = await page.evaluate(() => document.activeElement?.textContent?.trim());
  ok('Tab moves into menu', focused === 'Beranda', `focused: ${focused}`);
  await page.keyboard.press('Escape');
  ok('Escape closes + returns focus', (await page.locator('#mobile-menu').isHidden()) && (await page.evaluate(() => document.activeElement?.id)) === 'menu-toggle');
  await toggle.click();
  await page.locator('#mobile-menu a[href="#faq"]').click();
  await page.waitForTimeout(900);
  ok('menu link closes menu + scrolls', (await page.locator('#mobile-menu').isHidden()) && (await page.evaluate(() => scrollY)) > 1000);
  await page.close();
}

// Tabs, carousel, accordion, active nav (desktop)
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:4321/');
  const tab1 = page.locator('#tab-undangan');
  await tab1.focus();
  await page.keyboard.press('ArrowRight');
  ok('ArrowRight selects Buku Tamu', (await page.locator('#tab-buku-tamu').getAttribute('aria-selected')) === 'true' && (await page.locator('#panel-buku-tamu').isVisible()) && (await page.locator('#panel-undangan').isHidden()));
  ok('focus follows tab', (await page.evaluate(() => document.activeElement?.id)) === 'tab-buku-tamu');
  await page.keyboard.press('End');
  const album = page.locator('#panel-album');
  ok('End selects Album', await album.isVisible());
  ok('Album panel: 7 real screenshots, no placeholders left', (await album.locator('[data-track] img').count()) === 7 && (await page.locator('[aria-label$="screenshot menyusul"]').count()) === 0);
  ok('Album panel: Frame Studio frames listed', (await album.textContent()).includes('Botanical Corner') && (await album.textContent()).includes('Tanpa Frame'));
  ok('no "Segera Hadir" left on page', !(await page.locator('body').textContent()).match(/segera hadir/i));
  await page.keyboard.press('ArrowRight');
  ok('ArrowRight wraps to first', (await tab1.getAttribute('aria-selected')) === 'true');
  await page.locator('#tab-buku-tamu').click();
  const panel = page.locator('#panel-buku-tamu');
  const before = await panel.locator('[data-track]').evaluate((t) => t.scrollLeft);
  await panel.locator('[data-next]').click();
  await page.waitForTimeout(700);
  const after = await panel.locator('[data-track]').evaluate((t) => t.scrollLeft);
  ok('carousel next scrolls', after > before, `${before} -> ${after}; count ${await panel.locator('[data-count]').innerText()}`);

  const d = page.locator('#faq details');
  ok('11 FAQ items', (await d.count()) === 11);
  await d.nth(3).locator('summary').focus();
  await page.keyboard.press('Enter');
  ok('FAQ opens with keyboard', await d.nth(3).evaluate((e) => e.open));
  ok('FAQ "aplikasi" answer = Tidak', (await d.nth(3).innerText()).includes('Tidak.'));
  await d.nth(5).locator('summary').click();
  ok('FAQ exclusive (name=faq)', !(await d.nth(3).evaluate((e) => e.open)) && (await d.nth(5).evaluate((e) => e.open)));

  for (const [id, label] of [['cara-kerja', 'Cara Kerja'], ['fitur', 'Fitur'], ['faq', 'FAQ'], ['demo', 'Demo']]) {
    await page.evaluate((id) => document.getElementById(id).scrollIntoView({ behavior: 'instant' }), id);
    await page.waitForTimeout(400);
    const current = await page.locator('nav [aria-current="true"]').first().textContent().catch(() => '');
    ok(`active nav highlight: ${label}`, current.trim() === label, `current: ${current.trim()}`);
  }

  // Links
  const links = await page.$$eval('a[href]', (as) => as.map((a) => ({ href: a.getAttribute('href'), target: a.target, rel: a.rel, text: a.textContent.trim().replace(/\s+/g, ' ') })));
  const wa = links.filter((l) => l.href.startsWith('https://wa.me/'));
  const badWa = wa.filter((l) => !l.href.startsWith('https://wa.me/6285215137709?text=') || l.target !== '_blank' || !l.rel.includes('noopener'));
  ok(`all ${wa.length} WhatsApp links: number, new tab, noopener`, badWa.length === 0, badWa.map((l) => l.text).join(', '));
  const msgs = [...new Set(wa.map((l) => decodeURIComponent(l.href.split('text=')[1])))];
  results.push('      WhatsApp messages used:\n' + msgs.map((m) => '        • ' + m).join('\n'));
  const hashes = links.filter((l) => l.href.startsWith('#'));
  const missing = [];
  for (const l of hashes) if (!(await page.locator(l.href).count())) missing.push(l.href);
  ok(`${hashes.length} in-page links resolve`, missing.length === 0, missing.join(', '));
  const external = links.filter((l) => /^https?:/.test(l.href) && !l.href.startsWith('https://wa.me/'));
  ok('external links', external.every((l) => l.target === '_blank' && l.rel.includes('noopener')), external.map((l) => l.href).join(', '));
  const live = links.filter((l) => /vercel\.app|nadhe-wedd/.test(l.href));
  ok('no link to live invitation', live.length === 0);
  ok('exactly one h1', (await page.locator('h1').count()) === 1);
  const prices = await page.locator('#paket > div > ul > li').evaluateAll((lis) => lis.map((li) => li.querySelector('h3').textContent.trim() + ' ' + li.querySelector('.tabular-nums').textContent.trim()));
  ok('package prices', JSON.stringify(prices) === JSON.stringify(['Essential Rp 399.000', 'Elegant Rp 1.199.000', 'Signature Rp 1.449.000', 'Signature Plus Rp 2.699.000']), prices.join(' · '));
  const sig = page.locator('#paket > div > ul > li').nth(2);
  ok('Signature featured + "Paling Lengkap"', (await sig.getAttribute('class')).includes('maroon-surface') && (await sig.textContent()).includes('Paling Lengkap'));
  const ctas = await page.locator('#paket a[href^="https://wa.me/"]').evaluateAll((as) => as.map((a) => a.textContent.trim().replace(/\s+/g, ' ')));
  ok('4 "Pesan Paket Ini" CTAs', ctas.length === 4 && ctas.every((t) => t.startsWith('Pesan Paket Ini')), ctas.join(' | '));
  await page.close();
}
console.log(results.join('\n'));
await browser.close();
