/**
 * Single import place for every image on the page.
 *
 * Florals and ornaments come from the NadheWedd invitation kit. Their commercial
 * licence still has to be confirmed — to swap them, replace the files (same name)
 * or change the imports below. Nothing else in the project imports these files.
 */

// Decorative artwork (licence to confirm before going public)
import floralTopLeft from './florals/floral-top-left.webp';
import floralTopRight from './florals/floral-top-right.webp';
import floralBottomLeft from './florals/floral-bottom-left.webp';
import floralBottomRight from './florals/floral-bottom-right.webp';
import goldDivider01 from './ornaments/gold-divider-01.png';
import goldDivider02 from './ornaments/gold-divider-02.png';
import goldDivider03 from './ornaments/gold-divider-03.png';

// Naubill & Dhea's own artwork — ONLY for the "Implementasi Perdana" section
import coupleHero from './illustrations/couple-hero.png';
import monogramND from './ornaments/monogram-nd.png';

// Product screenshots (real UI, fictional demo guests)
import ssSampul from './screenshots/01-undangan-sampul-mobile.png';
import ssHero from './screenshots/02-undangan-hero-mobile.png';
import ssCountdown from './screenshots/04-undangan-countdown-mobile.png';
import ssRsvpForm from './screenshots/05-undangan-rsvp-form-mobile.png';
import ssRsvpTerkirim from './screenshots/06-undangan-rsvp-terkirim-mobile.png';
import ssTombolQr from './screenshots/07-undangan-tombol-qr-mobile.png';
import ssQrPribadi from './screenshots/08-undangan-qr-pribadi-mobile.png';
import ssDashboard from './screenshots/10-dashboard-desktop.png';
import ssKameraSapaan from './screenshots/11-buku-tamu-kamera-sapaan-desktop.png';
import ssTerimaKasih from './screenshots/12-undangan-terima-kasih-checkin-mobile.png';
import ssDashboardMobile from './screenshots/13-dashboard-mobile.png';
import ssCheckinCadangan from './screenshots/14-checkin-cadangan-mobile.png';
import ssKameraMenunggu from './screenshots/15-buku-tamu-kamera-menunggu-desktop.png';

// Web Album: real UI from a local, isolated copy of the app with a fictional demo event
import ssAlbumUpload from './screenshots/18-album-upload-tersimpan-mobile.png';
import ssAlbumFrame from './screenshots/19-album-frame-studio-mobile.png';
import ssAlbumPolaroid from './screenshots/20-album-frame-polaroid-mobile.png';
import ssAlbumGaleri from './screenshots/21-album-galeri-mobile.png';
import ssAlbumPending from './screenshots/22-album-menunggu-persetujuan-mobile.png';
import ssAlbumAdmin from './screenshots/23-album-admin-desktop.png';
import ssAlbumAdminMobile from './screenshots/24-album-admin-mobile.png';

// Mockups (scripts/make-mockups.mjs) — replace with real screenshots when available
import mkLokasiGps from './mockups/16-undangan-lokasi-gps-mobile.png';
import mkKameraMobile from './mockups/17-buku-tamu-kamera-mobile.png';

export const florals = {
  topLeft: floralTopLeft,
  topRight: floralTopRight,
  bottomLeft: floralBottomLeft,
  bottomRight: floralBottomRight,
};

export const ornaments = {
  divider: goldDivider01,
  dividerAlt: goldDivider02,
  dividerSmall: goldDivider03,
};

export const couple = {
  hero: coupleHero,
  monogram: monogramND,
};

export const screenshots = {
  sampul: ssSampul,
  hero: ssHero,
  countdown: ssCountdown,
  rsvpForm: ssRsvpForm,
  rsvpTerkirim: ssRsvpTerkirim,
  tombolQr: ssTombolQr,
  qrPribadi: ssQrPribadi,
  dashboard: ssDashboard,
  kameraSapaan: ssKameraSapaan,
  terimaKasih: ssTerimaKasih,
  dashboardMobile: ssDashboardMobile,
  checkinCadangan: ssCheckinCadangan,
  kameraMenunggu: ssKameraMenunggu,
  albumUpload: ssAlbumUpload,
  albumFrame: ssAlbumFrame,
  albumPolaroid: ssAlbumPolaroid,
  albumGaleri: ssAlbumGaleri,
  albumPending: ssAlbumPending,
  albumAdmin: ssAlbumAdmin,
  albumAdminMobile: ssAlbumAdminMobile,
  lokasiGps: mkLokasiGps,
  kameraMobile: mkKameraMobile,
};
