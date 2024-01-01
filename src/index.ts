import config from 'config';
import express, { Express } from 'express';
import { initializeServer } from './services/server.service';
// import { debug } from './src/utils/debug.util';
// import debug from ('debug')('app:startup');
import { initializeMiddlewares } from './middlewares';
import notFoundMiddleware from './middlewares/notFound.middleware';
import router from './routes';


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

// Error handlers
// app.use(globalErrorHandler);

//Not Found
// app.use(notFound);

app.get('/', (req, res) => {
    res.send('Hello World!');
});


// Server Routes
app.use('/api/v1', router);

// Not Found
app.use(notFoundMiddleware);


/**
 * Initialize Server
 *
 * This function initializes the Express server using the provided app instance.
 * It sets up middleware, routes, and starts the server.
 *
 * @since 1.0.0
 */
initializeServer(app);


