import express from "express";
import validateRequest from "./../../middlewares/validationRequest.middleware";
import {
    createBloodRequestController,
    deleteBloodRequestController,
    getBloodRequestController,
    getBloodRequestsController,
    updateBloodRequestController
} from "./bloodRequest.controller";
import { DeleteBloodRequestRequestValidatorSchema, GetBloodRequestRequestValidatorSchema, GetBloodRequestsRequestValidatorSchema, PostBloodRequestRequestValidatorSchema, PutBloodRequestRequestValidatorSchema } from "./bloodRequest.validation";

const router = express.Router();

// Create a new member
router.post(
    "/",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(PostBloodRequestRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    createBloodRequestController,
);

// Get all members
router.get(
    "/",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(GetBloodRequestsRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getBloodRequestsController,
);

// Get a member
router.get(
    "/:requestId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(GetBloodRequestRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getBloodRequestController,
);

// Update a member
router.put(
    "/:requestId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(PutBloodRequestRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    updateBloodRequestController,
);

// Delete a member
router.delete(
    "/:requestId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(DeleteBloodRequestRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    deleteBloodRequestController,
);

export const bloodRequestRoutes = router;
