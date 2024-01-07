import { z } from "zod";
import { RequestCookieSchema, RequestParameterSchema, RequestQuerySchema } from "../models/request.model";
import validateRequest from "./validationRequest.middleware";

// Example schemas
const schema = z.object({
    // Define your schemas for query, params, body, and cookies here
    query: RequestQuerySchema,
    params: RequestParameterSchema,
    body: z.object({}),
    cookies: RequestCookieSchema,
});


// Use the middleware with your schemas
export default validateRequest(schema)
