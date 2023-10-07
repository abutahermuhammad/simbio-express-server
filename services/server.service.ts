import cluster from "cluster";
import { Express } from "express";
import { NUM_WORKERS, PORT } from "../configs/server.config";

// Function to initialize the server
const initializeServer = (app: Express) => {
    // Check if this is the primary (master) process
    if (cluster.isPrimary) {
        console.log(`Master process ${process.pid} is running`);

        // Fork worker processes based on configuration
        for (let i = 0; i < NUM_WORKERS; i++) {
            cluster.fork();
        }

        // Handle graceful shutdown when receiving SIGTERM signal
        process.on('SIGTERM', () => {
            console.log('Master process is shutting down...');
            for (const id in cluster.workers) {
                cluster.workers[id]?.kill();
            }
        });

        // Listen for worker processes that exit unexpectedly and fork new ones
        cluster.on('exit', (worker, code, signal) => {
            console.log(`Worker process ${worker.process.pid} died. Restarting...`);
            cluster.fork();
            console.log(`Exit Code: ${code}\t  Signal: ${signal}`);
        });
    } else {
        // Each worker process runs the Express app and listens on the specified PORT
        app.listen(PORT, () => {
            console.log(`Worker process ${process.pid} started. Listening on port ${PORT}`);
        });

        // Handle worker disconnect and exit events
        cluster.worker?.on('disconnect', () => {
            console.log(`Worker process ${cluster.worker?.id} is disconnecting...`);
        });

        cluster.worker?.on('exit', () => {
            console.log(`Worker process ${cluster.worker?.id} has exited.`);
        });
    }
};

// Export the server initialization function
export { initializeServer };

