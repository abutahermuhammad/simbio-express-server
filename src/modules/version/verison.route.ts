import express from "express";
import validateRequest from "../../middlewares/validationRequest.middleware";
import {
    createVersionController,
    deleteVersionController,
    getVersionController,
    getVersionsController,
    updateVersionController
} from "./version.controller";
import { DeleteVersionRequestValidatorSchema, GetVersionRequestValidatorSchema, GetVersionsRequestValidatorSchema, PostVersionRequestValidatorSchema, PutVersionRequestValidatorSchema } from "./version.validation";

const router = express.Router();

// Create a new version
router.post(
    "/",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(PostVersionRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    createVersionController,
);

// Get all versions
router.get(
    "/",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(GetVersionsRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getVersionsController,
);

// Get a version
router.get(
    "/:versionId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(GetVersionRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getVersionController,
);

// Update a version
router.put(
    "/:versionId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(PutVersionRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    updateVersionController,
);

// Delete a version
router.delete(
    "/:versionId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(DeleteVersionRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    deleteVersionController,
);

export const versionRoutes = router;
