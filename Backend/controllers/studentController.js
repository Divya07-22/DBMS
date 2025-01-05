const Student = require('../models/studentModel');

exports.createStudent = (req, res) => {
  const studentData = req.body;

  // Log incoming data
  console.log("Data received for student creation:", studentData);

  // Validate incoming data
  const { studentname, usn, email, sem, yearofgraduation, specialization } = studentData;

  if (!studentname || !usn || !email || !sem || !yearofgraduation || !specialization) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  if (studentData.sem) {
    studentData.sem = parseInt(studentData.sem, 10);
  }
  if (studentData.yearofgraduation) {
    studentData.yearofgraduation = parseInt(studentData.yearofgraduation, 10);
  }

  Student.create(studentData, (err, results) => {
    if (err) {
      console.error('Database error:', err); // Log detailed error
      return res.status(500).json({ message: 'Database error', error: err });
    }
    return res.status(201).json({ message: 'Student created successfully', id: results.insertId });
  });
};
