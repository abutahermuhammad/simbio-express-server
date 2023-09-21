import { NextFunction, Request, Response } from 'express';
import { ValidationChain, check, validationResult } from 'express-validator';

/**
 * Validator Middleware
 * 
 * This middleware performs validation of request data using express-validator.
 * It checks for validation errors and sends a response with validation errors
 * if any are found.
 */
export const validatorMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Perform validation using express-validator
  const errors = validationResult(req);
  
  // If there are validation errors, send a response with the errors
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  // If validation passes, continue to the next middleware or route handler
  next();
};

/**
 * Example Validator
 * 
 * This is an example of how to use the check function from express-validator
 * to validate a specific field in a request.
 */
export const exampleValidator: ValidationChain[] = [
  check('email').isEmail().withMessage('Invalid email address'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
];
