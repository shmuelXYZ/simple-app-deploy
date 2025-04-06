import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  base: "/simple-app-deploy/", // Replace with your repo name
});
