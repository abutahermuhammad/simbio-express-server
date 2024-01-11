import { z } from "zod";
import { HttpRequestParamsSchema, HttpRequestQuerySchema, RequestBodySchema } from "../../models/request.model";
import { GenderEnum } from "./../../models";


// Define the Person schema
export const PersonSchema = z.object({
    first_name: z.string(),
    last_name: z.string().nullable(),
    father_name: z.string().nullable(),
    mother_name: z.string().nullable(),
    profession: z.string().nullable(),
    dob: z.string().nullable(),
    gender: GenderEnum.nullable(),
    // version: z.string(),
    avatar: z.string().nullable(),
    contact_id: z.number(),
    teamId: z.number().nullable(),
    bid: z.string().nullable(),
    driving: z.string().nullable(),
    nid: z.string().nullable(),
    passport: z.string().nullable(),
    // Add other properties as needed based on your model
});

// Export the types for easier use
export type TPerson = z.infer<typeof PersonSchema>;


/**
 * Route: POST /blood-requests
 */
export const PostPersonRequestValidatorSchema = z.object({
    body: RequestBodySchema.extend(PersonSchema.shape)
});


/**
 * Route: GET /blood-requests
 */
export const GetPersonsRequestValidatorSchema = z.object({
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
 * Route: GET /blood-requests/{personId}
 */
export const GetPersonRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        personId: z.string().min(1).max(8)
    })
});


/**
 * Route: PUT /blood-requests/{personId}
 */
export const PutPersonRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        personId: z.string().min(1).max(8)
    }),
    body: PersonSchema.partial()
})


/**
 * Route: DELETE /blood-requests/{personId}
 */
export const DeletePersonRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        personId: z.string().min(1).max(8)
    })
});