import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import { initializeMiddlewares } from './middlewares';
import { initializeRoutes } from './routes';
import { initializeServer } from './services/server.service';


dotenv.config();
const app: Express = express();

// Disable the trust proxy setting
app.set('trust proxy', false);

// Initializing Middlewares
initializeMiddlewares(app);

// Initializing routes
initializeRoutes(app);

// Root Route
app.get('/v1/', (req: Request, res: Response) => {
    const data = {
        status: 200,
        message: "Server running properly",
        error: ""
    };

    res.status(200).json(data);
});


/**
 * Server
 * 
 * @since 1.0.0
 */
initializeServer(app);