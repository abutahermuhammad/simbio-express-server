import { z } from "zod";
import { HttpRequestParamsSchema, HttpRequestQuerySchema, RequestBodySchema } from "../../models/request.model";

export const SocialMediaSchema = z.object({
    facebook: z.string().max(255).optional(),
    instagram: z.string().max(255).optional(),
    x: z.string().max(255).optional(),
    linkedin: z.string().max(255).optional(),
})
export type TSocialMedia = z.infer<typeof SocialMediaSchema>;

// Define the Club schema
export const ClubSchema = z.object({
    id: z.number().optional(),
    created_at: z.string().optional(), // Adjust this based on the actual data type
    updated_at: z.string().optional(), // Adjust this based on the actual data type
    name: z.string(),
    established_at: z.string(), // Adjust this based on the actual data type
    contact: z.number(),
    version: z.string().optional(),
    chairman: z.number(),
    founder: z.number(),
    vice_chairman: z.number(),

});

// Export the types for easier use
export type TClub = z.infer<typeof ClubSchema>;


/**
 * Route: POST /blood-requests
 */
export const PostClubRequestValidatorSchema = z.object({
    body: RequestBodySchema.extend(ClubSchema.shape)
});


/**
 * Route: GET /blood-requests
 */
export const GetClubsRequestValidatorSchema = z.object({
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
 * Route: GET /blood-requests/{clubId}
 */
export const GetClubRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        clubId: z.string().min(1).max(8)
    })
});


/**
 * Route: PUT /blood-requests/{clubId}
 */
export const PutClubRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        clubId: z.string().min(1).max(8)
    }),
    body: ClubSchema.partial()
})


/**
 * Route: DELETE /blood-requests/{clubId}
 */
export const DeleteClubRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        clubId: z.string().min(1).max(8)
    })
});