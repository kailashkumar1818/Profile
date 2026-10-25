import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base path is root '/' for Vercel and modern hostings.
// Set BASE_URL environment variable if deploying to a subfolder (e.g. GitHub Pages).
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_URL || "/",
});
