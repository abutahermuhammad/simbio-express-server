import dotenv from 'dotenv';
import os from 'os';

dotenv.config();

export const ENVIRONMENT = process.env.NODE_ENV;

// Environment Variables
export const PORT = process.env.PORT || 5000;

// This will determine the use of multi-core cluster.
// Currently using `false` value to prevent `rate limit` related issue message.
// export const NUM_WORKERS: number = os.cpus().length || 1;
export const NUM_WORKERS: number = ENVIRONMENT === "development" ? 1 : os.cpus().length;

// Request Payload Size
// This will define the allowed payload size for a upcoming payload withing a REST API call.
export const MAX_REQUEST_PAYLOAD_SIZE = '100kb';