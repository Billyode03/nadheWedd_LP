/**
 * NadheWedd landing page — all editable content lives here.
 *
 * Every claim must match kit/PRODUCT-FACTS.md. Undangan, Buku Tamu, Web Album & Frame Studio
 * are all available; prices live in `packages` below (per acara).
 * Domain: see ./site-url.ts.
 */
import type { ImageMetadata } from 'astro';
import { screenshots, couple } from '../assets';

export { SITE_URL } from './site-url';

export const brand = {
  name: 'NadheWedd',
  parent: 'NadheStudio',
  parentUrl: 'https://nadhestudio.id/',
  tagline: 'Digital Wedding Experience',
  coreMessage: 'Semua Momen Pernikahan, Terhubung dalam Satu Pengalaman Digital.',
  supporting:
    'Dari undangan pertama hingga kenangan terakhir, NadheWedd membantu menghadirkan pengalaman pernikahan yang lebih praktis, elegan, dan berkesan.',
};

export const seo = {
  title: 'NadheWedd — Undangan Digital, Buku Tamu QR & Wedding Album',
  description:
    'NadheWedd menghadirkan undangan digital, buku tamu QR Code, dan album foto pernikahan dalam satu pengalaman digital yang elegan.',
  ogImage: '/og-image.png',
};

/* ------------------------------------------------------------------ WhatsApp */

export const whatsapp = {
  /** International format without "+" (0852 1513 7709). */
  number: '6285215137709',
  display: '0852 1513 7709',
  defaultMessage:
    'Halo NadheWedd, saya tertarik dengan layanan digital wedding. Boleh minta informasi paket dan cara pemesanannya?',
  /** Appended to the default message by package CTAs. */
  packageMessage: (packageName: string) => `Paket yang saya minati: ${packageName}.`,
  demoMessage: (product: string) =>
    `Halo NadheWedd, saya ingin melihat demo ${product}. Boleh dikirimkan contohnya?`,
};

/* ---------------------------------------------------------------- Demo URLs */

/** Public demo deployments. Empty = demo buttons are hidden (WhatsApp CTA instead). */
export const demoUrls = {
  undangan: '',
  bukuTamu: '',
  album: '',
};

/* -------------------------------------------------------------- Navigation */

export const nav = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Fitur', href: '#fitur' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'Demo', href: '#demo' },
  { label: 'Harga', href: '#paket' },
  { label: 'FAQ', href: '#faq' },
];

export const footerNav = nav;

/* -------------------------------------------------------------------- Hero */

export const hero = {
  eyebrow: 'Your Digital Wedding Experience',
  title: 'Satu Platform untuk Momen Pernikahan yang Berkesan',
  copy: 'Undangan digital yang elegan, buku tamu otomatis dengan QR Code, dan album foto bersama — semuanya terhubung untuk hari istimewa Anda.',
  primaryCta: { label: 'Lihat Cara Kerja', href: '#cara-kerja' },
  whatsappCta: 'Konsultasi via WhatsApp',
};

/* -------------------------------------------------------- Product overview */

export type Product = {
  id: string;
  name: string;
  features: string[];
  benefit: string;
  /** Without `src` a clearly labelled "Screenshot menyusul" placeholder is shown. */
  images: { src?: ImageMetadata; alt: string; device: 'phone' | 'laptop' }[];
};

export const productOverview = {
  eyebrow: 'Fitur NadheWedd',
  title: 'Lebih dari Sekadar Undangan Digital',
  intro: brand.supporting,
  products: [
    {
      id: 'undangan',
      name: 'Undangan Digital',
      features: [
        'Link personal dengan nama tamu',
        'Detail acara & hitung mundur',
        'Petunjuk arah otomatis dari lokasi tamu (GPS) ke lokasi acara',
        'Konfirmasi kehadiran (RSVP)',
        'Buku ucapan',
        'Amplop digital (transfer & QRIS)',
        'QR pribadi untuk check-in',
        'Desain bisa disesuaikan dengan motif undangan cetak',
      ],
      benefit: 'Undangan yang personal, praktis, dan berkesan sejak pertama dibuka.',
      images: [
        { src: screenshots.sampul, alt: 'Sampul undangan digital dengan nama tamu', device: 'phone' },
        { src: screenshots.hero, alt: 'Halaman pembuka undangan digital', device: 'phone' },
        { src: screenshots.rsvpForm, alt: 'Formulir konfirmasi kehadiran (RSVP)', device: 'phone' },
      ],
    },
    {
      id: 'buku-tamu',
      name: 'Buku Tamu Digital',
      features: [
        'QR dari undangan, dipindai kamera di meja penerima tamu',
        'Check-in langsung, tanpa menekan tombol',
        'Sapaan dengan nama tamu',
        'Bisa dijalankan di HP, tablet, atau laptop',
        'Dashboard panitia',
        'Check-in cadangan untuk tamu tanpa link undangan',
        'Ekspor data kehadiran',
      ],
      benefit: 'Penerimaan tamu lebih cepat, tertata, dan mudah dipantau.',
      images: [
        { src: screenshots.kameraSapaan, alt: 'Mode Kamera buku tamu menyapa tamu dengan namanya', device: 'laptop' },
        { src: screenshots.dashboard, alt: 'Dashboard panitia dengan daftar tamu yang sudah datang', device: 'laptop' },
        { src: screenshots.terimaKasih, alt: 'Ponsel tamu menampilkan konfirmasi check-in', device: 'phone' },
      ],
    },
    {
      id: 'album',
      name: 'Web Album & Frame Studio',
      features: [
        'Tamu memindai QR album di lokasi acara, tanpa install aplikasi dan tanpa login',
        'Upload foto langsung dari HP, hingga 10 foto sekali pilih',
        'Foto dikompres otomatis dan data lokasi (GPS) di foto dihapus',
        'Galeri bersama: semua tamu bisa melihat dan mengunduh foto',
        'Frame Studio: 6 bingkai eksklusif dengan nama pengantin dan tanggal',
        'Dashboard panitia: buka/tutup upload dan persetujuan foto',
      ],
      benefit: 'Momen dari sudut pandang setiap tamu, terkumpul dalam satu galeri.',
      images: [
        { src: screenshots.albumFrame, alt: 'Frame Studio dengan bingkai Floral Classic, nama pengantin dan tanggal', device: 'phone' },
        { src: screenshots.albumUpload, alt: 'Status upload: foto tersimpan di album', device: 'phone' },
        { src: screenshots.albumGaleri, alt: 'Galeri bersama Web Album', device: 'phone' },
      ],
    },
  ] satisfies Product[] as Product[],
};

/* ------------------------------------------------------------ How it works */

export const howItWorks = {
  eyebrow: 'Cara Kerja',
  title: 'Sederhana untuk Tamu, Praktis untuk Penyelenggara',
  steps: [
    {
      title: 'Kirim undangan personal lewat WhatsApp',
      text: 'Setiap tamu menerima link dengan namanya sendiri, dikirim dari WhatsApp Anda.',
      soon: false,
    },
    {
      title: 'Tamu konfirmasi kehadiran (RSVP) sebelum hari H',
      text: 'Tamu memilih hadir, tidak hadir, atau masih ragu, lengkap dengan jumlah orang.',
      soon: false,
    },
    {
      title: 'Di hari H, panitia membuka check-in',
      text: 'Satu tombol di dashboard memunculkan tombol Check-in dan QR pribadi di setiap undangan.',
      soon: false,
    },
    {
      title: 'Tamu menunjukkan QR ke kamera Buku Tamu',
      text: 'Langsung tercatat tanpa menekan tombol, dan tamu disambut dengan namanya.',
      soon: false,
    },
    {
      title: 'Panitia memantau kehadiran dari dashboard',
      text: 'Lihat siapa yang sudah datang dan yang belum, langsung dari layar panitia.',
      soon: false,
    },
    {
      title: 'Tamu berbagi foto ke album acara',
      text: 'Tamu memindai QR album di lokasi acara, lalu mengunggah foto langsung dari HP ke galeri bersama.',
      soon: false,
    },
  ],
};

/* --------------------------------------------------------------- Showcase */

export type ShowcaseSlide = {
  /** Without `src` a clearly labelled "Screenshot menyusul" placeholder is shown. */
  src?: ImageMetadata;
  alt: string;
  caption: string;
  device: 'phone' | 'laptop';
};

export type ShowcaseTab = {
  id: string;
  label: string;
  title: string;
  text: string;
  highlights: string[];
  /** Small chips under the highlights (e.g. Frame Studio frame names). */
  chips?: { title: string; items: string[] };
  slides: ShowcaseSlide[];
  /** Key into demoUrls; empty URL = WhatsApp "Minta demo" CTA. */
  demo?: keyof typeof demoUrls;
  demoLabel?: string;
};

export const showcase = {
  eyebrow: 'Demo',
  title: 'Lihat Bagaimana NadheWedd Bekerja',
  intro: 'Tampilan NadheWedd dengan data tamu contoh.',
  tabs: [
    {
      id: 'undangan',
      label: 'Undangan',
      title: 'Undangan yang menyapa setiap tamu',
      text: 'Setiap tamu membuka undangan dengan namanya sendiri. Semua informasi acara, konfirmasi kehadiran, ucapan, dan QR check-in ada dalam satu link.',
      highlights: [
        'Sampul dengan nama tamu',
        'Hitung mundur menuju hari H',
        'Petunjuk arah otomatis dari lokasi tamu saat ini ke lokasi acara',
        'RSVP sekali kirim, lalu tampil balasan sesuai jawaban',
        'QR pribadi muncul saat check-in dibuka',
      ],
      slides: [
        { src: screenshots.sampul, alt: 'Sampul undangan dengan nama tamu', caption: 'Sampul personal', device: 'phone' },
        { src: screenshots.countdown, alt: 'Hitung mundur menuju hari pernikahan', caption: 'Hitung mundur', device: 'phone' },
        { src: screenshots.lokasiGps, alt: 'Lokasi acara dengan petunjuk arah dari lokasi tamu saat ini', caption: 'Petunjuk arah dari GPS', device: 'phone' },
        { src: screenshots.rsvpForm, alt: 'Formulir RSVP', caption: 'Konfirmasi kehadiran', device: 'phone' },
        { src: screenshots.rsvpTerkirim, alt: 'Balasan setelah RSVP terkirim', caption: 'RSVP terkirim', device: 'phone' },
        { src: screenshots.tombolQr, alt: 'Tombol untuk menampilkan QR check-in', caption: 'Tombol QR check-in', device: 'phone' },
        { src: screenshots.qrPribadi, alt: 'QR check-in pribadi tamu', caption: 'QR pribadi', device: 'phone' },
      ],
      demo: 'undangan',
      demoLabel: 'Lihat Demo Undangan',
    },
    {
      id: 'buku-tamu',
      label: 'Buku Tamu',
      title: 'Penerimaan tamu tanpa antre menulis',
      text: 'HP, tablet, atau laptop di meja penerima tamu membuka Mode Kamera. Tamu cukup menunjukkan QR dari undangannya, dan kehadirannya langsung tercatat.',
      highlights: [
        'Check-in langsung, tanpa menekan tombol',
        'Layar menyambut tamu dengan namanya',
        'Full responsive: jalan di HP, tablet, maupun laptop',
        'Ponsel tamu berubah menjadi “Terima Kasih Sudah Check-in”',
        'Check-in cadangan dan pencatatan manual oleh panitia',
        'Dashboard panitia dengan ekspor data kehadiran',
      ],
      slides: [
        { src: screenshots.kameraSapaan, alt: 'Mode Kamera menyapa tamu dengan namanya', caption: 'Tamu disambut dengan namanya', device: 'laptop' },
        { src: screenshots.kameraMobile, alt: 'Mode Kamera di HP memindai QR tamu', caption: 'Scan QR dari HP', device: 'phone' },
        { src: screenshots.kameraMenunggu, alt: 'Mode Kamera siap memindai QR berikutnya', caption: 'Mode Kamera siap memindai', device: 'laptop' },
        { src: screenshots.terimaKasih, alt: 'Ponsel tamu setelah check-in berhasil', caption: 'Konfirmasi di ponsel tamu', device: 'phone' },
        { src: screenshots.dashboard, alt: 'Dashboard panitia di laptop', caption: 'Dashboard panitia', device: 'laptop' },
        { src: screenshots.dashboardMobile, alt: 'Dashboard panitia di ponsel', caption: 'Dashboard di ponsel', device: 'phone' },
        { src: screenshots.checkinCadangan, alt: 'Halaman check-in cadangan', caption: 'Check-in cadangan', device: 'phone' },
      ],
      demo: 'bukuTamu',
      demoLabel: 'Lihat Demo Buku Tamu',
    },
    {
      id: 'album',
      label: 'Album',
      title: 'Foto dari setiap tamu, dalam satu album',
      text: 'Tamu memindai QR album di lokasi acara, lalu mengunggah foto langsung dari HP — tanpa install aplikasi dan tanpa login. Lewat Frame Studio, foto bisa diberi bingkai lengkap dengan nama pengantin dan tanggal.',
      highlights: [
        'Upload hingga 10 foto sekali pilih; foto dikompres otomatis dan data lokasi (GPS) dihapus',
        'Status “Tersimpan” baru muncul setelah foto benar-benar tersimpan di server',
        'Sinyal putus? Tamu bisa cek ulang tanpa foto dobel',
        'Galeri bersama: semua tamu bisa melihat dan mengunduh foto',
        'Frame Studio: geser dan zoom foto, nama pengantin dan tanggal tampil dengan font undangan; hasil 1080×1350 dikirim ke album atau disimpan ke HP',
        'Dashboard panitia: buka/tutup upload, sembunyikan galeri, mode persetujuan, sembunyikan atau hapus foto, statistik, dan QR album siap cetak untuk X-banner',
        'Batas upload per perangkat untuk mencegah spam; foto disimpan privat dan hanya foto yang disetujui yang tampil',
      ],
      chips: {
        title: 'NadheWedd Signature Collection Vol. 01',
        items: ['Floral Classic', 'Minimal Elegant', 'Modern Arch', 'Botanical Corner', 'Polaroid Style', 'Elegant Frame', 'Tanpa Frame'],
      },
      slides: [
        { src: screenshots.albumUpload, alt: 'Status upload: setiap foto tersimpan di album', caption: 'Upload & status “Tersimpan”', device: 'phone' },
        { src: screenshots.albumFrame, alt: 'Frame Studio dengan bingkai Floral Classic', caption: 'Frame Studio: Floral Classic', device: 'phone' },
        { src: screenshots.albumPolaroid, alt: 'Frame Studio dengan bingkai Polaroid Style', caption: 'Frame Studio: Polaroid Style', device: 'phone' },
        { src: screenshots.albumGaleri, alt: 'Galeri bersama berisi foto dari tamu', caption: 'Galeri bersama', device: 'phone' },
        { src: screenshots.albumPending, alt: 'Foto terkirim dan menunggu persetujuan panitia', caption: 'Mode persetujuan', device: 'phone' },
        { src: screenshots.albumAdmin, alt: 'Dashboard admin album: statistik, pengaturan, QR album, dan moderasi foto', caption: 'Dashboard panitia album', device: 'laptop' },
        { src: screenshots.albumAdminMobile, alt: 'Dashboard admin album di HP', caption: 'Dashboard album di HP', device: 'phone' },
      ],
      demo: 'album',
      demoLabel: 'Lihat Demo Album',
    },
  ] satisfies ShowcaseTab[] as ShowcaseTab[],
};

/* ---------------------------------------------------------------- Benefits */

export const benefits = {
  eyebrow: 'Keunggulan',
  title: 'Dirancang untuk Hari yang Tak Terlupakan',
  items: [
    {
      icon: 'link',
      title: 'Satu pengalaman yang terhubung',
      text: 'Dari undangan, check-in QR di hari H, sampai album foto tamu — satu rangkaian. Jumlah tamu dari RSVP langsung terbawa saat check-in.',
    },
    {
      icon: 'phone',
      title: 'Tamu tidak perlu instal aplikasi',
      text: 'Semua berjalan di browser ponsel. Tamu cukup membuka undangan dari WhatsApp.',
    },
    {
      icon: 'queue',
      title: 'Antrean penerimaan tamu lebih singkat',
      text: 'Tamu cukup menunjukkan QR ke kamera, tanpa perlu menulis di buku tamu.',
    },
    {
      icon: 'list',
      title: 'Kehadiran tercatat rapi dan bisa diekspor',
      text: 'Panitia melihat siapa yang sudah datang dan bisa mengunduh datanya untuk dibuka di Excel atau Google Sheets.',
    },
    {
      icon: 'sparkle',
      title: 'Tampilan elegan, nyaman di ponsel',
      text: 'Desain bernuansa undangan cetak yang dirancang untuk layar ponsel.',
    },
    {
      icon: 'hand',
      title: 'Dikerjakan langsung oleh NadheStudio',
      text: 'Tim NadheStudio menyiapkan undangan dan buku tamu untuk acara Anda, jadi Anda tidak perlu mengatur sistemnya sendiri.',
    },
  ],
};

/* ---------------------------------------------------- First implementation */

export const firstImplementation = {
  eyebrow: 'Implementasi Perdana',
  title: 'The Wedding of Naubill & Dhea',
  date: '03 November 2026',
  /** 'upcoming' shows copyBefore; switch to 'done' after the event and fill copyAfter. */
  status: 'upcoming' as 'upcoming' | 'done',
  copyBefore: 'Implementasi perdana NadheWedd — 03 November 2026.',
  copyAfter: '',
  illustration: { src: couple.hero, alt: 'Ilustrasi pasangan Naubill & Dhea' },
  screenshots: [
    { src: screenshots.sampul, alt: 'Sampul undangan Naubill & Dhea dengan nama tamu contoh', device: 'phone' as const },
    { src: screenshots.dashboard, alt: 'Dashboard buku tamu Naubill & Dhea dengan data tamu contoh', device: 'laptop' as const },
  ],
};

/* ---------------------------------------------------------- Paket & Harga */

export type Package = {
  name: string;
  /** Display price, e.g. 'Rp 1.199.000'. */
  price: string;
  /** "Semua isi …" line shown before the items. */
  includes?: string;
  items: string[];
  savings?: string;
  badge?: string;
  featured?: boolean;
};

export const packages = {
  eyebrow: 'Paket & Harga',
  title: 'Pilih Pengalaman yang Sesuai untuk Hari Istimewa Anda',
  intro: 'Harga per acara. Pilih paket, lalu konsultasikan detailnya bersama kami lewat WhatsApp.',
  priceUnit: '/ acara',
  ctaLabel: 'Pesan Paket Ini',
  items: [
    {
      name: 'Essential',
      price: 'Rp 399.000',
      items: [
        'Undangan Digital Premium',
        'Nama tamu di setiap link',
        'RSVP & ucapan',
        'Amplop digital & QRIS',
        'Musik',
        'Galeri',
        'Peta lokasi',
        'Countdown',
      ],
    },
    {
      name: 'Elegant',
      price: 'Rp 1.199.000',
      includes: 'Semua isi Essential',
      items: [
        'Buku Tamu Digital',
        'QR check-in pribadi di undangan',
        'Check-in lewat kamera tablet',
        'Dashboard panitia & rekap kehadiran',
      ],
      savings: 'Hemat ± Rp 200.000',
    },
    {
      name: 'Signature',
      price: 'Rp 1.449.000',
      includes: 'Semua isi Elegant',
      items: ['Web Album Foto Tamu', 'Frame Studio (6 bingkai)', 'Moderasi foto oleh panitia'],
      savings: 'Hemat ± Rp 350.000',
      badge: 'Paling Lengkap',
      featured: true,
    },
    {
      name: 'Signature Plus',
      price: 'Rp 2.699.000',
      includes: 'Semua isi Signature',
      items: [
        'Operator check-in di lokasi',
        'Tablet & stand',
        'Cetak 2 X-banner (QR check-in & QR album)',
        'Frame custom sesuai tema',
      ],
    },
  ] satisfies Package[] as Package[],
  single: {
    title: 'Layanan Satuan',
    items: [
      { name: 'Undangan Basic', price: 'Rp 149.000' },
      { name: 'Undangan Premium', price: 'Rp 349.000–499.000' },
      { name: 'Buku Tamu Digital', price: 'Rp 799.000–1.500.000' },
      { name: 'Web Album', price: 'Rp 149.000–249.000' },
      { name: 'Frame Studio (tambahan Web Album)', price: '+ Rp 75.000' },
    ],
  },
  addons: {
    title: 'Add-on',
    items: [
      { name: 'Domain sendiri', price: 'Rp 150.000/tahun' },
      { name: 'Bantuan kirim undangan WhatsApp', price: 'Rp 100.000/100 tamu' },
      { name: 'Perpanjangan album', price: 'Rp 100.000/bulan' },
      { name: 'Frame custom', price: 'Rp 250.000' },
      { name: 'Revisi tambahan', price: 'Rp 50.000' },
      { name: 'Cetak X-banner QR', price: 'Rp 150.000/pcs' },
    ],
  },
  notes: [
    'Harga per acara (akad dan resepsi di hari yang sama dihitung 1 acara).',
    'Undangan aktif sampai 3 bulan setelah acara; album aktif 1 bulan dan bisa diperpanjang.',
    'Sudah termasuk 2x revisi.',
    'Musik bebas royalti atau pilihan klien.',
    'Data tamu dan foto dihapus setelah masa aktif berakhir.',
    'Transport operator untuk acara di luar kota menyesuaikan.',
  ],
};

/* --------------------------------------------------------------------- FAQ */

export const faq = {
  eyebrow: 'FAQ',
  title: 'Pertanyaan yang Sering Diajukan',
  items: [
    {
      q: 'Apa itu NadheWedd?',
      a: 'NadheWedd adalah layanan pernikahan digital dari NadheStudio. NadheWedd menghubungkan undangan digital, buku tamu digital dengan QR Code, dan Web Album untuk foto dari para tamu. Tim NadheStudio menyiapkan semuanya untuk acara Anda.',
    },
    {
      q: 'Apakah NadheWedd hanya undangan digital?',
      a: 'Tidak. Selain undangan digital, NadheWedd memiliki Buku Tamu Digital untuk check-in dengan QR Code beserta dashboard panitia, serta Web Album dan Frame Studio agar tamu bisa berbagi foto dari HP.',
    },
    {
      q: 'Bagaimana buku tamu digital bekerja?',
      a: 'Di hari H, panitia membuka check-in dari dashboard, lalu setiap undangan menampilkan QR pribadi. HP, tablet, atau laptop di meja penerima tamu membuka Mode Kamera. Tamu menunjukkan QR-nya, kehadirannya langsung tercatat tanpa menekan tombol, dan layar menyambutnya dengan nama. Jumlah orang diambil dari RSVP dan bisa dikoreksi oleh panitia.',
    },
    {
      q: 'Apakah tamu perlu mengunduh aplikasi?',
      a: 'Tidak. Undangan, QR, dan check-in berjalan langsung di browser ponsel tamu.',
    },
    {
      q: 'Apakah tamu bisa langsung diarahkan ke lokasi acara?',
      a: 'Bisa. Di bagian lokasi undangan, tamu cukup mengetuk tombol petunjuk arah. Google Maps langsung menunjukkan rute dari lokasi tamu saat ini (GPS) ke lokasi acara. Tamu perlu mengizinkan akses lokasi saat diminta browser.',
    },
    {
      q: 'Apakah desain undangan bisa disesuaikan dengan undangan cetak?',
      a: 'Bisa. Desain undangan digital dapat dibuat mengikuti motif undangan cetak Anda, sehingga tampilannya selaras. Hubungi kami untuk membahas desainnya.',
    },
    {
      q: 'Bagaimana jika tamu tidak bisa membuka undangannya?',
      a: 'Ada dua cara cadangan. Tamu dapat memindai QR umum di banner untuk membuka halaman check-in, lalu memverifikasi dengan nama dan 4 digit terakhir nomor WhatsApp-nya. Panitia juga dapat mencatat kehadiran tamu secara manual dari dashboard.',
    },
    {
      q: 'Apakah butuh koneksi internet di lokasi acara?',
      a: 'Ya. Buku tamu digital membutuhkan koneksi internet di lokasi acara, jadi pastikan meja penerima tamu memiliki koneksi yang stabil.',
    },
    {
      q: 'Bagaimana tamu mengirim foto ke album?',
      a: 'Tamu memindai QR album di lokasi acara, lalu memilih hingga 10 foto sekaligus dari HP — tanpa install aplikasi dan tanpa login. Status “Tersimpan” baru muncul setelah foto benar-benar tersimpan. Panitia dapat memakai mode persetujuan, sehingga hanya foto yang disetujui yang tampil di galeri.',
    },
    {
      q: 'Apakah fitur bisa dipesan terpisah?',
      a: 'Bisa. Undangan, Buku Tamu Digital, dan Web Album tersedia sebagai layanan satuan — harganya ada di bagian Paket & Harga. Memesan dalam paket umumnya lebih hemat.',
    },
    {
      q: 'Bagaimana cara memesan?',
      a: 'Hubungi kami lewat WhatsApp untuk konsultasi gratis. Tim NadheStudio akan menjelaskan paket yang sesuai, lalu menyiapkan undangan dan buku tamu untuk acara Anda.',
    },
  ],
};

/* --------------------------------------------------------------- Final CTA */

export const finalCta = {
  title: 'Wujudkan Pengalaman Pernikahan yang Lebih Berkesan',
  copy: 'Mulai dari undangan hingga kenangan, NadheWedd hadir membantu merangkai setiap momen istimewa Anda.',
  cta: 'Konsultasikan Pernikahan Anda',
};
