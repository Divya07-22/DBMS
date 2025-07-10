import mongoose from 'mongoose';

const placementSchema = new mongoose.Schema({
  student: { type: String, required: true }, // Changed to String
  companyName: { type: String, required: true },
  jobTitle: { type: String, required: true },
  dateOfPlacement: { type: Date, required: true },
  salaryPackage: { type: Number, required: true },
  placed: { type: Boolean, required: true }, // Changed to required
  location: { type: String, required: true }
});

export default mongoose.model('Placement', placementSchema);