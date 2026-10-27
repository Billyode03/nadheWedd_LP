# NadheWedd — Product Facts (source of truth for landing-page copy)

Verified against the working system on 2026-10-17. If the landing page says
something that is not in this file, it is a claim that has not been verified.

Live first implementation: the wedding of **Naubill & Dhea — Selasa, 03 November 2026**,
venue withheld in this public copy (WITA time zone).
That invitation contains private data (bank account, QRIS, home-area address,
family story). **Do not link to it or embed it in the landing page.** Use the
screenshots in `screenshots/` (taken with fictional demo guests) instead.

## 1. Undangan Digital — BUILT, LIVE

- Personal link per guest: the guest's name appears on the cover ("Kepada Yth. …").
- Each link also carries a secret guest code, which identifies the guest for RSVP
  matching and check-in. Changing the name in the URL does not change who the guest is.
- Sections: cover, hero with couple illustration, Qur'an quote, bride & groom,
  event schedule (akad / resepsi, times in local time zone), countdown, love story,
  location with Google Maps and "directions from my location", RSVP, wishes
  (buku ucapan), digital gift (bank transfer + QRIS), closing.
- Background music with a play/pause control; starts after the guest opens the
  cover (browsers block autoplay before a tap).
- RSVP: Hadir / Tidak hadir / Masih ragu + number of people + message. Sent once:
  afterwards the form is replaced by a reply that depends on the answer.
- Returning guests who already RSVP'd skip the cover and land on their RSVP card.
- Wishes appear on the invitation (optionally after the couple approves them).
- WhatsApp link preview with an image.
- Desktop view: decorative side panel; the invitation itself is mobile-first.

## 2. Buku Tamu Digital (Smart Guestbook) — BUILT, tested on real phones

- The organizers press **"Buka Check-in"** in the dashboard on the wedding day.
  From then on every invitation shows a **Check-in** button and a **personal QR**.
  Before that, guests cannot check in (the server refuses).
- **Mode Kamera** (camera station): a tablet or laptop at the reception desk opens
  the dashboard → Mode Kamera. The guest shows their QR to the camera. They are
  checked in **instantly, with no button press**. The screen greets them by name:
  "Selamat Datang [nama] — Semoga sehat selalu". A chime plays (different tones
  for success, already checked in, and error). The camera is ready for the next
  guest in ~3 s.
- The number of people is taken from the guest's RSVP. Organizers can correct it
  in the dashboard.
- The guest's phone turns into "Terima Kasih Sudah Check-in — Silakan masuk" a few
  seconds after the scan.
- Duplicate check-ins are refused by the server ("Sudah check-in").
- Fallbacks: (a) a public QR on a banner opens the check-in page, where the guest
  verifies with name + last 4 digits of their WhatsApp number; (b) organizers can
  check a guest in manually from the dashboard and undo mistakes.
- Works in the phone browser. **Guests do not install an app.**
- Needs an internet connection at the venue.

## 3. Dashboard Panitia — BUILT

- Password-protected web page (password checked on the server).
- Open/close check-in for all invitations with one button.
- Tabs: Sudah Datang (main screen, newest first) · Belum Datang · Tidak Datang
  (RSVP "tidak hadir") · Semua. Counters: arrived invitations, people arrived,
  RSVP-hadir invitations (± people, how many already arrived), not yet arrived,
  declined, total.
- Search by name or guest ID, filter by "Pengirim" (who sent the invitation).
- Updates every ~2.5 s while the screen is open (near real time, not instant).
- Export to CSV (opens in Excel / Google Sheets).

## 4. Guest list & sending (for the couple) — BUILT

- Google Spreadsheet guest list: type a name + WhatsApp number, and the personal
  link plus a "Kirim" (send via WhatsApp) link with a prefilled message are
  generated automatically. Tick "Terkirim" to stamp the date.
- Sending is one click per guest from the couple's own WhatsApp. There is **no
  mass/auto blast**, on purpose, to avoid WhatsApp bans.
- RSVP and check-in status per guest are visible in the spreadsheet too.

## 5. Web Album & Frame Studio — BUILT (owner update 2026-10-22)

- Guests open the album by scanning a QR at the venue. No app install, no login.
- Upload straight from the phone, max 10 photos per selection. Photos are compressed
  automatically and GPS/location data in the photo is removed.
- Shared gallery: all guests can view and download photos.
- Honest upload status: "Tersimpan" only after the server confirms the photo is stored.
  If the signal drops, the guest can re-check without duplicate photos.
- Organizer admin dashboard: open/close uploads, hide/show gallery, approval mode,
  hide or delete photos, statistics, print-ready album QR for an X-banner.
- Upload limit per device against spam; photos stored privately, only approved photos shown.
- Frame Studio: 1 of 6 exclusive frames ("NadheWedd Signature Collection Vol. 01": Floral
  Classic, Minimal Elegant, Modern Arch, Botanical Corner, Polaroid Style, Elegant Frame)
  or "Tanpa Frame"; pan/zoom; couple names + date in the invitation font; 1080×1350 output
  sent to the album or saved to the phone.
- Album screenshots (`src/assets/screenshots/18-…` to `24-…`, 2026-10-22) are the real UI, captured from
  an isolated local copy of the app (own local Supabase, ports 556xx) with a fictional demo event
  "Raka & Salsa · 12 Desember 2026" and demo photos built from the kit florals. The original repo,
  its local stack and production were not touched.
- Still never claim: unlimited storage/uploads, video upload, face recognition.

## Technology (for internal use, not for customer-facing copy)

React + Vite + Tailwind CSS v4 front end · Google Sheets + Google Apps Script
back end · QR generated in the browser · camera QR reading in the browser
(native BarcodeDetector, jsQR fallback for Safari). Read cache on the server for
wedding-day load (~350 guests planned).

## Business facts

- Brand: **NadheWedd by NadheStudio** · NadheStudio website: https://nadhestudio.id/
- WhatsApp for inquiries: **0852 1513 7709** (wa.me format: 6285215137709)
- Delivery model today: **managed service**. NadheStudio sets each wedding up;
  there is no self-service sign-up, payment, or customer account yet.
- No public demo deployment exists yet.
- Prices (owner, updated 2026-10-22), per acara. Source of truth: `src/config/site.ts` → `packages`.
  - Paket: Essential Rp 399.000 · Elegant Rp 1.199.000 (Hemat ± Rp 200.000) ·
    Signature Rp 1.449.000 (Hemat ± Rp 350.000, "Paling Lengkap") · Signature Plus Rp 2.699.000.
  - Satuan: Undangan Basic Rp 149.000 · Undangan Premium Rp 349.000–499.000 ·
    Buku Tamu Digital Rp 799.000–1.500.000 · Web Album Rp 149.000–249.000 ·
    Frame Studio + Rp 75.000 (tambahan Web Album).
  - Add-on: domain sendiri Rp 150.000/tahun · bantuan kirim undangan WA Rp 100.000/100 tamu ·
    perpanjangan album Rp 100.000/bulan · frame custom Rp 250.000 · revisi tambahan Rp 50.000 ·
    cetak X-banner QR Rp 150.000/pcs.
  - Terms: see `packages.notes` in site.ts.
- NadheWedd landing page domain: not decided.

## Confirmed by the owner on 2026-10-17 (added to the landing page)

- **Directions from the guest's current location**: the location section's button opens
  Google Maps with a route from the guest's current GPS location to the venue (the
  browser asks for location permission). Already listed in §1 as "directions from my location".
- **Buku Tamu is fully responsive**: Mode Kamera and the dashboard also run on a phone,
  not only on a tablet or laptop.
- **Undangan Custom**: the digital invitation design can be made to match the couple's
  printed invitation motif (offered as its own package).
- Landing-page images `src/assets/mockups/16-…` and `17-…` are mockups styled like the real
  UI (no real screenshot yet). Replace them with real screenshots when available.

## Things to never claim

Unlimited guests, storage or uploads · "100% aman" / "tanpa gangguan" ·
real-time sync · offline check-in · AI / face recognition · video upload ·
any number of customers, weddings, or guests served · testimonials (none exist
yet).
