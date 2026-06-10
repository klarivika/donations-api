const MAX_REQUESTS = 90 
const WINDOW_MS = 60 * 1000 

export default defineEventHandler(async (event) => {
  const req = event.node.req

  if (req.url?.startsWith('/api')) {
    const storage = useStorage('cache')
    
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
    
    // Mengamankan masalah Sliding Window TTL
    // Kita simpan timestamp kapan window ini pertama kali dibuat
    const windowMetaKey = `ratelimit:meta:${ip}`
    let createdAt = (await storage.getItem(windowMetaKey) as number)

    if (!createdAt || currentRequests === 1) {
      createdAt = Date.now()
      await storage.setItem(windowMetaKey, createdAt, { ttl: WINDOW_MS / 1000 })
    }

    const timePassed = Date.now() - createdAt
    const remainingTTL = Math.max(0, WINDOW_MS - timePassed)

    // Set item dengan sisa TTL yang presisi
    await storage.setItem(cacheKey, currentRequests, { ttl: remainingTTL / 1000 })

    setResponseHeaders(event, {
      'X-RateLimit-Limit': MAX_REQUESTS.toString(),
      'X-RateLimit-Remaining': Math.max(0, MAX_REQUESTS - currentRequests).toString(),
    })
  }
})