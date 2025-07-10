import Internship from '../models/Internship.js';
import mongoose from 'mongoose';

export const addInternship = async (req, res) => {
  const {
    title,
    description,
    recruit_id,        // Frontend field name
    location,
    duration,
    stipend,
    skills_required,   // Frontend field name
    application_deadline
  } = req.body;

  try {
    // Convert skills string to array
    const skillsArray = skills_required 
      ? skills_required.split(',').map(skill => skill.trim())
      : [];

    // Create new internship with recruiter ID as plain string
    const internship = new Internship({
      title,
      description,
      recruiter: recruit_id, // Store as plain string
      location,
      duration,
      stipend: Number(stipend),
      skillsRequired: skillsArray,
      applicationDeadline: new Date(application_deadline)
    });

    await internship.save();
    console.log('Internship added successfully:', internship);
    res.status(201).json(internship);
  } catch (err) {
    console.error('Error adding internship:', err);
    
    if (err instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ error: err.message });
    }
    
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all internships remains the same
export const getInternships = async (req, res) => {
  try {
    const internships = await Internship.find();
    res.json(internships);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};