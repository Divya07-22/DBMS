
import Skill from '../models/Skill.js';

export const addSkill = async (req, res) => {
  // Use the exact field names from frontend
  const { std_id, skill_name, skill_category } = req.body;

  try {
    const skill = new Skill({
      student: std_id, // Store as string instead of ObjectId
      skillName: skill_name,
      skillCategory: skill_category
    });

    const newSkill = await skill.save();
    res.status(201).json({
      success: true,
      message: 'Skill added successfully',
      data: newSkill
    });
  } catch (err) {
    console.error('❌ Error adding skill:', err.message);
    
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ 
        success: false,
        error: 'Validation failed',
        details: errors 
      });
    }
    
    res.status(500).json({
      success: false,
      error: 'Server error',
      ...(process.env.NODE_ENV === 'development' && { 
        details: err.message 
      })
    });
  }
};

export const getSkillsByStudent = async (req, res) => {
  try {
    // Changed to find by string instead of ObjectId
    const skills = await Skill.find({ student: req.params.studentId });
    res.json({
      success: true,
      count: skills.length,
      data: skills
    });
  } catch (err) {
    console.error('❌ Error fetching skills:', err.message);
    res.status(500).json({
      success: false,
      error: 'Server error',
      ...(process.env.NODE_ENV === 'development' && { 
        details: err.message 
      })
    });
  }
};