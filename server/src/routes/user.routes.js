import { Router } from 'express';
import { authenticate } from '../middleware/auth.js';
import * as userController from '../controllers/user.controller.js';

const router = Router();

router.use(authenticate);

router.get('/me', userController.getProfile);
router.put('/me', userController.updateProfile);

export default router;
