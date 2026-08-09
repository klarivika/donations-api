// server/middleware/rateLimiter.ts

const MAX_REQUESTS = 190 
const WINDOW_MS = 60 * 1000 

export default defineEventHandler(async (event) => {
  const req = event.node.req

  // Hanya jalankan rate limiter jika request mengarah ke endpoint /api
  if (req.url?.startsWith('/api')) {
    
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
      await storage.setItem(windowMetaKey, createdAt, { ttl: Math.ceil(WINDOW_MS / 1000) })
    }

    const timePassed = Date.now() - createdAt
    const remainingTTL = Math.max(0, WINDOW_MS - timePassed)
    const ttlSeconds = Math.max(1, Math.ceil(remainingTTL / 1000))

    // Set item ke storage (memory) dengan TTL dalam detik
    await storage.setItem(cacheKey, currentRequests, { ttl: ttlSeconds })

    // Kirim informasi rate limit di header respons
    setResponseHeaders(event, {
      'X-RateLimit-Limit': MAX_REQUESTS.toString(),
      'X-RateLimit-Remaining': Math.max(0, MAX_REQUESTS - currentRequests).toString(),
    })
  }
})