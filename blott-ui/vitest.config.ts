// vitest.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["vitest.setup.ts"], // <-- updated path

    browser: {
      enabled: true,
      headless: true,
      provider: "playwright",
      // Change this from 'name: "chromium"' to 'instances' array
      instances: [{ browser: "chromium" }], // <--- UPDATED THIS LINE
    },

    include: ["src/**/*.test.{ts,tsx}", "src/**/*.spec.{ts,tsx}"],
    exclude: [
      "node_modules",
      "dist",
      ".idea",
      ".git",
      ".cache",
      ".next",
      ".storybook",
    ],
  },
});
