# NadheWedd — Landing Page

Static marketing site for **NadheWedd by NadheStudio**. Built with Astro, Tailwind CSS v4 and TypeScript.
The original landing kit (brief, product facts, source assets) is in `kit/`.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve dist/ on http://localhost:4321
npm run qa       # layout + interaction checks (needs `npm run preview` running and Google Chrome installed)
npm run og       # regenerate public/og-image.png and apple-touch-icon.png
```

## Edit content

All copy lives in **`src/config/site.ts`**: brand, WhatsApp number and messages, demo URLs, packages, FAQ,
showcase tabs, benefits, timeline and the "Implementasi Perdana" section. Copy must match `kit/PRODUCT-FACTS.md`.

| Task | Where |
| --- | --- |
| Change a price | `packages.items[n].price` / `savings`, `packages.single`, `packages.addons` (keep `kit/PRODUCT-FACTS.md` in sync) |
| Add a demo URL | `demoUrls.undangan` / `demoUrls.bukuTamu` (empty = "Minta demo via WhatsApp") |
| Set the domain | `src/config/site-url.ts` → `SITE_URL`. This enables canonical, `og:url`, absolute OG image, `robots.txt` and `sitemap.xml` |
| After the wedding (03 Nov 2026) | `firstImplementation.status = 'done'` and fill `copyAfter` |
| Swap florals/ornaments | `src/assets/index.ts` (the only place they are imported) |

## Deploy (Cloudflare Pages)

1. Push this folder to a Git repository.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → connect the repository.
3. Framework preset **Astro**, build command `npm run build`, output directory `dist`.
   Node version is read from `.node-version`.
4. Add the custom domain, then set `SITE_URL` and redeploy.

## Before going public

- Confirm commercial licence for the florals/ornaments (`src/assets/florals`, `src/assets/ornaments`).
- Get Naubill & Dhea's OK for their illustration, monogram and invitation screenshots.
- Real NadheWedd logo (currently a text wordmark + "NW" favicon).
