import mongoose from 'mongoose';
import express from 'express';
import { addStudent, getStudents, getStudentById } from '../controllers/studentController.js';

const router = express.Router();
router.post('/', addStudent);
router.get('/', getStudents);
router.get('/:id', getStudentById);

export default router;