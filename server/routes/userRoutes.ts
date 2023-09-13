import express from 'express';
import { getUserData } from '../controllers/userController';
import authenticateUser from '../middleware/auth';

const router = express.Router();

router.route('/my-info').get(getUserData);

export default router;
