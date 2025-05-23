import express from 'express';
import { getAllBookings, getBookingById } from '../controllers/bookingController.js';

const router = express.Router();

router.get('/', getAllBookings);
router.get('/:id', getBookingById);

export default router;
