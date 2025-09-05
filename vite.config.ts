import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",          // dev server
    port: 8080,
  },
  preview: {
    host: true,          // bind 0.0.0.0 for Render
    port: 8080,
    allowedHosts: ["xmedical.onrender.com"], // allow Render domain
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});