import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Dev proxy — forwards /api/* requests to the Express server
  // so you don't hit CORS issues during development.
  // In production, point VITE_API_URL to your live server URL instead.
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
          swiper: ["swiper"],
        },
      },
    },
  },
});
