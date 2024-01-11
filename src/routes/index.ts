import { Router } from "express";
// import { authRoutes } from "../modules/auth/auth.route";
import { bloodRequestRoutes } from "../modules/bloodRequest/bloodRequest.route";
// import { clubRoutes } from "../modules/club/club.route";
// import { collectionRoutes } from "../modules/collectionCenter/collectionCenter.route";
import { contactRoutes } from "../modules/contact/contact.route";
// import { docRoutes } from "../modules/doc/doc.route";
// import { donationRoutes } from "../modules/donation/donation.route";
// import { eventRoutes } from "../modules/event/event.route";
// import { logRoutes } from "../modules/log/log.route";
// import { memberRoutes } from "../modules/member/member.route";
// import { notificationRoutes } from "../modules/notification/notification.route";
import { rootRoutes } from "../modules/root/root.route";
import { personRoutes } from "./../modules/person/person.route";
// import { searchRoutes } from "../modules/search/search.route";
// import { settingsRoutes } from "../modules/settings/settings.route";
// import { supportRoutes } from "../modules/support/support.route";
// import { teamRoutes } from "../modules/team/team.route";
// import { userRoutes } from "../modules/user/user.route";

const router = Router();

const moduleRoutes = [
    /**
     * ROUTES:
     *  - Ambulance
     *  - API Doc
     *  - Auth
     *  - Blood request
     *  - Blood Collection Centers
     *  - Club
     *  - Contact
     *  - Donation
     *  - Event
     *  - Log
     *  - Notification
     *  - Member
     *  - Search
     *  - Setting
     *  - Team
     *  - User
     */
    {
        path: "/",
        route: rootRoutes
    },
    // {
    //     path: "/auth",
    //     route: authRoutes,
    // },
    {
        path: "/blood-requests",
        route: bloodRequestRoutes,
    },
    // {
    //     path: "/clubs",
    //     route: clubRoutes,
    // },
    // {
    //     path: "/collection-centers",
    //     route: collectionRoutes,
    // },
    {
        path: "/contacts",
        route: contactRoutes,
    },
    // {
    //     path: "/doc",
    //     route: docRoutes,
    // },
    // {
    //     path: "/donations",
    //     route: donationRoutes,
    // },
    // {
    //     path: "/events",
    //     route: eventRoutes,
    // },
    // {
    //     path: "/logs",
    //     route: logRoutes,
    // },
    // {
    //     path: "/members",
    //     route: memberRoutes,
    // },
    // {
    //     path: "/notifications",
    //     route: notificationRoutes,
    // },
    {
        path: "/persons",
        route: personRoutes,
    },
    // {
    //     path: "/search",
    //     route: searchRoutes,
    // },
    // {
    //     path: "/settings",
    //     route: settingsRoutes,
    // },
    // {
    //     path: "/supports",
    //     route: supportRoutes,
    // },
    // {
    //     path: "/teams",
    //     route: teamRoutes,
    // },
    // {
    //     path: "/users",
    //     route: userRoutes,
    // },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
