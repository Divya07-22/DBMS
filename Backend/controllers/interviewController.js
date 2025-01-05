const connection = require('../config/db');

// Create an Interview Table if it doesn't exist
const createInterviewTable = `
  CREATE TABLE IF NOT EXISTS interviews (
    interview_id INT AUTO_INCREMENT PRIMARY KEY,
    std_id INT,
    recruit_id INT,
    interview_result VARCHAR(255),
    interview_date DATETIME NOT NULL,
    interview_mode ENUM('Online', 'Offline') NOT NULL,
    feedback TEXT,
    interviewer_name VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (std_id) REFERENCES students(std_id) ON DELETE CASCADE,
    FOREIGN KEY (recruit_id) REFERENCES recruiters(recruit_id) ON DELETE CASCADE
  );
`;

// Function to create the interview table
const createTable = () => {
  connection.query(createInterviewTable, (err, results) => {
    if (err) {
      console.error('Error creating table: ', err);
      return;
    }
    console.log('Interview table created or already exists');
  });
};

// Create an Interview
exports.createInterview = (req, res) => {
  const { std_id, recruit_id, interview_result, interview_date, interview_mode, feedback, interviewer_name } = req.body;

  const insertQuery = `
    INSERT INTO interviews (std_id, recruit_id, interview_result, interview_date, interview_mode, feedback, interviewer_name)
    VALUES (?, ?, ?, ?, ?, ?, ?);
  `;

  connection.query(insertQuery, [std_id, recruit_id, interview_result, interview_date, interview_mode, feedback, interviewer_name], (err, results) => {
    if (err) {
      console.error('Error inserting interview record: ', err);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({
      interview_id: results.insertId,
      std_id,
      recruit_id,
      interview_result,
      interview_date,
      interview_mode,
      feedback,
      interviewer_name,
    });
  });
};

// Get an Interview by interview_id
exports.getInterviewById = (req, res) => {
  const { interview_id } = req.params;

  const selectQuery = 'SELECT * FROM interviews WHERE interview_id = ?';

  connection.query(selectQuery, [interview_id], (err, results) => {
    if (err) {
      console.error('Error fetching interview record: ', err);
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Interview not found' });
    }

    res.status(200).json(results[0]);
  });
};

// Get all Interviews
exports.getAllInterviews = (req, res) => {
  const query = 'SELECT * FROM interviews';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching interview records: ', err);
      return res.status(500).json({ error: err.message });
    }

    res.status(200).json(results);
  });
};

// Update an Interview
exports.updateInterview = (req, res) => {
  const { interview_id } = req.params;
  const { interview_result, feedback, interviewer_name } = req.body;

  const updateQuery = `
    UPDATE interviews
    SET interview_result = ?, feedback = ?, interviewer_name = ?
    WHERE interview_id = ?;
  `;

  connection.query(updateQuery, [interview_result, feedback, interviewer_name, interview_id], (err, result) => {
    if (err) {
      console.error('Error updating interview record: ', err);
      return res.status(500).json({ error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Interview not found' });
    }

    res.status(200).json({ message: 'Interview updated successfully' });
  });
};

// Delete an Interview by interview_id
exports.deleteInterview = (req, res) => {
  const { interview_id } = req.params;

  const deleteQuery = 'DELETE FROM interviews WHERE interview_id = ?';

  connection.query(deleteQuery, [interview_id], (err, result) => {
    if (err) {
      console.error('Error deleting interview record: ', err);
      return res.status(500).json({ error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Interview not found' });
    }

    res.status(200).json({ message: 'Interview deleted successfully' });
  });
};

// Call the function to create the table when the application starts (if needed)
createTable();
