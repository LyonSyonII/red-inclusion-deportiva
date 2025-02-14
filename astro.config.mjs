// @ts-check
import { defineConfig } from 'astro/config';

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://garriga.dev",
  base: "red-inclusion-deportiva",
  integrations: [playformCompress()]
});