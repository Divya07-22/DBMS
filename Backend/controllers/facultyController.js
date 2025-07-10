import Student from '../models/Student.js';
import Recruiter from '../models/Recruiter.js';
import Skill from '../models/Skill.js';
import Placement from '../models/Placement.js';
import Internship from '../models/Internship.js';
import Interview from '../models/Interview.js';
import Faculty from '../models/Faculty.js';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

// Faculty queries
export const facultyQuery = async (req, res) => {
  // ... (keep your existing facultyQuery implementation) ...
};

// Faculty signup
export const facultySignup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = new User({
      email,
      password: hashedPassword,
      role: 'faculty'
    });
    await user.save();

    // Create faculty profile
    const faculty = new Faculty({
      name,
      email,
      user: user._id
    });
    await faculty.save();

    res.status(201).json({ message: 'Faculty created successfully' });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};