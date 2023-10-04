import { Router } from "express";
import { getUsers, postUser } from "../controllers/user.controller";

// Creating an Express Router instance
const router = Router();

// Define routes for operations on a collection of members (/members)
router.route('/users')
    .get(getUsers)    // Fetch a list of members
    .post(postUser)  // Create a new member

// Define routes for operations on an individual member (/members/:id)
// router.route('/members/:id')
//     .get(getMember)     // Fetch a member by ID
//     .patch(patchMember) // Update a member partially by ID
//     .delete(deleteMember); // Delete a member by ID

// Export the router to make it available for use in other parts of the application
export default router;
