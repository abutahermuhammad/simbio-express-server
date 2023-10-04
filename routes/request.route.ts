import { Router } from "express";
import { deleteRequest, getRequest, getRequests, patchRequest, postRequest } from "../controllers/request.controller";

// Creating an Express Router instance
const router = Router();

// Define routes for operations on a collection of contact (/contact)
router.route('/request')
    .get(getRequests)    // Fetch a list of contact
    .post(postRequest);  // Create a new member

// Define routes for operations on an individual member (/contact/:id)
router.route('/request/:id')
    .get(getRequest)     // Fetch a member by ID
    .patch(patchRequest) // Update a member partially by ID
    .delete(deleteRequest); // Delete a member by ID

// Export the router to make it available for use in other parts of the application
export default router;
