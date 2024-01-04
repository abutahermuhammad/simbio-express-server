import express from "express";
import {
    createBloodRequestController,
    deleteBloodRequestController,
    getBloodRequestController,
    getBloodRequestsController,
    updateBloodRequestController,
} from "./bloodRequest.controller";

const router = express.Router();

// Create a new member
router.post(
    "/",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    createBloodRequestController,
);

// Get all members
router.get(
    "/",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getBloodRequestsController,
);

// Update a member
router.put(
    "/:requestId",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    updateBloodRequestController,
);

// Get a member
router.get(
    "/:requestId",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getBloodRequestController,
);

// Delete a member
router.delete(
    "/:requestId",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    deleteBloodRequestController,
);

export const bloodRequestRoutes = router;
