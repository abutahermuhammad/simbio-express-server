"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleValidator = exports.validatorMiddleware = void 0;
const express_validator_1 = require("express-validator");
/**
 * Validator Middleware
 *
 * This middleware performs validation of request data using express-validator.
 * It checks for validation errors and sends a response with validation errors
 * if any are found.
 */
const validatorMiddleware = (req, res, next) => {
    // Perform validation using express-validator
    const errors = (0, express_validator_1.validationResult)(req);
    // If there are validation errors, send a response with the errors
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    // If validation passes, continue to the next middleware or route handler
    next();
};
exports.validatorMiddleware = validatorMiddleware;
/**
 * Example Validator
 *
 * This is an example of how to use the check function from express-validator
 * to validate a specific field in a request.
 */
exports.exampleValidator = [
    (0, express_validator_1.check)('email').isEmail().withMessage('Invalid email address'),
    (0, express_validator_1.check)('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
];
