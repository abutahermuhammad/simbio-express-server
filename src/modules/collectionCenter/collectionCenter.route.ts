import express from "express";
import {
    createCollectionCenterController,
    deleteCollectionCenterController,
    getCollectionCenterController,
    getCollectionCentersController,
    updateCollectionCenterController,
} from "./collectionCenter.controller";

const router = express.Router();

// Create a new member
router.post(
    "/",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    createCollectionCenterController,
);

// Get all members
router.get(
    "/",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getCollectionCentersController,
);

// Update a member
router.put(
    "/:memberId",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    updateCollectionCenterController,
);

// Get a member
router.get(
    "/:memberId",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getCollectionCenterController,
);

// Delete a member
router.delete(
    "/:memberId",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    deleteCollectionCenterController,
);

export const collectionRoutes = router;
