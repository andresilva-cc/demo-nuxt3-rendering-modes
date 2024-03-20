// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s - Rendering Modes Demo'
    }
  },

  css: [
    '~/assets/css/app.css'
  ],

  routeRules: {
    '/': { prerender: true },
    '/csr': { ssr: false },
    '/ssr': { ssr: true },
    '/ssg': { prerender: true },
    '/isr': { isr: 10, swr: 10 }
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  }
})