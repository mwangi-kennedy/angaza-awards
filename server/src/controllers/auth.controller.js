import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';
import { AppError } from '../middleware/errorHandler.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import env from '../config/env.js';

const generateToken = (userId, role) => {
  return jwt.sign({ id: userId, role }, env.jwt.secret, {
    expiresIn: env.jwt.expiresIn,
  });
};

export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError('Email already registered', 409);
  }

  const user = await User.create({ name, email, password });
  const token = generateToken(user._id, user.role);

  res.cookie('token', token, {
    httpOnly: true,
    secure: env.isProd(),
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return ApiResponse.created(res, {
    user: { id: user._id, name: user.name, email: user.email, role: user.role },
    token,
  }, 'Registration successful');
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password))) {
    throw new AppError('Invalid email or password', 401);
  }

  const token = generateToken(user._id, user.role);

  res.cookie('token', token, {
    httpOnly: true,
    secure: env.isProd(),
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return ApiResponse.success(res, {
    user: { id: user._id, name: user.name, email: user.email, role: user.role },
    token,
  }, 'Login successful');
});

export const logout = asyncHandler(async (_req, res) => {
  res.clearCookie('token');
  return ApiResponse.success(res, null, 'Logged out successfully');
});
