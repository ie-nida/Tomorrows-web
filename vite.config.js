import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { Agent } from 'https';

// ⚠️ This import will fail unless you created this plugin manually
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/osu-api': {
        target: 'https://osu.ppy.sh',
        changeOrigin: true,
        secure: false,
        agent: new Agent({ keepAlive: true }),
        rewrite: (path) => path.replace(/^\/osu-api/, ''),
      },
    },
  },
});

