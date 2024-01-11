import { z } from "zod";
import { HttpRequestParamsSchema, HttpRequestQuerySchema, RequestBodySchema } from "../../models/request.model";

export const SocialMediaSchema = z.object({
    facebook: z.string().max(255).optional(),
    instagram: z.string().max(255).optional(),
    x: z.string().max(255).optional(),
    linkedin: z.string().max(255).optional(),
})
export type TSocialMedia = z.infer<typeof SocialMediaSchema>;

// Define the Donation schema
export const DonationSchema = z.object({
    created_at: z.string().optional(), // Adjust this based on the actual data type
    updated_at: z.string().optional(), // Adjust this based on the actual data type
    amount: z.number().default(0),
    donated_at: z.string(), // Adjust this based on the actual data type
    version: z.string().optional(),
    person: z.number(),
    member: z.number(),
    organization: z.number(),
    // Contact: z.array(z.object({ id: z.number() })), // Adjust this based on the actual relationship schema
    // Member: z.object({ id: z.number() }), // Adjust this based on the actual relationship schema
    // Organization: z.object({ id: z.number() }), // Adjust this based on the actual relationship schema
    // Person: z.object({ id: z.number() }), // Adjust this based on the actual relationship schema
    // Version: z.object({ id: z.number() }), // Adjust this based on the actual relationship schema
});

// Export the types for easier use
export type TDonation = z.infer<typeof DonationSchema>;


/**
 * Route: POST /blood-requests
 */
export const PostDonationRequestValidatorSchema = z.object({
    body: RequestBodySchema.extend(DonationSchema.shape)
});


/**
 * Route: GET /blood-requests
 */
export const GetDonationsRequestValidatorSchema = z.object({
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
 * Route: GET /blood-requests/{donationId}
 */
export const GetDonationRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        donationId: z.string().min(1).max(8)
    })
});


/**
 * Route: PUT /blood-requests/{donationId}
 */
export const PutDonationRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        donationId: z.string().min(1).max(8)
    }),
    body: DonationSchema.partial()
})


/**
 * Route: DELETE /blood-requests/{donationId}
 */
export const DeleteDonationRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        donationId: z.string().min(1).max(8)
    })
});