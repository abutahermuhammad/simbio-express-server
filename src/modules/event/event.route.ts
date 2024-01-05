import express from "express";
import {
    createEventController,
    deleteEventController,
    getEventController,
    getEventsController,
    updateEventController
} from "./event.controller";

const router = express.Router();

// Create a new Event
router.post(
    "/",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    createEventController,
);

// Get all Event
router.get(
    "/",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getEventsController,
);

// Update a Event
router.put(
    "/:clubId",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    updateEventController,
);

// Get a Event
router.get(
    "/:clubId",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getEventController,
);

// Delete a Event
router.delete(
    "/:clubId",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    deleteEventController,
);

export const eventRoutes = router;
