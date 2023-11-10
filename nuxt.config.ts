// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/app.css'
  ],

  routeRules: {
    '/': { prerender: true },
    '/csr': { ssr: false },
    '/ssr': { ssr: true },
    '/ssg': { prerender: true },
    '/isr': { swr: 10 }
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  }
})