import express from 'express';
import { addSkill, getSkillsByStudent } from '../controllers/skillController.js';

const router = express.Router();

router.post('/', addSkill);
router.get('/student/:studentId', getSkillsByStudent);

export default router;