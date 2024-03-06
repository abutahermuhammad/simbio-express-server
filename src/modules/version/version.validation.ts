import { z } from "zod";
import { HttpRequestParamsSchema, HttpRequestQuerySchema, RequestBodySchema } from "../../models/request.model";

export const SocialMediaSchema = z.object({
    facebook: z.string().max(255).optional(),
    instagram: z.string().max(255).optional(),
    x: z.string().max(255).optional(),
    linkedin: z.string().max(255).optional(),
})
export type TSocialMedia = z.infer<typeof SocialMediaSchema>;

// Define the Version schema
export const VersionSchema = z.object({
    id: z.number().optional(),
    slug: z.string(),
    title: z.string(),
    description: z.string().nullable(),
    created_at: z.string().optional(), // Adjust this based on the actual data type
    updated_at: z.string().optional(), // Adjust this based on the actual data type
    version: z.string().nullable(),

});

// Export the types for easier use
export type TVersion = z.infer<typeof VersionSchema>;


/**
 * Route: POST /blood-requests
 */
export const PostVersionRequestValidatorSchema = z.object({
    body: RequestBodySchema.extend(VersionSchema.shape)
});


/**
 * Route: GET /blood-requests
 */
export const GetVersionsRequestValidatorSchema = z.object({
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
 * Route: GET /blood-requests/{versionId}
 */
export const GetVersionRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        versionId: z.string().min(1).max(8)
    })
});


/**
 * Route: PUT /blood-requests/{versionId}
 */
export const PutVersionRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        versionId: z.string().min(1).max(8)
    }),
    body: VersionSchema.partial()
})


/**
 * Route: DELETE /blood-requests/{versionId}
 */
export const DeleteVersionRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        versionId: z.string().min(1).max(8)
    })
});