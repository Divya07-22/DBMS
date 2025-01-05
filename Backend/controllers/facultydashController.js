const { executeQuery } = require('../models/facultydashModel');

// Function to handle faculty queries
const getFacultyQueryResult = async (req, res) => {
  const { selectedQuery } = req.params;
  console.log("Controller: Received query -", selectedQuery);

  try {
    const result = await executeQuery(selectedQuery);
    res.status(200).json({ success: true, output: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getFacultyQueryResult };