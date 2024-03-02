import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["images-1", "images-2"],
  plugins: [vue()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": "/src",
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@icons": "/src/components/icons",
      "@data": "/src/data",
      "@composables": "/src/composables",
    },
  },
});
