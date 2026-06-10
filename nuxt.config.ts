// https://nuxt.com/docs/api/configuration/nuxt-config
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
