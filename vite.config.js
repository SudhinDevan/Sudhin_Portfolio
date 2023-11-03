import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Sudhin_Portfolio/",
  plugins: [react()],
  // server: {
  //   host: true,
  // },
});
