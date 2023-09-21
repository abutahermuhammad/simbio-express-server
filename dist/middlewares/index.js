"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeMiddlewares = void 0;
const compression_middleware_1 = __importDefault(require("./compression.middleware"));
const cookie_parser_middleware_1 = __importDefault(require("./cookie-parser.middleware"));
const cookie_session_middleware_1 = __importDefault(require("./cookie-session.middleware"));
const cors_middleware_1 = __importDefault(require("./cors.middleware"));
const json_middleware_1 = __importDefault(require("./json.middleware"));
const rate_limit_middleware_1 = __importDefault(require("./rate-limit.middleware"));
const security_header_middleware_1 = __importDefault(require("./security-header.middleware"));
// Define an array of middlewares with their corresponding order
const middlewares = [
    cors_middleware_1.default,
    rate_limit_middleware_1.default,
    compression_middleware_1.default,
    json_middleware_1.default,
    cookie_parser_middleware_1.default,
    cookie_session_middleware_1.default,
    security_header_middleware_1.default
];
/**
 * Middleware Initializer
 * @param app Express application instance
 */
function initializeMiddlewares(app) {
    // Use all middlewares in the defined order
    middlewares.forEach((middleware) => {
        app.use(middleware);
    });
}
exports.initializeMiddlewares = initializeMiddlewares;
