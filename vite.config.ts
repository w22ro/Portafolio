import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/Portafolio/',
  build: {
    target: 'esnext',
    outDir: 'dist',
    minify: 'esbuild'
  },
  server: {
    port: 3000,
    open: true
  }
});
