import express from 'express';

const router = express.Router();

/**
 * Routes:
 *  - Swagger
 *  - DBML
 */
// router.post(
//     '/create-student',
//     auth(USER_ROLE.admin),
//     validateRequest(createStudentValidationSchema),
//     UserControllers.createStudent,
// );

// router.post(
//     '/create-faculty',
//     auth(USER_ROLE.admin),
//     validateRequest(createFacultyValidationSchema),
//     UserControllers.createFaculty,
// );

// router.post(
//     '/create-admin',
//     // auth(USER_ROLE.admin),
//     validateRequest(createAdminValidationSchema),
//     UserControllers.createAdmin,
// );

export const docRoutes = router;
