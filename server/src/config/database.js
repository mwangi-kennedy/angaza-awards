import mongoose from 'mongoose';
import logger from './logger.js';
import env from './env.js';

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(env.databaseUrl);
    logger.info(`MongoDB connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    logger.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default connectDatabase;
