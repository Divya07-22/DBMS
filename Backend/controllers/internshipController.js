// controllers/internshipController.js
const db = require('../config/db'); // Your MySQL database connection

// Create a new internship
exports.createInternship = (req, res) => {
  const { title, description, recruit_id, location, duration, stipend, skills_required, application_deadline } = req.body;

  const query = `
    INSERT INTO internships (
      title, description, recruit_id, location, duration, stipend, skills_required, application_deadline
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?);
  `;
  const values = [
    title,
    description,
    recruit_id,
    location,
    duration,
    stipend,
    skills_required,
    application_deadline
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting internship:', err);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({
      id: result.insertId,
      title,
      description,
      recruit_id,
      location,
      duration,
      stipend,
      skills_required,
      application_deadline,
    });
  });
};

// Get all internships
exports.getInternships = (req, res) => {
  const query = `SELECT * FROM internships`;

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching internships:', err);
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(result);
  });
};

// Get a specific internship by id
exports.getInternshipById = (req, res) => {
  const { int_id } = req.params;

  const query = `SELECT * FROM internships WHERE int_id = ?`;

  db.query(query, [int_id], (err, result) => {
    if (err) {
      console.error('Error fetching internship:', err);
      return res.status(500).json({ error: err.message });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: 'Internship not found' });
    }

    res.status(200).json(result[0]);
  });
};

// Update an internship by id
exports.updateInternship = (req, res) => {
  const { int_id } = req.params;
  const { title, description, recruit_id, location, duration, stipend, skills_required, application_deadline } = req.body;

  const query = `
    UPDATE internships
    SET title = ?, description = ?, recruit_id = ?, location = ?, duration = ?, stipend = ?, skills_required = ?, application_deadline = ?
    WHERE int_id = ?;
  `;
  const values = [
    title,
    description,
    recruit_id,
    location,
    duration,
    stipend,
    skills_required,
    application_deadline,
    int_id,
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error updating internship:', err);
      return res.status(500).json({ error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Internship not found' });
    }

    res.status(200).json({ message: 'Internship updated successfully' });
  });
};

// Delete an internship by id
exports.deleteInternship = (req, res) => {
  const { int_id } = req.params;

  const query = `DELETE FROM internships WHERE int_id = ?`;

  db.query(query, [int_id], (err, result) => {
    if (err) {
      console.error('Error deleting internship:', err);
      return res.status(500).json({ error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Internship not found' });
    }

    res.status(200).json({ message: 'Internship deleted successfully' });
  });
};

// Create table for internships (if it doesn't exist)
exports.createInternshipTable = (req, res) => {
  const query = `
    CREATE TABLE IF NOT EXISTS internships (
      int_id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      recruit_id INT,
      location VARCHAR(255) NOT NULL,
      duration VARCHAR(255) NOT NULL,
      stipend VARCHAR(255),
      skills_required TEXT,
      application_deadline DATE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error creating internships table:', err);
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Internships table created or already exists' });
  });
};
