"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeServer = void 0;
const cluster_1 = __importDefault(require("cluster"));
const server_config_1 = require("../configs/server.config");
/**
 * Server Initializer
 * @param app
 *
 * @since 1.0.0
 */
const initializeServer = (app) => {
    app.set('trust proxy', true); // Trust first proxy
    if (cluster_1.default.isMaster) {
        console.log(`Master process ${process.pid} is running`);
        // Fork worker processes based on configuration
        for (let i = 0; i < server_config_1.NUM_WORKERS; i++) {
            cluster_1.default.fork();
        }
        // Handle graceful shutdown
        process.on('SIGTERM', () => {
            var _a;
            console.log('Master process is shutting down...');
            for (const id in cluster_1.default.workers) {
                (_a = cluster_1.default === null || cluster_1.default === void 0 ? void 0 : cluster_1.default.workers[id]) === null || _a === void 0 ? void 0 : _a.kill();
            }
        });
        // Listen for dying worker processes and fork new ones
        cluster_1.default.on('exit', (worker, code, signal) => {
            console.log(`Worker process ${worker.process.pid} died. Restarting...`);
            cluster_1.default.fork();
            console.log(`CODE: ${code}\t  SIGNAL: ${signal}`);
        });
    }
    else {
        // Each worker process runs the app
        const server = app.listen(server_config_1.PORT, () => {
            console.log(`Worker process ${process.pid} started. Listening on port ${server_config_1.PORT}`);
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
exports.initializeServer = initializeServer;
