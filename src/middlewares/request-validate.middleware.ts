import { z } from "zod";
import { HttpRequestParamsSchema, HttpRequestQuerySchema, RequestCookieSchema } from "../models/request.model";
import validateRequest from "./validationRequest.middleware";

// Example schemas
const schema = z.object({
    // Define your schemas for query, params, body, and cookies here
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema,
    body: z.object({}).optional(),
    cookies: RequestCookieSchema,
});


// Use the middleware with your schemas
export default validateRequest(schema)
