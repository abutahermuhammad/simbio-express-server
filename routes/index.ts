import { Express, RequestHandler } from "express";
import ambulanceRouter from './ambulance.routes';
import bloodCenterRoutes from './bloodCenter.routes';
import clubRoutes from './club.routes';
import contactRoutes from './contact.routes';
import donationRoutes from './donation.routes';
import hospitalRoutes from './hospital.routes';
import logRoutes from './log.routes';
import memberRouter from "./members.routes";
import requestRoutes from './request.routes';
import settingRoutes from './settings.routes';
import userRouter from "./users.routes";

const routes: RequestHandler[] = [
    ambulanceRouter,
    clubRoutes,
    bloodCenterRoutes,
    contactRoutes,
    donationRoutes,
    hospitalRoutes,
    logRoutes,
    memberRouter,
    requestRoutes,
    userRouter,
    settingRoutes
];

export function initializeRoutes(app: Express) {

    routes.forEach(route => {
        app.use('/v1/', route)
    });
}