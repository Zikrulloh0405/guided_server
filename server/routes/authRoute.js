import express from 'express';
import { registerTourist, loginTourist } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerTourist);
router.post('/login', loginTourist);

export default router;
