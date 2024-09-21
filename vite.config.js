import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, '../dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        profile: resolve(__dirname, 'src/profile/index.html'),
        listings: resolve(__dirname, 'src/listings/index.html'),
      },
    },
  },
  server: {
    port: 8080,
  },
});
