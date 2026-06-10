import { useRuntimeConfig } from "nuxt/app"

// https://nuxt.com/docs/api/configuration/nuxt-config'
const config = useRuntimeConfig()

// Gunakan nilainya untuk koneksi Redis
const redisUrl = config.redisUrl
const redisToken = config.redisToken
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    devStorage: {
      // Saat posisi development (lokal), pakai memori komputer saja
      cache: {
        driver: 'memory'
      }
    },
    // Saat production (Netlify), gunakan Redis
    storage: {
      cache: {
        driver: 'upstash',
        url: process.env.REDIS_URL ,// Simpan URL Redis kamu di Environment Variables Netlify
        token: process.env.REDIS_TOKEN
      }
    }
  }

})
