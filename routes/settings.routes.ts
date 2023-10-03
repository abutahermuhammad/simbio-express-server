import { Router } from "express";
import { getSetting, getSettings, patchSetting, postSetting } from "../controllers/setting.controllers";

// Creating an Express Router instance
const router = Router();

// Define routes for operations on a collection of contact (/contact)
router.route('/settings')
    .get(getSettings)    // Fetch a list of contact
    .post(postSetting);  // Create a new member

// Define routes for operations on an individual member (/contact/:id)
router.route('/settings/:id')
    .get(getSetting)     // Fetch a member by ID
    .patch(patchSetting); // Update a member partially by ID

// Export the router to make it available for use in other parts of the application
export default router;
