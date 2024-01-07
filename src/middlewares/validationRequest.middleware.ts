import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodError } from 'zod';
import sendResponse from './../utils/sendResponse.util';


/**
 * This function validates the request against a given schema,
 * preventing requests that contain invalid data.
 *
 * @param schema - The schema to validate against.
 * @returns A middleware function to be used in the request pipeline.
 */
const validateRequest = (schema: AnyZodObject): ((req: Request, res: Response, next: NextFunction) => Promise<void>) => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            // Validate the request against the provided schema
            await schema.parseAsync(req);

            // If validation succeeds, call the next middleware in the pipeline
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                // If the error is a ZodError, extract the validation errors
                const validationErrors = error.errors.map((err) => ({
                    path: err.path.join('.'),
                    message: err.message,
                }));

                // Send a response with 400 status code and the validation errors
                return sendResponse(res, {
                    statusCode: 400,
                    success: false,
                    message: 'Validation Error',
                    error: validationErrors,
                });
            } else {
                // For non-Zod errors, pass the error to the global error handler
                next(error);
            }
        }
    };
};

export default validateRequest;
