import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { RequestCookieSchema, RequestParameterSchema, RequestQuerySchema } from "../models/request.model";

// Example schemas
const schema = {
    // Define your schemas for query, params, body, and cookies here
    query: RequestQuerySchema,
    params: RequestParameterSchema,
    body: z.object({}),
    cookies: RequestCookieSchema,
};

function validateRequestSchema() {
    return (req: Request, res: Response, next: NextFunction) => {

        // Validate request query parameters
        if (schema.query) {
            try {
                schema.query.parse(req.query);
            } catch (error) {
                // throw new ExtendedError(400, "Invalid query parameters");
                next({
                    statusCode: 400,
                    message: "Invalid query parameters",
                    error,
                })
            }
        }

        // Validate request route parameters
        if (schema.params) {
            try {
                schema.params.parse(req.params);
            } catch (error) {
                next({
                    statusCode: 400,
                    message: "Invalid route parameters",
                    error,
                })
            }
        }

        // Validate request body
        if (schema.body) {
            try {
                schema.body.parse(req.body);
            } catch (error) {
                next({
                    statusCode: 400,
                    message: "Invalid request body",
                    error,
                })
            }
        }

        // Validate request cookies
        if (schema.cookies) {
            try {
                schema.cookies.parse(req.cookies);
            } catch (error) {
                next({
                    statusCode: 400,
                    message: "Invalid cookies",
                    error,
                })
            }
        }

        // Continue to the next middleware if all validations pass
        next();
    };
}


// Use the middleware with your schemas
export default validateRequestSchema()
