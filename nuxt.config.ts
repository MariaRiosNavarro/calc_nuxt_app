import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],

  nitro: {
    preset: 'netlify'
  },

  ssr: true,
  generate: {
    fallback: true
  }
})