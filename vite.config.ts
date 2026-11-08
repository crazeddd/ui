import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [solid(), dts({ include: ["src/lib"] })],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index",
      cssFileName: "styles",
    },
    rollupOptions: {
      external: ["solid-js", "solid-js/web"],
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.name === "style.css"
            ? "styles.css"
            : (assetInfo.name ?? "asset"),
      },
    },
  },
});
