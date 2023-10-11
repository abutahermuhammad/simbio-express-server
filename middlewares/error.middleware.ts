import { NextFunction, Request, Response } from 'express';
import { ExtendedError } from '../models/error.model';

// Custom error handling middleware
export default (
    error: ExtendedError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Log the error for debugging purposes
    console.error(error);

    // Check if the error is a known HTTP error (e.g., 404, 400, 500)
    if (res.headersSent) {
        // If headers have already been sent, delegate to the default Express error handler
        return next(error);
    }

    // Define a default error response
    const statusCode = error.statusCode || 500; // Internal Server Error
    const message = 'Something went wrong on the server.';

    // You can customize the error response based on the error type or condition
    // if (error instanceof CustomErrorType) {
    // Handle a specific type of custom error
    // Example: You can create a CustomErrorType class and check the error type here
    // statusCode = ...
    // message = ...
    // }

    // Send the error response to the client
    res.status(statusCode).json({ message: message, error });
};
