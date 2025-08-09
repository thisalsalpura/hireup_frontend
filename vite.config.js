import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  optimizeDeps: {
    include: [
      '@amcharts/amcharts5',
      '@amcharts/amcharts5/xy',
      '@amcharts/amcharts5/themes/Animated'
    ]
  },
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['6c75744898bc.ngrok-free.app']
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_debugger: true,
        drop_console: true,
      },
    },
  },
})
