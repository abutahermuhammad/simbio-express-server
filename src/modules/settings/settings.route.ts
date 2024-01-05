import express from 'express';
import { getProfileSettingsController, getSettingsController, updateProfileSettingsController, updateSettingsController } from './settings.controller';

const router = express.Router();


// Get all members
router.get(
    '/',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getSettingsController
);

// Update a member
router.put(
    '/',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    updateSettingsController
);

// Get all members
router.get(
    '/profile',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getProfileSettingsController
);

// Update a member
router.put(
    '/profile',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    updateProfileSettingsController
);

export const settingsRoutes = router;
