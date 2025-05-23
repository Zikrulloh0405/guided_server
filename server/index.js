import express from 'express';
import tourRoutes from './routes/tourRoutes.js';
import guideRoutes from './routes/guideRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import touristRoutes from './routes/touristRoutes.js';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.use('/api/tours', tourRoutes);
app.use('/api/guides', guideRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/tourists', touristRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
