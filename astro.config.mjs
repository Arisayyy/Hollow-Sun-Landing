import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hollowsun.ai',
  output: 'server',
  adapter: cloudflare(),
});

