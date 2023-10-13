import { Express, NextFunction, Request, RequestHandler, Response } from "express";
import ambulanceRouter from './ambulance.route';
import apiDocRoutes from './apiDoc.route';
import bloodCenterRoutes from './bloodCenter.route';
import clubRoutes from './club.route';
import contactRoutes from './contact.route';
import donationRoutes from './donation.route';
import hospitalRoutes from './hospital.route';
import logRoutes from './log.route';
import memberRouter from "./members.route";
import requestRoutes from './request.route';
import rootRoutes from './root.route';
import settingRoutes from './settings.route';
import userRouter from "./users.route";

const routes: RequestHandler[] = [
    rootRoutes,
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
    settingRoutes,
    apiDocRoutes,
];

const error404 = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(404).json({
            status: "fail",
            message: `Can't find \`${req.url}\` on the server!`,
        })
    } catch (error) {
        next(error)
    }
}

export function initializeRoutes(app: Express) {
    routes.forEach(route => {
        app.use('/v1', route)
    });

    app.use(error404);

}