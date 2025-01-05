const express = require('express');
const {
  createRecruiter,
  getRecruiters,
  updateRecruiter,
  deleteRecruiter,
} = require('../controllers/recruiterController');
const router = express.Router();

router.post('/', createRecruiter);
router.get('/', getRecruiters);
// router.put('/:id', updateRecruiter);
// router.delete('/:id', deleteRecruiter);

module.exports = router;
