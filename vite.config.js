import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { b } from "framer-motion/client";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["fsevents"]
  }
});
