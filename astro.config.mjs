import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import { astroImageTools } from 'astro-imagetools';
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress(), astroImageTools],
});
