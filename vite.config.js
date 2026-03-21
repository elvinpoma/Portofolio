// vite.config.js (opcional para bundling avanzado)
import { defineConfig } from 'vite'

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    minify: 'terser',
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: `js/[name].js`,
        chunkFileNames: `js/[name].js`,
        assetFileNames: `[ext]/[name].[ext]`
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    hmr: true
  }
})
