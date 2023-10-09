// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@hypernym/nuxt-anime', '@nuxtjs/google-fonts'],

  googleFonts: {
    preload: true,
    families: {
      "DM Sans": true,
      "Inter": true,
    }
  }
})
