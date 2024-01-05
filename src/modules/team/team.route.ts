import express from 'express';
import { createTeamController, deleteTeamController, getTeamController, getTeamsController, updateTeamController } from './team.controller';

const router = express.Router();

/**
 * Route: /teams
 *  - Create a new team
 *  - Get all teams
 *  - Update a team
 *  - Get a team
 *  - Delete a team
 *  - Get team members
 */

// Create a new team
router.post(
    '/',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    createTeamController
);

// Get all teams
router.get(
    '/',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getTeamsController
);

// Update a team
router.put(
    '/:teamId',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    updateTeamController
);

// Get a team
router.get(
    '/:teamId',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getTeamController
);

// Delete a team
router.delete(
    '/:teamId',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    deleteTeamController
);

export const teamRoutes = router;
