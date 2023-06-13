import alias from "@rollup/plugin-alias";
import vue from "@vitejs/plugin-vue";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const _dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      "@assets": resolve(_dirname, "./src/assets"),
      "@constants": resolve(_dirname, "./src/constants"),
      "@utils": resolve(_dirname, "./src/utils"),
      "@router": resolve(_dirname, "./src/router"),
      "@Components": resolve(_dirname, "./src/components"),
    },
  },
  plugins: [alias(), vue()],
});
