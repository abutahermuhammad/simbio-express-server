import express from "express";
import validateRequest from "../../middlewares/validationRequest.middleware";
import {
    createHospitalController,
    deleteHospitalController,
    getHospitalController,
    getHospitalsController,
    updateHospitalController
} from "./hospital.controller";
import { DeleteHospitalRequestValidatorSchema, GetHospitalRequestValidatorSchema, GetHospitalsRequestValidatorSchema, PostHospitalRequestValidatorSchema, PutHospitalRequestValidatorSchema } from "./hospital.validation";

const router = express.Router();

// Create a new hospital
router.post(
    "/",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(PostHospitalRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    createHospitalController,
);

// Get all hospitals
router.get(
    "/",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(GetHospitalsRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getHospitalsController,
);

// Get a hospital
router.get(
    "/:hospitalId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(GetHospitalRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getHospitalController,
);

// Update a hospital
router.put(
    "/:hospitalId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(PutHospitalRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    updateHospitalController,
);

// Delete a hospital
router.delete(
    "/:hospitalId",
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(DeleteHospitalRequestValidatorSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    deleteHospitalController,
);

export const hospitalRoutes = router;
