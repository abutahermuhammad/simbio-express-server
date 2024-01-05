import express from "express";
import {
    createContactController,
    deleteContactController,
    getContactController,
    getContactsController,
    updateContactController,
} from "./contact.controller";

const router = express.Router();

// Create a new member
router.post(
    "/",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    createContactController,
);

// Get all members
router.get(
    "/",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getContactsController,
);

// Update a member
router.put(
    "/:memberId",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    updateContactController,
);

// Get a member
router.get(
    "/:memberId",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getContactController,
);

// Delete a member
router.delete(
    "/:memberId",
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    deleteContactController,
);

export const contactRoutes = router;
