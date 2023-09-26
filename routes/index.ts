import { Express, RequestHandler } from "express";
import memberRouter from "./members.routes";

const routes: RequestHandler[] = [
    memberRouter
];

export function initializeRoutes(app: Express) {

    routes.forEach(route => {
        app.use('/v1/', route)
    });
}