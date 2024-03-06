import config from 'config';
import express, { Express } from 'express';
import passport from 'passport';
import { initializeMiddlewares, initializePostMiddlewares } from './middlewares';
import { passportDeserializer, passportSerializer } from './middlewares/passport.middleware';
import router from './routes';
import { initializeServer } from './services/server.service';

function init() {
    // debug("Application started")

    // Create an Express application instance
    // file deepcode ignore DisablePoweredBy: <Already added `helmet` module in the middleware script>
    // deepcode ignore UseCsurfForExpress: <please specify a reason of ignoring this>
    const app: Express = express();

    app.set('host', config.get("server.host"));
    app.set('port', config.get('server.port'));
    app.set('trust proxy', 1) // trust first proxy
    app.disable('x-powered-by');

    // Initialize middlewares for the Express app
    initializeMiddlewares(app);

    // Implement Passport serialization and deserialization
    passport.serializeUser(passportSerializer);
    passport.deserializeUser(passportDeserializer);

    // Set up default route
    app.get('/', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());

        res.status(200).send('Hello World!');
    });

    // Server Routes
    app.use('/api/v1', router);

    // Socket.io Routes


    // GraphQL Route


    // Post Middlewares
    initializePostMiddlewares(app);


    /**
     * Initialize Server
     *
     * This function initializes the Express server using the provided app instance.
     * It sets up middleware, routes, and starts the server.
     *
     * @since 1.0.0
     */
    initializeServer(app);
}

init()