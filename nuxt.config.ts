// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Domine: true
    }
  },
  css: ['~/assets/css/main.css']
})