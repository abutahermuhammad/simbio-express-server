import { Router } from "express";
import {
    deleteMemberController,
    getMemberController,
    getMembersController, patchMemberController, postMemberController
} from "../src/controllers/member.controller";

// Creating an Express Router instance
const router = Router();

// Define routes for operations on a collection of members (/members)
router.route('/members')
    .get(getMembersController)    // Fetch a list of members
    .post(postMemberController)  // Create a new member

// Define routes for operations on an individual member (/members/:id)
router.route('/members/:id')
    .get(getMemberController)     // Fetch a member by ID
    .patch(patchMemberController) // Update a member partially by ID
    .delete(deleteMemberController); // Delete a member by ID

// Export the router to make it available for use in other parts of the application
export default router;
