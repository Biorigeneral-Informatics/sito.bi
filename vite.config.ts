import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1", // forza IPv4 invece di IPv6
    port: 5173         // tieni la porta di default
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
