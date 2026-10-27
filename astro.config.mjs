// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './src/config/site-url.ts';

export default defineConfig({
  site: SITE_URL || undefined,
  output: 'static',
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
});
