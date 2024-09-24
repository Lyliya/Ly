import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts(),
    cssInjectedByJsPlugin({ relativeCSSInjection: true }),
  ],
  build: {
    cssCodeSplit: true,
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Ly",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        inlineDynamicImports: false,
        chunkFileNames: "chunks/[name].[hash].js",
        assetFileNames: "assets/[name][extname]",
        preserveModules: true,
        entryFileNames: "[name].js",
        globals: {
          vue: "Vue",
        },
        exports: "named",
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
