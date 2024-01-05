import express from 'express';
import { createUserController, deleteUserController, getUserController, getUsersController, updateUserController } from './user.controller';

const router = express.Router();

// Create a new user
router.post(
    '/',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    createUserController
);

// Get all users
router.get(
    '/',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getUsersController
);

// Update a user
router.put(
    '/:userId',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    updateUserController
);

// Get a user
router.get(
    '/:userId',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getUserController
);

// Delete a user
router.delete(
    '/:userId',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    deleteUserController
);

export const userRoutes = router;
