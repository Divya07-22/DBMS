// facultydashRoutes.js
const express = require('express');
const { getFacultyQueryResult } = require('../controllers/facultydashController');
const router = express.Router();

// Define the route to get query results
router.get('/query/:selectedQuery', getFacultyQueryResult); // Notice this is '/query/:selectedQuery'

module.exports = router;