// Import the cluster module from Node.js
// This module allows us to create a cluster of processes that can share server ports
import cluster from "cluster";
// Import the Express type from the express module
// This type represents the Express application object that we use to create our web server
import { Express } from "express";
// Import the NUM_WORKERS and PORT constants from the server configuration file
// These constants define how many worker processes we want to create and what port they will listen on
import config from 'config';
import { debugServer } from "../src/utils/debug.util";

/**
 * Function to initialize the server
 *
 * @param app {Express}
 *
 * @since 1.0.0
 */
const initializeServer = (app: Express) => {
    // Check if this is the primary (master) process.
    // The primary process is responsible for creating and managing the worker processes .
    if (cluster.isPrimary) {
        // Log a message to indicate that the primary process is running and show its process ID.
        debugServer(`Master process ${process.pid} is running`);

        // Fork worker processes based on configuration.
        // This creates child processes that inherit the environment and arguments from the primary process.
        for (let i = 0; i < config.get<number>("server.worker_count"); i++) {
            cluster.fork();
        }

        // Handle graceful shutdown when receiving SIGTERM signal.
        // This signal is sent by the operating system or another process to request the termination of the current process.
        process.on('SIGTERM', () => {

            // Log a message to indicate that the primary process is shutting down.
            debugServer('Master process is shutting down...');

            // Loop through all the worker processes in the cluster and kill them.
            for (const id in cluster.workers) {
                cluster.workers[id]?.kill();
            }
        });

        // Listen for worker processes that exit unexpectedly and fork new ones.
        // This event is emitted when a worker process dies or disconnects from the primary process.
        cluster.on('exit', (worker, code, signal) => {

            // Log a message to indicate that a worker process died and show its process ID.
            debugServer(`Worker process ${worker.process.pid} died. Restarting...`);

            // Fork a new worker process to replace the one that exited.
            cluster.fork();

            // Log a message to show the exit code and signal of the worker process that exited.
            debugServer(`Exit Code: ${code}\t  Signal: ${signal}`);
        });
    } else {
        // Each worker process runs the Express app and listens on the specified PORT.
        // This creates a web server that can handle HTTP requests and responses using the app object.
        app.listen(config.get<number>("server.port"), () => {
            // Log a message to indicate that a worker process started and show its process ID and port number.
            debugServer(`Worker process ${process.pid} started. Listening on port ${config.get<number>("server.port")}`);
        });

        // Handle worker disconnect and exit events.
        // These events are emitted when a worker process disconnects or exits from the cluster.

        // Get the current worker object from the cluster module.
        // This object contains information and methods related to the worker process.
        cluster.worker?.on('disconnect', () => {
            // Log a message to indicate that a worker process is disconnecting and show its ID.
            debugServer(`Worker process ${cluster.worker?.id} is disconnecting...`);
        });

        cluster.worker?.on('exit', () => {
            // Log a message to indicate that a worker process has exited and show its ID.
            debugServer(`Worker process ${cluster.worker?.id} has exited.`);
        });
    }
};

// Export the server initialization function as a named export.
// This allows us to import this function in other modules using its name .
export { initializeServer };

