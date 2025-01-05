// controllers/skillController.js
const connection = require('../config/db');

// Create a new skill
exports.createSkill = (req, res) => {
  const { std_id, skill_name, skill_category} = req.body;

  // Validate if the skill name is unique for the student
  const checkSkillQuery = 'SELECT * FROM skills WHERE std_id = ? AND skill_name = ?';

  connection.query(checkSkillQuery, [std_id, skill_name], (err, result) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: err.message });
    }

    if (result.length > 0) {
      return res.status(400).json({ message: 'Skill already exists for this student' });
    }

    const query = `
      INSERT INTO skills (std_id, skill_name, skill_category)
      VALUES (?, ?, ?)
    `;

    connection.query(query, [std_id, skill_name, skill_category], (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: err.message });
      }

      res.status(201).json({
        id: result.insertId,
        std_id,
        skill_name,
        skill_category,
      
      });
    });
  });
};

// Get all skills for all students
exports.getSkills = (req, res) => {
  const query = 'SELECT * FROM skills';

  connection.query(query, (err, results) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: err.message });
    }

    res.status(200).json(results);
  });
};

// Get a specific skill by skill_id
exports.getSkillById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM skills WHERE skill_id = ?';

  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: err.message });
    }

    if (!result.length) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.status(200).json(result[0]);
  });
};

// Get all skills for a specific student by std_id
exports.getSkillsByStudentId = (req, res) => {
  const { std_id } = req.params;
  const query = 'SELECT * FROM skills WHERE std_id = ?';

  connection.query(query, [std_id], (err, results) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'No skills found for this student' });
    }

    res.status(200).json(results);
  });
};

// Update a skill by skill_id
exports.updateSkill = (req, res) => {
  const { id } = req.params;
  const { skill_name, skill_category} = req.body;

  const query = `
    UPDATE skills
    SET skill_name = ?, skill_category = ?
    WHERE skill_id = ?
  `;

  connection.query(query, [skill_name, skill_category, id], (err, result) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.status(200).json({ message: 'Skill updated successfully' });
  });
};

// Delete a skill by skill_id
exports.deleteSkill = (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM skills WHERE skill_id = ?';

  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.status(200).json({ message: 'Skill deleted successfully' });
  });
};
