// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.gotodach.com',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'ru'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // Danke-Seiten nicht in die Sitemap
      filter: (page) => !/\/(danke|thanks)\/?$/.test(page),
    }),
  ]
});
