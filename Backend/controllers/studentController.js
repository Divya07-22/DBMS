// // import Student from '../models/Student.js';

// // // Add student details
// // export const addStudent = async (req, res) => {
// //   const { name, usn, email, semester, graduationYear, specialization } = req.body;

// //   try {
// //     const student = new Student({
// //       name,
// //       usn,
// //       email,
// //       semester,
// //       graduationYear,
// //       specialization
// //     });

// //     await student.save();
// //     res.status(201).json(student);
// //   } catch (err) {
// //     res.status(500).json({ error: 'Server error' });
// //   }
// // };

// // // Get all students
// // export const getStudents = async (req, res) => {
// //   try {
// //     const students = await Student.find();
// //     res.json(students);
// //   } catch (err) {
// //     res.status(500).json({ error: 'Server error' });
// //   }
// // };

// // // Get student by ID
// // export const getStudentById = async (req, res) => {
// //   try {
// //     const student = await Student.findById(req.params.id);
// //     if (!student) {
// //       return res.status(404).json({ error: 'Student not found' });
// //     }
// //     res.json(student);
// //   } catch (err) {
// //     res.status(500).json({ error: 'Server error' });
// //   }
// // };
// import Student from '../models/Student.js';

// // Add student details
// export const addStudent = async (req, res) => {
//   const { name, usn, email, semester, graduationYear, specialization, user } = req.body;

//   // Validate required fields
//   const requiredFields = ['name', 'usn', 'email', 'semester', 'graduationYear', 'specialization'];
//   const missingFields = requiredFields.filter(field => !req.body[field]);
  
//   if (missingFields.length > 0) {
//     return res.status(400).json({
//       error: `Missing required fields: ${missingFields.join(', ')}`
//     });
//   }

//   try {
//     // Create new student
//     const student = new Student({
//       name,
//       usn: usn.toUpperCase(), // Normalize USN to uppercase
//       email: email.toLowerCase(), // Normalize email to lowercase
//       semester,
//       graduationYear,
//       specialization,
//       user: user || null
//     });

//     // Save to database
//     const newStudent = await student.save();
    
//     console.log(`✅ Student created: ${newStudent.usn} - ${newStudent.name}`);
//     res.status(201).json({
//       success: true,
//       message: 'Student created successfully',
//       data: newStudent
//     });
//   } catch (err) {
//     console.error('❌ Error creating student:', err);
    
//     // Handle duplicate key errors
//     if (err.code === 11000) {
//       const duplicateField = Object.keys(err.keyPattern)[0];
//       return res.status(409).json({
//         error: `${duplicateField.charAt(0).toUpperCase() + duplicateField.slice(1)} already exists`
//       });
//     }
    
//     // Handle validation errors
//     if (err.name === 'ValidationError') {
//       const errors = Object.values(err.errors).map(e => e.message);
//       return res.status(400).json({ error: errors });
//     }
    
//     // Handle other errors
//     res.status(500).json({
//       error: 'Internal server error',
//       details: process.env.NODE_ENV === 'development' ? err.message : undefined
//     });
//   }
// };

// // Get all students
// export const getStudents = async (req, res) => {
//   try {
//     const students = await Student.find().sort({ createdAt: -1 });
    
//     console.log(`📊 Fetched ${students.length} students`);
//     res.json({
//       success: true,
//       count: students.length,
//       data: students
//     });
//   } catch (err) {
//     console.error('❌ Error fetching students:', err);
//     res.status(500).json({
//       error: 'Internal server error',
//       details: process.env.NODE_ENV === 'development' ? err.message : undefined
//     });
//   }
// };

// // Get student by ID
// export const getStudentById = async (req, res) => {
//   try {
//     // Validate ID format
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       return res.status(400).json({ error: 'Invalid student ID format' });
//     }

//     const student = await Student.findById(req.params.id);
    
//     if (!student) {
//       console.warn(`⚠️ Student not found with ID: ${req.params.id}`);
//       return res.status(404).json({ error: 'Student not found' });
//     }
    
//     console.log(`🔍 Fetched student: ${student.usn} - ${student.name}`);
//     res.json({
//       success: true,
//       data: student
//     });
//   } catch (err) {
//     console.error('❌ Error fetching student by ID:', err);
//     res.status(500).json({
//       error: 'Internal server error',
//       details: process.env.NODE_ENV === 'development' ? err.message : undefined
//     });
//   }
// };
import Student from '../models/Student.js';
import mongoose from 'mongoose';

export const addStudent = async (req, res) => {
  console.log('Received data:', req.body);
  
  const { name, usn, email, semester, graduationYear, specialization, user } = req.body;

  // Validate required fields
  const requiredFields = ['name', 'usn', 'email', 'semester', 'graduationYear', 'specialization'];
  const missingFields = requiredFields.filter(field => !req.body[field]);
  
  if (missingFields.length > 0) {
    return res.status(400).json({
      error: `Missing required fields: ${missingFields.join(', ')}`
    });
  }

  try {
    const student = new Student({
      name,
      usn: usn.toUpperCase(),
      email: email.toLowerCase(),
      semester: Number(semester),
      graduationYear: Number(graduationYear),
      specialization,
      user: user || null
    });

    const newStudent = await student.save();
    console.log(`✅ Student created: ${newStudent.usn} - ${newStudent.name}`);
    
    res.status(201).json({
      success: true,
      message: 'Student created successfully',
      data: newStudent
    });
  } catch (err) {
    console.error('❌ Error creating student:', err);
    
    if (err.code === 11000) {
      const duplicateField = Object.keys(err.keyPattern)[0];
      return res.status(409).json({
        error: `${duplicateField} already exists`
      });
    }
    
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ error: errors });
    }
    
    res.status(500).json({
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

// Get all students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    
    console.log(`📊 Fetched ${students.length} students`);
    res.json({
      success: true,
      count: students.length,
      data: students
    });
  } catch (err) {
    console.error('❌ Error fetching students:', err);
    res.status(500).json({
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

// Get student by ID
export const getStudentById = async (req, res) => {
  try {
    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: 'Invalid student ID format' });
    }

    const student = await Student.findById(req.params.id);
    
    if (!student) {
      console.warn(`⚠️ Student not found with ID: ${req.params.id}`);
      return res.status(404).json({ error: 'Student not found' });
    }
    
    console.log(`🔍 Fetched student: ${student.usn} - ${student.name}`);
    res.json({
      success: true,
      data: student
    });
  } catch (err) {
    console.error('❌ Error fetching student by ID:', err);
    res.status(500).json({
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};