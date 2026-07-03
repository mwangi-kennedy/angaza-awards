import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 5000,
  host: process.env.HOST || 'localhost',
  databaseUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017/angaza_awards',
  jwt: {
    secret: process.env.JWT_SECRET || 'fallback_secret',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  },
  isDev: () => env.nodeEnv === 'development',
  isProd: () => env.nodeEnv === 'production',
  isTest: () => env.nodeEnv === 'test',
};

export default env;
