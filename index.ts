import express, { Express } from 'express';
import { initializeMiddlewares } from './middlewares';
import { initializeRoutes } from './routes';
import { initializeServer } from './services/server.service';


// Create an Express application instance
const app: Express = express();

// Disable the trust proxy setting for security reasons
app.set('trust proxy', false);

// Initialize middlewares for the Express app
initializeMiddlewares(app);

// Initialize routes for the Express app
initializeRoutes(app);

/**
 * Initialize Server
 * 
 * This function initializes the Express server using the provided app instance.
 * It sets up middleware, routes, and starts the server.
 * 
 * @since 1.0.0
 */
initializeServer(app);
