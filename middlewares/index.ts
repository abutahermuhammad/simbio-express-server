import { Express, RequestHandler } from "express";
import compressionMiddleware from "./compression.middleware";
import cookieParserMiddleware from "./cookie-parser.middleware";
import cookieSessionMiddleware from "./cookie-session.middleware";
import corsMiddleware from "./cors.middleware";
import jsonMiddleware from "./json.middleware";
import rateLimitMiddleware from "./rate-limit.middleware";
import securityHeaderMiddleware from "./security-header.middleware";

// Define an array of middlewares with their corresponding order
const middlewares: RequestHandler[] = [
  corsMiddleware,
  rateLimitMiddleware,
  compressionMiddleware,
  jsonMiddleware,
  cookieParserMiddleware,
  cookieSessionMiddleware,
  securityHeaderMiddleware
];

/**
 * Middleware Initializer
 * @param app Express application instance
 */
export function initializeMiddlewares(app: Express) {
  // Use all middlewares in the defined order
  middlewares.forEach((middleware) => {
    app.use(middleware);
  });
}
