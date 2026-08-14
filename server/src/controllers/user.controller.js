import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';
import { AppError } from '../middleware/errorHandler.js';
import User from '../models/User.js';

export const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    throw new AppError('User not found', 404);
  }
  return ApiResponse.success(res, { user }, 'Profile retrieved');
});

export const updateProfile = asyncHandler(async (req, res) => {
  const { name, email } = req.body;
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { ...(name && { name }), ...(email && { email }) },
    { new: true, runValidators: true },
  );
  if (!user) {
    throw new AppError('User not found', 404);
  }
  return ApiResponse.success(res, { user }, 'Profile updated');
});
