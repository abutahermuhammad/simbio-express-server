"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const server_1 = require("./lib/server");
const middlewares_1 = require("./middlewares");
const routes_1 = require("./routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
// Disable the trust proxy setting
app.set('trust proxy', false);
// Initializing Middlewares
(0, middlewares_1.initializeMiddlewares)(app);
// Initializing routes
(0, routes_1.initializeRoutes)(app);
// Root Route
app.get('/', (req, res) => {
    const data = {
        status: 200,
        message: "Server running properly",
        error: ""
    };
    res.status(200).json(data);
});
/**
 * Server
 *
 * @since 1.0.0
 */
(0, server_1.initializeServer)(app);
// app.listen(PORT, () => {
//     console.log(`Server opened at https://localhost:${PORT}`);
// })
