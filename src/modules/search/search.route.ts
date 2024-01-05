import express from 'express';
import { getSearchController, getSearchHistoryController } from './search.controller';

const router = express.Router();

// Make search
router.get(
    '/',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getSearchController
);

// Get search history
router.get(
    '/history',
    //     auth(USER_ROLE.admin),
    //     validateRequest(createStudentValidationSchema),
    getSearchHistoryController
);


export const searchRoutes = router;
