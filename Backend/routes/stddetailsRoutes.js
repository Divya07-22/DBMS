// routes/stddetailsRoutes.js
const express = require('express');
const router = express.Router();

// Import the controller functions
const { getStudentDetails, addStudentDetails } = require('../controllers/stddetailsController');

// Define the GET route to fetch student details by USN
router.get('/', getStudentDetails);

// Define the POST route to add student details
router.post('/', addStudentDetails);

module.exports = router;
