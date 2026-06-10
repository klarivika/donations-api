const MAX_REQUESTS = 90 // Maksimal request
const WINDOW_MS = 60 * 1000 // Per 1 menit

export default defineEventHandler(async (event) => {
  const req = event.node.req

  if (req.url?.startsWith('/api')) {
    // Ambil storage 'cache' yang sudah dikonfigurasi di nuxt.config
    const storage = useStorage('cache')
    
    // Deteksi IP User di Netlify
    const ip = req.headers['x-nf-client-connection-ip'] || 
               req.headers['x-forwarded-for'] || 
               'anonymous'
               
    const cacheKey = `ratelimit:${ip}`

    // Ambil data request saat ini dari Redis
    let currentRequests = (await storage.getItem(cacheKey) as number) || 0

    if (currentRequests >= MAX_REQUESTS) {
      throw createError({
        statusCode: 429,
        statusMessage: 'Too Many Requests',
        message: 'Batas request terpenuhi. Silakan coba lagi nanti.',
      })
    }

    // Naikkan angka request
    currentRequests++
    
    // Simpan ke Redis dengan waktu kedaluwarsa (TTL) sesuai WINDOW_MS
    await storage.setItem(cacheKey, currentRequests, { ttl: WINDOW_MS / 1000 })

    // Set Header info
    setResponseHeaders(event, {
      'X-RateLimit-Limit': MAX_REQUESTS.toString(),
      'X-RateLimit-Remaining': (MAX_REQUESTS - currentRequests).toString(),
    })
  }
})