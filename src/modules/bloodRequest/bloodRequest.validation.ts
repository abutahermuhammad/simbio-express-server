import { z } from "zod";
import { BloodGroupSchema } from "./../../models";
import { HttpRequestParamsSchema, HttpRequestQuerySchema, RequestBodySchema } from "./../../models/request.model";


/**
 * Route: POST /blood-requests
 */
export const BloodRequestSchema = z.object({
    // id: z.string() || z.number(),
    health_issue: z.string(),
    blood_group: BloodGroupSchema,
    quantity: z.number(),
    donation_type: z.string(),
    datetime: z.string(),
    hospital_name: z.string(),
    hospital_address: z.string(),
    hospital_phone: z.string(),
    hospital_email: z.string(),
    // version: z.string(),
    memberId: z.number(),
    personId: z.number()
});
export type TBloodRequestSchema = z.infer<typeof BloodRequestSchema>;

/**
 * Route: POST /blood-requests
 */
export const PostBloodRequestRequestValidatorSchema = z.object({
    body: RequestBodySchema.extend(BloodRequestSchema.shape)
});


/**
 * Route: GET /blood-requests
 */
export const GetBloodRequestsRequestValidatorSchema = z.object({
    // Define your schemas for query, params, body, and cookies here
    query: HttpRequestQuerySchema.extend({
        search: z.string().nullish(),
        filter: z.string().nullish(),
        q: z.string().nullish(),
        limit: z.string().nullish(),
        offset: z.string().nullish(),
        sortby: z.string().nullish(),
        order: z.string().nullish(),
        exclude: z.string().nullish(),
        include: z.string().nullish()
    }),
    // body: z.object({}).optional(),
    // cookies: RequestCookieSchema,
});


/**
 * Route: GET /blood-requests/{requestId}
 */
export const GetBloodRequestRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        requestId: z.string().min(1).max(8)
    })
});


/**
 * Route: PUT /blood-requests/{requestId}
 */
export const PutBloodRequestRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        requestId: z.string().min(1).max(8)
    }),
    body: BloodRequestSchema.partial()
})


/**
 * Route: DELETE /blood-requests/{requestId}
 */
export const DeleteBloodRequestRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        requestId: z.string().min(1).max(8)
    })
});