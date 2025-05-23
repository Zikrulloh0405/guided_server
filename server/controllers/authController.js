import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { tourists } from '../data/tourists.js';

const JWT_SECRET = process.env.JWT_SECRET;

export const registerTourist = async (req, res) => {
  const { fullName, email, password, nationality, age } = req.body;

  const existingUser = tourists.find(t => t.email === email);
  if (existingUser) return res.status(400).json({ message: 'User already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newTourist = {
    id: tourists.length + 1,
    fullName,
    email,
    password: hashedPassword,
    nationality,
    age,
  };

  tourists.push(newTourist);

  res.status(201).json({ message: 'User registered successfully', user: newTourist });
};

export const loginTourist = async (req, res) => {
  const { email, password } = req.body;

  const tourist = tourists.find(t => t.email === email);
  if (!tourist) return res.status(400).json({ message: 'Invalid email or password' });

  const isMatch = await bcrypt.compare(password, tourist.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

  const token = jwt.sign({ id: tourist.id, email: tourist.email }, JWT_SECRET, { expiresIn: '1h' });

  res.json({ message: 'Login successful', token });
};

