"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
/**
 * Express Response Compression Middleware
 *
 * This middleware compresses responses sent by your Express application.
 * It improves performance by reducing response size for supported clients.
 */
exports.default = (0, compression_1.default)({
    filter: (req, res) => {
        if (req.headers['x-no-compression']) {
            // Don't compress responses with this request header
            return false;
        }
        // Fallback to the standard filter function for compression
        return compression_1.default.filter(req, res);
    }
});
