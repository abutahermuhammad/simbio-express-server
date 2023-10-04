import { Router } from "express";
import { deleteDonation, getDonation, getDonations, patchDonation, postDonation } from "../controllers/donation.controller";

// Creating an Express Router instance
const router = Router();

// Define routes for operations on a collection of contact (/contact)
router.route('/donation')
    .get(getDonations)    // Fetch a list of contact
    .post(postDonation);  // Create a new member

// Define routes for operations on an individual member (/contact/:id)
router.route('/donation/:id')
    .get(getDonation)     // Fetch a member by ID
    .patch(patchDonation) // Update a member partially by ID
    .delete(deleteDonation); // Delete a member by ID

// Export the router to make it available for use in other parts of the application
export default router;
