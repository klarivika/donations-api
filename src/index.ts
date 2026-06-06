import express from 'express';
import router from './routes/donation';
import { rateLimit } from 'express-rate-limit';
const app = express();
const port = 3000;
app.use(express.json());

const globalLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 menit
  limit: 160, // Maksimal 160 request per menit untuk setiap IP
  message: 'Batas request per menit terlampaui.'
});

app.use(globalLimiter);
app.use('/api/v1/donations',router)
app.get('/hello/:id', (req, res) => {
       const query=req.query
       const {id}=req.params
      // !status is chaining methods
  res.status(200).send('Hello World!');
});
app.set('trust proxy', 1); // <--- WAJIB jika di-deploy di Netlify/Heroku/Vercel
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});