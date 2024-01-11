import express from "express";
import validateRequest from "../../middlewares/validationRequest.middleware";
import {
    createContactController,
    deleteContactController,
    getContactController,
    getContactsController,
    updateContactController
} from "./contact.controller";
import { DeleteContactRequestValidatorSchema, GetContactRequestValidatorSchema, GetContactsRequestValidatorSchema, PostContactRequestValidatorSchema, PutContactRequestValidatorSchema } from "./contact.validation";

const router = express.Router();

// Create a new contact
router.post(
    "/",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(PostContactRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    createContactController,
);

// Get all contacts
router.get(
    "/",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(GetContactsRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getContactsController,
);

// Get a contact
router.get(
    "/:contactId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(GetContactRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getContactController,
);

// Update a contact
router.put(
    "/:contactId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(PutContactRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    updateContactController,
);

// Delete a contact
router.delete(
    "/:contactId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(DeleteContactRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    deleteContactController,
);

export const contactRoutes = router;
