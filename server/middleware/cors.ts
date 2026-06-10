export default defineEventHandler((event) => {
  // Mengizinkan semua domain/URL untuk mengakses API kamu
  setHeader(event, 'Access-Control-Allow-Origin', '*')
  
  // Mengizinkan metode HTTP yang umum digunakan
  setHeader(event, 'Access-Control-Allow-Methods', 'GET')
  
  // Mengizinkan header kustom jika diperlukan (misal: Authorization atau Content-Type)
  setHeader(event, 'Access-Control-Allow-Headers', 'Content-Type, Authorization')

  // Menangani Preflight Request (Metode OPTIONS)
  if (isMethod(event, 'OPTIONS')) {
    setResponseStatus(event, 204)
    return ''
  }
})