import express from 'express';
import { forgotPasswordController, loginController, logoutController, refreshController, registerController, resendController, resetPasswordController, successPageController, verifyController } from './auth.controller';

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


router.get('/register', registerController);
router.get('/verify', verifyController);
router.get('/resend', resendController);
router.get('/login', loginController);
router.get('/refresh', refreshController);
router.get('/logout', logoutController);
router.get('/forgot-password', forgotPasswordController);
router.get('/reset-password', resetPasswordController);
router.get('/success', successPageController);

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
