import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ['gsap']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['gsap', '@studio-freight/lenis']
  }
})