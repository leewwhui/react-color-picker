import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: path.join(__dirname, "examples"),
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.tsx"),
      name: "src",
      fileName: (format) => `build.${format}.ts`,
    },
    outDir: path.resolve(__dirname, "dist"),
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["react"],
    },
    cssCodeSplit: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
