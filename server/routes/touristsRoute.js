import express from 'express';
import { getAllTourists, getTouristById } from '../controllers/touristsController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getAllTourists);
router.get('/:id', protect, getTouristById);

export default router;
