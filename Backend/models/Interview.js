import mongoose from 'mongoose';

const interviewSchema = new mongoose.Schema({
  student: { 
    type: String,  // Changed to string type
    required: true 
  },
  recruiter: { 
    type: String,  // Changed to string type
    required: true 
  },
  interviewResult: { 
    type: String, 
    enum: ['Selected', 'Rejected', 'Pending'], 
    default: 'Pending' 
  },
  interviewDate: { 
    type: Date, 
    required: true 
  },
  interviewMode: { 
    type: String, 
    enum: ['Online', 'Offline'], 
    required: true 
  },
  feedback: { 
    type: String 
  },
  interviewerName: { 
    type: String, 
    required: true 
  }
});

export default mongoose.model('Interview', interviewSchema);