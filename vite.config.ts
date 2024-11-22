import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit(), SvelteKitPWA({
    strategies: 'injectManifest',
    srcDir: 'src',
    filename: 'service-worker.ts',
    registerType: 'autoUpdate',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true
    },

    manifest: {
      name: 'pwa',
      short_name: 'pwa',
      description: 'pwa',
      theme_color: '#ffffff'
    },

    injectManifest: {
      globPatterns: ['client/**/*.{js,css,ico,png,svg,webp}']
    },

    devOptions: {
      enabled: false,
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module'
    }
  })]
})