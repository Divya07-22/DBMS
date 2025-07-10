import express from 'express';
import { facultyQuery, facultySignup } from '../controllers/facultyController.js';

const router = express.Router();

// Signup route
router.post('/signup', facultySignup);

// Query route
router.get('/query/:queryType', facultyQuery);

export default router;