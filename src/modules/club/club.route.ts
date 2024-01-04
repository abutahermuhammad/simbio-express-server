import express from "express";
import {
    createClubController,
    deleteClubController,
    getClubController,
    getClubsController,
    updateClubController,
} from "./club.controller";

const router = express.Router();

// Create a new Club
router.post(
    "/",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    createClubController,
);

// Get all Clubs
router.get(
    "/",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getClubsController,
);

// Update a Club
router.put(
    "/:clubId",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    updateClubController,
);

// Get a Club
router.get(
    "/:clubId",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getClubController,
);

// Delete a Club
router.delete(
    "/:clubId",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    deleteClubController,
);

export const clubRoutes = router;
