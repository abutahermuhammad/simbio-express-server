import { ErrorRequestHandler, Express, RequestHandler } from "express";
import compressionMiddleware from "./compression.middleware";
import cookieParserMiddleware from "./cookie-parser.middleware";
import corsMiddleware from "./cors.middleware";
import errorMiddleware from "./error.middleware";
import jsonMiddleware from "./json.middleware";
import loggerMiddleware from "./logger.middleware";
import rateLimitMiddleware from "./rate-limit.middleware";
import securityHeaderMiddleware from "./security-header.middleware";
import sessionMiddleware from "./session.middleware";
import staticDirMiddleware from "./staticDir.middleware";
import urlEncodedMiddleware from "./url-encoded.middleware";

// Define an array of middlewares with their corresponding order and descriptions
const middlewares: { middleware: RequestHandler | ErrorRequestHandler; description: string }[] = [
  { middleware: corsMiddleware, description: "CORS Manager." },  // Handles Cross-Origin Resource Sharing (CORS).
  { middleware: rateLimitMiddleware, description: "Rate-limiter" },  // Enforces rate limiting for requests.
  { middleware: compressionMiddleware, description: "Response Compressor" },  // Compresses HTTP responses for better efficiency.
  { middleware: jsonMiddleware, description: "JSON Supporter." },  // Adds JSON support for request and response handling.
  { middleware: cookieParserMiddleware, description: "Cookie Parser." },  // Parses incoming cookies from requests.
  { middleware: sessionMiddleware, description: "Cookie Session." }, // Manages session data using cookies.
  { middleware: securityHeaderMiddleware, description: "Security Header." },  // Enhances security by setting HTTP headers.
  { middleware: staticDirMiddleware, description: "Static Directories." },  // Serves static files from specified directories.
  { middleware: errorMiddleware, description: "Error Handler." },  // Handles error.
  { middleware: urlEncodedMiddleware, description: "URL Encode Handler." },  // Handles URL encoded data.
];

// Development only middlewares
const devOnlyMiddlewares: { middleware: RequestHandler | ErrorRequestHandler; description: string }[] = [
  { middleware: loggerMiddleware, description: "Request logger." },  // Shows logs.
];


/**
 * Initialize Middlewares
 * @param app Express application instance
 * 
 * This function initializes and adds various middleware functions to the Express app.
 * Each middleware is added in a specific order to handle various aspects of HTTP requests.
 * 
 * @since 1.0.0
 */
export function initializeMiddlewares(app: Express) {

  // Getting development server type from the express instance.
  const ENV = app.get('env') as string;

  // Use all middlewares in the defined order
  console.log("Initializing middlewares...");

  if (ENV === "development") {
    devOnlyMiddlewares.forEach(({ middleware, description }) => {
      app.use(middleware);
      console.log(`\tLoaded: ${description}`);
    });
  }

  middlewares.forEach(({ middleware, description }) => {
    app.use(middleware);
    console.log(`\tLoaded: ${description}`);
  });

  console.log("Middlewares initialized successfully. \n");
}
