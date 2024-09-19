import { resolve } from 'path';

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        profile: resolve(__dirname, 'src/profile/index.html'),
        listings: resolve(__dirname, 'src/listings/index.html'),
      },
    },
  },
  server: {
    port: 8080,
  },
};
