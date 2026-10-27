# MASTER PROMPT — NADHEWEDD LANDING PAGE V1

## ROLE & OBJECTIVE

Act as a senior frontend engineer, UI/UX designer and conversion-focused web
designer. Build a premium, production-quality marketing landing page for
**NadheWedd**, a wedding technology product by **NadheStudio**, in a **new,
standalone project**.

NadheWedd connects three experiences:

1. **Undangan Digital** (live)
2. **Buku Tamu Digital** with QR check-in (live)
3. **Wedding Album** for guest photos (**not built yet — "Segera Hadir"**)

The first real-world implementation is the wedding of **Naubill & Dhea —
03 November 2026**.

**Primary goal:** turn visitors into prospects through clear value, real product
screenshots and WhatsApp consultation.
**Secondary goal:** a modular foundation that can later grow into a SaaS site.

Out of scope for this phase: SaaS dashboard, registration, subscriptions,
payment gateway, customer accounts, the Album itself.

---

## INPUTS — READ THESE FIRST

A **landing kit** is provided next to this prompt. Copy it into the new project
and treat it as the source of truth.

```
nadhewedd-landing-kit/
├─ PROMPT-LANDING-PAGE.md     ← this file
├─ PRODUCT-FACTS.md           ← what is built / not built; ALL copy must match it
├─ design/brand-tokens.css    ← Tailwind v4 @theme tokens + .eyebrow .paper .maroon-surface .frame-inset
├─ assets/
│  ├─ florals/                ← corner florals (.webp, transparent), horizontal floral strips, SVG fallback
│  ├─ ornaments/              ← gold-divider-01..03.png, islamic-arch.png, monogram-nd.png (Naubill & Dhea's own monogram)
│  ├─ illustrations/          ← couple-hero.png, couple-closing.png (Naubill & Dhea — use ONLY in the "Implementasi Perdana" section)
│  └─ brand/                  ← favicon.svg, apple-touch-icon.png, qr-checkin-buku-tamu.png (do NOT use on the landing page)
└─ screenshots/               ← real UI captured with FICTIONAL demo guests
   01-undangan-sampul-mobile          09-dashboard-login-desktop
   02-undangan-hero-mobile            10-dashboard-desktop
   03-undangan-acara-mobile           11-buku-tamu-kamera-sapaan-desktop
   04-undangan-countdown-mobile       12-undangan-terima-kasih-checkin-mobile
   05-undangan-rsvp-form-mobile       13-dashboard-mobile
   06-undangan-rsvp-terkirim-mobile   14-checkin-cadangan-mobile
   07-undangan-tombol-qr-mobile       15-buku-tamu-kamera-menunggu-desktop
   08-undangan-qr-pribadi-mobile
```

Rules for inputs:

- Every feature claim must exist in `PRODUCT-FACTS.md`. If something is not there,
  do not claim it. Ask instead.
- Use the screenshots as product imagery (inside phone/laptop frames). Do not
  draw fake UI that suggests features that do not exist.
- **Never link to or embed the live Naubill & Dhea invitation.** It contains
  private bank, QRIS and address data. No public demo URL exists yet; demo CTAs
  must be hidden or shown as "Demo segera tersedia" until a demo URL is configured.
- `monogram-nd.png` and the couple illustrations belong to Naubill & Dhea: use
  them only in the "Implementasi Perdana" section, not as NadheWedd branding.
  NadheWedd's own logo is a **text wordmark** (Playfair Display "NadheWedd" +
  small Poppins "by NadheStudio") until a real logo exists.
- Before the site goes public, the owner must confirm that the floral/ornament
  artwork may be used commercially. Keep the assets swappable (one import place).

---

## PHASE 0 — PROJECT SETUP (report, then wait for approval)

1. Inspect the new (empty) project folder and the kit.
2. Propose the stack. Recommended: **Astro + Tailwind CSS v4 + TypeScript**,
   static output, near-zero JavaScript (small islands only for the mobile menu,
   showcase tabs and FAQ accordion; plain TS, no UI framework). A landing page
   needs SEO and fast first paint, and the invitation app is client-rendered, so
   it is not a good base. If you choose otherwise, justify it.
3. Hosting: this is a **commercial** site. Do **not** plan for Vercel Hobby (not
   allowed for commercial use). Propose Cloudflare Pages or Netlify (or Vercel
   Pro if the owner chooses).
4. Produce a short Implementation Plan: structure, components, content config,
   assets, SEO, deployment. **Stop and wait for approval.**

Never touch the existing invitation repository or its deployment.

---

## PHASE 1 — POSITIONING & TONE

- Product: **NadheWedd** · Parent: **NadheStudio** · "NadheWedd by NadheStudio"
- Category: Wedding Technology / Digital Wedding Experience · Market: Indonesia
- Audience: engaged couples, families organizing a wedding, wedding organizers/planners.
- Core message: **"Semua Momen Pernikahan, Terhubung dalam Satu Pengalaman Digital."**
- Supporting: "Dari undangan pertama hingga kenangan terakhir, NadheWedd membantu
  menghadirkan pengalaman pernikahan yang lebih praktis, elegan, dan berkesan."
- Tone: elegant, warm, modern, trustworthy, natural Indonesian; no jargon
  ("Spreadsheet", "Apps Script", "polling" never appear in customer copy).
- **Today NadheWedd is a managed service.** NadheStudio sets each wedding up.
  CTAs lead to WhatsApp consultation, not "Daftar".

---

## PHASE 2 — VISUAL DESIGN SYSTEM

Use `design/brand-tokens.css` as is (maroon #7A1B1B, deep maroon #5E1414, soft
maroon #AB4545, gold #D4AF37, gold-deep #8A6A22 for small text on cream,
champagne #EBD3A1, cream #FFF7EB, ivory #FFFBF4, beige #EADCC6, warm gray #7A6D60,
ink #4A2925, rose #C98B86). Fonts: Playfair Display (headlines), Poppins (body,
UI), Allura (sparing romantic accents). Proportion ≈ 60% cream/ivory, 25% maroon,
10% gold/champagne, 5% floral.

Direction: luxury wedding stationery × modern technology product. Editorial
layouts, generous whitespace, thin gold rules (`gold-divider-*.png`), soft
shadows, `frame-inset` cards, alternating cream (`.paper`) and maroon
(`.maroon-surface`) sections, corner florals at low opacity — at most one or two
per section. No blue SaaS gradients, neon or heavy glassmorphism.

Mobile-first; touch targets ≥ 44px; AA contrast (use gold-deep, not gold, for
small text on cream); `prefers-reduced-motion` respected; no horizontal overflow
at 320px.

---

## PHASE 3 — PAGE STRUCTURE (one page, sections in this order)

1. **Navbar**: wordmark "NadheWedd / by NadheStudio"; links Beranda · Fitur ·
   Cara Kerja · Demo · FAQ; CTA **Konsultasi Gratis** (WhatsApp). Sticky,
   accessible mobile menu, active-section highlight.

2. **Hero**: eyebrow "YOUR DIGITAL WEDDING EXPERIENCE"; H1 **"Satu Platform untuk
   Momen Pernikahan yang Berkesan"**; copy "Undangan digital yang elegan, buku tamu
   otomatis dengan QR Code, dan album foto bersama — semuanya terhubung untuk hari
   istimewa Anda." (Mark the album as segera hadir in the visual.) CTAs: **Lihat Cara
   Kerja** (scroll) and **Konsultasi via WhatsApp**. Visual: a phone showing
   `08-undangan-qr-pribadi-mobile` + a laptop/tablet showing
   `11-buku-tamu-kamera-sapaan-desktop`, with a small "Album — Segera Hadir" card.

3. **Lebih dari Sekadar Undangan Digital**: three product cards.
   - Undangan Digital: personal link with guest name · event details & countdown ·
     Google Maps & directions · RSVP · buku ucapan · amplop digital (transfer & QRIS)
     · personal QR for check-in. Benefit: "Undangan yang personal, praktis, dan
     berkesan sejak pertama dibuka." Images: 01, 02, 05.
   - Buku Tamu Digital: QR from the invitation, scanned by the camera at the desk ·
     instant check-in, no button · greeting with the guest's name · panitia dashboard
     · fallback check-in for guests without their link · data export. Benefit:
     "Penerimaan tamu lebih cepat, tertata, dan mudah dipantau." Images: 11, 10, 12.
   - Wedding Album (**Segera Hadir** badge, no CTA): "Tamu dapat ikut mengabadikan
     dan berbagi momen dari ponsel masing-masing." No feature list beyond that.

4. **Cara Kerja — "Sederhana untuk Tamu, Praktis untuk Penyelenggara"** timeline:
   1. Kirim undangan personal lewat WhatsApp
   2. Tamu konfirmasi kehadiran (RSVP) sebelum hari H
   3. Di hari H, panitia membuka check-in
   4. Tamu menunjukkan QR dari undangannya ke kamera Buku Tamu — langsung tercatat,
      disambut dengan namanya
   5. Panitia memantau kehadiran secara langsung dari dashboard
   6. *(Segera hadir)* Tamu berbagi foto ke album acara

5. **Lihat Bagaimana NadheWedd Bekerja**: tabbed showcase (Undangan · Buku Tamu ·
   Album). Desktop: split layout (screenshot + explanation + highlights);
   mobile: tabs with swipeable screenshots. Album tab shows "Segera Hadir". Demo
   CTAs only render when a demo URL is configured; otherwise a WhatsApp CTA
   "Minta demo via WhatsApp".

6. **Dirancang untuk Hari yang Tak Terlupakan** (benefits): satu pengalaman yang
   terhubung · tamu tidak perlu instal aplikasi · antrean penerimaan tamu lebih
   singkat · kehadiran tercatat rapi dan bisa diekspor · tampilan elegan, nyaman di
   ponsel · dikerjakan langsung oleh NadheStudio. No guarantees or numbers.

7. **Implementasi Perdana**: "The Wedding of Naubill & Dhea · 03 November 2026",
   with `couple-hero.png` and two screenshots. Copy before the event:
   "Implementasi perdana NadheWedd — 03 November 2026." No metrics or testimonials.
   Make this section easy to update after the event (content config).

8. **Paket & Layanan — "Pilih Pengalaman yang Sesuai untuk Hari Istimewa Anda"**:
   Undangan Digital · Undangan + Buku Tamu Digital · Paket Lengkap (Undangan + Buku
   Tamu + Album, labelled "Album segera hadir"). No prices: **"Hubungi Kami untuk
   Penawaran"**. Each CTA opens WhatsApp with a package-specific message. Prices must
   be addable later in one config file.

9. **FAQ** (accessible accordion), answers matching PRODUCT-FACTS:
   Apa itu NadheWedd? · Apakah hanya undangan digital? · Bagaimana buku tamu digital
   bekerja? · Apakah tamu perlu mengunduh aplikasi? (Tidak) · Bagaimana jika tamu
   tidak bisa membuka undangannya? · Apakah butuh internet di lokasi? (Ya) ·
   Kapan album foto tersedia? (Segera hadir) · Apakah fitur bisa dipesan terpisah? ·
   Bagaimana cara memesan?

10. **Final CTA** (maroon surface): "Wujudkan Pengalaman Pernikahan yang Lebih
    Berkesan" · "Mulai dari undangan hingga kenangan, NadheWedd hadir membantu
    merangkai setiap momen istimewa Anda." · **Konsultasikan Pernikahan Anda**.

11. **Footer**: "NadheWedd by NadheStudio" · "Digital Wedding Experience" · section
    links · NadheStudio → https://nadhestudio.id/ (new tab). No invented social
    accounts, emails, addresses or company details.

---

## PHASE 4 — WHATSAPP

Number 0852 1513 7709 → `https://wa.me/6285215137709?text=…` (URL-encoded).
Default message: "Halo NadheWedd, saya tertarik dengan layanan digital wedding.
Boleh minta informasi paket dan cara pemesanannya?" Package CTAs append the
package name. External links: `target="_blank" rel="noopener"`. No forms.

---

## PHASE 5 — ARCHITECTURE & QUALITY

- One content/config file (`src/config/site.ts` or similar): brand, WhatsApp number
  & messages, demo URLs (empty = hidden), packages (name, items, optional price),
  FAQ, showcase tabs, real-wedding section. Section components read from it.
- Components: Navbar, Hero, ProductOverview, HowItWorks, ProductShowcase,
  Benefits, FirstImplementation, Packages, FAQ, FinalCTA, Footer, plus small
  DeviceFrame (phone/laptop) and SectionHeading. No deeper abstraction than needed.
- Images: convert screenshots and illustrations to WebP/AVIF at the displayed sizes,
  responsive `srcset`, explicit width/height, lazy below the fold, hero image eager.
- Fonts: Google Fonts with `display=swap` and preconnect, or self-hosted.
- SEO: title "NadheWedd — Undangan Digital, Buku Tamu QR & Wedding Album";
  description "NadheWedd menghadirkan undangan digital, buku tamu QR Code, dan album
  foto pernikahan dalam satu pengalaman digital yang elegan."; `lang="id"`; one H1;
  Open Graph/Twitter tags; canonical + sitemap + robots **only once the domain is
  known** (keep a single SITE_URL setting, empty for now). Create an OG image
  1200×630 from the brand tokens (no couple photo).
- Performance: aim for Lighthouse ≥ 95 on mobile for performance, accessibility,
  best practices and SEO. No animation libraries; CSS transitions only.
- Optional, ask first: a simple "Kebijakan Privasi" page (guest names and phone
  numbers are processed for weddings). Do not invent a legal entity.

---

## PHASE 6 — TESTING

Check 320, 375, 390, 768, 1024 and 1440 px: layout, no horizontal scroll, mobile
menu (keyboard + screen reader), tabs, accordion, every WhatsApp link (correct
number and message), no broken links, no console errors, build passes,
Lighthouse scores. Report anything you could not verify, plainly.

---

## PHASE 7 — DELIVERY

Report: sections built, folder structure, files created, how to edit content
(config file), how to add prices/demo URLs/domain later, build and Lighthouse
results, deployment steps for the chosen host, open TODOs (logo, domain, asset
license confirmation, demo deployment, Album, post-wedding update). Do not claim
a deployment you have not performed and verified.

---

## NON-NEGOTIABLE RULES

1. The existing invitation, guestbook and dashboard (separate repo) are never touched.
2. Copy matches PRODUCT-FACTS.md. Album = "Segera Hadir".
3. No private data of Naubill & Dhea (bank, QRIS, address, guest names, live links).
4. No fabricated testimonials, numbers, prices, URLs, contacts or screenshots.
5. Work in steps: setup report → plan → **approval** → build → test → report.
