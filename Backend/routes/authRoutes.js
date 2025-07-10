import express from 'express';
import { login, facultySignup, studentSignup } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', login);
router.post('/faculty/signup', facultySignup);
router.post('/student/signup', studentSignup);

export default router;