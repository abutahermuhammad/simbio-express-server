import express from "express";
import validateRequest from "../../middlewares/validationRequest.middleware";
import {
    createClubController,
    deleteClubController,
    getClubController,
    getClubsController,
    updateClubController
} from "./club.controller";
import { DeleteClubRequestValidatorSchema, GetClubRequestValidatorSchema, GetClubsRequestValidatorSchema, PostClubRequestValidatorSchema, PutClubRequestValidatorSchema } from "./club.validation";

const router = express.Router();

// Create a new club
router.post(
    "/",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(PostClubRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    createClubController,
);

// Get all clubs
router.get(
    "/",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(GetClubsRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getClubsController,
);

// Get a club
router.get(
    "/:clubId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(GetClubRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getClubController,
);

// Update a club
router.put(
    "/:clubId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(PutClubRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    updateClubController,
);

// Delete a club
router.delete(
    "/:clubId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(DeleteClubRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    deleteClubController,
);

export const clubRoutes = router;
