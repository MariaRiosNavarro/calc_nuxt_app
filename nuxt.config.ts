import { defineNuxtConfig } from "nuxt/config";
// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  nitro: {
    preset: "netlify-legacy",
  },
});
