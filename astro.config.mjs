// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config

export default defineConfig({
  // integrations: [tailwind()],
  image: {
    domains: ["astro.build", "localhost:8882"],
    remotePatterns: [{ protocol: "http" }],
  },

  vite: {
    plugins: [tailwindcss()]
  }
});