
// // // import express from 'express';
// // // import cors from 'cors';
// // // import mongoose from 'mongoose';
// // // import dotenv from 'dotenv';
// // // import authRoutes from './routes/authRoutes.js';
// // // import studentRoutes from './routes/studentRoutes.js';
// // // import facultyRoutes from './routes/facultyRoutes.js';
// // // import recruiterRoutes from './routes/recruiterRoutes.js';
// // // import skillRoutes from './routes/skillRoutes.js';
// // // import internshipRoutes from './routes/internshipRoutes.js';
// // // import interviewRoutes from './routes/interviewRoutes.js';
// // // import placementRoutes from './routes/placementRoutes.js';
// // // import bcrypt from 'bcryptjs'; // Add bcrypt for password hashing
// // // import User from './models/User.js'; // Add User model

// // // dotenv.config();

// // // const app = express();
// // // const PORT = process.env.PORT || 5000;

// // // // Middleware
// // // app.use(cors());
// // // app.use(express.json());

// // // // Database connection
// // // mongoose.connect(process.env.MONGO_URI)
// // // .then(() => {
// // //   console.log(`MongoDB connected to database: ${mongoose.connection.db.databaseName}`);
// // // })
// // // .catch(err => {
// // //   console.error('MongoDB connection error:', err);
// // //   process.exit(1);
// // // });

// // // // Create default admin user on startup
// // // const createDefaultAdmin = async () => {
// // //   try {
// // //     const adminEmail = 'admin@placement.com';
// // //     const existingAdmin = await User.findOne({ email: adminEmail });
    
// // //     if (!existingAdmin) {
// // //       const salt = await bcrypt.genSalt(10);
// // //       const hashedPassword = await bcrypt.hash('admin123', salt);
      
// // //       const admin = new User({
// // //         email: adminEmail,
// // //         password: hashedPassword,
// // //         role: 'admin'
// // //       });
      
// // //       await admin.save();
// // //       console.log('Default admin user created');
// // //     }
// // //   } catch (err) {
// // //     console.error('Error creating admin user:', err);
// // //   }
// // // };

// // // createDefaultAdmin();

// // // // Routes
// // // app.use('/api/auth', authRoutes);
// // // app.use('/api/students', studentRoutes);
// // // app.use('/api/faculty', facultyRoutes);
// // // app.use('/api/recruiters', recruiterRoutes);
// // // app.use('/api/skills', skillRoutes);
// // // app.use('/api/internships', internshipRoutes);
// // // app.use('/api/interviews', interviewRoutes);
// // // app.use('/api/placements', placementRoutes);

// // // // Add faculty signup route directly for testing
// // // app.post('/api/faculty/signup', async (req, res) => {
// // //   const { name, email, password } = req.body;

// // //   try {
// // //     // Check if user exists
// // //     const existingUser = await User.findOne({ email });
// // //     if (existingUser) {
// // //       return res.status(400).json({ error: 'Email already registered' });
// // //     }

// // //     // Hash password
// // //     const salt = await bcrypt.genSalt(10);
// // //     const hashedPassword = await bcrypt.hash(password, salt);

// // //     // Create user
// // //     const user = new User({
// // //       email,
// // //       password: hashedPassword,
// // //       role: 'faculty'
// // //     });
// // //     await user.save();

// // //     // Create faculty profile
// // //     const faculty = new Faculty({
// // //       name,
// // //       email,
// // //       user: user._id
// // //     });
// // //     await faculty.save();

// // //     res.status(201).json({ message: 'Faculty created successfully' });
// // //   } catch (err) {
// // //     console.error('Signup error:', err);
// // //     res.status(500).json({ error: 'Server error' });
// // //   }
// // // });

// // // // Error handling middleware
// // // app.use((err, req, res, next) => {
// // //   console.error('\x1b[31m', '🔥 Server Error:', err.stack);
// // //   res.status(500).json({
// // //     error: 'Internal server error',
// // //     message: process.env.NODE_ENV === 'development' ? err.message : undefined
// // //   });
// // // });

// // // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// // import express from 'express';
// // import cors from 'cors';
// // import mongoose from 'mongoose';
// // import dotenv from 'dotenv';
// // import authRoutes from './routes/authRoutes.js';
// // import studentRoutes from './routes/studentRoutes.js';
// // import facultyRoutes from './routes/facultyRoutes.js';
// // import recruiterRoutes from './routes/recruiterRoutes.js';
// // import skillRoutes from './routes/skillRoutes.js';
// // import internshipRoutes from './routes/internshipRoutes.js';
// // import interviewRoutes from './routes/interviewRoutes.js';
// // import placementRoutes from './routes/placementRoutes.js';
// // import facultydashRoutes from './routes/facultydashRoutes.js'; // Add faculty dashboard routes
// // import bcrypt from 'bcryptjs';
// // import User from './models/User.js';
// // import Faculty from './models/Faculty.js'; // Import Faculty model

// // dotenv.config();

// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // Database connection
// // mongoose.connect(process.env.MONGO_URI)
// // .then(() => {
// //   console.log(`MongoDB connected to database: ${mongoose.connection.db.databaseName}`);
// // })
// // .catch(err => {
// //   console.error('MongoDB connection error:', err);
// //   process.exit(1);
// // });

// // // Create default admin user on startup
// // const createDefaultAdmin = async () => {
// //   try {
// //     const adminEmail = 'admin@placement.com';
// //     const existingAdmin = await User.findOne({ email: adminEmail });
    
// //     if (!existingAdmin) {
// //       const salt = await bcrypt.genSalt(10);
// //       const hashedPassword = await bcrypt.hash('admin123', salt);
      
// //       const admin = new User({
// //         email: adminEmail,
// //         password: hashedPassword,
// //         role: 'admin'
// //       });
      
// //       await admin.save();
// //       console.log('Default admin user created');
// //     }
// //   } catch (err) {
// //     console.error('Error creating admin user:', err);
// //   }
// // };

// // createDefaultAdmin();

// // // Routes
// // app.use('/api/auth', authRoutes);
// // app.use('/api/students', studentRoutes);
// // app.use('/api/faculty', facultyRoutes);
// // app.use('/api/recruiters', recruiterRoutes);
// // app.use('/api/skills', skillRoutes);
// // app.use('/api/internships', internshipRoutes);
// // app.use('/api/interviews', interviewRoutes);
// // app.use('/api/placements', placementRoutes);
// // app.use('/api/faculty1', facultydashRoutes); // Add faculty dashboard routes

// // // Error handling middleware
// // app.use((err, req, res, next) => {
// //   console.error('\x1b[31m', '🔥 Server Error:', err.stack);
// //   res.status(500).json({
// //     error: 'Internal server error',
// //     message: process.env.NODE_ENV === 'development' ? err.message : undefined
// //   });
// // });

// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import authRoutes from './routes/authRoutes.js';
// import studentRoutes from './routes/studentRoutes.js';
// import facultyRoutes from './routes/facultyRoutes.js';
// import recruiterRoutes from './routes/recruiterRoutes.js';
// import skillRoutes from './routes/skillRoutes.js';
// import internshipRoutes from './routes/internshipRoutes.js';
// import interviewRoutes from './routes/interviewRoutes.js';
// import placementRoutes from './routes/placementRoutes.js';
// import facultydashRoutes from './routes/facultydashRoutes.js'; // Corrected import
// import bcrypt from 'bcryptjs';
// import User from './models/User.js';
// import Faculty from './models/Faculty.js';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Database connection
// mongoose.connect(process.env.MONGO_URI)
// .then(() => {
//   console.log(`MongoDB connected to database: ${mongoose.connection.db.databaseName}`);
// })
// .catch(err => {
//   console.error('MongoDB connection error:', err);
//   process.exit(1);
// });

// // Create default admin user on startup
// const createDefaultAdmin = async () => {
//   try {
//     const adminEmail = 'admin@placement.com';
//     const existingAdmin = await User.findOne({ email: adminEmail });
    
//     if (!existingAdmin) {
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash('admin123', salt);
      
//       const admin = new User({
//         email: adminEmail,
//         password: hashedPassword,
//         role: 'admin'
//       });
      
//       await admin.save();
//       console.log('Default admin user created');
//     }
//   } catch (err) {
//     console.error('Error creating admin user:', err);
//   }
// };

// createDefaultAdmin();

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/students', studentRoutes);
// app.use('/api/faculty', facultyRoutes);
// app.use('/api/recruiters', recruiterRoutes);
// app.use('/api/skills', skillRoutes);
// app.use('/api/internships', internshipRoutes);
// app.use('/api/interviews', interviewRoutes);
// app.use('/api/placements', placementRoutes);
// app.use('/api/faculty1', facultydashRoutes); // Correct endpoint

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error('\x1b[31m', '🔥 Server Error:', err.stack);
//   res.status(500).json({
//     error: 'Internal server error',
//     message: process.env.NODE_ENV === 'development' ? err.message : undefined
//   });
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import authRoutes from './routes/authRoutes.js';
// import studentRoutes from './routes/studentRoutes.js';
// import facultyRoutes from './routes/facultyRoutes.js';
// import recruiterRoutes from './routes/recruiterRoutes.js';
// import skillRoutes from './routes/skillRoutes.js';
// import internshipRoutes from './routes/internshipRoutes.js';
// import interviewRoutes from './routes/interviewRoutes.js';
// import placementRoutes from './routes/placementRoutes.js';
// import * as facultydashRoutes from './routes/facultydashRoutes.js';
// import bcrypt from 'bcryptjs';
// import User from './models/User.js';
// import Faculty from './models/Faculty.js';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Database connection
// mongoose.connect(process.env.MONGO_URI)
// .then(() => {
//   console.log(`MongoDB connected to database: ${mongoose.connection.db.databaseName}`);
// })
// .catch(err => {
//   console.error('MongoDB connection error:', err);
//   process.exit(1);
// });

// // Create default admin user on startup
// const createDefaultAdmin = async () => {
//   try {
//     const adminEmail = 'admin@placement.com';
//     const existingAdmin = await User.findOne({ email: adminEmail });
    
//     if (!existingAdmin) {
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash('admin123', salt);
      
//       const admin = new User({
//         email: adminEmail,
//         password: hashedPassword,
//         role: 'admin'
//       });
      
//       await admin.save();
//       console.log('Default admin user created');
//     }
//   } catch (err) {
//     console.error('Error creating admin user:', err);
//   }
// };

// createDefaultAdmin();

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/students', studentRoutes);
// app.use('/api/faculty', facultyRoutes);
// app.use('/api/recruiters', recruiterRoutes);
// app.use('/api/skills', skillRoutes);
// app.use('/api/internships', internshipRoutes);
// app.use('/api/interviews', interviewRoutes);
// app.use('/api/placements', placementRoutes);
// app.use('/api/faculty-dashboard', facultydashRoutes.default); // Updated endpoint

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error('\x1b[31m', '🔥 Server Error:', err.stack);
//   res.status(500).json({
//     error: 'Internal server error',
//     message: process.env.NODE_ENV === 'development' ? err.message : undefined
//   });
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import facultyRoutes from './routes/facultyRoutes.js';
import recruiterRoutes from './routes/recruiterRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import internshipRoutes from './routes/internshipRoutes.js';
import interviewRoutes from './routes/interviewRoutes.js';
import placementRoutes from './routes/placementRoutes.js';
import facultydashRoutes from './routes/facultydashRoutes.js'; // Fixed import
import bcrypt from 'bcryptjs';
import User from './models/User.js';
import Faculty from './models/Faculty.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log(`MongoDB connected to database: ${mongoose.connection.db.databaseName}`);
})
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});
// After mongoose.connect()
mongoose.set('strictPopulate', false);

// Create default admin user on startup
const createDefaultAdmin = async () => {
  try {
    const adminEmail = 'admin@placement.com';
    const existingAdmin = await User.findOne({ email: adminEmail });
    
    if (!existingAdmin) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('admin123', salt);
      
      const admin = new User({
        email: adminEmail,
        password: hashedPassword,
        role: 'admin'
      });
      
      await admin.save();
      console.log('Default admin user created');
    }
  } catch (err) {
    console.error('Error creating admin user:', err);
  }
};

createDefaultAdmin();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/recruiters', recruiterRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/internships', internshipRoutes);
app.use('/api/interviews', interviewRoutes);
app.use('/api/placements', placementRoutes);
app.use('/api/faculty-dashboard', facultydashRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('\x1b[31m', '🔥 Server Error:', err.stack);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));