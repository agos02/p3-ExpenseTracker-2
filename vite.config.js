import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // El Service Worker se actualiza solo cuando hay una versión nueva.
      registerType: 'autoUpdate',

      // Ya existe public/manifest.json: así nos aseguramos de tener uno solo.
      manifest: false,

      workbox: {
        // Archivos que se guardan en caché para funcionar sin conexión.
        globPatterns: ['**/*.{js,css,html,png,svg,json}'],

        // Cualquier ruta (por ejemplo /expenses/2) responde con index.html.
        navigateFallback: 'index.html',
      },
    }),
  ],
})