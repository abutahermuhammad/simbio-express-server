import { Router } from "express";
import { deleteAmbulance, getAmbulance, getAmbulances, patchAmbulance, postAmbulance } from "../controllers/ambulance.controller";

// Creating an Express Router instance
const router = Router();

// Define routes for operations on a collection of members (/members)
router.route('/ambulance')
    .get(getAmbulances)    // Fetch a list of members
    .post(postAmbulance);  // Create a new member

// Define routes for operations on an individual member (/members/:id)
router.route('/ambulance/:id')
    .get(getAmbulance)     // Fetch a member by ID
    .patch(patchAmbulance) // Update a member partially by ID
    .delete(deleteAmbulance); // Delete a member by ID

// Export the router to make it available for use in other parts of the application
export default router;
