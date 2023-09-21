"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
/**
 * Rate Limit Middleware
 *
 * This middleware limits the number of requests a client can make within a specified time window.
 * If the client exceeds the limit, a response with a rate limit error is sent.
 */
exports.default = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Rate limit exceeded. Please try again later.',
});
// Apply the rate limiting middleware to specific routes or globally as needed.
