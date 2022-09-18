import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  root: path.join(__dirname, "examples"),

  // build: {
  //   lib: {
  //     entry: path.resolve(__dirname, "./src/index.tsx"),
  //     name: "src",
  //     fileName: (format) => `build.${format}.js`,
  //   },
  //   outDir: path.resolve(__dirname, "dist"),
  //   rollupOptions: {
  //     // 确保外部化处理那些你不想打包进库的依赖
  //     external: ["react", "react-dom"],
  //     output: {
  //       globals: {
  //         react: "react",
  //         "react-dom": "react-dom",
  //       },
  //     },
  //   },
  // },
  plugins: [
    react(),
    // typescript({
    //   target: "es5",
    //   rootDir: path.resolve(__dirname, "src"),
    //   declaration: true,
    //   declarationDir: path.resolve(__dirname, "dist"),
    //   exclude: path.resolve("node_modules/**"),
    //   allowSyntheticDefaultImports: true,
    // }),
  ],
});
