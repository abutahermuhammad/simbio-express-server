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
// Define an array of middlewares with their corresponding order and descriptions
const middlewares = [
    { middleware: cors_middleware_1.default, description: "CORS Manager." },
    { middleware: rate_limit_middleware_1.default, description: "Rate-limiter" },
    { middleware: compression_middleware_1.default, description: "Response Compressor" },
    { middleware: json_middleware_1.default, description: "JSON Supporter." },
    { middleware: cookie_parser_middleware_1.default, description: "Cookie Parser." },
    { middleware: cookie_session_middleware_1.default, description: "Cookie Session." },
    { middleware: security_header_middleware_1.default, description: "Security Header." },
];
/**
 * Middleware Initializer
 * @param app Express application instance
 *
 * @since 1.0.0
 */
function initializeMiddlewares(app) {
    // Use all middlewares in the defined order
    middlewares.forEach(({ middleware, description }) => {
        app.use(middleware);
        console.log(`Initialized middleware: ${description}`);
    });
}
exports.initializeMiddlewares = initializeMiddlewares;
