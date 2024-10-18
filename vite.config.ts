import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     "@type": resolve(__dirname, "./@type"), // Alias for type or models directory
  //     // "@components": resolve(__dirname, "src/components"), // Example for components
  //   },
  // },
});
