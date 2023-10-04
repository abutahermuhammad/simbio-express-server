import { Router } from "express";
import { deleteLog, getLog, getLogs, postLog } from "../controllers/log.controller";

// Creating an Express Router instance
const router = Router();

// Define routes for operations on a collection of contact (/contact)
router.route('/log')
    .get(getLogs)    // Fetch a list of contact
    .post(postLog);  // Create a new log

// Define routes for operations on an individual log (/contact/:id)
router.route('/log/:id')
    .get(getLog)     // Fetch a log by ID
    .delete(deleteLog); // Delete a log by ID

// Export the router to make it available for use in other parts of the application
export default router;
