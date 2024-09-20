import { resolve } from 'path';

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        profile: resolve(__dirname, 'profile/index.html'),
        listings: resolve(__dirname, 'listings/index.html'),
      },
    },
  },
  server: {
    port: 8080,
  },
};
