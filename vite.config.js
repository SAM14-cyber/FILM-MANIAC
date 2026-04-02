import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            external: [], // optional
        }
    },
    optimizeDeps: {
        include: ['gsap', '@studio-freight/lenis']
    }
})