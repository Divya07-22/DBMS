const connection = require('../config/db');

// SQL query to create the Placement table
const createPlacementTable = `
  CREATE TABLE IF NOT EXISTS placements (
    plac_id INT AUTO_INCREMENT PRIMARY KEY,
    std_id INT,
    company_name VARCHAR(255) NOT NULL,
    job_title VARCHAR(255),
    date_of_placement DATETIME NOT NULL,
    salary_package DECIMAL(10, 2) NOT NULL,
    placed ENUM('yes', 'no') NOT NULL,
    location VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );
`;

// Function to create the placement table
const createTable = () => {
  connection.query(createPlacementTable, (err, results) => {
    if (err) {
      console.error('Error creating table: ', err);
      return;
    }
    console.log('Placement table created or already exists');
  });
};

// Function to insert a new placement record
const insertPlacement = (placement) => {
  const { std_id, company_name, job_title, date_of_placement, salary_package, placed, location } = placement;

  const insertQuery = `
    INSERT INTO placements (std_id, company_name, job_title, date_of_placement, salary_package, placed, location)
    VALUES (?, ?, ?, ?, ?, ?, ?);
  `;

  connection.query(insertQuery, [std_id, company_name, job_title, date_of_placement, salary_package, placed, location], (err, results) => {
    if (err) {
      console.error('Error inserting placement record: ', err);
      return;
    }
    console.log('Placement record inserted');
  });
};

// Function to update a placement record by plac_id
const updatePlacement = (plac_id, updates) => {
  const { company_name, job_title, date_of_placement, salary_package, placed, location } = updates;

  const updateQuery = `
    UPDATE placements
    SET company_name = ?, job_title = ?, date_of_placement = ?, salary_package = ?, placed = ?, location = ?
    WHERE plac_id = ?;
  `;

  connection.query(updateQuery, [company_name, job_title, date_of_placement, salary_package, placed, location, plac_id], (err, results) => {
    if (err) {
      console.error('Error updating placement record: ', err);
      return;
    }
    console.log('Placement record updated');
  });
};

// Function to get a placement record by plac_id
const getPlacementById = (plac_id, res) => {
  const selectQuery = 'SELECT * FROM placements WHERE plac_id = ?';

  connection.query(selectQuery, [plac_id], (err, results) => {
    if (err) {
      console.error('Error fetching placement record: ', err);
      res.status(500).json({ error: 'Error fetching placement record' });
      return;
    }
    if (results.length > 0) {
      res.status(200).json(results[0]);
    } else {
      res.status(404).json({ message: 'Placement not found' });
    }
  });
};

// Controller function to create a placement record
exports.createPlacement = async (req, res) => {
  try {
    const { std_id, company_name, job_title, date_of_placement, salary_package, placed, location } = req.body;

    const placement = {
      std_id,
      company_name,
      job_title,
      date_of_placement,
      salary_package,
      placed,
      location,
    };

    insertPlacement(placement);
    res.status(201).json({ message: 'Placement created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to update a placement record
exports.updatePlacement = async (req, res) => {
  const plac_id = req.params.plac_id;
  const updates = req.body;

  try {
    updatePlacement(plac_id, updates);
    res.status(200).json({ message: 'Placement updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to get a placement by plac_id
exports.getPlacement = async (req, res) => {
  const plac_id = req.params.plac_id;
  try {
    getPlacementById(plac_id, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to create the placement table (can be run on server startup to ensure the table exists)
exports.createTable = createTable;
