"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = void 0;
const morgan_1 = __importDefault(require("morgan"));
/**
 * Logger Middleware
 *
 * This middleware logs incoming requests and responses to the console.
 * You can customize the log format according to your preferences.
 */
exports.loggerMiddleware = (0, morgan_1.default)('dev');
// Apply the logger middleware to your Express app.
