import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/task-4/", // Replace with your GitHub repository name
  rollupOptions: {
    input: {
      main: resolve(__dirname, "index.html"),
      dashboard: resolve(__dirname, "dashboard.html"),
    },
  },
  plugins: [react()],
});
