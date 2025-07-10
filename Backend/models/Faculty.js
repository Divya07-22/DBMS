import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  department: String,
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

export default mongoose.model('Faculty', facultySchema);