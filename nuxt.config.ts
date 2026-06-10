
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    redisUrl: process.env.REDIS_URL,
    redisToken: process.env.REDIS_TOKEN
  },
  nitro: {
    preset: process.env.NITRO_PRESET || (process.env.NETLIFY ? 'netlify' : 'cloudflare-pages'),
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
