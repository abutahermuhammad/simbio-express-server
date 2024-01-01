import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';


/**
 * Validate the request against a given schema.
 * Preventing requests that are containing invalid data.
 *
 * @param schema - The schema to validate against.
 * @returns A middleware function to be used in the request pipeline.
 */
const validateRequest = (schema: AnyZodObject): ((req: Request, res: Response, next: NextFunction) => Promise<void>) => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await schema.parseAsync({
            body: req.body as object,
            query: req.query,
            params: req.params,
            cookies: req.cookies as object
        });

        next();
    };
};

export default validateRequest;

