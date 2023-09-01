import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

const manifestForPlugin = {
    registerType: "prompt",
    manifest: {
        name: "QuoteHub",
        short_name: "quote-hub",
        description: "A quote generation PWA",
        icons: [{
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable any"
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable any"
            },
            {
                src: "/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
                purpose: "maskable any"
            },
            {
                src: "/quote.png",
                sizes: "256x256",
                type: "image/png",
                purpose: "maskable any"
            },
        ],
        theme_color: "#171717",
        background_color: "#e8ebf2",
        display: "standalone",
        scope: "/",
        start_url: "./index.html",
        orientation: "portrait",
    },
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), VitePWA(manifestForPlugin)],
    build: {
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
})
