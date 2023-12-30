import rateLimit from 'express-rate-limit';

/**
 * Rate Limit Middleware
 * 
 * This middleware limits the number of requests a client can make within a specified time window.
 * If the client exceeds the limit, a response with a rate limit error is sent.
 */
export default rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes (time window)
  max: 100, // Max number of requests allowed within the time window
  message: 'Rate limit exceeded. Please try again later.',
});

// Apply the rate limiting middleware to specific routes or globally as needed.