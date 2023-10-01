import dotenv from 'dotenv';

dotenv.config();

// Environment Variables
export const PORT = process.env.PORT || 5000;

export const NUM_WORKERS = 4;

// This will determine the use of multi-core cluster.
// Truthy will run only one core. And Falsy value will use all the available cores.
// Currently using `false` value to prevent `rate limit` related issue message. 
// It is recommended to use true value for the production.
export const SINGLE_CORE = true;