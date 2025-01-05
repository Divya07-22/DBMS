const express = require('express');
const { createPlacement } = require('../controllers/placementController');
const router = express.Router();

router.post('/', createPlacement);

module.exports = router;
