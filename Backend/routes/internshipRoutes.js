import express from 'express';
import { addInternship, getInternships } from '../controllers/internshipController.js';

const router = express.Router();

router.post('/', addInternship);
router.get('/', getInternships);

export default router;