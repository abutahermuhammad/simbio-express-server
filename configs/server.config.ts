import dotenv from 'dotenv';

dotenv.config();

// Environment Variables
export const PORT = process.env.PORT || 5000;

export const NUM_WORKERS = 4;