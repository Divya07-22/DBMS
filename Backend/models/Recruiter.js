import mongoose from 'mongoose';

const recruiterSchema = new mongoose.Schema({
  companyName: { 
    type: String, 
    required: [true, 'Company name is required'],
    trim: true
  },
  contactPerson: { 
    type: String, 
    required: [true, 'Contact person is required'],
    trim: true
  },
  contactEmail: { 
    type: String, 
    required: [true, 'Contact email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  contactPhone: { 
    type: String, 
    required: [true, 'Contact phone is required'],
    trim: true
  },
  location: { 
    type: String, 
    required: [true, 'Location is required'],
    trim: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

export default mongoose.model('Recruiter', recruiterSchema);