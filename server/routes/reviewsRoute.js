import express from 'express';
import { getAllReviews, getReviewById } from '../controllers/reviewController.js';

const router = express.Router();

router.get('/', getAllReviews);
router.get('/:id', getReviewById);

export default router;
