import { Express, RequestHandler } from "express";
import compressionMiddleware from "./compression.middleware";
import cookieParserMiddleware from "./cookie-parser.middleware";
import cookieSessionMiddleware from "./cookie-session.middleware";
import corsMiddleware from "./cors.middleware";
import jsonMiddleware from "./json.middleware";
import rateLimitMiddleware from "./rate-limit.middleware";
import securityHeaderMiddleware from "./security-header.middleware";
import staticDirMiddleware from "./staticDir.middleware";

// Define an array of middlewares with their corresponding order and descriptions
const middlewares: { middleware: RequestHandler; description: string }[] = [
  { middleware: corsMiddleware, description: "CORS Manager." },
  { middleware: rateLimitMiddleware, description: "Rate-limiter" },
  { middleware: compressionMiddleware, description: "Response Compressor" },
  { middleware: jsonMiddleware, description: "JSON Supporter." },
  { middleware: cookieParserMiddleware, description: "Cookie Parser." },
  { middleware: cookieSessionMiddleware, description: "Cookie Session." },
  { middleware: securityHeaderMiddleware, description: "Security Header." },
  { middleware: staticDirMiddleware, description: "Static Directories." },
];

/**
 * Middleware Initializer
 * @param app Express application instance
 * 
 * @since 1.0.0
 */
export function initializeMiddlewares(app: Express) {
  // Use all middlewares in the defined order
  console.log(`Initialized middlewares`);
  middlewares.forEach(({ middleware, description }) => {
    app.use(middleware);
    console.log(`\t${description}`);
  });
}
