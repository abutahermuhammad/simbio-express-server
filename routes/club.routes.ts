import { Router } from "express";
import { deleteClub, getClub, getClubs, patchClub, postClub } from "../controllers/club.controllers";

// Creating an Express Router instance
const router = Router();

// Define routes for operations on a collection of club (/club)
router.route('/club')
    .get(getClubs)    // Fetch a list of club
    .post(postClub);  // Create a new member

// Define routes for operations on an individual member (/club/:id)
router.route('/club/:id')
    .get(getClub)     // Fetch a member by ID
    .patch(patchClub) // Update a member partially by ID
    .delete(deleteClub); // Delete a member by ID

// Export the router to make it available for use in other parts of the application
export default router;
