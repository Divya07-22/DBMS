import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  student: { type: String, ref: 'Student' },
  skillName: { type: String, required: true },
  skillCategory: { type: String, required: true }
});

export default mongoose.model('Skill', skillSchema);