import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `base: "./"` keeps asset URLs relative, so the same build works on both
// Vercel (domain root) and GitHub Pages (repository sub-path).
export default defineConfig({
  plugins: [react()],
  base: "./",
});
