// // import mongoose from 'mongoose';

// // const studentSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   usn: { type: String, required: true, unique: true },
// //   email: { type: String, required: true, unique: true },
// //   semester: { type: Number, required: true },
// //   graduationYear: { type: Number, required: true },
// //   specialization: { type: String, required: true },
// //   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
// // });

// // export default mongoose.model('Student', studentSchema);
// import mongoose from 'mongoose';

// const studentSchema = new mongoose.Schema({
//   name: { 
//     type: String, 
//     required: [true, 'Name is required'],
//     trim: true
//   },
//   usn: { 
//     type: String, 
//     required: [true, 'USN is required'], 
//     unique: true,
//     uppercase: true,
//     trim: true
//   },
//   email: { 
//     type: String, 
//     required: [true, 'Email is required'], 
//     unique: true,
//     lowercase: true,
//     trim: true,
//     match: [/\S+@\S+\.\S+/, 'is invalid']
//   },
//   semester: { 
//     type: Number, 
//     required: [true, 'Semester is required'],
//     min: [1, 'Semester must be at least 1'],
//     max: [8, 'Semester cannot be more than 8']
//   },
//   graduationYear: { 
//     type: Number, 
//     required: [true, 'Graduation year is required'],
//     min: [2000, 'Graduation year must be after 2000'],
//     max: [2030, 'Graduation year cannot be after 2030']
//   },
//   specialization: { 
//     type: String, 
//     required: [true, 'Specialization is required'],
//     trim: true
//   },
//   user: { 
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: 'User' 
//   }
// }, {
//   timestamps: true // Adds createdAt and updatedAt
// });

// export default mongoose.model('Student', studentSchema);
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'],
    trim: true
  },
  usn: { 
    type: String, 
    required: [true, 'USN is required'], 
    unique: true,
    uppercase: true,
    trim: true
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    unique: true,
    lowercase: true,
    trim: true,
    match: [/\S+@\S+\.\S+/, 'is invalid']
  },
  semester: { 
    type: Number, 
    required: [true, 'Semester is required'],
    min: [1, 'Semester must be at least 1'],
    max: [8, 'Semester cannot be more than 8']
  },
  // Fix typo in field name
  graduationYear: { 
    type: Number, 
    required: [true, 'Graduation year is required'],
    min: [2000, 'Graduation year must be after 2000'],
    max: [2030, 'Graduation year cannot be after 2030']
  },
  specialization: { 
    type: String, 
    required: [true, 'Specialization is required'],
    trim: true
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }
}, {
  timestamps: true
});

export default mongoose.model('Student', studentSchema);