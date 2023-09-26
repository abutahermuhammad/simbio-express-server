"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeRoutes = void 0;
const members_routes_1 = __importDefault(require("./members.routes"));
const routes = [
    members_routes_1.default
];
function initializeRoutes(app) {
    routes.forEach(route => {
        app.use('/v1/', route);
    });
}
exports.initializeRoutes = initializeRoutes;
