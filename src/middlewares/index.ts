import { ErrorRequestHandler, Express, RequestHandler } from "express";
import { initialize as initializePassport, session as passportSession } from "passport";
import { debug } from "../utils/debug.util";
import compressionMiddleware from "./compression.middleware";
import cookieParserMiddleware from "./cookie-parser.middleware";
import corsMiddleware from "./cors.middleware";
import errorMiddleware from "./error.middleware";
import jsonMiddleware from "./json.middleware";
import loggerMiddleware from "./logger.middleware";
import notFoundMiddleware from './notFound.middleware';
import rateLimitMiddleware from "./rate-limit.middleware";
import securityHeaderMiddleware from "./security-header.middleware";
import sessionMiddleware from "./session.middleware";
import staticDirMiddleware from "./staticDir.middleware";
import urlEncodedMiddleware from "./url-encoded.middleware";

// Type definition for middleware configuration
type TMiddlewares = {
  middleware: RequestHandler | ErrorRequestHandler;
  env: "all" | "production" | "development";
  description?: string;
};

// Array of middleware configurations with clear descriptions
const middlewares: TMiddlewares[] = [
  { middleware: corsMiddleware, env: "all", description: "CORS Manager." },
  { middleware: rateLimitMiddleware, env: "all", description: "Rate-limiter" },
  { middleware: compressionMiddleware, env: "all", description: "Response Compressor" },
  { middleware: urlEncodedMiddleware, env: "all", description: "URL Encode Handler." },
  { middleware: jsonMiddleware, env: "all", description: "JSON Parser." },
  { middleware: cookieParserMiddleware, env: "all", description: "Cookie Parser." },
  { middleware: sessionMiddleware, env: "all", description: "Cookie Session." },
  { middleware: initializePassport, env: "all", description: "Passport initializer." },
  { middleware: passportSession, env: "all", description: "Passport session." },  // Configure session options here
  { middleware: securityHeaderMiddleware, env: "all", description: "Security Header." },
  { middleware: staticDirMiddleware, env: "all", description: "Static Directories." },
  { middleware: loggerMiddleware, env: "development", description: "Request logger." },
];


/**
 * Initialize Middlewares
 * @param app Express application instance
 *
 * This function initializes and adds middleware to the app in a specific order.
 * Middleware are loaded based on the current environment (development or production).
 *
 * @since 1.0.0
 */
export function initializeMiddlewares(app: Express) {

  // Get the environment from the Express app or default to "development"
  const ENV = app.get("env") as string || "development";

  // Use all middlewares in the defined order
  debug("Initializing middlewares...")

  // Apply middleware based on environment
  middlewares.forEach(({ middleware, env, description }) => {
    if (env === "all" || env === ENV) {
      debug(`\tLoaded: ${description}`);
      app.use(middleware);
    }
  });

  debug("Middlewares initialized successfully. \n");
}


const postMiddleware: TMiddlewares[] = [
  { middleware: notFoundMiddleware, env: "all", description: "404 Handler." },
  { middleware: errorMiddleware, env: "all", description: "Error Handler." },
]


/**
 * Initialize Post Middlewares
 * @param app Express application instance
 *
 * This function initializes and adds various middleware functions to the Express app.
 * Each middleware is added in a specific order to handle various aspects of HTTP requests.
 *
 * @since 1.0.0
 */
export function initializePostMiddlewares(app: Express) {

  // Getting development server type from the express instance.
  const ENV = app.get("env") as string || "development";

  // Use all middlewares in the defined order
  debug("Initializing middlewares...")


  postMiddleware.forEach(({ middleware, env, description }) => {
    if (env === "all" || env === ENV) {
      app.use(middleware);
      debug(`\tLoaded: ${description}`);
    }
  });

  debug("Middlewares initialized successfully. \n");
}
