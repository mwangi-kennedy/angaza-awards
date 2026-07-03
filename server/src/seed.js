import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import User from './models/User.js';
import logger from './config/logger.js';

const seed = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    logger.info('MongoDB connected for seeding');

    await User.deleteMany({});

    await User.create([
      {
        name: 'Admin User',
        email: 'admin@angaza.com',
        password: 'admin123',
        role: 'admin',
      },
      {
        name: 'Test User',
        email: 'user@angaza.com',
        password: 'user123',
        role: 'user',
      },
    ]);

    logger.info('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    logger.error('Seeding failed:', error.message);
    process.exit(1);
  }
};

seed();
