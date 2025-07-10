import Placement from '../models/Placement.js';

export const addPlacement = async (req, res) => {
  // Map frontend fields to backend fields
  const { 
    std_id: student,
    company_name: companyName,
    job_title: jobTitle,
    date_of_placement: dateOfPlacement,
    salary_package: salaryPackage,
    placed,
    location 
  } = req.body;

  try {
    // Validate and convert data types
    const placement = new Placement({
      student,
      companyName,
      jobTitle,
      dateOfPlacement: new Date(dateOfPlacement),
      salaryPackage: Number(salaryPackage),
      placed: placed === 'true',
      location
    });

    await placement.save();
    res.status(201).json(placement);
  } catch (err) {
    // Handle validation errors
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ error: errors });
    }
    // Handle other errors
    res.status(500).json({ error: 'Server error' });
  }
};

// Get placements by student (updated for string ID)
export const getPlacementsByStudent = async (req, res) => {
  try {
    const placements = await Placement.find({ student: req.params.studentId });
    res.json(placements);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};