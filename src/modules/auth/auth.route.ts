import express from 'express';

const router = express.Router();

/**
 * Auth:
 *  - register: For registrations.
 *  - verify: For email verification.
 *  - resend: For resend verification email.
 *  - login: For login.
 *  - refresh: For refresh tokens.
 *  - logout: For logout.
 *  - forgotPassword: For forgot password.
 *  - resetPassword: For reset password.
 *  - google: For google auth
 *  - facebook: For facebook auth
 *  - github: For github auth
 *  - apple: For apple auth
 *  - microsoft: For microsoft auth
 *  - twitter
 *  - linkedin
 */

router.get('/', (req, res) => {
    res.status(200).json({ message: 'auth route' });
})
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

export const authRoutes = router;
