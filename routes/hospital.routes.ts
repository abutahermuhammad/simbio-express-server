import { Router } from "express";
import { deleteHospital, getHospital, getHospitals, patchHospital, postHospital } from "../controllers/hospital.controllers";

// Creating an Express Router instance
const router = Router();

// Define routes for operations on a collection of contact (/contact)
router.route('/hospital')
    .get(getHospitals)    // Fetch a list of contact
    .post(postHospital);  // Create a new member

// Define routes for operations on an individual member (/contact/:id)
router.route('/hospital/:id')
    .get(getHospital)     // Fetch a member by ID
    .patch(patchHospital) // Update a member partially by ID
    .delete(deleteHospital); // Delete a member by ID

// Export the router to make it available for use in other parts of the application
export default router;
