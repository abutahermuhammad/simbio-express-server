"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const origins = ['http://localhost:3000']; // List of allowed origins
const methods = ['GET', 'POST', 'PUT', 'DELETE']; // List of allowed HTTP methods
/**
 * CORS Middleware
 *
 * This middleware enforces Cross-Origin Resource Sharing (CORS) policies to control
 * which domains can access your server and which HTTP methods are allowed.
 */
exports.default = (0, cors_1.default)({
    origin: origins,
    optionsSuccessStatus: 200,
    methods: methods,
    credentials: false, // Allow credentials (cookies, HTTP authentication) to be included in requests
});
