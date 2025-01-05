

// controllers/recruiterController.js
const db = require('../config/db');

// Create a recruiter
exports.createRecruiter = (req, res) => {
  const { company_name, contact_person, contact_email, contact_phone, location } = req.body;

  const query = 'INSERT INTO recruiters (company_name, contact_person, contact_email, contact_phone, location) VALUES (?, ?, ?, ?, ?)';

  db.query(query, [company_name, contact_person, contact_email, contact_phone, location], (err, result) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, company_name, contact_person, contact_email, contact_phone, location });
  });
};

// Get all recruiters
exports.getRecruiters = (req, res) => {
  const query = 'SELECT * FROM recruiters';

  db.query(query, (err, results) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};

// Update a recruiter
exports.updateRecruiter = (req, res) => {
  const { id } = req.params;
  const { company_name, contact_person, contact_email, contact_phone, location } = req.body;

  const query = 'UPDATE recruiters SET company_name = ?, contact_person = ?, contact_email = ?, contact_phone = ?, location = ? WHERE recruit_id = ?';

  db.query(query, [company_name, contact_person, contact_email, contact_phone, location, id], (err, result) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Recruiter not found' });
    }

    res.status(200).json({ message: 'Recruiter updated successfully' });
  });
};

// Delete a recruiter
exports.deleteRecruiter = (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM recruiters WHERE recruit_id = ?';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Recruiter not found' });
    }

    res.status(200).json({ message: 'Recruiter deleted successfully' });
  });
};
