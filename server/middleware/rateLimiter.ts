// server/middleware/rateLimiter.ts

const MAX_REQUESTS = 90 
const WINDOW_MS = 60 * 1000 

export default defineEventHandler(async (event) => {
  const req = event.node.req

  // Hanya jalankan rate limiter jika request mengarah ke endpoint /api
  if (req.url?.startsWith('/api')) {
    
    // Membaca runtime config yang sudah didaftarkan di nuxt.config.ts tadi
    const config = useRuntimeConfig()
    const redisUrl = config.redisUrl
    const redisToken = config.redisToken

    const storage = useStorage('cache')
    
    // Mengambil IP Address Client di lingkungan Netlify / Reverse Proxy
    const forwardedFor = req.headers['x-forwarded-for'] as string
    const ip = req.headers['x-nf-client-connection-ip'] || 
               (forwardedFor ? forwardedFor.split(',')[0]?.trim() : null) || 
               'anonymous'
               
    const cacheKey = `ratelimit:${ip}`

    let currentRequests = (await storage.getItem(cacheKey) as number) || 0

    if (currentRequests >= MAX_REQUESTS) {
      throw createError({
        statusCode: 429,
        statusMessage: 'Too Many Requests',
        message: 'Batas request terpenuhi. Silakan coba lagi nanti.',
      })
    }

    currentRequests++
    
    // Logika Mengamankan Sliding Window TTL
    const windowMetaKey = `ratelimit:meta:${ip}`
    let createdAt = (await storage.getItem(windowMetaKey) as number)

    if (!createdAt || currentRequests === 1) {
      createdAt = Date.now()
      await storage.setItem(windowMetaKey, createdAt, { ttl: WINDOW_MS / 1000 })
    }

    const timePassed = Date.now() - createdAt
    const remainingTTL = Math.max(0, WINDOW_MS - timePassed)

    // Set item ke storage (Memory / Redis Upstash) dengan sisa TTL presisi
    await storage.setItem(cacheKey, currentRequests, { ttl: remainingTTL / 1000 })

    // Kirim informasi rate limit di header respons
    setResponseHeaders(event, {
      'X-RateLimit-Limit': MAX_REQUESTS.toString(),
      'X-RateLimit-Remaining': Math.max(0, MAX_REQUESTS - currentRequests).toString(),
    })
  }
})