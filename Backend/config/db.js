// const mysql = require('mysql2');
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'divdev123',  // Replace with your MySQL password
//   database: 'stdplacement'  // Replace with your database name
// });
// db.connect(err => {
//   if (err) throw err;
//   console.log('Database connected');
// });
// module.exports = db;


const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',   // Update with your database username
  password: 'divdev123',   // Update with your database password
  database: 'stdplacement',  // Update with your database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = db;
