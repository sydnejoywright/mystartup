import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4001', // Proxy for API requests
        changeOrigin: true,
      },
      '/ws': {
        target: 'ws://localhost:4001', // Proxy WebSocket requests
        ws: true, // Enable WebSocket proxying
      },
    },
  },
});
