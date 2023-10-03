import { Express, RequestHandler } from "express";
import ambulanceRouter from './ambulance.routes';
import memberRouter from "./members.routes";
import userRouter from "./users.routes";

const routes: RequestHandler[] = [
    ambulanceRouter,
    memberRouter,
    userRouter,
];

export function initializeRoutes(app: Express) {

    routes.forEach(route => {
        app.use('/v1/', route)
    });
}