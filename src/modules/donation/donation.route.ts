import express from "express";
import validateRequest from "../../middlewares/validationRequest.middleware";
import {
    createDonationController,
    deleteDonationController,
    getDonationController,
    getDonationsController,
    updateDonationController
} from "./donation.controller";
import { DeleteDonationRequestValidatorSchema, GetDonationRequestValidatorSchema, GetDonationsRequestValidatorSchema, PostDonationRequestValidatorSchema, PutDonationRequestValidatorSchema } from "./donation.validation";

const router = express.Router();

// Create a new donation
router.post(
    "/",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(PostDonationRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    createDonationController,
);

// Get all donations
router.get(
    "/",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(GetDonationsRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getDonationsController,
);

// Get a donation
router.get(
    "/:donationId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(GetDonationRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getDonationController,
);

// Update a donation
router.put(
    "/:donationId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(PutDonationRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    updateDonationController,
);

// Delete a donation
router.delete(
    "/:donationId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(DeleteDonationRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    deleteDonationController,
);

export const donationRoutes = router;
