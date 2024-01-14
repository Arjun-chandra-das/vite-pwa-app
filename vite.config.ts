import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA, ManifestOptions } from 'vite-plugin-pwa';

const manifestForPlugin: Partial<typeof VitePWA> = {
  registerType: "prompt",
  includeAssets: ['favicon.ico', "apple-touch-icon.png", "masked-icon.png" ],
  manifest: {
    name: "PWA app",
    short_name: "PWA app",
    description: "this app is demo app",
    icons: [
      {
        src: "./icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "./icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: 'favicon'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'apple-touch-icon',
      },
      {
        src: "./icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "./icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "icon"
      },
      {
        src: "./icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "any maskable"
      }
    ],
    theme_color: "#181818",
    background_color: "#e8eac2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait" as ManifestOptions['orientation'], // Ensure it matches the allowed values
  },
};

// https://vitejs.dev/config/
const config: defineConfig = {
  plugins: [react(), VitePWA(manifestForPlugin)],
};

export default config;
