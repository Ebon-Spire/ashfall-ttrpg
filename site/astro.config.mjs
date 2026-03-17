import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ashfallrpg.com',
  base: '/',
  outDir: './dist',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
