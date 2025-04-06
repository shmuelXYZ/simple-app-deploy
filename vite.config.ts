import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  base: "/emploee-app/", // Replace with your repo name
});
