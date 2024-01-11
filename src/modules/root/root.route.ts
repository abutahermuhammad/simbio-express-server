import express from 'express';
import { getRootController } from './root.controller';

const router = express.Router();

/**
 * TODO:
 * - Solve type errors.
 */

router.get(
    '/',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    getRootController
);


export const rootRoutes = router;