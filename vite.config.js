import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      output: {
        // keep the heavy 3D stack out of the entry chunk so text paints first
        manualChunks: {
          three: ["three"],
        },
      },
    },
  },
});
