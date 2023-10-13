import config from 'config';
import express, { Express, NextFunction, Request, Response } from 'express';
import { initializeMiddlewares } from './middlewares';
import { initializeRoutes } from './routes';
import { initializeServer } from './services/server.service';
// import debug from ('debug')('app:startup');


// debug("Application started")

// Create an Express application instance
// file deepcode ignore DisablePoweredBy: <Already added `helmet` module in the middleware script>
// deepcode ignore UseCsurfForExpress: <please specify a reason of ignoring this>
const app: Express = express();
app.set('host', config.get("server.ip"));
app.set('port', config.get('server.port'));
app.set('trust proxy', 1) // trust first proxy
app.disable('x-powered-by');
// Disable the trust proxy setting for security reasons
app.disable('trust proxy')

// Initialize middlewares for the Express app
initializeMiddlewares(app);

// Initialize routes for the Express app
initializeRoutes(app);

app.use((req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(404).json({
            status: "fail",
            message: `Can't find ${req.originalUrl} on the server!`,
        })
    } catch (error) {
        next(error)
    }
});

/**
 * Initialize Server
 * 
 * This function initializes the Express server using the provided app instance.
 * It sets up middleware, routes, and starts the server.
 * 
 * @since 1.0.0
 */
initializeServer(app);


