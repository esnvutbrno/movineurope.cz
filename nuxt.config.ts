// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      '@nuxtjs/tailwindcss',
    '@hypernym/nuxt-anime',
    '@nuxtjs/google-fonts',
    '@zadigetvoltaire/nuxt-gtm',
  ],

  gtm: {
    id: "GTM-T8FJK9X9",
  },
})
