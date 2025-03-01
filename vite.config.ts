import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("moment")) {
            return "moment";
          }

          if (id.includes("axios")) {
            return "axios";
          }

          if (id.includes("react-router-dom") || id.includes("react-router")) {
            return "@react-router";
          }
        },
      },
    },
  },
});
