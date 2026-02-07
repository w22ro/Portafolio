import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    outDir: 'build',
    minify: 'esbuild'
  },
  server: {
    port: 3000,
    open: true
  }
});
