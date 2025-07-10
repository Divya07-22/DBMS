import express from 'express';
import { addRecruiter, getRecruiters } from '../controllers/recruiterController.js';

const router = express.Router();

router.post('/', addRecruiter);
router.get('/', getRecruiters);

export default router;