import mongoose from 'mongoose';

const internshipSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Title is required'] 
  },
  description: { 
    type: String, 
    required: [true, 'Description is required'] 
  },
  recruiter: { 
    type: String,  // Plain string type
    required: [true, 'Recruiter ID is required'] 
  },
  location: { 
    type: String, 
    required: [true, 'Location is required'] 
  },
  duration: { 
    type: String, 
    required: [true, 'Duration is required'] 
  },
  stipend: { 
    type: Number, 
    required: [true, 'Stipend is required'],
    min: [0, 'Stipend cannot be negative']
  },
  skillsRequired: { 
    type: [String], 
    required: [true, 'Skills are required']
  },
  applicationDeadline: { 
    type: Date, 
    required: [true, 'Deadline is required']
  }
}, {
  timestamps: true
});

export default mongoose.model('Internship', internshipSchema);