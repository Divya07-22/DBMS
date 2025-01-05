


const db = require('../config/db');

const Student = {
  create: (data, callback) => {
    const query = `INSERT INTO students (studentname, usn, email, sem, yearofgraduation, specialization) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(query, [data.studentname, data.usn, data.email, data.sem, data.yearofgraduation, data.specialization], (err, results) => {
      if (err) {
        console.error('Error executing query:', err); // Log the error for debugging
        return callback(err);
      }
      return callback(null, results);
    });
  },
};

module.exports = Student;  // Export the Student object after it's defined
