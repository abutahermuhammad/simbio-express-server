import express from "express";
import {
    createDonationController,
    deleteDonationController,
    getDonationController,
    getDonationsController,
    updateDonationController
} from "./donation.controller";

const router = express.Router();

// Create a new Donation
router.post(
    "/",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    createDonationController,
);

// Get all Donation
router.get(
    "/",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getDonationsController,
);

// Update a Donation
router.put(
    "/:clubId",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    updateDonationController,
);

// Get a Donation
router.get(
    "/:clubId",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getDonationController,
);

// Delete a Donation
router.delete(
    "/:clubId",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    deleteDonationController,
);


export const donationRoutes = router;
