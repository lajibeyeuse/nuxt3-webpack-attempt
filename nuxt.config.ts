import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  builder: 'webpack',
  typescript: {
    shim: false
  },
  postcss: {
    plugins: {
      'postcss-import': {}
    }
  }
})
