import { Router } from "express";
import { deleteBloodCenter, getBloodCenter, getBloodCenters, patchBloodCenter, postBloodCenter } from "../controllers/bloodCenter.controllers";

// Creating an Express Router instance
const router = Router();

// Define routes for operations on a collection of club (/club)
router.route('/blood-center')
    .get(getBloodCenters)    // Fetch a list of club
    .post(postBloodCenter);  // Create a new member

// Define routes for operations on an individual member (/club/:id)
router.route('/blood-center/:id')
    .get(getBloodCenter)     // Fetch a member by ID
    .patch(patchBloodCenter) // Update a member partially by ID
    .delete(deleteBloodCenter); // Delete a member by ID

// Export the router to make it available for use in other parts of the application
export default router;
