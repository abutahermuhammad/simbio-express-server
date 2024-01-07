import express from 'express';
import validateRequest from './../../middlewares/validationRequest.middleware';
import { createMemberController, deleteMemberController, getMemberController, getMembersController, updateMemberController } from './member.controller';
import { CreateMemberRequestSchema } from './member.model';

const router = express.Router();

/**
 * TODO:
 * - Solve type errors.
 */

// Create a new member
router.post(
    '/',
    //     auth(USER_ROLE.admin),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateRequest(CreateMemberRequestSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    createMemberController
);

// Get all members
router.get(
    '/',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getMembersController
);

// Update a member
router.put(
    '/:memberId',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    updateMemberController
);

// Get a member
router.get(
    '/:memberId',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getMemberController
);

// Delete a member
router.delete(
    '/:memberId',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    deleteMemberController
);

export const memberRoutes = router;
