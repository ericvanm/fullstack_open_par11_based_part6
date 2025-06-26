import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      "fullstack-open-par11-based-part6.onrender.com",
      "localhost",
    ],
  },
});
