import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Faculty from '../models/Faculty.js';
import Student from '../models/Student.js';

const JWT_SECRET = process.env.JWT_SECRET;

// User login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: '1d'
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Faculty signup
export const facultySignup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create user
    user = new User({
      email,
      password,
      role: 'faculty'
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    // Create faculty profile
    const faculty = new Faculty({
      name,
      email,
      user: user._id
    });

    await faculty.save();

    // Generate token
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: '1d'
    });

    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Student signup
export const studentSignup = async (req, res) => {
  const { name, usn, email, semester, graduationYear, specialization, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create user
    user = new User({
      email,
      password,
      role: 'student'
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    // Create student profile
    const student = new Student({
      name,
      usn,
      email,
      semester,
      graduationYear,
      specialization,
      user: user._id
    });

    await student.save();
    res.status(201).json({ message: 'Student created successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};