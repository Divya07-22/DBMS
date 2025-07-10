
import express from 'express';
import { getFacultyQueryResult } from '../controllers/facultydashController.js';

const router = express.Router();

// Define the route to get query results
router.get('/query/:selectedQuery', getFacultyQueryResult);

export default router;