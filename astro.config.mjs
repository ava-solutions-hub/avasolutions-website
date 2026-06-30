import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://avasolutions.us',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
});
