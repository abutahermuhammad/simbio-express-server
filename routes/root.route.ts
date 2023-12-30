import { Router } from "express";
import { getStatus } from "../src/controllers/root.controller";

// Creating an Express Router instance
const router = Router();

// Define routes for operations on a collection of members (/members)
router.route('/')
    .get(getStatus);    // Fetch a list of members

// Export the router to make it available for use in other parts of the application
export default router;
