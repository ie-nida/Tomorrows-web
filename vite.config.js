import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/osu-api': {
        target: 'https://osu.ppy.sh',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/osu-api/, ''),
      },
      '/api': {
        target: 'http://localhost:10000',
        changeOrigin: true,
      }
    },
  },
});
