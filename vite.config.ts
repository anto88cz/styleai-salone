import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      includeAssets: ["icon-192.png", "icon-512.png", "offline.html"],
      manifest: {
        name: process.env.VITE_APP_NAME ?? "StyleAI Salone",
        short_name: "StyleAI",
        description: "Consulenza AI per il tuo stile capelli",
        theme_color: "#8B5CF6",
        background_color: "#F8FAFC",
        display: "standalone",
        icons: [
          { src: "icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icon-512.png", sizes: "512x512", type: "image/png" },
        ],
      },
      workbox: {
        navigateFallback: "/offline.html",
      },
    }),
  ],
  build: {
    target: "modules",
    minify: true,
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});