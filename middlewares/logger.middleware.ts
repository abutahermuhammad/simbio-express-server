import morgan from 'morgan';

/**
 * Logger Middleware
 * 
 * This middleware logs incoming requests and responses to the console.
 * You can customize the log format according to your preferences.
 */
export const loggerMiddleware = morgan('dev');

// Apply the logger middleware to your Express app.
