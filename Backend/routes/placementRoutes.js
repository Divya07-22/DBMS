import express from 'express';
import { addPlacement, getPlacementsByStudent } from '../controllers/placementController.js';

const router = express.Router();

router.post('/', addPlacement);
router.get('/student/:studentId', getPlacementsByStudent);

export default router;