import express from "express";
import validateRequest from "../../middlewares/validationRequest.middleware";
import {
    createPersonController,
    deletePersonController,
    getPersonController,
    getPersonsController,
    updatePersonController
} from "./person.controller";
import { DeletePersonRequestValidatorSchema, GetPersonRequestValidatorSchema, GetPersonsRequestValidatorSchema, PostPersonRequestValidatorSchema, PutPersonRequestValidatorSchema } from "./person.validation";

const router = express.Router();

// Create a new person
router.post(
    "/",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(PostPersonRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    createPersonController,
);

// Get all persons
router.get(
    "/",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(GetPersonsRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getPersonsController,
);

// Get a person
router.get(
    "/:personId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(GetPersonRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getPersonController,
);

// Update a person
router.put(
    "/:personId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(PutPersonRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    updatePersonController,
);

// Delete a person
router.delete(
    "/:personId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(DeletePersonRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    deletePersonController,
);

export const personRoutes = router;
