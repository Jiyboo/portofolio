import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("three")) return "vendor-three";
            if (id.includes("@react-three")) return "vendor-r3f";
            if (id.includes("framer-motion")) return "vendor-framer";
            if (id.includes("react-router-dom") || id.includes("react-router")) return "vendor-router";
            return "vendor";
          }
        },
      },
    },
  },
});