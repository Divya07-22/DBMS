import express from 'express';
import { addInterview, getInterviewsByStudent } from '../controllers/interviewController.js';

const router = express.Router();

router.post('/', addInterview);
router.get('/student/:studentId', getInterviewsByStudent);

export default router;