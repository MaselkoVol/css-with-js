import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { StaticScssVariables } from "./src/utils/design/static/static";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: StaticScssVariables,
      },
    },
  },
});
