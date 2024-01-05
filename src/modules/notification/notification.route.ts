import express from 'express';
import { getNotificationController, getNotificationsController, updateNotificationController } from './notification.controller';

const router = express.Router();


// Get all members
router.get(
    '/',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getNotificationsController
);

// Update a member
router.patch(
    '/:memberId',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    updateNotificationController
);

// Get a member
router.get(
    '/:memberId',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getNotificationController
);


export const notificationRoutes = router;
