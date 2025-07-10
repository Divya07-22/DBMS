

import Recruiter from '../models/Recruiter.js';

export const addRecruiter = async (req, res) => {
  console.log('📥 Received recruiter data:', req.body);
  
  try {
    // Create new recruiter with explicit field mapping
    const recruiter = new Recruiter({
      companyName: req.body.companyName,
      contactPerson: req.body.contactPerson,
      contactEmail: req.body.contactEmail,
      contactPhone: req.body.contactPhone,
      location: req.body.location
    });

    const newRecruiter = await recruiter.save();
    console.log(`✅ Recruiter created: ${newRecruiter.companyName} (ID: ${newRecruiter._id})`);
    
    res.status(201).json({
      success: true,
      message: 'Recruiter created successfully',
      data: newRecruiter
    });
  } catch (err) {
    console.error('❌ Error creating recruiter:', err.message);
    
    // Handle duplicate email error
    if (err.code === 11000 && err.keyPattern?.contactEmail) {
      return res.status(409).json({ 
        success: false,
        error: 'Contact email already exists' 
      });
    }
    
    // Handle validation errors
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ 
        success: false,
        error: 'Validation failed',
        details: errors 
      });
    }
    
    // Generic server error
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      ...(process.env.NODE_ENV === 'development' && { 
        details: err.message 
      })
    });
  }
};

export const getRecruiters = async (req, res) => {
  try {
    console.log('📤 Fetching all recruiters');
    const recruiters = await Recruiter.find().sort({ createdAt: -1 });
    
    console.log(`✅ Found ${recruiters.length} recruiters`);
    res.json({
      success: true,
      count: recruiters.length,
      data: recruiters
    });
  } catch (err) {
    console.error('❌ Error fetching recruiters:', err.message);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      ...(process.env.NODE_ENV === 'development' && { 
        details: err.message 
      })
    });
  }
};