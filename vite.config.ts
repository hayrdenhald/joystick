import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/joystick/",
  plugins: [
    // NOTE: '@tanstack/router-plugin' needs to come before '@vitejs/plugin-react'
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
  ],
});
