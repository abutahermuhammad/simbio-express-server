import express from 'express';
import { createMemberController, deleteMemberController, getMemberController, getMembersController, updateMemberController } from './member.controller';

const router = express.Router();

// Create a new member
router.post(
    '/',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    createMemberController
);

// Get all members
router.get(
    '/',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getMembersController
);

// Update a member
router.put(
    '/:memberId',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    updateMemberController
);

// Get a member
router.get(
    '/:memberId',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getMemberController
);

// Delete a member
router.delete(
    '/:memberId',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    deleteMemberController
);

export const memberRoutes = router;
