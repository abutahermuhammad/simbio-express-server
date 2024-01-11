import express from "express";
import validateRequest from "../../middlewares/validationRequest.middleware";
import {
    createCountryController,
    deleteCountryController,
    getCountriesController,
    getCountryController,
    updateCountryController
} from "./country.controller";
import { DeleteCountryRequestValidatorSchema, GetCountriesRequestValidatorSchema, GetCountryRequestValidatorSchema, PostCountryRequestValidatorSchema, PutCountryRequestValidatorSchema } from "./country.validation";

const router = express.Router();

// Create a new country
router.post(
    "/",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(PostCountryRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    createCountryController,
);

// Get all countries
router.get(
    "/",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(GetCountriesRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getCountriesController,
);

// Get a country
router.get(
    "/:countryId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(GetCountryRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getCountryController,
);

// Update a country
router.put(
    "/:countryId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(PutCountryRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    updateCountryController,
);

// Delete a country
router.delete(
    "/:countryId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(DeleteCountryRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    deleteCountryController,
);

export const countryRoutes = router;
