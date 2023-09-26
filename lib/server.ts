import cluster from "cluster";
import { Express } from "express";
import { NUM_WORKERS, PORT } from "../configs/server.config";

/**
 * Server Initializer
 * @param app
 * 
 * @since 1.0.0
 */
const initializeServer = (app: Express) => {
    app.set('trust proxy', true); // Trust first proxy

    if (cluster.isMaster) {
        console.log(`Master process ${process.pid} is running`);

        // Fork worker processes based on configuration
        for (let i = 0; i < NUM_WORKERS; i++) {
            cluster.fork();
        }

        // Handle graceful shutdown
        process.on('SIGTERM', () => {
            console.log('Master process is shutting down...');
            for (const id in cluster.workers) {
                cluster?.workers[id]?.kill();
            }
        });

        // Listen for dying worker processes and fork new ones
        cluster.on('exit', (worker, code, signal) => {
            console.log(`Worker process ${worker.process.pid} died. Restarting...`);
            cluster.fork();
            console.log(`CODE: ${code}\t  SIGNAL: ${signal}`);
        });
    } else {
        // Each worker process runs the app
        const server = app.listen(PORT, () => {
            console.log(`Worker process ${process.pid} started. Listening on port ${PORT}`);
        });

        // Handle graceful shutdown for worker processes
        process.on('SIGTERM', () => {
            console.log(`Worker process ${process.pid} is shutting down...`);
            server.close(() => {
                console.log(`Worker process ${process.pid} has gracefully terminated.`);
            });
        });
    }
};

// Exporting modules
export { initializeServer };
