import { Router } from "express";
import { deleteContactController, getContact, getContactsController, patchContactController, postContact } from "../controllers/contact.controller";

// Creating an Express Router instance
const router = Router();

// Define routes for operations on a collection of contact (/contact)
router.route('/contacts')
    .get(getContactsController)    // Fetch a list of contact
    .post(postContact);  // Create a new member

// Define routes for operations on an individual member (/contact/:id)
router.route('/contacts/:id')
    .get(getContact)     // Fetch a member by ID
    .patch(patchContactController) // Update a member partially by ID
    .delete(deleteContactController); // Delete a member by ID

// Export the router to make it available for use in other parts of the application
export default router;
