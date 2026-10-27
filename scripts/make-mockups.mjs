// Renders product mockups (390×844 @2x) into src/assets/mockups/, styled like the real
// invitation/guestbook UI. Only for features that exist (see kit/PRODUCT-FACTS.md).
// Replace them with real screenshots when available. Run: npm run mockups
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const file = (p) => fileURLToPath(new URL(p, import.meta.url));
const b64 = (p, type) => `data:${type};base64,${readFileSync(file(p)).toString('base64')}`;
const font = (pkg, f) => b64(`../node_modules/@fontsource/${pkg}/files/${f}`, 'font/woff2');

const qr = b64('./mockup-src/qr-demo.png', 'image/png');
const floral = b64('../src/assets/florals/floral-top-right.webp', 'image/webp');
const divider = b64('../src/assets/ornaments/gold-divider-01.png', 'image/png');

const base = `
@font-face{font-family:'Playfair Display';font-weight:400;src:url(${font('playfair-display', 'playfair-display-latin-400-normal.woff2')})}
@font-face{font-family:'Playfair Display';font-style:italic;font-weight:400;src:url(${font('playfair-display', 'playfair-display-latin-400-italic.woff2')})}
@font-face{font-family:'Poppins';font-weight:400;src:url(${font('poppins', 'poppins-latin-400-normal.woff2')})}
@font-face{font-family:'Poppins';font-weight:500;src:url(${font('poppins', 'poppins-latin-500-normal.woff2')})}
*{margin:0;padding:0;box-sizing:border-box}
body{width:390px;height:844px;overflow:hidden;background:#fff7eb;font-family:Poppins;color:#4a2925;position:relative}
.eyebrow{font-size:10.5px;letter-spacing:.32em;text-transform:uppercase;font-weight:500}
.btn{display:flex;align-items:center;justify-content:center;gap:9px;height:46px;border-radius:999px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;font-weight:500}
.btn svg{width:15px;height:15px}
`;

const pin = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z"/><circle cx="12" cy="10" r="2.3"/></svg>';
const nav = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5 3.8 10.4c-.8.3-.7 1.4.1 1.6l6.6 1.5 1.5 6.6c.2.8 1.3.9 1.6.1L20.5 3.5Z"/></svg>';

// 1) Invitation — location section with directions from the guest's current location.
const lokasi = `<html><head><style>${base}
.floral{position:absolute;top:-10px;right:-30px;width:210px;opacity:.95}
.wrap{padding:118px 24px 0;text-align:center}
h1{font-family:'Playfair Display';font-weight:400;font-size:40px;color:#7a1b1b;line-height:1.1;margin-top:14px}
.div{width:160px;margin:18px auto 0;display:block}
.card{margin-top:26px;border:1px solid rgb(212 175 55/.45);border-radius:22px;background:#fffbf4;padding:14px 14px 20px;box-shadow:0 18px 34px -26px rgb(74 41 37/.6)}
.map{position:relative;height:250px;border-radius:14px;overflow:hidden;background:#f3ead8}
.chip{position:absolute;display:flex;align-items:center;gap:6px;background:#fffbf4;border-radius:999px;padding:5px 10px 5px 8px;font-size:10.5px;font-weight:500;box-shadow:0 6px 14px -8px rgb(74 41 37/.6);white-space:nowrap}
.venue{font-family:'Playfair Display';font-size:22px;color:#7a1b1b;margin-top:18px}
.addr{font-size:12.5px;color:#7a6d60;margin-top:4px;line-height:1.5}
.p{background:#7a1b1b;color:#fffbf4;margin-top:18px;box-shadow:0 14px 24px -16px rgb(94 20 20/.9)}
.o{border:1px solid rgb(171 69 69/.55);color:#7a1b1b;margin-top:10px}
.note{font-size:10.5px;color:#7a6d60;margin-top:12px}
.play{position:absolute;right:18px;bottom:18px;width:52px;height:52px;border-radius:50%;background:#7a1b1b;border:3px solid #d4af37;display:flex;align-items:center;justify-content:center}
</style></head><body>
<img class="floral" src="${floral}">
<div class="wrap">
  <p class="eyebrow" style="color:#8a6a22">Lokasi Acara</p>
  <h1>Menuju Lokasi</h1>
  <img class="div" src="${divider}">
  <div class="card">
    <div class="map">
      <svg width="100%" height="100%" viewBox="0 0 334 250" preserveAspectRatio="xMidYMid slice">
        <rect width="334" height="250" fill="#f3ead8"/>
        <path d="M-10 196 C 80 178, 120 210, 200 168 S 300 120, 350 132" stroke="#cfe0e6" stroke-width="16" fill="none"/>
        <g fill="#eadcc6"><rect x="18" y="20" width="70" height="46" rx="6"/><rect x="104" y="20" width="58" height="46" rx="6"/><rect x="232" y="18" width="84" height="40" rx="6"/><rect x="18" y="84" width="52" height="56" rx="6"/><rect x="190" y="76" width="56" height="44" rx="6"/><rect x="262" y="72" width="56" height="34" rx="6"/><rect x="92" y="214" width="70" height="40" rx="6"/><rect x="240" y="196" width="80" height="54" rx="6"/></g>
        <g stroke="#fffbf4" stroke-width="9" fill="none" stroke-linecap="round"><path d="M0 76 H334"/><path d="M178 0 V250"/><path d="M90 0 L 90 250"/><path d="M0 150 H 178 L 334 150"/><path d="M178 112 L 334 60"/></g>
        <path d="M58 204 L 90 186 L 90 150 L 178 150 L 178 112 L 252 88 L 268 52" stroke="#7a1b1b" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 9"/>
        <circle cx="58" cy="204" r="16" fill="#4c8bf5" opacity=".18"/><circle cx="58" cy="204" r="7.5" fill="#4c8bf5" stroke="#fff" stroke-width="3"/>
        <g transform="translate(254 14)"><path d="M14 40s-12-10.5-12-20a12 12 0 0 1 24 0c0 9.5-12 20-12 20Z" fill="#7a1b1b" stroke="#fffbf4" stroke-width="2"/><circle cx="14" cy="20" r="4.5" fill="#ebd3a1"/></g>
      </svg>
      <span class="chip" style="left:16px;top:150px"><span style="width:8px;height:8px;border-radius:50%;background:#4c8bf5"></span>Lokasi Anda</span>
      <span class="chip" style="right:12px;top:66px;color:#7a1b1b">Lokasi Acara</span>
    </div>
    <p class="venue">Gedung Resepsi</p>
    <p class="addr">Rute otomatis dari lokasi Anda saat ini</p>
    <div class="btn p">${nav}Petunjuk Arah dari Lokasi Saya</div>
    <div class="btn o">${pin}Buka Google Maps</div>
    <p class="note">Izinkan akses lokasi saat diminta browser.</p>
  </div>
</div>
<div class="play"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fffbf4"><path d="M8 5.5v13l10-6.5-10-6.5Z"/></svg></div>
</body></html>`;

// 2) Guestbook — Mode Kamera on a phone.
const kamera = `<html><head><style>${base}
header{height:108px;background:linear-gradient(#8a2424,#741a1a);color:#fffbf4;padding:48px 20px 0;display:flex;justify-content:space-between}
header .t{font-family:'Playfair Display';font-size:19px;margin-top:3px}
header .x{width:22px;height:22px;opacity:.85;margin-top:8px}
.cam{position:relative;margin:16px 16px 0;height:396px;border-radius:22px;overflow:hidden;background:radial-gradient(120% 90% at 50% 40%,#5b4a44,#2c2220)}
.qr{position:absolute;left:50%;top:50%;width:178px;height:178px;transform:translate(-50%,-52%) rotate(-4deg);background:#fff;padding:9px;border-radius:10px;box-shadow:0 18px 30px -12px rgb(0 0 0/.6)}
.qr img{width:100%;height:100%}
.frame{position:absolute;left:50%;top:50%;width:226px;height:226px;transform:translate(-50%,-52%)}
.frame i{position:absolute;width:34px;height:34px;border-color:#d4af37;border-style:solid}
.scan{position:absolute;left:12px;right:12px;top:58%;height:2px;background:linear-gradient(90deg,transparent,#ebd3a1,transparent);box-shadow:0 0 12px #ebd3a1}
.live{position:absolute;left:14px;top:14px;display:flex;align-items:center;gap:7px;background:rgb(0 0 0/.45);color:#fffbf4;font-size:10.5px;border-radius:999px;padding:6px 11px}
.live b{width:7px;height:7px;border-radius:50%;background:#5ccf7a}
.hint{position:absolute;left:0;right:0;bottom:16px;text-align:center;color:#fffbf4;font-size:11.5px;opacity:.9}
.ok{margin:14px 16px 0;border:1px solid rgb(212 175 55/.4);border-radius:22px;background:#fffbf4;text-align:center;padding:20px 18px 22px}
.check{width:54px;height:54px;border-radius:50%;border:1.5px solid #d4af37;background:#f9efd9;margin:0 auto;display:flex;align-items:center;justify-content:center;color:#7a1b1b}
.sd{font-family:'Playfair Display';font-style:italic;color:#8a6a22;font-size:20px;margin-top:10px}
.nm{font-family:'Playfair Display';color:#7a1b1b;font-size:27px;line-height:1.15;margin-top:2px}
.ss{font-family:'Playfair Display';font-style:italic;color:#7a6d60;font-size:15px;margin-top:6px}
.meta{font-size:11.5px;color:#7a6d60;margin-top:8px}
.next{text-align:center;font-size:10.5px;color:#7a6d60;margin-top:16px;letter-spacing:.02em}
</style></head><body>
<header><div><p class="eyebrow" style="font-size:9px;color:#ebd3a1">Buku Tamu Digital</p><p class="t">Naubill &amp; Dhea</p></div>
<svg class="x" viewBox="0 0 24 24" fill="none" stroke="#fffbf4" stroke-width="1.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></header>
<div class="cam">
  <span class="live"><b></b>Mode Kamera</span>
  <div class="qr"><img src="${qr}"></div>
  <div class="frame"><i style="left:0;top:0;border-width:3px 0 0 3px;border-top-left-radius:14px"></i><i style="right:0;top:0;border-width:3px 3px 0 0;border-top-right-radius:14px"></i><i style="left:0;bottom:0;border-width:0 0 3px 3px;border-bottom-left-radius:14px"></i><i style="right:0;bottom:0;border-width:0 3px 3px 0;border-bottom-right-radius:14px"></i></div>
  <div class="scan"></div>
  <p class="hint">Arahkan QR undangan ke kamera</p>
</div>
<div class="ok">
  <div class="check"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.2 4.2L19 7"/></svg></div>
  <p class="sd">Selamat Datang</p>
  <p class="nm">Bapak Ahmad &amp; Keluarga</p>
  <p class="ss">Semoga sehat selalu</p>
  <p class="meta">3 orang · 14.00 WITA</p>
</div>
<p class="next">Kamera siap untuk tamu berikutnya</p>
</body></html>`;

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
for (const [name, html] of [['16-undangan-lokasi-gps-mobile', lokasi], ['17-buku-tamu-kamera-mobile', kamera]]) {
  await page.setContent(html);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: file(`../src/assets/mockups/${name}.png`) });
  console.log(`${name}.png written`);
}
await browser.close();
